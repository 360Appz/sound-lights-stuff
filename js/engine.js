/* =====================================================
   ENGINE.JS — Game Logic, Shuffle, Hour-Based Variation
   KISS, DRY, Performance-First
   ===================================================== */

'use strict';

// ─── UTILITY — SHUFFLE ───────────────────────────────────────────────────────
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── DAILY SEED ──────────────────────────────────────────────────────────────
// Produces a stable seed for the current day (resets at midnight)
function getDailySeed() {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

// Seeded pseudo-random (Mulberry32)
function seededRandom(seed) {
  let s = seed;
  return function () {
    s |= 0; s = s + 0x6D2B79F5 | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = t + Math.imul(t ^ (t >>> 7), 61 | t) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle(arr, seed) {
  const a = [...arr];
  const rng = seededRandom(seed);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── DAILY QUOTE ─────────────────────────────────────────────────────────────
function getDailyQuote(quotes) {
  const seed = getDailySeed();
  const rng = seededRandom(seed);
  const idx = Math.floor(rng() * quotes.length);
  return quotes[idx];
}

// ─── HOUR-BASED THEME ────────────────────────────────────────────────────────
function getHourTheme(palettes) {
  const hour = new Date().getHours();
  return palettes.find(p => p.hour === hour) || palettes[12];
}

// ─── DAILY QUESTION DECK ─────────────────────────────────────────────────────
function getDailyQuestions(questions, count = 10) {
  const seed = getDailySeed();
  const shuffled = seededShuffle(questions, seed);
  return shuffled.slice(0, count);
}

// ─── DAILY RAPID FIRE DECK ───────────────────────────────────────────────────
function getDailyRapidFire(rapidFire, count = 10) {
  const seed = getDailySeed() + 1; // offset from main questions
  const shuffled = seededShuffle(rapidFire, seed);
  return shuffled.slice(0, count);
}

// ─── STORAGE MANAGER ─────────────────────────────────────────────────────────
const StorageManager = {
  KEY: 'sl_state',

  defaultState() {
    return {
      totalAnswered: 0,
      totalCorrect: 0,
      streak: 0,
      bestStreak: 0,
      rfCorrect: 0,
      soundCorrect: 0,
      lightCorrect: 0,
      advCorrect: 0,
      techCorrect: 0,
      perfectQuiz: false,
      dailyCompleted: 0,
      rfBestScore: 0,
      earnedAchievements: [],
      lastPlayed: null,
      dailyDone: null,
      quizHistory: [] // last 5 scores
    };
  },

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return this.defaultState();
      return { ...this.defaultState(), ...JSON.parse(raw) };
    } catch {
      return this.defaultState();
    }
  },

  save(state) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(state));
    } catch { /* quota exceeded, ignore */ }
  },

  update(patch) {
    const state = this.load();
    const updated = { ...state, ...patch };
    this.save(updated);
    return updated;
  }
};

// ─── QUIZ ENGINE ──────────────────────────────────────────────────────────────
class QuizEngine {
  constructor(questions, { count = 10, timerPerQ = 15, mode = 'classic' } = {}) {
    this.allQuestions = shuffleArray(questions);
    this.deck = this.allQuestions.slice(0, count);
    this.timerPerQ = timerPerQ;
    this.mode = mode;
    this.idx = 0;
    this.score = 0;
    this.streak = 0;
    this.results = [];
    this.timer = null;
    this.timeLeft = timerPerQ;
    this.onTick = null;
    this.onEnd = null;
    this.answered = false;
  }

  get current() { return this.deck[this.idx]; }
  get isFinished() { return this.idx >= this.deck.length; }
  get progress() { return (this.idx / this.deck.length) * 100; }

  startTimer(onTick, onTimeout) {
    this.timeLeft = this.timerPerQ;
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.timeLeft--;
      if (onTick) onTick(this.timeLeft);
      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        if (!this.answered) {
          this.answered = true;
          this.results.push({ q: this.current, chosen: null, correct: false, timedOut: true });
          this.streak = 0;
          if (onTimeout) onTimeout();
        }
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  answer(choiceIdx) {
    if (this.answered || this.isFinished) return null;
    this.answered = true;
    this.stopTimer();
    const q = this.current;
    const isCorrect = choiceIdx === q.correct;
    if (isCorrect) {
      this.score++;
      this.streak++;
    } else {
      this.streak = 0;
    }
    const result = { q, chosen: choiceIdx, correct: isCorrect, timedOut: false };
    this.results.push(result);
    return result;
  }

  next() {
    this.idx++;
    this.answered = false;
    if (this.isFinished) {
      this.stopTimer();
      return null;
    }
    return this.current;
  }

  getStats() {
    const pct = Math.round((this.score / this.deck.length) * 100);
    const cats = {};
    this.results.forEach(r => {
      const cat = r.q.category;
      if (!cats[cat]) cats[cat] = { correct: 0, total: 0 };
      cats[cat].total++;
      if (r.correct) cats[cat].correct++;
    });
    return {
      score: this.score,
      total: this.deck.length,
      pct,
      streak: this.streak,
      categories: cats,
      perfect: this.score === this.deck.length
    };
  }
}

// ─── RAPID FIRE ENGINE ────────────────────────────────────────────────────────
class RapidFireEngine {
  constructor(questions, { count = 10, timerPerQ = 8 } = {}) {
    this.deck = shuffleArray(questions).slice(0, count);
    this.timerPerQ = timerPerQ;
    this.idx = 0;
    this.score = 0;
    this.streak = 0;
    this.results = [];
    this.timer = null;
    this.timeLeft = timerPerQ;
    this.answered = false;
  }

  get current() { return this.deck[this.idx]; }
  get isFinished() { return this.idx >= this.deck.length; }
  get progress() { return (this.idx / this.deck.length) * 100; }

  startTimer(onTick, onTimeout) {
    this.timeLeft = this.timerPerQ;
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.timeLeft--;
      if (onTick) onTick(this.timeLeft);
      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        if (!this.answered) {
          this.answered = true;
          this.results.push({ q: this.current, chosen: null, correct: false, timedOut: true });
          this.streak = 0;
          if (onTimeout) onTimeout();
        }
      }
    }, 1000);
  }

  stopTimer() { clearInterval(this.timer); }

  answer(bool) {
    if (this.answered || this.isFinished) return null;
    this.answered = true;
    this.stopTimer();
    const q = this.current;
    const isCorrect = bool === q.answer;
    if (isCorrect) { this.score++; this.streak++; }
    else { this.streak = 0; }
    const result = { q, chosen: bool, correct: isCorrect };
    this.results.push(result);
    return result;
  }

  next() {
    this.idx++;
    this.answered = false;
    return this.isFinished ? null : this.current;
  }
}

// ─── ACHIEVEMENT CHECKER ──────────────────────────────────────────────────────
function checkAchievements(achievements, state) {
  const newlyEarned = [];
  for (const ach of achievements) {
    if (state.earnedAchievements.includes(ach.id)) continue;
    if (ach.condition(state)) {
      newlyEarned.push(ach);
    }
  }
  return newlyEarned;
}

// ─── STATE UPDATER AFTER QUIZ ─────────────────────────────────────────────────
function applyQuizResults(stats, category = null) {
  const state = StorageManager.load();
  const patch = {
    totalAnswered: state.totalAnswered + stats.total,
    totalCorrect: state.totalCorrect + stats.score,
    streak: Math.max(state.streak, stats.streak),
    bestStreak: Math.max(state.bestStreak, stats.streak),
    lastPlayed: new Date().toISOString()
  };

  if (stats.perfect) patch.perfectQuiz = true;

  // Category tracking
  if (stats.categories) {
    Object.entries(stats.categories).forEach(([cat, data]) => {
      if (cat === 'rf') patch.rfCorrect = (state.rfCorrect || 0) + data.correct;
      if (cat === 'sound') patch.soundCorrect = (state.soundCorrect || 0) + data.correct;
      if (cat === 'lighting') patch.lightCorrect = (state.lightCorrect || 0) + data.correct;
      if (cat === 'advanced') patch.advCorrect = (state.advCorrect || 0) + data.correct;
      if (cat === 'technical') patch.techCorrect = (state.techCorrect || 0) + data.correct;
    });
  }

  // Quiz history
  const history = [...(state.quizHistory || [])];
  history.unshift({ score: stats.score, total: stats.total, pct: stats.pct, date: new Date().toISOString() });
  patch.quizHistory = history.slice(0, 5);

  const updated = StorageManager.update(patch);

  // Check achievements
  const newAch = checkAchievements(ACHIEVEMENTS, updated);
  if (newAch.length > 0) {
    const earnedIds = [...updated.earnedAchievements, ...newAch.map(a => a.id)];
    StorageManager.update({ earnedAchievements: earnedIds });
  }

  return { updated, newAchievements: newAch };
}

// ─── CONTENT SHUFFLER (hour-based) ───────────────────────────────────────────
function getHourlyContentOrder(sections) {
  const hourSeed = getDailySeed() * 100 + new Date().getHours();
  return seededShuffle(sections, hourSeed);
}

// ─── DAILY COMPLETION CHECK ───────────────────────────────────────────────────
function isDailyDone() {
  const state = StorageManager.load();
  if (!state.dailyDone) return false;
  const today = new Date().toDateString();
  return new Date(state.dailyDone).toDateString() === today;
}

function markDailyDone() {
  const state = StorageManager.load();
  const updated = StorageManager.update({
    dailyDone: new Date().toISOString(),
    dailyCompleted: (state.dailyCompleted || 0) + 1
  });
  return updated;
}

// Export for global use
window.Engine = {
  shuffleArray,
  getDailySeed,
  getDailyQuote,
  getHourTheme,
  getDailyQuestions,
  getDailyRapidFire,
  StorageManager,
  QuizEngine,
  RapidFireEngine,
  checkAchievements,
  applyQuizResults,
  getHourlyContentOrder,
  isDailyDone,
  markDailyDone
};
