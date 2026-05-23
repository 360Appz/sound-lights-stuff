/* =====================================================
   SOUNDS.JS — Web Audio API Sound Engine
   Synthesized — No external audio files required
   ===================================================== */

'use strict';

const AudioEngine = (() => {
  let ctx = null;
  let enabled = true;
  let masterGain = null;

  function init() {
    if (ctx) return;
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = ctx.createGain();
      masterGain.gain.value = 0.3;
      masterGain.connect(ctx.destination);
    } catch (e) {
      enabled = false;
    }
  }

  function resume() {
    if (ctx && ctx.state === 'suspended') ctx.resume();
  }

  function getCtx() {
    init();
    resume();
    return ctx;
  }

  // ── PRIMITIVES ────────────────────────────────────────
  function playTone({ freq = 440, type = 'sine', duration = 0.15, gain = 0.4, attack = 0.01, decay = 0.05 } = {}) {
    if (!enabled) return;
    const c = getCtx();
    if (!c) return;

    const osc = c.createOscillator();
    const env = c.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, c.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.98, c.currentTime + duration);

    env.gain.setValueAtTime(0, c.currentTime);
    env.gain.linearRampToValueAtTime(gain, c.currentTime + attack);
    env.gain.exponentialRampToValueAtTime(0.001, c.currentTime + attack + decay + duration);

    osc.connect(env);
    env.connect(masterGain);

    osc.start(c.currentTime);
    osc.stop(c.currentTime + attack + decay + duration + 0.05);
  }

  function playNoise({ duration = 0.08, gain = 0.15, attack = 0.002, decay = 0.04 } = {}) {
    if (!enabled) return;
    const c = getCtx();
    if (!c) return;

    const bufSize = c.sampleRate * duration;
    const buf = c.createBuffer(1, bufSize, c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;

    const src = c.createBufferSource();
    src.buffer = buf;

    const env = c.createGain();
    env.gain.setValueAtTime(0, c.currentTime);
    env.gain.linearRampToValueAtTime(gain, c.currentTime + attack);
    env.gain.exponentialRampToValueAtTime(0.001, c.currentTime + attack + decay);

    const filter = c.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2000;
    filter.Q.value = 1.5;

    src.connect(filter);
    filter.connect(env);
    env.connect(masterGain);

    src.start(c.currentTime);
  }

  // ── COMPOUND SOUNDS ───────────────────────────────────
  const sounds = {
    click() {
      playTone({ freq: 1200, type: 'sine', duration: 0.02, gain: 0.3, attack: 0.001, decay: 0.02 });
    },

    hover() {
      playTone({ freq: 800, type: 'sine', duration: 0.04, gain: 0.08, attack: 0.005, decay: 0.03 });
    },

    correct() {
      const c = getCtx();
      if (!c) return;
      // Ascending arpeggio: C–E–G–C
      const notes = [523.25, 659.25, 784, 1046.5];
      notes.forEach((freq, i) => {
        const osc = c.createOscillator();
        const env = c.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        env.gain.setValueAtTime(0, c.currentTime + i * 0.07);
        env.gain.linearRampToValueAtTime(0.4, c.currentTime + i * 0.07 + 0.01);
        env.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.07 + 0.15);
        osc.connect(env);
        env.connect(masterGain);
        osc.start(c.currentTime + i * 0.07);
        osc.stop(c.currentTime + i * 0.07 + 0.2);
      });
    },

    wrong() {
      const c = getCtx();
      if (!c) return;
      // Descending buzz
      const osc = c.createOscillator();
      const env = c.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(400, c.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, c.currentTime + 0.25);
      env.gain.setValueAtTime(0, c.currentTime);
      env.gain.linearRampToValueAtTime(0.3, c.currentTime + 0.01);
      env.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.25);
      osc.connect(env);
      env.connect(masterGain);
      osc.start(c.currentTime);
      osc.stop(c.currentTime + 0.3);
    },

    timeout() {
      const c = getCtx();
      if (!c) return;
      // Triple beep descending
      [440, 370, 311].forEach((freq, i) => {
        const osc = c.createOscillator();
        const env = c.createGain();
        osc.type = 'square';
        osc.frequency.value = freq;
        env.gain.setValueAtTime(0, c.currentTime + i * 0.12);
        env.gain.linearRampToValueAtTime(0.25, c.currentTime + i * 0.12 + 0.01);
        env.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.12 + 0.1);
        osc.connect(env);
        env.connect(masterGain);
        osc.start(c.currentTime + i * 0.12);
        osc.stop(c.currentTime + i * 0.12 + 0.15);
      });
    },

    achievement() {
      const c = getCtx();
      if (!c) return;
      // Heroic fanfare
      const notes = [523.25, 659.25, 784, 1046.5, 1318.5];
      notes.forEach((freq, i) => {
        const osc = c.createOscillator();
        const env = c.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        env.gain.setValueAtTime(0, c.currentTime + i * 0.1);
        env.gain.linearRampToValueAtTime(0.5, c.currentTime + i * 0.1 + 0.02);
        env.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.1 + 0.25);
        osc.connect(env);
        env.connect(masterGain);
        osc.start(c.currentTime + i * 0.1);
        osc.stop(c.currentTime + i * 0.1 + 0.3);
      });
    },

    whoosh() {
      const c = getCtx();
      if (!c) return;
      const osc = c.createOscillator();
      const env = c.createGain();
      const filter = c.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(200, c.currentTime);
      filter.frequency.exponentialRampToValueAtTime(4000, c.currentTime + 0.2);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(80, c.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, c.currentTime + 0.2);
      env.gain.setValueAtTime(0.15, c.currentTime);
      env.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.2);
      osc.connect(filter);
      filter.connect(env);
      env.connect(masterGain);
      osc.start(c.currentTime);
      osc.stop(c.currentTime + 0.25);
    },

    quizStart() {
      const c = getCtx();
      if (!c) return;
      // Rising sweep + noise burst
      const osc = c.createOscillator();
      const env = c.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, c.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, c.currentTime + 0.4);
      env.gain.setValueAtTime(0, c.currentTime);
      env.gain.linearRampToValueAtTime(0.4, c.currentTime + 0.05);
      env.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.4);
      osc.connect(env);
      env.connect(masterGain);
      osc.start(c.currentTime);
      osc.stop(c.currentTime + 0.45);
    },

    resultPerfect() {
      const c = getCtx();
      if (!c) return;
      const chord = [523.25, 659.25, 784, 1046.5];
      chord.forEach(freq => {
        const osc = c.createOscillator();
        const env = c.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        env.gain.setValueAtTime(0, c.currentTime);
        env.gain.linearRampToValueAtTime(0.3, c.currentTime + 0.05);
        env.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 1.2);
        osc.connect(env);
        env.connect(masterGain);
        osc.start(c.currentTime);
        osc.stop(c.currentTime + 1.3);
      });
    },

    navigate() {
      playTone({ freq: 600, type: 'sine', duration: 0.06, gain: 0.15, attack: 0.005, decay: 0.05 });
    },

    cardFlip() {
      playTone({ freq: 900, type: 'triangle', duration: 0.05, gain: 0.1, attack: 0.002, decay: 0.04 });
    },

    timerTick() {
      playTone({ freq: 1800, type: 'sine', duration: 0.02, gain: 0.05, attack: 0.001, decay: 0.015 });
    }
  };

  function play(name) {
    if (!enabled) return;
    try {
      init();
      resume();
      if (sounds[name]) sounds[name]();
    } catch (e) { /* audio not available */ }
  }

  function setEnabled(val) {
    enabled = val;
    if (masterGain) masterGain.gain.value = val ? 0.3 : 0;
  }

  function isEnabled() { return enabled; }

  return { play, setEnabled, isEnabled, init, resume };
})();

window.AudioEngine = AudioEngine;
