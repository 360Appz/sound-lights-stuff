/* =====================================================
   DATA.JS — All Content, Questions, Quotes
   Sources: L1.txt, L2.txt, s1.txt, live_sound_playbook_additions.md
   ===================================================== */

'use strict';

// ─── QUOTES ─────────────────────────────────────────────────────────────────
const QUOTES = [
  { text: "Live event lighting is not just 'making things visible.' It is a storytelling, safety, timing, rhythm, brand, and attention-control system.", source: "Lighting Playbook — Core Philosophy", cat: "lighting" },
  { text: "The best live lighting feels intentional even when the audience does not consciously notice it.", source: "Lighting Playbook — Core Philosophy", cat: "lighting" },
  { text: "Clarity before loudness, repeatability before heroics, documentation before memory, and trust before ego.", source: "Live Sound Playbook — Core Philosophy", cat: "sound" },
  { text: "A great live sound engineer is not just a mixer. You are part acoustician, network tech, psychologist, emergency responder, diplomat, archivist, and risk manager.", source: "Live Sound Playbook — Introduction", cat: "sound" },
  { text: "Beam lights are punctuation marks, not paragraphs.", source: "Lighting Playbook — §5.6 Beam Fixtures", cat: "lighting" },
  { text: "The systems engineer creates the canvas. FOH paints on it.", source: "Live Sound Playbook — Roles", cat: "sound" },
  { text: "A great A2 saves the show quietly.", source: "Live Sound Playbook — Roles", cat: "sound" },
  { text: "Prediction does not replace measurement. Measurement does not replace listening.", source: "Live Sound Playbook — System Design", cat: "sound" },
  { text: "Monitor engineering is often more relational than technical. A technically perfect mix that makes the artist feel unsupported is a failed monitor mix.", source: "Live Sound Playbook — Monitor Engineer", cat: "sound" },
  { text: "Move the mic before EQ.", source: "Live Sound Playbook — Guitar Cabinets", cat: "sound" },
  { text: "Wireless is not magic cable replacement. It is spectrum management.", source: "Live Sound Playbook — §8 RF Mindset", cat: "rf" },
  { text: "The best EQ is microphone placement.", source: "Live Sound Playbook — §6 Microphones", cat: "sound" },
  { text: "Haze is often the difference between a lighting rig looking average and spectacular.", source: "Lighting Playbook — §5.14 Atmospherics", cat: "lighting" },
  { text: "Backlight is one of the fastest ways to make a stage look professional.", source: "Lighting Playbook — §4.2 Back Light", cat: "lighting" },
  { text: "Bad lighting makes executives look tired, washes out screens, creates glare, or makes the brand look cheap.", source: "Lighting Playbook — §1.2 Corporate Events", cat: "lighting" },
  { text: "A show that is full intensity all the time has nowhere to go.", source: "Lighting Playbook — §10.2 Cue Density", cat: "lighting" },
  { text: "Good live lighting creates a frame. Great live lighting changes the frame over time.", source: "Lighting Playbook — §2.4 Composition", cat: "lighting" },
  { text: "Do not start with gear. Start with the show.", source: "Lighting Playbook — §3.1 Design Workflow", cat: "lighting" },
  { text: "A bad gate is worse than bleed.", source: "Live Sound Playbook — Gates and Expanders", cat: "sound" },
  { text: "Busking is not random button pressing. It is structured improvisation.", source: "Lighting Playbook — §9.6 Busking", cat: "lighting" },
  { text: "Festival lighting is less about one perfect design and more about making many different shows possible.", source: "Lighting Playbook — §1.4 Festivals", cat: "lighting" },
  { text: "The best worship lighting supports participation rather than spectacle for its own sake.", source: "Lighting Playbook — §1.5 Houses of Worship", cat: "lighting" },
  { text: "Lasers are specialized effects, not general lighting. Never treat lasers like ordinary lighting fixtures.", source: "Lighting Playbook — §5.13 Lasers", cat: "lighting" },
  { text: "A room can look good to the eye and terrible on camera. Camera lighting must be evaluated through the actual cameras whenever possible.", source: "Lighting Playbook — §1.6 Broadcast", cat: "lighting" },
  { text: "Show control failures at dress rehearsal are common. Show control failures during a live broadcast or opening night are career-defining moments for the wrong reasons.", source: "Lighting Playbook — §33.5 Planning Show Control", cat: "advanced" },
  { text: "WMAS does not solve spectrum scarcity by making more spectrum available. It makes existing spectrum more efficient.", source: "Live Sound Additions — WMAS", cat: "rf" },
  { text: "Use palettes so the show can be updated quickly when trim height, fixture placement, or performer blocking changes.", source: "Lighting Playbook — §9.4 Palettes", cat: "lighting" },
  { text: "Not knowing the local labor rules, not knowing the specific console software version — these are things to discover during advance. Discovering them during load-in is avoidable.", source: "Lighting Playbook — §40 Professional Mindset", cat: "advanced" },
  { text: "Playback failure is one of the fastest ways for a modern show to collapse.", source: "Live Sound Playbook — §2 Playback Engineer", cat: "sound" },
  { text: "When an artist says 'I need more vibe,' they may mean ambience, reverb, audience, low end, confidence, or less isolation.", source: "Live Sound Playbook — §32 Psychology", cat: "sound" },
  { text: "No mix is worth someone dying under a roof or truss.", source: "Live Sound Playbook — §30 Outdoor Safety", cat: "sound" },
  { text: "Automixers do not understand politics, jokes, applause, or emotional timing.", source: "Live Sound Playbook — §20 Corporate Audio", cat: "sound" },
  { text: "Do not perform deep surgery during a song unless the show is already failing.", source: "Live Sound Playbook — §27 Troubleshooting", cat: "sound" },
  { text: "Change one thing at a time.", source: "Live Sound Playbook — §27 Troubleshooting Method", cat: "sound" },
  { text: "Be the person people trust when things go wrong.", source: "Live Sound Playbook — §36 Golden Rules", cat: "sound" },
  { text: "A board mix is rarely good enough.", source: "Live Sound Playbook — §35 Broadcast Expectations", cat: "sound" },
  { text: "Do not align only at FOH and declare victory.", source: "Live Sound Playbook — §10 Sub Alignment", cat: "sound" },
  { text: "The best engineers are not the ones who know the most tricks. They are the ones who make the fewest bad assumptions, prepare thoroughly, listen critically, communicate clearly, and recover gracefully.", source: "Live Sound Playbook — §38 Final Mental Model", cat: "sound" }
];

// ─── MULTIPLE CHOICE QUESTIONS ───────────────────────────────────────────────
const QUESTIONS = [
  {
    id: 'q001',
    text: 'According to the Core Philosophy, live event lighting is primarily which of these?',
    options: [
      'A tool for making things visible on stage',
      'A storytelling, safety, timing, rhythm, brand, and attention-control system',
      'A method for controlling color temperature',
      'A set of rules for fixture placement'
    ],
    correct: 1,
    explanation: 'The very first line of the Lighting Playbook states: "Live event lighting is not just making things visible. It is a storytelling, safety, timing, rhythm, brand, and attention-control system."',
    category: 'lighting', difficulty: 'easy'
  },
  {
    id: 'q002',
    text: 'In concert lighting, which two priorities are rated "Very High" that differ most from corporate events?',
    options: [
      'Brand consistency and reliable cueing',
      'Subtle realism and speech intelligibility',
      'Musical timing and impact',
      'Flattering face light and projection readability'
    ],
    correct: 2,
    explanation: 'Concert lighting prioritizes Musical timing and Impact at "Very High." Corporate lighting instead prioritizes Brand consistency and Reliability.',
    category: 'lighting', difficulty: 'medium'
  },
  {
    id: 'q003',
    text: 'In Section 2 (The Four Core Functions), what is described as the "baseline" function of stage light?',
    options: ['Focus', 'Mood', 'Visibility', 'Composition'],
    correct: 2,
    explanation: '"Visibility is the baseline. The audience must see the performer, presenter, product, or action."',
    category: 'lighting', difficulty: 'easy'
  },
  {
    id: 'q004',
    text: 'Dance lighting relies heavily on which combination?',
    options: [
      'Front light, top light, and key light',
      'Side light, backlight, shinbusters, low booms, and strong contrast',
      'Blinders, strobes, and pixel effects',
      'Gobos, color wheels, and framing shutters'
    ],
    correct: 1,
    explanation: '"Dance lighting often relies heavily on side light, backlight, shinbusters, low booms, and strong contrast."',
    category: 'lighting', difficulty: 'medium'
  },
  {
    id: 'q005',
    text: 'According to the DMX512 correction (L2), what is the ONLY permitted topology for DMX wiring?',
    options: [
      'Star topology with a central hub',
      'Tree topology with branches',
      'Daisy-chain (linear bus) only',
      'Ring topology for redundancy'
    ],
    correct: 2,
    explanation: '"Topology is daisy-chain (linear bus) only. No Y-taps, T-taps, or star splits are permitted without an active splitter."',
    category: 'technical', difficulty: 'medium'
  },
  {
    id: 'q006',
    text: 'What resistance value is required for DMX termination, and where is it wired?',
    options: [
      '75 ohm between pins 1 and 2',
      '600 ohm at the console end',
      '50 ohm between pins 4 and 5',
      '120 ohm between pins 2 and 3'
    ],
    correct: 3,
    explanation: '"Termination is a 120-ohm resistor wired between pins 2 and 3 at the end of each DMX run. Not optional."',
    category: 'technical', difficulty: 'hard'
  },
  {
    id: 'q007',
    text: 'What does the R9 sub-metric specifically measure in color rendering?',
    options: [
      'Overall color accuracy across all wavelengths',
      'Deep red rendering — directly affecting skin tone on camera',
      'Green channel saturation',
      'Flicker index at low dimmer levels'
    ],
    correct: 1,
    explanation: '"R9 score (deep red CRI sub-metric): A fixture can achieve CRI 90+ with a poor R9, which directly degrades skin tone rendering — particularly visible on camera."',
    category: 'technical', difficulty: 'hard'
  },
  {
    id: 'q008',
    text: 'When was WMAS (Wireless Multichannel Audio System) approved by the FCC in the USA?',
    options: ['September 2021', 'March 2023', 'February 2024', 'April 2025'],
    correct: 2,
    explanation: '"WMAS… is a regulatory classification and technology category approved by the FCC in February 2024 in the United States."',
    category: 'rf', difficulty: 'medium'
  },
  {
    id: 'q009',
    text: 'What revolutionary capability does a WMAS bodypack have that conventional narrowband systems do NOT?',
    options: [
      'Higher transmit power for longer range',
      'Built-in frequency agility within a 200 kHz slot',
      'Functioning as BOTH mic transmitter AND IEM receiver simultaneously',
      'Automatic intermodulation calculation'
    ],
    correct: 2,
    explanation: '"The bidirectional capability is significant: a single bodypack can function as both a mic transmitter and IEM receiver simultaneously, eliminating the separate transmit/receive hardware of conventional systems."',
    category: 'rf', difficulty: 'hard'
  },
  {
    id: 'q010',
    text: 'BlackTrax performer tracking is developed by which company?',
    options: ['Ayrton (France)', 'CAST Software, Canada', 'MA Lighting GmbH', 'Robe Lighting s.r.o.'],
    correct: 1,
    explanation: '"BlackTrax (CAST Software, Canada) is the most widely deployed professional system."',
    category: 'advanced', difficulty: 'medium'
  },
  {
    id: 'q011',
    text: 'What does RTTrP stand for?',
    options: [
      'Remote Theatre Transport Protocol',
      'Real-Time Tracking Protocol',
      'Rotational Transmit and Receive Protocol',
      'Redundant Tracking and Telemetry Protocol'
    ],
    correct: 1,
    explanation: '"RTTrP (Real-Time Tracking Protocol) is an open-source protocol for transmitting performer position and rotation data between tracking systems and other production systems."',
    category: 'advanced', difficulty: 'medium'
  },
  {
    id: 'q012',
    text: 'The grandMA3 uses which internal node-to-node protocol?',
    options: ['Art-Net 4', 'sACN (E1.31)', 'MA-Net3', 'Dante'],
    correct: 2,
    explanation: '"The grandMA3 platform uses MA-Net3 as its internal node-to-node protocol for inter-console and processing-unit communication."',
    category: 'technical', difficulty: 'hard'
  },
  {
    id: 'q013',
    text: 'KLANG:technologies provides what type of personal monitoring?',
    options: [
      'Standard stereo wedge mixes',
      'Mono cue mixes via hardware faders',
      '3D immersive binaural IEM mixes',
      'Analogue matrix monitoring'
    ],
    correct: 2,
    explanation: '"KLANG is the market-leading system for 3D immersive personal monitoring. It processes IEM mixes using binaural psychoacoustics to create a three-dimensional perceived soundstage in the earpieces."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q014',
    text: 'L-ISA (Immersive Sound Architecture) is a platform from which speaker manufacturer?',
    options: ['d&b audiotechnik', 'Meyer Sound', 'L-Acoustics', 'QSC'],
    correct: 2,
    explanation: '"L-ISA (Immersive Sound Architecture) uses a horizontal array of five speaker clusters… Sources are positioned in L-ISA Processor software." — L-ISA is from L-Acoustics.',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q015',
    text: 'What famous residency deployed L-ISA immersive audio?',
    options: ["Britney Spears' Piece of Me", "Adele's Las Vegas residency", "Lady Gaga's Jazz & Piano", "Bruno Mars' Park MGM"],
    correct: 1,
    explanation: '"Deployed on: Adele\'s Las Vegas residency, Katy Perry\'s Play residency, Bon Iver\'s 2022 tour, Expo 2020 Dubai, and many permanent installations."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q016',
    text: 'According to the Live Sound Playbook, the FOH engineer is responsible for:',
    options: ['System design and PA deployment', 'RF coordination and wireless management', 'The audience mix', 'Monitor mixes for performers'],
    correct: 2,
    explanation: '"FOH Engineer — Responsible for the audience mix." Translate the artist\'s intent to the room.',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q017',
    text: 'Complete this quote: "The systems engineer creates the canvas. ______ paints on it."',
    options: ['The monitor engineer', 'The LD', 'FOH', 'The programmer'],
    correct: 2,
    explanation: 'Direct quote: "The systems engineer creates the canvas. FOH paints on it."',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q018',
    text: 'What NIOSH occupational exposure limit is recommended for hearing safety?',
    options: ['80 dBA over 8 hours', '85 dBA over 8 hours', '90 dBA over 8 hours', '95 dBA over 8 hours'],
    correct: 1,
    explanation: '"NIOSH recommends an occupational exposure limit of 85 dBA over 8 hours, with allowable exposure time halving for every 3 dB increase."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q019',
    text: 'What is the typical HPF starting range for a speech lavalier microphone?',
    options: ['40–80 Hz', '80–120 Hz', '100–180 Hz', '200–350 Hz'],
    correct: 2,
    explanation: 'The HPF starting range table shows "Speech lav: 100–180 Hz."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q020',
    text: 'Which sub array type provides "rear rejection and forward summation"?',
    options: ['Mono center cluster', 'Left/right subs', 'End-fire', 'Distributed subs'],
    correct: 2,
    explanation: 'The sub array table lists "End-fire — Pros: Rear rejection, forward summation. Cons: Requires depth."',
    category: 'sound', difficulty: 'hard'
  },
  {
    id: 'q021',
    text: 'Sennheiser Spectera (WMAS) handles how many audio links per Base Station?',
    options: ['32 total', '64 total (32 inputs + 32 outputs)', '128 total', '16 total'],
    correct: 1,
    explanation: '"1U rack Base Station handles up to 64 audio links (32 inputs + 32 outputs). One Base Station accommodates up to two wideband RF channels."',
    category: 'rf', difficulty: 'hard'
  },
  {
    id: 'q022',
    text: 'What is the IEM latency specification for Sennheiser Spectera?',
    options: ['Down to 5 milliseconds', 'Down to 2 milliseconds', 'Down to 0.7 milliseconds', 'Down to 10 milliseconds'],
    correct: 2,
    explanation: '"IEM latency down to 0.7 milliseconds" — one of Spectera\'s key specifications.',
    category: 'rf', difficulty: 'hard'
  },
  {
    id: 'q023',
    text: 'What does MVR stand for in the GDTF/MVR standard?',
    options: ['Mobile Virtual Rig', 'My Virtual Rig', 'Multi-Venue Rendering', 'Master Variable Resolution'],
    correct: 1,
    explanation: '"MVR (My Virtual Rig) is the companion transport format. It packages a complete rig file — fixture positions, patch, 3D geometry, cable paths, truss positions — into a single file."',
    category: 'advanced', difficulty: 'medium'
  },
  {
    id: 'q024',
    text: 'In L-ISA immersive audio mixing, each source has which parameters?',
    options: [
      'Width, Depth, Height, and Color',
      'Pan, Width, Distance, and Elevation',
      'X, Y, Z, and Rotation',
      'Level, Pan, Reverb, and Delay'
    ],
    correct: 1,
    explanation: '"Each source gets a Pan, Width, Distance, and Elevation parameter."',
    category: 'sound', difficulty: 'hard'
  },
  {
    id: 'q025',
    text: 'According to the Lighting Playbook, beam fixtures are "punctuation marks, not ______."',
    options: ['Verbs', 'Sentences', 'Paragraphs', 'Chapters'],
    correct: 2,
    explanation: 'Direct quote: "Beam lights are punctuation marks, not paragraphs."',
    category: 'lighting', difficulty: 'easy'
  },
  {
    id: 'q026',
    text: 'What is the primary safety constraint in kinetic lighting design (Section 32)?',
    options: [
      'Network latency between console and hoists',
      'Kinetic elements move above audiences, artists, and crew',
      'Power consumption of the motor systems',
      'IP rating of fixtures in motion'
    ],
    correct: 1,
    explanation: '"Safety is the primary constraint. Kinetic elements move above audiences, artists, and crew. Every kinetic element requires rated hardware, working load limits, and independent secondary arrest systems."',
    category: 'advanced', difficulty: 'medium'
  },
  {
    id: 'q027',
    text: 'The KLANG:konductor processes how many input signals at up to 96 kHz?',
    options: ['64', '96', '128', '256'],
    correct: 2,
    explanation: '"Key specs (KLANG:konductor): 128 input signals processed at up to 96 kHz. Processing latency below 0.25 ms."',
    category: 'sound', difficulty: 'hard'
  },
  {
    id: 'q028',
    text: 'The d&b audiotechnik Soundscape system uses which two core software components?',
    options: [
      'L-ISA Studio and L-ISA Processor',
      'EN-Scene (object placement) and EN-Space (acoustic enhancement)',
      'Navigator and DigiHoist',
      'Depence and WYSIWYG'
    ],
    correct: 1,
    explanation: '"Soundscape uses d&b\'s EN-Scene object placement software paired with EN-Space, which adds electronically-derived room acoustic enhancement."',
    category: 'sound', difficulty: 'hard'
  },
  {
    id: 'q029',
    text: 'According to the Core Philosophy of s1.txt, what comes before loudness?',
    options: ['Impact', 'Reliability', 'Clarity', 'Dynamics'],
    correct: 2,
    explanation: '"Core philosophy: clarity before loudness, repeatability before heroics, documentation before memory, and trust before ego."',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q030',
    text: 'What does GDTF stand for in the fixture data standard?',
    options: [
      'Generic DMX Transfer Format',
      'General Device Type Format',
      'Grand Design Theater File',
      'Global Digital Theater Format'
    ],
    correct: 1,
    explanation: '"GDTF (General Device Type Format) is an open XML-based standard — backed by MA Lighting, Robe, Vectorworks, and others — for describing lighting fixture profiles."',
    category: 'technical', difficulty: 'medium'
  },
  {
    id: 'q031',
    text: 'In FOH mixing, what is listed as Priority #1 in the FOH Priority Stack for concerts/live music?',
    options: ['Groove / time feel', 'Harmonic foundation', 'Lead vocal / primary source', 'Emotional impact'],
    correct: 2,
    explanation: 'The FOH Priority Stack lists: "1. Lead vocal / primary source, 2. Groove / time feel, 3. Harmonic foundation…"',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q032',
    text: 'What lighting approach creates "Futuristic" mood according to the mood table?',
    options: [
      'Warm tungsten tones, haze, low sidelight',
      'Deep blues, ambers, slow fades, strong backlight',
      'Cyan, blue, magenta, pixel lines, sharp beams',
      'Hard backlight, beams, strobes, saturated red/white contrast'
    ],
    correct: 2,
    explanation: 'The mood table shows "Futuristic: Cyan, blue, magenta, pixel lines, sharp beams."',
    category: 'lighting', difficulty: 'medium'
  },
  {
    id: 'q033',
    text: 'Aviom A-Net personal mixing carries up to how many mono channels?',
    options: ['8', '16', '32', '64'],
    correct: 1,
    explanation: '"A-Net carries up to 16 mono channels over a Cat-5 network to personal mixers at each performer position."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q034',
    text: 'The WYSIWYG previsualization platform\'s primary strength is:',
    options: [
      'High-fidelity cinematic rendering for presentations',
      'CAD + previz + console connectivity with 25,000+ item fixture library',
      'Real-time console integration with fast setup',
      'Photorealistic real-time rendering using Unreal Engine'
    ],
    correct: 1,
    explanation: '"WYSIWYG (CAST Software): CAD + previz + console connectivity; largest fixture library (25,000+ items); primarily used for Theatre, corporate, complex installations."',
    category: 'advanced', difficulty: 'hard'
  },
  {
    id: 'q035',
    text: 'What does haze do for concert lighting that makes it so important?',
    options: [
      'It reduces heat from high-powered fixtures',
      'It improves camera white balance accuracy',
      'It reveals beams, making aerial looks visible',
      'It softens harsh shadows on performers\' faces'
    ],
    correct: 2,
    explanation: '"Haze reveals beams. Without haze, many concert looks disappear. Haze is often the difference between a lighting rig looking average and spectacular."',
    category: 'lighting', difficulty: 'easy'
  },
  {
    id: 'q036',
    text: 'According to §7, passive DI boxes are BEST suited for which sources?',
    options: [
      'Passive bass, acoustic guitar, and piezo pickups',
      'Active instruments, keyboards, DJ mixers, and hot line-level sources',
      'Low-output dynamic microphones and ribbon mics',
      'Headset lavaliers and wireless bodypack outputs'
    ],
    correct: 1,
    explanation: '"Passive DI — Best for: Active instruments, keyboards, DJ mixers, hot line-level sources. Pros: No power required. Handles high level well. Transformer isolation."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q037',
    text: 'What is the healthy peak range for VOCALS on a typical digital console, according to the gain structure targets?',
    options: ['-28 to -18 dBFS', '-18 to -10 dBFS', '-10 to -3 dBFS', '-6 to 0 dBFS'],
    correct: 1,
    explanation: '"Typical Digital Console Target: Vocals — -18 to -10 dBFS." Do not chase a universal number; consoles differ in metering and internal headroom.',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q038',
    text: 'Placing a microphone at the CENTER DUST CAP of a guitar cabinet gives which tonal result?',
    options: [
      'Warmer, darker tone',
      'Smoother top end with less isolation',
      'Brighter, more aggressive tone',
      'More cabinet/room sound'
    ],
    correct: 2,
    explanation: '"Guitar Cabinets — Position: Center dust cap — Tone: Brighter, more aggressive." Edge of cone gives warmer tone. "A 1 cm movement can matter."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q039',
    text: 'In the sub alignment workflow (§10), what is the FIRST step?',
    options: [
      'Adjust delay for summation through crossover',
      'Confirm stage rejection if cardioid',
      'Measure mains alone',
      'Check multiple seats, not just FOH'
    ],
    correct: 2,
    explanation: 'The sub alignment steps begin: "1. Measure mains alone. 2. Measure subs alone. 3. Match polarity. 4. Adjust delay for summation through crossover…"',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q040',
    text: 'Which of these is NOT listed among the common system measurement tools in §11?',
    options: ['Smaart', 'SysTune', 'Open Sound Meter', 'Logic Pro'],
    correct: 3,
    explanation: 'The measurement tools list includes: Smaart, SysTune, Open Sound Meter, SATlive, SIM/manufacturer tools, calibrated measurement mic, dual-channel FFT interface, SPL meter, and laser distance meter. Logic Pro is a DAW, not a measurement tool.',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q041',
    text: 'In the 15-step system tuning workflow (§11), after walking the room and listening to speech, what is the FINAL step?',
    options: [
      'Measure mains',
      'Align delays',
      'Recheck after audience enters',
      'Set tonal target'
    ],
    correct: 2,
    explanation: 'The tuning workflow ends: "…13. Listen to speech. 14. Listen to music. 15. Recheck after audience enters." Room absorption changes significantly once the audience fills it.',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q042',
    text: 'According to §11, which of these CANNOT be fixed by EQ?',
    options: [
      'Minor resonances from room/system interaction',
      'Tonal shaping across a zone',
      'Comb filtering from overlapping sources',
      'Matching tonal balance between fill zones'
    ],
    correct: 2,
    explanation: '"EQ cannot fix: Bad aiming, wrong speaker count, comb filtering from overlapping sources, severe room reflections, bad mic technique, excessive stage volume, insufficient headroom, wrong sub placement."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q043',
    text: 'What does the FEEDBACK LOOP chain begin with, according to §15?',
    options: ['Preamp', 'Speaker', 'Microphone', 'Console channel'],
    correct: 2,
    explanation: 'The feedback loop: "Microphone → preamp → processing → speaker → room/stage → microphone." You can attack the loop at any point.',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q044',
    text: 'According to §15, ringing out a wedge monitor is NOT:',
    options: [
      'Bringing the level up gradually',
      'Identifying the first feedback frequency',
      'Cutting narrowly and repeating only as needed',
      'Destroying the wedge with 20 filters'
    ],
    correct: 3,
    explanation: '"Ringing out is not \'destroy the wedge with 20 filters.\'" The procedure involves bringing level up, identifying, cutting narrowly, and stopping before tone is ruined.',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q045',
    text: 'Virtual soundcheck (§18) should be used as:',
    options: [
      'A replacement for the real soundcheck with band present',
      'Preparation, not truth',
      'The primary method to verify feedback margins',
      'A way to capture performer adrenaline in advance'
    ],
    correct: 1,
    explanation: '"Virtual soundcheck is not the real show. It may not capture performer adrenaline, audience absorption, RF issues, feedback margins… Use it as preparation, not truth."',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q046',
    text: 'A critical playback system (§19) must include redundancy in which form?',
    options: [
      'Two consoles and two PA systems',
      'Main computer, backup computer, redundant interfaces, auto/manual switcher, and UPS',
      'Dual analog mixes and a spare engineer',
      'Redundant RF packs for each performer'
    ],
    correct: 1,
    explanation: '"Critical playback should have: Main computer, Backup computer, Redundant interfaces, Auto or manual switcher, UPS, Clear operator workflow, Printed cue sheet, Emergency stop, Emergency vamp/skip plan."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q047',
    text: 'In the playback outputs table (§19), where does the CLICK go?',
    options: ['FOH', 'Broadcast feed', 'Monitors only', 'FOH and broadcast'],
    correct: 2,
    explanation: '"Click — Destination: Monitors only." The click is for performers, never sent to the audience FOH mix.',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q048',
    text: 'According to the Corporate Audio section (§20), what is Priority #1 for corporate events?',
    options: ['Recording/stream quality', 'Presenter confidence', 'Intelligibility', 'Stability/no feedback'],
    correct: 2,
    explanation: '"Corporate Audio Priorities: 1. Intelligibility, 2. Stability, 3. Clean transitions, 4. Recording/stream quality, 5. Presenter confidence, 6. Minimal visible intrusion."',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q049',
    text: 'Which corporate pitfall involves signal routing confusion that can cause no audio from a presenter\'s computer?',
    options: [
      'Necklaces hitting lavs',
      'Open Q&A mics feeding back',
      'HDMI audio routing confusion',
      'Automixer stealing the wrong channel'
    ],
    correct: 2,
    explanation: '"Corporate Pitfalls: HDMI audio routing confusion" is listed — HDMI can route audio through unexpected paths, especially when multiple display outputs or adapters are used.',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q050',
    text: 'In theater audio (§21), hairline mic placement compared to chest lav placement:',
    options: [
      'Produces more clothing noise but better SPL',
      'Often sounds more natural but requires skill and costume/hair coordination',
      'Is easier to hide and requires no preparation',
      'Is inferior for musical theater due to proximity effect'
    ],
    correct: 1,
    explanation: '"Hairline often sounds more natural than chest lav, but requires skill and costume/hair coordination."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q051',
    text: 'The standard festival patch (§23) puts which source on Channel 1?',
    options: ['Kick Out', 'Snare Top', 'Kick In', 'Bass DI'],
    correct: 2,
    explanation: 'The standard 24-channel festival patch begins: "1 Kick In, 2 Kick Out, 3 Snare Top, 4 Snare Bottom…"',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q052',
    text: 'Why is "FOH mix ≠ broadcast mix" (§24)?',
    options: [
      'The FOH mix is always too loud for broadcast',
      'The room mix is influenced by acoustic stage sound; broadcast needs a complete mix',
      'Broadcast requires a mono feed only',
      'FOH mix is processed with too much compression for recording'
    ],
    correct: 1,
    explanation: '"The room mix is influenced by acoustic stage sound. Broadcast needs a complete mix" — with more ambience, direct sources, audience mics, different compression, and loudness compliance.',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q053',
    text: 'In the troubleshooting signal flow method (§27), what comes AFTER "Console channel" in the chain?',
    options: ['Preamp', 'Stagebox', 'Insert / plugin', 'Amp'],
    correct: 2,
    explanation: 'The signal flow: "…Preamp → Console channel → Insert/plugin → Bus/aux/matrix → Network/output → Processor → Amp → Speaker → Air → Listener."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q054',
    text: 'In the troubleshooting common failures table (§27), "hum" is most likely caused by:',
    options: [
      'Clock instability or switch configuration',
      'Ground loop, bad DI, unbalanced run, or power issue',
      'Polarity issue or HPF too high',
      'Bad frequency or antenna issue'
    ],
    correct: 1,
    explanation: '"Hum — Likely Causes: Ground loop, bad DI, unbalanced run, power issue." Buzz is related to dimmers/LED walls.',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q055',
    text: 'During a show emergency, what is the FIRST priority in the emergency triage order (§27)?',
    options: ['Fix the root cause', 'Use the backup', 'Protect the audience', 'Protect the artist'],
    correct: 2,
    explanation: '"Emergency Triage During show: 1. Protect the audience. 2. Protect the artist. 3. Keep the show moving. 4. Fix the root cause only if time allows. 5. Use the backup. 6. Document after."',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q056',
    text: 'According to the Golden Rules (§36), what should you verify FIRST before blaming gear?',
    options: ['Network configuration', 'Signal flow', 'PA alignment', 'Console file version'],
    correct: 1,
    explanation: '"Golden Rule #1: Verify signal flow before blaming gear." Follow the signal from source to speaker before assuming hardware failure.',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q057',
    text: 'For ROCK mixing (§33), what is identified as the most critical challenge?',
    options: [
      'Managing sub-bass saturation from floor monitors',
      'Preserving dynamics and avoiding over-compression',
      'Vocal must survive guitars',
      'RF handheld reliability'
    ],
    correct: 2,
    explanation: '"Rock: Vocal must survive guitars. Control 200–500 Hz buildup. Keep guitars wide but not masking vocal."',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q058',
    text: 'For JAZZ mixing (§33), which approach is emphasized?',
    options: [
      'Heavy compression for broadcast consistency',
      'Preserve dynamics, avoid over-compression, natural imaging',
      'Stage volume must be fully suppressed for mix control',
      'Maximize sub energy to compensate for acoustic bass loss'
    ],
    correct: 1,
    explanation: '"Jazz: Preserve dynamics. Avoid over-compression. Natural imaging matters. Stage volume may be part of the sound. Acoustic bass needs careful LF control."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q059',
    text: 'According to §35 (Modern Industry Trends), AES75 has what practical effect on engineers?',
    options: [
      'It makes all loudspeakers sound the same',
      'It reduces the need for measurement',
      'Better spec-sheet skepticism — do not compare boxes only by peak SPL marketing claims',
      'It replaces the need for transfer function measurement'
    ],
    correct: 2,
    explanation: '"AES75 practical effect: better spec-sheet skepticism. Do not compare boxes only by peak SPL marketing claims." AES75 uses M-Noise signals closer to real music behavior.',
    category: 'sound', difficulty: 'hard'
  },
  {
    id: 'q060',
    text: 'What does the EQ problem band 100–250 Hz typically represent (§13)?',
    options: ['Rumble / excessive sub', 'Mud / boxiness', 'Congestion', 'Presence / intelligibility'],
    correct: 1,
    explanation: '"EQ Strategy — Common problem bands: 100–250 Hz — Mud / boxiness." 40–80 Hz is rumble/sub. 250–500 Hz is congestion.',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q061',
    text: 'For an analog transformer split used in broadcast/festival/recording situations, what is the primary advantage over other split types?',
    options: [
      'Requires power for operation',
      'Lightweight and recallable',
      'Isolates FOH, monitors, broadcast, and recording from each other',
      'Flexible gain control'
    ],
    correct: 2,
    explanation: '"For mission-critical events, physical transformer splits are still extremely valuable because they decouple FOH, monitors, broadcast, and recording." Pros: Isolation, reliable.',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q062',
    text: 'The "Before Line Check" fast field checklist (§37) requires which item to be confirmed for wireless systems?',
    options: ['Monitor EQ rung out', 'RF scanned/coordinated', 'Recording armed', 'Subs aligned'],
    correct: 1,
    explanation: '"Before Line Check: [ ] RF scanned/coordinated" — this is listed along with PA verified, stage boxes online, talkback working, phantom checked, playback patched, and monitors routed.',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q063',
    text: 'The Final Mental Model (§38) describes the live sound engineer\'s job as managing a chain. Which element comes AFTER "Source capture"?',
    options: ['Processing', 'Signal integrity', 'Routing', 'Amplification'],
    correct: 1,
    explanation: 'The chain: "Artist intent → Source capture → Signal integrity → Processing → Routing → Amplification → Acoustic delivery → Human perception → Emotional result."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q064',
    text: 'What is the SPL monitoring metric LAeq used to track?',
    options: [
      'Peak instantaneous C-weighted sound pressure level',
      'Time-averaged A-weighted sound level',
      'Maximum fast-response A-weighted level',
      'Low-frequency C-weighted average'
    ],
    correct: 1,
    explanation: 'LAeq is the equivalent continuous A-weighted sound pressure level — a time-averaged value. This is the standard metric for dose monitoring and compliance with venue/festival SPL limits.',
    category: 'sound', difficulty: 'hard'
  },
  {
    id: 'q065',
    text: 'According to §36 (Golden Rules), which of these is Golden Rule #2?',
    options: [
      'Leave headroom',
      'Walk the room',
      'Fix the source before EQ',
      'Never assume wireless is clean'
    ],
    correct: 2,
    explanation: '"Golden Rule #2: Fix the source before EQ." The order of the first three rules is: 1. Verify signal flow before blaming gear. 2. Fix the source before EQ. 3. Fix placement before processing.',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q066',
    text: 'What is the IEM mix building order (§14) — what should be added FIRST to a monitor mix?',
    options: ['Ambience', 'Lead vocal / MD cues', 'Time reference: drums/click/percussion', 'Performer\'s own source'],
    correct: 3,
    explanation: '"IEM Mix Building — Start with: 1. Performer\'s own source, 2. Time reference: drums/click/percussion, 3. Pitch reference: vocal/key/guitar, 4. Lead vocal/MD cues, 5. Ambience, 6. Effects if needed."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q067',
    text: 'In the good comms practice rules (§25), which of these is explicitly listed?',
    options: [
      'Speak in technical jargon so crew understand clearly',
      'Call out problems on open comms immediately to all departments',
      'Say who you are calling; confirm critical instructions',
      'Keep all communication channels on the same partyline'
    ],
    correct: 2,
    explanation: '"Good Comms Practice: Say who you are calling. Keep messages short. Confirm critical instructions. Avoid panic language. Do not clutter comms during cues."',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q068',
    text: 'According to §26, which power protection approach is explicitly warned AGAINST?',
    options: [
      'Using UPS for consoles and computers',
      'Keeping audio and lighting circuits separated',
      'Lifting safety earth',
      'Using isolation transformers for audio'
    ],
    correct: 2,
    explanation: '"Audio Power Best Practices: Avoid lifting safety earth. Use isolation transformers for audio, not dangerous power hacks." Safety earth must never be removed.',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q069',
    text: 'Which training stage (§34) involves learning large-format PA design, complex RF, and redundant playback?',
    options: ['Beginner', 'Intermediate', 'Advanced', 'All levels equally'],
    correct: 2,
    explanation: '"Advanced — Learn: Large-format PA design, complex RF, redundant playback, broadcast splits, immersive audio, theater programming, network architecture, crew leadership."',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q070',
    text: 'According to §35, what is the practical effect of the trend toward IEM-centric stages?',
    options: [
      'Lower dependence on RF and wireless systems',
      'Cleaner FOH, but higher dependence on RF, monitoring, and musician mix discipline',
      'Elimination of the monitor engineer role',
      'More wedges required to compensate for IEM failures'
    ],
    correct: 1,
    explanation: '"IEM-Centric Stages practical effect: cleaner FOH, but higher dependence on RF, monitoring, and musician mix discipline." Moving away from loud wedge stages increases the reliance on spectrum.',
    category: 'sound', difficulty: 'medium'
  },
  // ── ADDITIONS: 16A, 20A, 24A, 26A, 35A, App A ────────────────────────────
  {
    id: 'q071',
    text: 'What is the key practical difference between Milan and standard AVB?',
    options: [
      'Milan uses Layer 3 IP while AVB uses Layer 2',
      'Milan adds mandatory interoperability certification on top of the AVB standard',
      'AVB supports more devices per network than Milan',
      'Milan requires proprietary switches from a single manufacturer'
    ],
    correct: 1,
    explanation: '"Milan takes the AVB standards and adds mandatory interoperability requirements between certified devices, defined stream formats, strict clocking behavior, and certification testing."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q072',
    text: 'Which companies jointly announced a collaboration in January 2024 to accelerate Milan adoption?',
    options: ['Shure and Sennheiser', 'Meyer Sound and QSC', 'd&b audiotechnik and L-Acoustics', 'Yamaha and DiGiCo'],
    correct: 2,
    explanation: '"In January 2024, d&b audiotechnik and L-Acoustics — competitors in the market — jointly announced a collaboration to accelerate Milan adoption and lower entry barriers for users."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q073',
    text: 'What type of switch is required to run Milan-certified devices?',
    options: [
      'Any commodity managed switch with QoS settings',
      'An AVB-capable switch',
      'A PoE switch with 10 Gbps backbone',
      'A Dante-certified Cisco switch'
    ],
    correct: 1,
    explanation: '"AVB switches are required — standard commodity Ethernet switches do not support the stream reservation protocol." Milan runs on Layer 2 AVB, not standard IP.',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q074',
    text: 'In a hybrid event, what is the critical rule regarding consumer softcodec AEC (e.g., Zoom/Teams built-in)?',
    options: [
      'It is acceptable for events under 100 attendees',
      'It should be used as a backup only',
      'Do not use it in a professional room event — use dedicated AEC hardware',
      'It works correctly if you disable the room PA'
    ],
    correct: 2,
    explanation: '"The critical rule: Do not use consumer-grade softcodec AEC in a professional room event. The quality degradation is not acceptable and the failure modes are unpredictable."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q075',
    text: 'In a hybrid event AEC setup, what signal MUST feed the AEC hardware as a discrete input?',
    options: [
      'The monitor mix for the presenter',
      'The remote attendee camera feed',
      'The reference signal — what is being played into the room',
      'The broadcast output feed'
    ],
    correct: 2,
    explanation: '"The reference signal — what is being played into the room — must feed the AEC hardware as a discrete input. The AEC then subtracts the predicted acoustic echo from each microphone channel before transmission."',
    category: 'sound', difficulty: 'hard'
  },
  {
    id: 'q076',
    text: 'What is the EBU R128 integrated loudness target for live broadcast programmes?',
    options: ['-18 LUFS ± 2 LU', '-23 LUFS ± 1 LU', '-24 LKFS ± 1 LU', '-16 LUFS ± 3 LU'],
    correct: 1,
    explanation: '"Integrated loudness target: -23 LUFS (±1 LU tolerance for live programmes)" per EBU R128 Version 5.0.',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q077',
    text: 'The US broadcast loudness standard (ATSC A/85, CALM Act) targets which integrated loudness level?',
    options: ['-23 LUFS', '-24 LKFS', '-18 LUFS', '-16 LUFS'],
    correct: 1,
    explanation: '"In the United States, the CALM Act (2010) requires television broadcasters to comply with ATSC A/85 — the practical target is -24 LKFS with a maximum True Peak of -2 dBTP."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q078',
    text: 'What is the EBU R128 True Peak maximum for broadcast delivery?',
    options: ['-3 dBTP', '-2 dBTP', '-1 dBTP', '0 dBTP'],
    correct: 2,
    explanation: '"True Peak maximum: -1 dBTP" per EBU R128. Note: standard peak meters may under-read True Peak by 1–3 dB — use a dedicated True Peak limiter.',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q079',
    text: 'The Pin 1 Problem, as described by Neil Muncy in 1994, is caused by:',
    options: [
      'Using the wrong gauge of microphone cable',
      'Pin 1 connecting to circuit board common ground instead of chassis ground',
      'A faulty XLR connector with a bent pin',
      'Mixing balanced and unbalanced signal paths'
    ],
    correct: 1,
    explanation: '"Many manufacturers connect Pin 1 to the audio circuit board\'s common ground trace, which then connects to the chassis via a shared path. This means interference current must travel through the audio circuit path to reach ground — injecting noise into the audio signal."',
    category: 'sound', difficulty: 'hard'
  },
  {
    id: 'q080',
    text: 'Which AES standard mandates correct Pin 1 connection to chassis ground?',
    options: ['AES67', 'AES70', 'AES48', 'AES75'],
    correct: 2,
    explanation: '"Equipment from manufacturers who follow AES48-2005 (the AES standard on grounding and EMC practices for audio equipment) connects the shield to chassis ground at the entry point correctly."',
    category: 'sound', difficulty: 'hard'
  },
  {
    id: 'q081',
    text: 'A Pin 1 Problem typically produces which type of noise symptom?',
    options: [
      'Clean 50/60 Hz hum that changes when cables are connected',
      'Buzz that correlates with dimmer position or LED wall content',
      'Digital clipping artifacts in the signal chain',
      'Dropout noise consistent with poor RF reception'
    ],
    correct: 1,
    explanation: '"Equipment with the Pin 1 Problem will exhibit: Buzz that correlates with LED wall content or dimmer position, hum that changes when lighting rigs are altered, RF pickup from nearby transmitters."',
    category: 'sound', difficulty: 'hard'
  },
  {
    id: 'q082',
    text: 'AI-based feedback suppressors in live sound use neural models for what purpose?',
    options: [
      'To replace the gain structure workflow entirely',
      'To distinguish tonal musical content from feedback buildup with less coloration',
      'To predict room acoustics without measurement',
      'To automate mic placement decisions'
    ],
    correct: 1,
    explanation: '"AI-based feedback suppressors use neural models to distinguish tonal musical content from feedback buildup, reducing frequency and severity of feedback events with less coloration than traditional filter-based approaches."',
    category: 'sound', difficulty: 'medium'
  },
  {
    id: 'q083',
    text: 'According to Trend 10 (Multi-Skill Engineer), which skill is described as "no longer optional for anyone deploying digital systems"?',
    options: [
      'Video switching and projection design',
      'Acoustic treatment installation',
      'Network literacy — Dante, basic switch management, IP addressing',
      'Console programming for theater automation'
    ],
    correct: 2,
    explanation: '"Network literacy (Dante, basic switch management, IP addressing) is no longer optional for anyone deploying digital systems." This is listed as a core modern competency baseline.',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q084',
    text: 'What does LUFS stand for?',
    options: [
      'Level Units Frequency Scale',
      'Loudness Units Full Scale',
      'Linear Unified Frequency Standard',
      'Loudness Unified Filter System'
    ],
    correct: 1,
    explanation: '"LUFS (Loudness Units Full Scale) is the unit of measure for integrated loudness per ITU-R BS.1770 and EBU R128. Numerically equivalent to LKFS."',
    category: 'sound', difficulty: 'easy'
  },
  {
    id: 'q085',
    text: 'True Peak metering differs from standard peak metering because:',
    options: [
      'It measures average level instead of instantaneous peaks',
      'It accounts for inter-sample peaks after digital-to-analog reconstruction, which can exceed sample peaks by 1–3 dB',
      'It measures across a 3-second window for broadcast compliance',
      'It uses A-weighting filters to match human hearing sensitivity'
    ],
    correct: 1,
    explanation: '"True Peak: The actual peak level after digital-to-analog reconstruction, accounting for inter-sample peaks. May exceed the displayed sample peak by 1–3 dB." This is why a True Peak limiter is required separately.',
    category: 'sound', difficulty: 'medium'
  }
];

// ─── RAPID FIRE (TRUE/FALSE) ─────────────────────────────────────────────────
const RAPID_FIRE = [
  { id: 'rf001', text: 'Y-taps and T-taps are permitted in DMX512 topology.', answer: false, explanation: 'No Y-taps, T-taps, or star splits are permitted without an active splitter. Topology is daisy-chain only.', category: 'technical' },
  { id: 'rf002', text: 'DMX termination is optional — it\'s just a "nice to have."', answer: false, explanation: '"Not optional. Not a nice to have." An unterminated line is a primary cause of mysterious flickering.', category: 'technical' },
  { id: 'rf003', text: 'Haze reveals beams, making aerial looks visible.', answer: true, explanation: '"Haze reveals beams. Without haze, many concert looks disappear."', category: 'lighting' },
  { id: 'rf004', text: 'The monitor engineer is responsible for the audience mix.', answer: false, explanation: 'The FOH engineer is responsible for the audience mix. The monitor engineer handles what performers hear.', category: 'sound' },
  { id: 'rf005', text: 'WMAS was approved by the FCC in February 2024.', answer: true, explanation: '"WMAS… approved by the FCC in February 2024 in the United States."', category: 'rf' },
  { id: 'rf006', text: 'Beam fixtures are excellent for general illumination.', answer: false, explanation: '"Beam lights are punctuation marks, not paragraphs." — they have limited utility for actual illumination.', category: 'lighting' },
  { id: 'rf007', text: 'Wireless is a "magic cable replacement" that simplifies the RF environment.', answer: false, explanation: '"Wireless is not magic cable replacement. It is spectrum management." — it requires careful coordination.', category: 'rf' },
  { id: 'rf008', text: 'A bad gate is worse than bleed.', answer: true, explanation: 'Direct quote from the Live Sound Playbook: "A bad gate is worse than bleed."', category: 'sound' },
  { id: 'rf009', text: 'An R9 score above 50 is considered minimum acceptable for camera-critical key light work.', answer: true, explanation: '"Minimum acceptable R9 for camera-critical work is generally considered 50+; better fixtures hit 80+."', category: 'technical' },
  { id: 'rf010', text: 'KLANG:technologies provides 3D immersive personal monitoring using binaural psychoacoustics.', answer: true, explanation: '"KLANG is the market-leading system for 3D immersive personal monitoring. It processes IEM mixes using binaural psychoacoustics."', category: 'sound' },
  { id: 'rf011', text: 'Backlight is one of the fastest ways to make a stage look professional.', answer: true, explanation: 'Direct quote from the Lighting Playbook, Section 4.2: "Backlight is one of the fastest ways to make a stage look professional."', category: 'lighting' },
  { id: 'rf012', text: 'Prediction replaces measurement in professional system tuning.', answer: false, explanation: '"Prediction does not replace measurement. Measurement does not replace listening."', category: 'sound' },
  { id: 'rf013', text: 'BlackTrax uses GPS to track performers on stage.', answer: false, explanation: 'BlackTrax uses infrared LED beacons worn by performers, detected by cameras mounted in the lighting rig.', category: 'advanced' },
  { id: 'rf014', text: 'GDTF is a proprietary format owned exclusively by MA Lighting.', answer: false, explanation: '"GDTF… is an open XML-based standard — backed by MA Lighting, Robe, Vectorworks, and others." It is open, not proprietary.', category: 'technical' },
  { id: 'rf015', text: 'Strobes should be used casually and frequently in any concert rig.', answer: false, explanation: '"Strobes are powerful but should never be casual." — photosensitive epilepsy risk and audience safety must be considered.', category: 'lighting' },
  { id: 'rf016', text: 'WMAS reduces coordination complexity for high channel-count productions.', answer: true, explanation: '"WMAS reduces coordination complexity and increases channel density" — particularly for shows with 20+ wireless devices.', category: 'rf' },
  { id: 'rf017', text: 'The grandMA2 and grandMA3 show files are fully compatible with each other.', answer: false, explanation: '"grandMA3 is a complete architectural rewrite — different effects engine, different programming paradigm, different network architecture (MA-Net3)." Show files are NOT compatible.', category: 'technical' },
  { id: 'rf018', text: 'Festival lighting is about creating one perfect design for each artist.', answer: false, explanation: '"Festival lighting is less about one perfect design and more about making many different shows possible." The rig must serve many artists with limited changeover time.', category: 'lighting' },
  { id: 'rf019', text: 'In personal monitoring systems with KLANG, performers set their own mix levels in 3D space.', answer: true, explanation: '"Each performer can position sources in a virtual 360° space — drums behind, guitar left, piano right — using a phone app."', category: 'sound' },
  { id: 'rf020', text: 'In an immersive (L-ISA) mix, stage volume from performers can negatively affect spatial localization.', answer: true, explanation: '"A bad monitor mix driving performers to move off their stage positions (localization depends on performers being roughly where they are panned to)" affects immersive localization.', category: 'sound' },
  { id: 'rf021', text: 'DMX cable impedance must be approximately 120 ohms — standard mic cable is acceptable.', answer: false, explanation: '"Standard microphone cable (typically 60–75 ohm) introduces impedance mismatch, degrades signal integrity, and increases susceptibility to EMI."', category: 'technical' },
  { id: 'rf022', text: 'WYSIWYG previz perfectly replicates the real lighting rig.', answer: false, explanation: '"Previz does not perfectly replicate the real rig. Beam properties, colour rendering, haze behaviour, and camera interaction all differ from reality."', category: 'advanced' },
  { id: 'rf023', text: 'AES75 formalized a loudspeaker maximum linear SPL measurement method.', answer: true, explanation: '"AES75… formalized a loudspeaker maximum linear SPL measurement method using Music-Noise / M-Noise-style signals to better represent real program behavior."', category: 'sound' },
  { id: 'rf024', text: 'Kinetic lighting means moving lights (pan/tilt) on a conventional moving head fixture.', answer: false, explanation: '"Kinetic lighting is not moving heads. Pan/tilt on a moving light is not kinetic rigging." Kinetic refers to physically moving scenic elements on motorized hoists.', category: 'advanced' },
  { id: 'rf025', text: 'CRMX (LumenRadio) is considered the industry standard for professional wireless DMX.', answer: true, explanation: '"CRMX (LumenRadio): Industry standard for professional wireless DMX. Most reliable in dense RF environments."', category: 'rf' },
  { id: 'rf026', text: 'You should never repatch during a show unless the failure is worse than the risk of repatching.', answer: true, explanation: '"Patch Principles: Never repatch during show unless the failure is worse than the risk." Repatching mid-show introduces its own risk of new errors.', category: 'sound' },
  { id: 'rf027', text: 'Gain structure means making everything hit the yellow "clip warning" zone on your meters.', answer: false, explanation: '"Gain structure is not \'make everything hit yellow.\' It is managing signal-to-noise ratio, headroom, dynamics, and downstream processing behavior."', category: 'sound' },
  { id: 'rf028', text: 'Virtual soundcheck perfectly captures feedback margins, RF issues, and performer adrenaline.', answer: false, explanation: '"Virtual soundcheck is not the real show. It may not capture: Performer adrenaline, audience absorption, RF issues, feedback margins, changed arrangements… Use it as preparation, not truth."', category: 'sound' },
  { id: 'rf029', text: 'Active DI boxes are best for passive bass, acoustic guitar, and piezo pickups.', answer: true, explanation: '"Active DI — Best for: Passive bass, acoustic guitar, piezo pickups, low-output sources. Pros: High input impedance. Clean detail."', category: 'sound' },
  { id: 'rf030', text: 'Passive DI boxes require phantom power or battery to operate.', answer: false, explanation: '"Passive DI — Pros: No power required. Handles high level well. Transformer isolation." It is the Active DI that needs phantom power or battery.', category: 'sound' },
  { id: 'rf031', text: 'Left/right sub placement produces comb filtering across the audience.', answer: true, explanation: '"Left/right subs — Pros: Easy placement. Cons: Comb filtering across audience." The two sources at different distances create interference patterns.', category: 'sound' },
  { id: 'rf032', text: 'Hairline mic placement in theater often sounds more natural than a chest lav.', answer: true, explanation: '"Hairline often sounds more natural than chest lav, but requires skill and costume/hair coordination."', category: 'sound' },
  { id: 'rf033', text: 'The fundamental troubleshooting rule is: change as many variables as possible simultaneously to solve problems faster.', answer: false, explanation: '"The Rule: Change one thing at a time." Changing multiple variables simultaneously makes it impossible to identify which change fixed the problem.', category: 'sound' },
  { id: 'rf034', text: 'A "board mix" sent directly to broadcast is typically sufficient for professional stream or recording quality.', answer: false, explanation: '"A board mix is rarely good enough." Broadcast needs more ambience, more direct sources, different vocal compression, less PA correction, audience mics, and loudness compliance.', category: 'sound' },
  { id: 'rf035', text: 'The CLICK track output from a playback system should go to FOH so the audience hears it clearly.', answer: false, explanation: '"Click — Destination: Monitors only." The click is purely for performers — sending it to FOH would be heard by the audience.', category: 'sound' },
  { id: 'rf036', text: 'IEM-centric stages reduce RF dependency compared to traditional wedge monitor setups.', answer: false, explanation: '"IEM-Centric Stages practical effect: cleaner FOH, but higher dependence on RF." Every IEM system adds transmitters and receivers to the RF environment.', category: 'sound' },
  { id: 'rf037', text: 'For mission-critical events, passive transformer splits decouple FOH, monitors, broadcast, and recording.', answer: true, explanation: '"For mission-critical events, physical transformer splits are still extremely valuable because they decouple FOH, monitors, broadcast, and recording."', category: 'sound' },
  { id: 'rf038', text: 'Safety earth should be lifted when experiencing a ground loop hum.', answer: false, explanation: '"Avoid lifting safety earth." Safety earth is a shock-protection circuit. Lifting it to solve a hum creates an electrical safety hazard. Use isolation transformers instead.', category: 'sound' },
  { id: 'rf039', text: 'Rock mixing requires keeping guitars wide without masking the lead vocal.', answer: true, explanation: '"Rock: Vocal must survive guitars. Control 200–500 Hz buildup. Keep guitars wide but not masking vocal."', category: 'sound' },
  { id: 'rf040', text: 'Jazz mixing calls for heavy compression to ensure consistent dynamic delivery.', answer: false, explanation: '"Jazz: Preserve dynamics. Avoid over-compression. Natural imaging matters. Stage volume may be part of the sound."', category: 'sound' },
  { id: 'rf041', text: 'AES70 (Open Control Architecture) provides a standardized control and monitoring framework for professional media devices.', answer: true, explanation: '"AES70 / Open Control Architecture is another important direction: it provides a standardized control and monitoring framework for professional media devices and can coexist with transport technologies such as AES67 and Milan."', category: 'sound' },
  { id: 'rf042', text: 'Overheads in live sound are always used purely as cymbal mics.', answer: false, explanation: '"Overheads are not always \'cymbal mics.\' Depending on genre, they may be: Cymbal-only support, full kit image, transient glue, audience-facing realism, recording/broadcast source."', category: 'sound' },
  { id: 'rf043', text: 'Measurement literacy — understanding SPL, transfer functions, phase, and documentation — is now a professional baseline.', answer: true, explanation: '"Measurement-Literate Mixing practical effect: ears remain essential, but measurement literacy is now a professional baseline."', category: 'sound' },
  { id: 'rf044', text: 'Post-show documentation is optional if the show went well.', answer: false, explanation: 'Documentation is always required. §31 lists it as essential: input list, RF frequencies, problems and fixes, notes for next show. "Documentation — The show can be repeated, improved, or handed off."', category: 'sound' },
  { id: 'rf045', text: 'The sub alignment process should be verified at multiple seats, not just the FOH position.', answer: true, explanation: '"Do not align only at FOH and declare victory." Sub alignment step 5 states: "Check multiple seats, not just FOH."', category: 'sound' },
  { id: 'rf046', text: 'In corporate audio, automixers reliably handle panel discussions, applause, and spontaneous jokes.', answer: false, explanation: '"Automixers do not understand politics, jokes, applause, or emotional timing." They must be monitored during use.', category: 'sound' },
  { id: 'rf047', text: '"Be the person people trust when things go wrong" is Golden Rule #20.', answer: true, explanation: '"Golden Rule #20: Be the person people trust when things go wrong." This is the final and arguably most important rule in the list.', category: 'sound' },
  { id: 'rf048', text: 'EQ can fix bad speaker aiming and comb filtering from overlapping sources.', answer: false, explanation: '"EQ cannot fix: Bad aiming, wrong speaker count, comb filtering from overlapping sources, severe room reflections, bad mic technique, excessive stage volume, insufficient headroom, wrong sub placement."', category: 'sound' },
  { id: 'rf049', text: 'Festival changeovers prioritize fast patching, standardized patch, and guest engineer support.', answer: true, explanation: '"Festival Mindset Priorities: Fast changeovers, Standardized patch, Clear stage plots, Guest engineer support, RF coordination, Backline flow, Line check discipline, Console file management, Weather readiness, Spare everything."', category: 'sound' },
  { id: 'rf050', text: 'During a show emergency, protecting the artist takes priority over protecting the audience.', answer: false, explanation: '"Emergency Triage: 1. Protect the audience. 2. Protect the artist." Audience safety always comes first.', category: 'sound' },
  // ── ADDITIONS: 16A, 20A, 24A, 26A, 35A ───────────────────────────────────
  { id: 'rf051', text: 'Milan-certified devices from different manufacturers should connect and work reliably without manual configuration.', answer: true, explanation: '"Two Milan-certified devices from different manufacturers should connect and work reliably without manual configuration." This is the core value of the certification profile over generic AVB.', category: 'sound' },
  { id: 'rf052', text: 'Dante and Milan can run on the same standard commodity Ethernet switch with QoS settings.', answer: false, explanation: 'Dante runs on standard managed switches with QoS. Milan requires an AVB-capable switch — standard commodity Ethernet switches do not support the stream reservation protocol.', category: 'sound' },
  { id: 'rf053', text: 'In a hybrid event, consumer softcodec AEC (Zoom/Teams built-in) is sufficient for a professional room with a PA system.', answer: false, explanation: '"The critical rule: Do not use consumer-grade softcodec AEC in a professional room event." Consumer AEC cannot track level changes in the room mix and often removes wanted signal along with echo.', category: 'sound' },
  { id: 'rf054', text: 'The AEC reference signal in a hybrid event must be in precise time alignment with the actual acoustic output in the room.', answer: true, explanation: '"The AEC reference and the room PA feed must be kept in precise time alignment. If the room PA output feeding the AEC reference is delayed versus the actual acoustic output in the room, AEC convergence will fail."', category: 'sound' },
  { id: 'rf055', text: 'EBU R128 specifies an integrated loudness target of -23 LUFS for broadcast programmes.', answer: true, explanation: '"Integrated loudness target: -23 LUFS (±1 LU tolerance for live programmes, ±0.2 LU for pre-recorded content)" per EBU R128 Version 5.0.', category: 'sound' },
  { id: 'rf056', text: 'A direct tap of the FOH mix bus is a suitable broadcast mix for professional streaming.', answer: false, explanation: '"The board mix is not a broadcast mix." It may lack ambience, have excessive low-frequency content from PA correction EQ, and not meet True Peak compliance. Broadcast mix should be a separate output with its own processing.', category: 'sound' },
  { id: 'rf057', text: 'Standard peak meters reliably display the True Peak level of an audio signal.', answer: false, explanation: '"Standard peak meters may under-read True Peak by 1–3 dB." True Peak meters account for inter-sample peaks after digital-to-analog reconstruction. Use a dedicated True Peak limiter on broadcast feeds.', category: 'sound' },
  { id: 'rf058', text: 'The Pin 1 Problem is resolved by using an XLR ground lift adapter on the offending cable.', answer: false, explanation: '"Do not use \'XLR ground lift adapters\' as a long-term fix — they leave the cable shield disconnected and reduce RF immunity." The correct fix is equipment implementing AES48-2005, or using a quality audio isolation transformer.', category: 'sound' },
  { id: 'rf059', text: 'The Pin 1 Problem is an internal equipment defect, meaning it persists even when a shield ground lift is engaged.', answer: true, explanation: '"Interference that appears even when the shield ground lift is engaged (because the problem is inside the equipment, not in the cable)." The defect routes shield current through the audio circuit inside the gear itself.', category: 'sound' },
  { id: 'rf060', text: 'A ground loop and a Pin 1 Problem produce identical symptoms and are solved the same way.', answer: false, explanation: 'Ground loops cause 50/60 Hz hum and are a system interconnection issue; solved with isolation transformers. Pin 1 Problems cause RF-band buzz correlating with dimmers/LED walls and are internal equipment defects — solutions differ.', category: 'sound' },
  { id: 'rf061', text: 'AI-assisted audio tools in live sound (feedback suppression, automixing) eliminate the need for trained human judgment at the mix position.', answer: false, explanation: '"What AI does not change: The need for trained human ears and judgment at the mix position… Do not delegate final authority over mix decisions, safety-critical feedback suppression, or RF management to automated systems."', category: 'sound' },
  { id: 'rf062', text: 'Network literacy — including Dante, basic switch management, and IP addressing — is now a professional baseline expectation for engineers deploying digital systems.', answer: true, explanation: '"Network literacy (Dante, basic switch management, IP addressing) is no longer optional for anyone deploying digital systems." Listed as a core multi-skill competency in Trend 10.', category: 'sound' },
  { id: 'rf063', text: 'LUFS and LKFS are two different measurements using different algorithms.', answer: false, explanation: '"LUFS (Loudness Units Full Scale) — numerically equivalent to LKFS (Loudness, K-weighted, relative to Full Scale)." They are the same measurement expressed with different unit names from different standards bodies.', category: 'sound' },
  { id: 'rf064', text: 'Ambience microphones are important in personal monitoring (IEM) setups because without them, performers are acoustically isolated from the audience and each other.', answer: true, explanation: '"Without ambience, performers are acoustically isolated from each other and from the audience. Most KLANG installations include a dedicated stereo ambient pair at the stage lip or audience microphones that performers can blend into their mix."', category: 'sound' },
  { id: 'rf065', text: 'In personal monitoring systems, performers setting their own levels means the monitor engineer has no further safety responsibility.', answer: false, explanation: '"Monitor engineer as safety net: Even in personal mixing, the engineer must monitor for RF dropouts and hardware failures, set pack limiters appropriately, ensure no performer is exceeding safe SPL levels — personal control does not mean unlimited level."', category: 'sound' }
];

// ─── CONTENT SECTIONS ────────────────────────────────────────────────────────
// All word-for-word content from source files, organized by section
const CONTENT = {

  lighting: [
    {
      id: 'L1-0',
      source: 'L1',
      section: '0',
      title: 'Core Philosophy',
      tag: 'lighting',
      content: `Live event lighting is not just "making things visible." It is a storytelling, safety, timing, rhythm, brand, and attention-control system.

A good lighting designer or operator must balance:
• Visibility — can the audience see what matters?
• Mood — does the light support the emotion?
• Focus — where should the audience look?
• Rhythm — does lighting move with the music, speech, or scene?
• Architecture — does the lighting reveal the room, stage, set, truss, scenic, or LED environment?
• Camera compatibility — does it work for IMAG, broadcast, livestream, and phone cameras?
• Safety and reliability — does the system work every time without creating hazards?
• Practicality — can the rig be loaded in, addressed, focused, programmed, operated, and struck within the schedule?

The best live lighting feels intentional even when the audience does not consciously notice it.`
    },
    {
      id: 'L1-1-1',
      source: 'L1',
      section: '1.1',
      title: 'Concerts and Touring',
      tag: 'lighting',
      content: `Concert lighting is rhythm-driven. It usually prioritizes:
• Beat, phrase, and song-section changes
• Strong silhouettes
• Aerial beam looks
• Backlight and side light
• Strobes, blinders, pixel effects, and video integration
• Artist identity
• Camera-friendly key light for IMAG or broadcast
• Cue stacks, busking, timecode, or hybrid operation

Priority levels:
• Impact — Very high
• Musical timing — Very high
• Flexibility — Very high
• Color and movement — Very high
• Speech intelligibility lighting — Medium
• Subtle realism — Low to medium

Concert rigs are often designed in layers: front light, back light, side light, overhead beam fixtures, floor package, blinders, strobes, audience light, scenic LED, practicals, and video surfaces.`
    },
    {
      id: 'L1-1-2',
      source: 'L1',
      section: '1.2',
      title: 'Corporate Events',
      tag: 'lighting',
      content: `Corporate lighting is communication-driven. It usually prioritizes:
• Clean speaker visibility
• Camera-safe exposure
• Brand colors
• Scenic lighting
• Stage depth
• Consistent looks
• Reliable cueing
• No distracting movement during speech
• Flattering face light
• Readability of projection or LED screens

Priority levels:
• Speaker visibility — Very high
• Camera compatibility — Very high
• Brand consistency — Very high
• Reliability — Very high
• Dramatic movement — Low to medium
• Audience effects — Low

Corporate lighting is where discipline matters. Bad lighting makes executives look tired, washes out screens, creates glare, or makes the brand look cheap.`
    },
    {
      id: 'L1-1-3',
      source: 'L1',
      section: '1.3',
      title: 'Theatre and Dance',
      tag: 'lighting',
      content: `Theatre and dance lighting are narrative and composition-driven. They prioritize:
• Controlled focus
• Motivated direction
• Sculpting bodies and faces
• Cue precision
• Area control
• Color temperature and mood
• Transitions
• Preservation of darkness
• Blocking support

Priority levels:
• Storytelling — Very high
• Cue precision — Very high
• Area control — Very high
• Face/body modeling — Very high
• Flashy movement — Usually low
• Subtle color variation — Very high

Dance lighting often relies heavily on side light, backlight, shinbusters, low booms, and strong contrast.`
    },
    {
      id: 'L1-1-4',
      source: 'L1',
      section: '1.4',
      title: 'Festivals',
      tag: 'lighting',
      content: `Festival lighting is flexibility-driven. The rig must serve many artists with limited changeover time.

Priorities:
• Robust house plot
• Flexible fixture placement
• Fast patching and cloning
• Guest LD support
• Busking-friendly layout
• Reliable networking
• Clear documentation
• Overnight weather resilience
• Easy troubleshooting

Festival lighting is less about one perfect design and more about making many different shows possible.`
    },
    {
      id: 'L1-1-5',
      source: 'L1',
      section: '1.5',
      title: 'Houses of Worship',
      tag: 'lighting',
      content: `Worship lighting combines concert, broadcast, architectural, and theatrical approaches.

Priorities:
• Worship leader visibility
• Congregational comfort
• Camera image quality
• Musical dynamics
• Non-distracting movement during spoken moments
• Scenic/environmental mood
• Volunteer-friendly operation
• Repeatability

The best worship lighting supports participation rather than spectacle for its own sake.`
    },
    {
      id: 'L1-1-6',
      source: 'L1',
      section: '1.6',
      title: 'Broadcast, Streaming & Hybrid Events',
      tag: 'lighting',
      content: `Camera-based lighting must be designed for sensors, not just eyes.

Priorities:
• Exposure consistency
• Flicker-free fixtures
• Camera white balance
• Skin tone accuracy
• Low noise floor
• Controlled contrast
• Screen compatibility
• Avoiding moiré and rolling-shutter artifacts
• Proper backlight separation
• Key/fill balance

A room can look good to the eye and terrible on camera. Camera lighting must be evaluated through the actual cameras whenever possible.`
    },
    {
      id: 'L1-2-1',
      source: 'L1',
      section: '2.1',
      title: 'The Four Functions — Visibility',
      tag: 'lighting',
      content: `Visibility is the baseline. The audience must see the performer, presenter, product, or action.

Key questions:
• What must be visible?
• From which audience angles?
• For cameras or only in-room?
• Should the visibility be neutral, flattering, dramatic, mysterious, or stylized?
• Is there enough front light without flattening the subject?

Common mistake: using too much front light and destroying depth.`
    },
    {
      id: 'L1-2-2',
      source: 'L1',
      section: '2.2',
      title: 'The Four Functions — Focus',
      tag: 'lighting',
      content: `Lighting tells the audience where to look.

You control focus through:
• Brightness
• Color contrast
• Movement
• Direction
• Isolation
• Framing
• Darkness around the subject
• Timing

The human eye is attracted to the brightest, warmest, sharpest, and moving object in the scene. Use that power carefully.`
    },
    {
      id: 'L1-2-3',
      source: 'L1',
      section: '2.3',
      title: 'The Four Functions — Mood',
      tag: 'lighting',
      content: `Mood comes from color, angle, contrast, texture, and movement.

Mood approaches by context:
• Intimate: Warm, low contrast, soft edges, lower intensity
• Aggressive: Hard backlight, beams, strobes, saturated red/white contrast
• Premium corporate: Clean white key, subtle brand uplight, controlled scenic accents
• Sacred: Deep blues, ambers, slow fades, strong backlight
• Futuristic: Cyan, blue, magenta, pixel lines, sharp beams
• Nostalgic: Warm tungsten tones, haze, low sidelight

Mood is not only color. A saturated blue front wash can still look boring if the angle and contrast are wrong.`
    },
    {
      id: 'L1-2-4',
      source: 'L1',
      section: '2.4',
      title: 'The Four Functions — Composition',
      tag: 'lighting',
      content: `Lighting composes the stage picture.

You are shaping:
• Foreground
• Midground
• Background
• Performer separation
• Scenic depth
• Architectural lines
• Negative space
• Symmetry or asymmetry
• Texture
• Scale

Good live lighting creates a frame. Great live lighting changes the frame over time.`
    },
    {
      id: 'L1-3-1',
      source: 'L1',
      section: '3.1',
      title: 'Design Workflow — Start With the Event Purpose',
      tag: 'lighting',
      content: `Before choosing fixtures, answer:
• What is the event?
• Who is the audience?
• Is it viewed live, on camera, or both?
• What is the emotional arc?
• What are the key moments?
• Who are the decision-makers?
• What must never fail?
• What is the budget?
• What are the venue restrictions?
• How long is load-in, programming, rehearsal, and strike?

Do not start with gear. Start with the show.`
    },
    {
      id: 'L1-3-4',
      source: 'L1',
      section: '3.4',
      title: 'Design Workflow — Build the System in Layers',
      tag: 'lighting',
      content: `A strong lighting rig is layered. Typical layers:

1. Key light
2. Fill light
3. Back light
4. Side light
5. Top light
6. Set/scenic light
7. Floor light
8. Audience light
9. Beam/effect light
10. Practical/decorative light
11. Pixel/LED element
12. Emergency/work light

Each layer should have a purpose. Random fixture placement leads to random looks.`
    },
    {
      id: 'L1-4-1',
      source: 'L1',
      section: '4.1–4.6',
      title: 'Lighting Angles Overview',
      tag: 'lighting',
      content: `Front Light: Face visibility, speaker clarity, camera exposure. 30–45° above eye level, 30–45° off-axis horizontal. Use for visibility, not visual interest.

Back Light: Separation from background, drama, hair highlights, beam looks, depth. Makes performers pop. Works well with haze.

Side Light: Sculpting bodies, dance definition, texture, dramatic modeling. Excellent for dance and movement. Reveals body shape.

Top Light: Area definition, mood, isolation, texture, overhead color wash. Creates pools of light. Eye sockets can go dark — not flattering alone for speakers.

Low Light / Foot Light: Horror, surrealism, stylized looks. Set texture, floor-level beam effects, dance shin light. Unflattering for normal speech. Use sparingly.

Audience Light: Participation, broadcast crowd shots, concert energy, awards/corporate applause moments, safety during walk-in/walk-out. Must be controlled — too much kills stage focus.`
    },
    {
      id: 'L1-5-1',
      source: 'L1',
      section: '5.1',
      title: 'Fixture Categories — Conventional Fixtures',
      tag: 'lighting',
      content: `Conventional fixtures include: Ellipsoidals/profiles, Fresnels, PARs, Cyc lights, Followspots, Scoops, Strip lights.

Strengths:
• Predictable beam quality
• Excellent color with gel
• Good theatrical control
• Often quiet
• Familiar to theatre crews

Limitations:
• Manual focus unless automated accessories are used
• More heat and power if tungsten
• Gel maintenance
• Less flexible than moving lights

Still important in theatre, broadcast, schools, houses of worship, and controlled stage environments.`
    },
    {
      id: 'L1-5-2',
      source: 'L1',
      section: '5.2',
      title: 'Fixture Categories — LED Profiles',
      tag: 'lighting',
      content: `LED Profiles / Ellipsoidals are used for:
• Front light, specials, gobos
• Corporate speaker light
• Theatre area lighting
• Installations

Important specs: CRI / TLCI / TM-30, color engine type, dimming quality, fan noise, shutter quality, lens options, flicker performance, color consistency between units, DMX modes, RDM support.

Important (from L2 Corrections):
• R9 score: A fixture can achieve CRI 90+ with a poor R9, directly degrading skin tone rendering on camera. Minimum acceptable R9 for camera-critical work is generally 50+; better fixtures hit 80+.
• PWM frequency: Low PWM frequencies (below ~1000 Hz) are visible at common camera shutter speeds. Test physically.
• Flicker Index and Percent Flicker: Metrics for cyclic variation in light output, relevant for audience comfort.
• Color consistency between units (binning and calibration): Verify color-calibrated units are specified or that field calibration tools are available.

A high-quality LED profile is not just about brightness. Color rendering, dimming smoothness, fan noise, and optics matter more than many spec sheets suggest.`
    },
    {
      id: 'L1-5-6',
      source: 'L1',
      section: '5.6',
      title: 'Fixture Categories — Beam Fixtures',
      tag: 'lighting',
      content: `Beam fixtures are used for: Concert aerial effects, electronic music, festivals, dramatic shafts of light, high-impact looks.

Strengths:
• Very narrow beams
• High intensity
• Strong aerial presence
• Fast movement

Limitations:
• Less useful without haze
• Can become repetitive
• Often poor for actual illumination
• Can create eye-safety and camera-flare issues

Note (from L2 Corrections): Modern wash-beam hybrid fixtures — including the GLP JDC1, Martin MAC Ultra Performance, Ayrton Domino, and Robe FORTE — can serve multiple functions credibly including general wash and key light duties. The "often poor for illumination" qualifier applies cleanly to pure narrow-beam fixtures (sub-3° output) designed exclusively for aerial effect.

Beam lights are punctuation marks, not paragraphs.`
    },
    {
      id: 'L1-5-8',
      source: 'L1',
      section: '5.8',
      title: 'Fixture Categories — Strobes',
      tag: 'lighting',
      content: `Strobes are used for: High-impact hits, drops, transitions, tension, audience energy, pixel effects.

Important considerations:
• Audience safety
• Photosensitive epilepsy risk
• Local regulations
• Artist approval
• Camera artifacts
• Duration and intensity
• Clear warnings where appropriate

Strobes are powerful but should never be casual.`
    },
    {
      id: 'L1-5-9',
      source: 'L1',
      section: '5.9',
      title: 'Fixture Categories — Blinders',
      tag: 'lighting',
      content: `Blinders are used for: Audience engagement, musical hits, chorus moments, rock/pop energy, camera crowd shots.

Types: Traditional tungsten molefays, LED blinders, Pixel blinders, Warm/cool white blinders, RGBW audience fixtures.

Tungsten blinders still have a distinctive emotional quality because of their warm color and decay curve. LED blinders offer control, lower power draw, and pixel effects.

Note (from L2 Corrections): Traditional tungsten molefays are increasingly difficult to source new, have growing power infrastructure requirements, and are being phased out of most new rig builds. LED blinders (Chauvet Épix, GLP JDC1-based units, Elation Protron series) have become the default on most new touring and festival builds. Tungsten blinders remain a legitimate choice where their specific warm decay curve is part of the artistic intent, but they are a legacy preference, not a forward-looking default recommendation.`
    },
    {
      id: 'L1-5-13',
      source: 'L1',
      section: '5.13',
      title: 'Fixture Categories — Lasers',
      tag: 'lighting',
      content: `Lasers are specialized effects, not general lighting.

Critical considerations:
• Legal compliance
• Audience scanning rules
• Variance/licensing where required
• Trained laser safety officer
• Beam termination
• Aircraft safety
• Venue approval
• Camera sensor risk

Never treat lasers like ordinary lighting fixtures.`
    },
    {
      id: 'L1-5-14',
      source: 'L1',
      section: '5.14',
      title: 'Fixture Categories — Haze & Atmospherics',
      tag: 'lighting',
      content: `Haze reveals beams. Without haze, many concert looks disappear.

Types by use:
• Haze — Fine atmospheric beam enhancement
• Fog — Dense visible clouds
• Low fog — Ground-hugging effect
• CO₂ jets — Short dramatic blasts
• Cryo-style effects — High-impact moments
• Confetti/streamers — Finale or celebration

Considerations: Fire alarm isolation, venue approval, HVAC airflow, performer comfort, camera visibility, residue, refill access, noise, fan placement.

Haze is often the difference between a lighting rig looking average and spectacular.`
    },
    {
      id: 'L1-6',
      source: 'L1',
      section: '6',
      title: 'Color Theory — Full Overview',
      tag: 'lighting',
      content: `Color Temperature References:
• Candle ≈ 1800K
• Tungsten lamp ≈ 2800–3200K
• Warm white LED ≈ 2700–3200K
• Neutral white ≈ 4000–4500K
• Daylight ≈ 5600K
• Cool daylight ≈ 6500K+

Important color rendering metrics: CRI (older but widely used), TLCI (useful for TV/camera), TM-30 (more detailed fidelity and gamut), SSI (spectral similarity for cinema/broadcast). Do not rely only on CRI.

LED fixtures mix colors additively. Common engines: RGB, RGBW, RGBA, RGBAL, RGBL, RGBMA, Lime-enhanced systems, Six-color or seven-color engines.

Emotional Color Associations:
• Red — danger, passion, aggression, intensity
• Amber — warmth, nostalgia, intimacy
• Yellow — energy, optimism, sunlight
• Green — nature, unease, technology, sickness (depends on context)
• Cyan — modern, cold, digital, aquatic
• Blue — calm, sadness, night, scale
• Purple — luxury, mystery, spirituality
• Magenta — pop, glamour, artificiality
• White — clarity, purity, impact, exposure
• Warm white — human, premium, classic
• Cold white — modern, clinical, powerful

Avoid simplistic rules. Color meaning depends on context, culture, music, skin tone, costume, scenic design, and camera response.`
    },
    {
      id: 'L1-7',
      source: 'L1',
      section: '7',
      title: 'Lighting for Camera',
      tag: 'lighting',
      content: `For camera, lighting must consider: Exposure, dynamic range, white balance, flicker, sensor response, skin tone, LED wall brightness, moiré, shutter angle/speed, frame rate, lens flare, background separation.

Fixtures should be tested at the actual camera frame rate and shutter settings.

Camera-friendly setup basics:
• Key light — main face light (30–45° horizontal and vertical)
• Fill light — reduces harsh shadows; softer and lower intensity than key
• Back light — separates subject from background; enough to separate shoulders/hair
• CCT — match camera white balance
• Contrast — moderate, unless dramatic style is intended

Avoiding Flicker: Test at full intensity, low dim levels, common color mixes, effects modes, camera frame rates, and slow-motion settings. Flicker can come from poor LED drivers, PWM dimming, incompatible camera shutter, mains frequency interaction.

LED Walls: Often much brighter than stage lighting. Balance LED wall brightness to camera, not to eye. Add enough key light to hold faces. Coordinate video content brightness with lighting cues.`
    },
    {
      id: 'L1-8',
      source: 'L1',
      section: '8',
      title: 'Control Systems — DMX512, RDM, Art-Net, sACN',
      tag: 'technical',
      content: `DMX512 is the core control protocol for entertainment lighting. A DMX universe carries up to 512 control slots/channels over RS-485-style physical layer.

Rules:
• One DMX universe = 512 channels
• Daisy-chain fixtures, do not star-split without an opto-splitter
• Terminate the end of each DMX line
• Use proper DMX cable, not random microphone cable
• Keep cable runs reasonable
• Document addresses clearly

RDM (Remote Device Management): Two-way communication over DMX lines. Uses: Discover fixtures, set addresses, change modes, monitor status, identify fixtures, read sensor data. Caution: some older fixtures behave badly with RDM enabled.

Art-Net vs sACN: Both transport DMX over Ethernet. sACN (ANSI E1.31) is often preferred for large multi-universe rigs and managed networks. Art-Net is common in mixed rental and legacy environments. Choice depends on consoles, nodes, fixtures, media servers, network design, and crew familiarity.

Network Best Practices: Use managed switches for larger systems. Document IP ranges. Separate lighting from public internet. Use VLANs where appropriate. Label every cable. Keep a printed network map. Use fiber for long runs and electrical isolation.`
    },
    {
      id: 'L1-9',
      source: 'L1',
      section: '9',
      title: 'Programming Fundamentals',
      tag: 'lighting',
      content: `Patch Documentation should include: Fixture number, type, mode, DMX address, universe, position, purpose, power source, network node/output, physical location, notes.

Fixture Modes: More channels are not always better. High-channel modes provide more control and pixel mapping but use more universes, programming complexity, and time. Choose the mode that supports the show.

Groups to build: All fixtures, by fixture type, by truss, by stage zone, odd/even, stage left/right, upstage/downstage, floor/overhead, audience, specials, key light, back light, scenic, pixel elements.

Essential Palettes: Position, Color, Beam, Gobo, Focus, Zoom, Prism, Shutter/framing, Effects, Intensity, Timing. Use palettes so the show can be updated quickly when trim height or blocking changes.

Cue Stacks best for: Theatre, corporate general sessions, award shows, scripted events, broadcast, time-sensitive sequences.

Busking is live improvisational operation. Needed tools: Position bumps, color bumps, intensity masters, movement effects, strobe/blinder controls, audience controls, speed masters, tap tempo, flash buttons, kill buttons, safe key light override. Busking is not random button pressing. It is structured improvisation.

Timecode: Best for pop tours, EDM shows, broadcast performances, complex automation, lighting/video/laser/pyro sync. Risks: Over-programming, lack of flexibility, failure if playback changes. Hybrid approach is often best.`
    },
    {
      id: 'L1-10',
      source: 'L1',
      section: '10',
      title: 'Cueing and Musicality',
      tag: 'lighting',
      content: `Understand Musical Structure: Lighting should follow intro, verse, pre-chorus, chorus, bridge, solo, breakdown, drop, outro, hits, stops, tempo changes, dynamic changes.

Do not chase every beat unless the style demands it. Sometimes the most powerful cue is a slow shift.

Cue Density by moment:
• Speech — Stable, subtle
• Ballad — Slow fades, gentle movement
• Verse — Controlled looks, low density
• Chorus — Bigger, brighter, wider
• Drop — Strobes, movement, audience hits
• Finale — Maximum scale, layered effects

A show that is full intensity all the time has nowhere to go.

Transitions are part of the design:
Types: Snap, fast fade, slow crossfade, delayed build, ripple, chase, blackout, reveal, color morph, movement transition.

The transition often matters as much as the destination look.`
    }
  ],

  lighting_advanced: [
    {
      id: 'L2-29',
      source: 'L2',
      section: '29',
      title: 'Previsualization',
      tag: 'advanced',
      content: `Previsualization is the process of designing and programming a lighting show in a virtual environment before arriving on site. It is standard professional practice on anything above a small club show.

Benefits:
• Identify rig design problems before load-in
• Pre-program cue stacks and effects offline
• Present concepts to clients, directors, or production managers
• Coordinate with video, scenic, and audio teams with a shared reference
• Reduce on-site programming time

Previz does not perfectly replicate the real rig. Beam properties, colour rendering, haze behaviour, and camera interaction all differ from reality. Previz is a design and efficiency tool, not a finished product.

Major Platforms:
• WYSIWYG (CAST Software) — CAD + previz + console connectivity; 25,000+ item fixture library; Theatre, corporate, complex installations
• Depence (Syncronorm) — High-fidelity cinematic rendering; lasers, pyro, fountains; large-scale concerts and pre-production presentations
• Capture — Real-time console integration; fast setup; Mid-size touring, corporate, festivals
• Vectorworks Spotlight — CAD documentation and plotting; not primarily real-time previz
• Unreal Engine 5 — Photorealistic real-time rendering; emerging in pre-production for high-budget design
• grandMA3 onPC (visualizer) — Console-linked previz within the MA3 ecosystem`
    },
    {
      id: 'L2-30',
      source: 'L2',
      section: '30',
      title: 'Wireless & Battery-Powered Fixtures',
      tag: 'advanced',
      content: `Wireless battery-powered LED fixtures have transformed lighting in corporate events, weddings, hospitality, branded activations, and touring. They are not a compromise — modern units from leading manufacturers deliver professional-grade output, colour quality, and reliable wireless control.

Wireless DMX Protocols:
• CRMX (LumenRadio) — Industry standard for professional wireless DMX. Most reliable in dense RF environments. Used by Astera and many others.
• W-DMX (Wireless Solution) — Widely supported; compatible with many fixtures.
• Proprietary app control — Some manufacturers (Astera AsteraApp, Elation) offer app-based setup and monitoring alongside CRMX/W-DMX.

Key Manufacturers: Astera (Germany) — Market-leading wireless battery fixture line. Products include Titan Tube, Hyperion Tube, Helios Tube, AX10 PowerPAR, AX9 PowerPAR, HydraPanel, PixelBrick, PlutoFresnel, LeoFresnel, and AX3 LightDrop. All manufactured since 2015 include a LumenRadio wireless DMX module. All non-fresnel units are IP65.

Planning: Calculate battery duration against the longest call. Temperature, intensity, and continuous pixel effects reduce run time. Coordinate RF frequency selection with the audio team. Most professional wireless fixtures are IP65 — confirm before outdoor deployment.`
    },
    {
      id: 'L2-31',
      source: 'L2',
      section: '31',
      title: 'Performer Tracking Systems',
      tag: 'advanced',
      content: `Performer tracking systems replace or augment human followspot operators by using sensor data to automatically aim lighting fixtures at moving performers. They have moved from specialist applications to mainstream use on major concert tours, television productions, and large theatrical productions.

How Tracking Works: The dominant approach uses infrared LED beacons worn by performers, detected by cameras mounted in the lighting rig. The system calculates performer position in 3D space and sends commands to moving lights to follow.

BlackTrax (CAST Software, Canada): Most widely deployed professional system. Captures positional 3D (X, Y, Z) and 6D rotation (yaw, pitch, roll) data. Outputs tracking data via RTTrP (Real-Time Tracking Protocol) standard. Used at Eurovision, Cirque du Soleil, Disney on Ice, La Scala Milan.

Zactrack: Automated follow system for open-air arenas, theatre stages, and studios. Console-agnostic.

Follow-Me: Remote followspot control system. Operators use a camera-based remote station rather than being positioned at a traditional followspot. Used extensively in live music touring.

Macula (SalesWL): Camera-based automated followspot controller. Supports third-party fixture control via RTTrP-L and RTTrP-M protocols.

RTTrP is an open-source protocol for transmitting performer position and rotation data. It allows tracking systems to communicate with lighting consoles, media servers, spatial audio systems, and camera control without proprietary lock-in.

Planning Considerations: Calibration time, beacon management (coordinate with wardrobe), latency (test at rehearsal), redundancy (identify fallback — usually manual console operation), operator skill, camera placement.`
    },
    {
      id: 'L2-32',
      source: 'L2',
      section: '32',
      title: 'Kinetic Lighting',
      tag: 'advanced',
      content: `Kinetic lighting refers to lighting fixtures or scenic elements mounted on motorized hoists or linear drives that move during performance as part of the visual design. The movement itself is a lighting design element.

Kinesys (a TAIT company) is the dominant provider of precision stage automation hardware. Key products: apexHOIST and apexDRIVE (variable-speed hoists with integrated load cells), DigiHoist range, Libra load cells, TAIT Navigator Automation Platform.

Safety is the primary constraint. Kinetic elements move above audiences, artists, and crew. Every kinetic element requires:
• Rated hardware only, with no improvised modifications
• Working load limits respected with appropriate safety factors
• Speed and acceleration limits defined by engineering, not what "looks good"
• Independent secondary arrest systems on any element over performers or audience
• Integration with the venue emergency stop system
• Qualified automation operator independent from the lighting operator
• Clearance zones accounting for swing, drift, and worst-case failure positions

Kinetic lighting is NOT moving heads. Pan/tilt on a moving light is not kinetic rigging.`
    },
    {
      id: 'L2-33',
      source: 'L2',
      section: '33',
      title: 'Show Control, OSC & System Integration',
      tag: 'advanced',
      content: `Show control refers to systems and protocols that allow different production departments — lighting, audio, video, automation, pyro, lasers — to communicate and trigger each other.

OSC (Open Sound Control): Network-based protocol widely used for inter-application communication. Allows QLab to trigger lighting cues, lighting console to trigger video cues, custom software to send lighting states based on sensor data.

MIDI Show Control (MSC): Older standard based on MIDI. Still present in fixed theatrical installations and some corporate AV systems.

QLab Integration: QLab (Figure 53) is the dominant audio and video playback tool in theatre and corporate events. QLab cues fire lighting console cues via OSC or MIDI. A single stage manager GO button advances both QLab and the lighting console simultaneously.

Media Server Integration:
• disguise (d3) — dominant media server in large-scale live events and concert touring
• Notch — Real-time generative effects software; responds to lighting console data
• TouchDesigner — Node-based real-time creative platform; controls lighting via OSC and Art-Net
• Resolume — Can receive Art-Net from lighting console to synchronize pixel content

Planning a Show Control System: Define what triggers what — draw the signal flow diagram. Identify who is the master clock. Define failure modes if a link goes down. Test end-to-end before dress rehearsal.

Show control failures at dress rehearsal are common. Show control failures during a live broadcast or opening night are career-defining moments for the wrong reasons.`
    },
    {
      id: 'L2-34',
      source: 'L2',
      section: '34',
      title: 'Consoles — Expanded & Current',
      tag: 'advanced',
      content: `grandMA2 vs grandMA3: These are different generations. Show files are NOT compatible. MA3 is a complete architectural rewrite — different effects engine, different programming paradigm, different network architecture (MA-Net3), different patch workflow. On any production specifying grandMA hardware, clarify which generation.

grandMA3 onPC: Full MA3 software running on Windows or macOS, limited to 4,096 parameters without a processing unit. Free to download. Primary training tool for MA3 programmers.

ETC Eos Platform: Runs across hardware tiers — Eos Apex 5 and Apex 10 (flagship with 4K haptic displays), Element 2 (mid-tier), Nomad (software-only), Ion Xe and RPU. Dominant in North American regional theatre and high-end corporate.

Other Active Consoles:
• MagicQ (ChamSys) — UK touring, festivals, clubs; full software free
• ONYX (Obsidian) — Free software platform; entry/mid touring and corporate
• Hog 4 series (High End Systems/ETC) — Concert touring, festivals; strong in North America
• Titan (Avolites) — UK club, touring, and festival market
• Vista (Chroma-Q) — Install and broadcast

Multi-Programmer Sessions: At Eurovision 2024 in Malmö, the production ran up to 14 grandMA3 consoles with five main lighting programmers within a single session, controlling over 200,000 parameters across 682 DMX universes.`
    },
    {
      id: 'L2-38',
      source: 'L2',
      section: '38',
      title: 'Sustainability — Beyond LED Adoption',
      tag: 'advanced',
      content: `LED adoption is necessary but not sufficient as a sustainability strategy. Current industry focus extends to:

Carbon measurement and reporting: Industry bodies including the Albert consortium (UK) and A Greener Future (AGF) provide tools and frameworks for measuring carbon footprints of live events.

The early-replacement problem: Retiring functional equipment to replace it with more energy-efficient equipment is not always more sustainable. The embedded carbon in manufacturing new fixtures can outweigh operational savings over a realistic deployment lifecycle.

Generator strategy:
• Shore power where available (zero generator emissions)
• HVO (Hydrotreated Vegetable Oil) where generators are required
• Battery storage + renewable charging for smaller events
• Generator right-sizing — avoid running a large generator at low load, which is inefficient

HVO is a paraffinic diesel alternative used in standard generators without modification. It produces significantly lower greenhouse gas emissions than fossil diesel. Now a contractual requirement on some UK and European touring shows, festivals (Glastonbury, WOMAD), and corporate events.

Fixture longevity: Specifying reputable, repairable, well-supported fixtures extends service life, reducing the frequency of replacement and embedded carbon of new manufacturing.`
    },
    {
      id: 'L2-39',
      source: 'L2',
      section: '39',
      title: 'Additional Event Contexts',
      tag: 'advanced',
      content: `Esports and Gaming Events: Camera-first at all times. Very high fixture count with large LED surfaces and pixel mapping. Brand color precision required. Reaction-time cuing for score moments. No haze near equipment areas.

Immersive and Experiential Events: No fixed show time — lighting must operate continuously, often autonomously. Sensor and interactive control via TouchDesigner or custom software. Scheduling: Venues use show control scheduling. Maintenance access is a primary design concern.

Awards Shows and Galas: Extremely cue-dense. Multi-camera broadcast coordination is primary. Table and audience lighting for crowd shots is a specific skill. Safety walkways (audience egress lighting) that appear quickly without destroying the broadcast look are an operational requirement.

Trade Shows and Exhibitions: Long operating hours (8–14 hours per day). Kiosk and product lighting with small, precise fixtures. Low maintenance access once the show opens. Brand color consistency — multiple units must match. No operator: most runs on presets or simple show control schedules.`
    },
    {
      id: 'L2-40',
      source: 'L2',
      section: '40',
      title: 'Crew Wellbeing',
      tag: 'advanced',
      content: `The live events industry has a documented and serious crew wellbeing problem. Long hours, irregular schedules, irregular meals, sleep deprivation, time away from family, financial insecurity between contracts, and a cultural normalisation of unsustainable working conditions contribute to burnout, mental health challenges, and physical health consequences.

This is not peripheral to professional practice. It directly affects work quality, safety margins, and the long-term availability of skilled crew.

Scheduling as a Design Decision: Professional production managers and LDs who are in a position to influence scheduling should:
• Advocate for realistic call lengths with proper break intervals
• Not normalise 20+ hour days as standard
• Identify where schedule compression creates safety risk (fatigued crew working at height)
• Build rehearsal and programming time into schedules so it does not have to be stolen from sleep

Mental Health Resources:
• Music Support (UK): Confidential support and referral for people working in the music industry
• Behind the Scenes (US): Charity providing crisis assistance to entertainment industry workers
• "Touring and Mental Health — The Music Industry Manual" (Tamsin Embleton)

Professional Mindset: Be skeptical of your own show file. Know what you don't know. Not knowing the local labor rules or console software version — these are things to discover during advance. Discovering them during load-in is avoidable.`
    }
  ],

  sound: [
    {
      id: 'S1-0',
      source: 'S1',
      section: '0',
      title: 'Core Philosophy — Live Sound',
      tag: 'sound',
      content: `Core philosophy: clarity before loudness, repeatability before heroics, documentation before memory, and trust before ego.

A great live sound engineer is not just a mixer. You are part acoustician, network tech, psychologist, emergency responder, diplomat, archivist, and risk manager.

Good live sound is not simply "loud and clear." It is the controlled delivery of an artistic intent to multiple audiences under changing, imperfect conditions.

Audiences include: The paying audience, performers on stage, production management, broadcast/stream/recording teams, VIPs/press/judges/clergy/corporate stakeholders, venue staff, neighbors/authorities/compliance officers.

A successful show meets these criteria:
• Audience mix — Clear, musical, emotionally appropriate
• Coverage — Consistent level and tonality across the audience area
• Stage sound — Performers hear what they need without excessive bleed
• Reliability — No avoidable dropouts, mutes, feedback, or power/network failures
• Safety — SPL, rigging, cables, electrical, weather, and crowd risk managed
• Communication — Everyone knows what is happening before it becomes a crisis
• Documentation — The show can be repeated, improved, or handed off`
    },
    {
      id: 'S1-2',
      source: 'S1',
      section: '2',
      title: 'Roles in a Live Sound Department',
      tag: 'sound',
      content: `FOH Engineer: Responsible for the audience mix. Translate the artist's intent to the room. Maintain tonal balance, intelligibility, impact, and dynamics. FOH is not the same as system tuning.

Monitor Engineer: Responsible for what performers hear. Build wedge or IEM mixes. Manage talkback, cue systems, shout systems, and musician communication. Prevent feedback and protect hearing. Monitor engineering is often more relational than technical. A technically perfect mix that makes the artist feel unsupported is a failed monitor mix.

Systems Engineer / System Tech: Responsible for PA design, deployment, optimization, measurement, and operational health. Design speaker layout, verify rigging and aiming, time-align mains/fills/delays/subs, manage amp/processor/network infrastructure, measure transfer functions and coverage. The systems engineer creates the canvas. FOH paints on it.

RF Coordinator: Responsible for wireless microphones, IEMs, intercom, IFB, comms, and camera links. Scan RF environment, coordinate legal compatible frequencies, manage intermodulation, deploy antennas correctly, monitor RF during show, coordinate with broadcast, comms, security.

A2 / Patch / Stage Tech: Responsible for physical stage audio execution. Patch inputs and outputs, place microphones/DIs/cables/stands, change batteries, troubleshoot stage issues, handle line check, manage wireless packs. A great A2 saves the show quietly.

Playback / Tracks Engineer: Responsible for playback rigs, timecode, click, stems, redundancy, and sync. Operate Ableton, QLab, Reaper, Pro Tools, LiveProfessor, or dedicated playback systems. Manage redundant computers/interfaces. Playback failure is one of the fastest ways for a modern show to collapse.`
    },
    {
      id: 'S1-3',
      source: 'S1',
      section: '3',
      title: 'Pre-Production — Where Shows Are Won',
      tag: 'sound',
      content: `Do not arrive blind.

Information to Collect Before the Gig:
• Input list — Channel count, mic package, patch planning
• Stage plot — Cable paths, risers, power, wedges, wireless zones
• Tech rider — Artist requirements, console files, preferred mics
• Venue drawings — PA prediction, cable lengths, delay placement
• Power info — Audio isolation, generator plan, distro capacity
• RF inventory — Wireless mics, IEMs, comms, camera links
• Schedule — Load-in, line check, soundcheck, doors, show
• SPL limits — Legal / venue / festival restrictions
• Recording / broadcast needs — Splits, ambience, audience mics, timecode
• Comms plan — Who talks to whom and how
• Weather plan — Outdoor safety and evacuation
• Union / labor rules — Who can move, plug, fly, or patch what
• Noise ordinance — Curfew and offsite level constraints

Questions Worth Asking Early:
• Is there a house PA or touring PA?
• Who owns final authority over SPL?
• Are there venue limiters?
• Is the room reflective, absorptive, reverberant, or oddly shaped?
• Are subs flown, ground-stacked, cardioid, end-fire, or mono?
• Is there a broadcast truck, stream mix, or recording split?`
    },
    {
      id: 'S1-5',
      source: 'S1',
      section: '5',
      title: 'Gain Structure — The Foundation',
      tag: 'sound',
      content: `Gain structure is not "make everything hit yellow." It is managing signal-to-noise ratio, headroom, dynamics, and downstream processing behavior.

Practical Gain Workflow:
1. Set preamp gain with the source playing at realistic performance level.
2. Leave headroom for adrenaline.
3. Use pad if the preamp is too hot.
4. Use HPF before boosting lows.
5. Avoid solving tonal problems with gain.
6. Confirm post-preamp digital trim is not hiding bad gain.
7. Check buses and matrices for cumulative overload.
8. Confirm speaker processor input level.
9. Confirm amp limiters are not constantly engaged.
10. Recheck after show starts.

Typical Digital Console Target:
• Vocals — -18 to -10 dBFS
• Drums — -18 to -8 dBFS
• Playback — -18 to -10 dBFS
• Speech — -20 to -12 dBFS
• Mix bus — Peaks below -6 dBFS

Do not chase a universal number. Digital consoles differ in metering, internal headroom, plugin calibration, and nominal operating level.`
    },
    {
      id: 'S1-6',
      source: 'S1',
      section: '6',
      title: 'Microphones and Source Capture',
      tag: 'sound',
      content: `General Mic Principles:
• The best EQ is microphone placement.
• Get close enough for isolation, far enough for tone.
• Use polar pattern deliberately.
• Aim nulls at bleed sources.
• Avoid placing mics where performers will kick them.
• Listen before processing.
• Mark positions once they work.

Vocal Mics: Dynamic handhelds — durable, good rejection, lower feedback risk. Condenser handhelds — clearer transient response, more open top end, more bleed and feedback risk. Headset/Lavalier — placement consistency, sweat protection, clothing noise, hair noise, RF pack security, backup mic strategy.

Kick Drum Layers:
• Inside near beater — Attack, click, definition
• Inside shell — Punch
• Outside resonant head — Weight, bloom
• Subkick / LF capture — Extended low energy

Common kick mistake: too much low-mid mud around 150–300 Hz and not enough controlled punch.

Snare: Top mic for attack and body, bottom mic for snap and sizzle. Check polarity between top and bottom. Aim null toward hi-hat. Gate carefully; bad gates make drummers sound worse.

Guitar Cabinets: Move the mic before EQ. Center dust cap = brighter/more aggressive. Edge of cone = warmer. Off-axis = smoother top. Further back = more cabinet/room, less isolation. A 1 cm movement can matter.

Bass: DI for consistency and low-end foundation. Mic for cabinet character. Check phase/time relationship. Compress for sustain, not lifelessness.`
    },
    {
      id: 'S1-8',
      source: 'S1',
      section: '8',
      title: 'Wireless Microphones and IEMs — RF Mindset',
      tag: 'rf',
      content: `Wireless is not magic cable replacement. It is spectrum management.

You must consider: Legal frequency bands, local TV channels, intermodulation, antenna placement, cable loss, transmitter power, body absorption, metal structures, LED walls, video transmitters, comms, IEM transmitters, nearby venues, touring acts, broadcast crews.

RF Workflow:
1. Inventory all RF devices
2. Confirm legal operating bands
3. Scan the venue with production RF off
4. Identify external carriers
5. Add known TV/broadcast exclusions
6. Coordinate frequencies
7. Deploy antennas properly
8. Turn on one system at a time
9. Verify RF and audio
10. Walk test
11. Save backup frequencies
12. Monitor during show

The "receiver on, transmitter off" test is crucial: if the receiver shows RF before your transmitter is on, you are seeing external energy and should retune or investigate.

Wireless Mic Best Practices: Use fresh batteries or verified rechargeables. Lock transmitters. Tape or secure battery doors. Use correct gain at transmitter. Keep antennas away from skin when possible. Avoid cupping handheld antennas.

IEM Best Practices: Start mixes quiet. Use limiters. Provide ambience mics. Avoid over-isolating performers. Use stereo carefully. Keep click/cues at safe levels. Give musicians control where possible.

Antenna Rules:
• Line of sight matters — Bodies and metal attenuate RF
• Keep receive antennas away from transmit antennas — Prevent overload
• Use correct antenna type — Directional vs omnidirectional
• Use low-loss cable — Long coax runs eat RF
• Do not over-amplify — RF gain can amplify noise too
• Separate IEM transmit and mic receive antennas — Reduces desense/interference`
    },
    {
      id: 'S1-9',
      source: 'S1',
      section: '9',
      title: 'Loudspeaker System Design',
      tag: 'sound',
      content: `A live system may include: Main left/right arrays, center cluster, subs, front fills, out fills, under-balcony fills, delay towers, VIP fills, stage fills, side fills, drum subs, press feeds, assisted listening feeds, lobby feeds, broadcast ambience.

Design Goals:
• Coverage — Every seat gets appropriate SPL
• Consistency — Tonal balance does not change wildly by seat
• Intelligibility — Speech and vocals are understandable
• Impact — Sufficient headroom and transient power
• Localization — Sound appears to come from stage when appropriate
• Rejection — Minimize spill onto stage, walls, balconies, neighbors
• Safety — Rigging, SPL, cabling, and weather risk managed

Common PA Design Mistakes: Too much PA for the room. Arrays aimed at back walls. Front rows ignored. Subs placed without pattern control. Delays too loud. Fills not delayed. EQ used to fix coverage problems. No off-axis listening.

Common Sub Arrays by type:
• Mono center cluster — Strong coupling, centered image; Power alley/uneven width
• End-fire — Rear rejection, forward summation; Requires depth
• Gradient/cardioid — Rear rejection; Needs processing and matching
• Flown subs — Better vertical integration; Less visceral ground coupling`
    },
    {
      id: 'S1-12',
      source: 'S1',
      section: '12',
      title: 'SPL, Hearing & Compliance',
      tag: 'sound',
      content: `Live sound engineers must care about hearing health. You are not only serving the mix; you are managing exposure.

NIOSH recommends an occupational exposure limit of 85 dBA over 8 hours, with allowable exposure time halving for every 3 dB increase. OSHA states that hearing conservation programs are required when exposures equal or exceed 85 dBA as an 8-hour TWA, and engineering/administrative controls are required above 90 dBA as an 8-hour TWA in general industry contexts.

SPL Monitoring — Track: LAeq, LCeq, LAmax, LCpeak, slow/fast response, measurement location, time window, show start/end. Document readings. Do not rely on vibes.

Practical SPL Control:
• Mix for clarity, not brute level.
• Reduce harshness before reducing overall level.
• Control subs separately.
• Watch cumulative fatigue.
• Use fills so mains do not have to cover everything.
• Keep stage volume under control.
• Communicate limits with artists before show.
• Use calibrated tools where compliance matters.`
    },
    {
      id: 'S1-13',
      source: 'S1',
      section: '13',
      title: 'FOH Mixing',
      tag: 'sound',
      content: `The FOH Priority Stack for concerts:
1. Lead vocal / primary source
2. Groove / time feel
3. Harmonic foundation
4. Emotional impact
5. Detail and width
6. Effects and polish

For corporate: 1. Speech intelligibility, 2. Stability/no feedback, 3. Natural tone, 4. Playback clarity, 5. Recording/stream quality.

Build a mix — practical order:
1. Start with the source that carries the show
2. Add rhythmic foundation
3. Add harmonic foundation
4. Add supporting instruments
5. Add ambience/effects
6. Check vocal intelligibility
7. Check mono compatibility
8. Walk the room
9. Adjust for audience absorption

HPF starting ranges: Vocal 80–150 Hz, Acoustic guitar 80–140 Hz, Electric guitar 70–120 Hz, Snare 70–120 Hz, Overhead 100–300 Hz, Speech lav 100–180 Hz.

EQ Strategy — Cut before boost. Common problem bands:
• 40–80 Hz — Rumble/excessive sub
• 100–250 Hz — Mud/boxiness
• 250–500 Hz — Congestion
• 500 Hz–1 kHz — Honk/nasal
• 1–3 kHz — Presence/intelligibility/harshness
• 3–6 kHz — Edge/bite/fatigue
• 6–10 kHz — Sibilance/brightness

Compression: Control dynamic range, add sustain, increase density, shape attack, protect from peaks, stabilize vocals. Over-compressing vocals until feedback risk rises is a common mistake.`
    },
    {
      id: 'S1-14',
      source: 'S1',
      section: '14',
      title: 'Monitor Mixing',
      tag: 'sound',
      content: `Performers need: Pitch reference, time reference, self, key musical cues, comfort, confidence. They do not need a perfect album mix unless it helps performance.

Wedges pros/cons:
• Pros: Natural stage feel, shared acoustic energy, no ear isolation issues, easy for guest performers
• Cons: Feedback risk, stage wash, vocal mic bleed, less consistency, louder stage

Wedge Best Practices: Place wedge in mic null. Ring out carefully. Use appropriate HPF. Do not over-EQ into ugliness. Keep low end out of wedges unless necessary. Watch cymbal/guitar wash.

IEMs pros/cons:
• Pros: Lower stage volume, detailed mixes, stereo imaging, recallable, better for click/tracks
• Cons: Isolation, RF dependency, ear fatigue, fit issues, mix complexity, risk of excessive level directly into ears

IEM Mix Building — Start with:
1. Performer's own source
2. Time reference: drums/click/percussion
3. Pitch reference: vocal/key/guitar
4. Lead vocal / MD cues
5. Ambience
6. Effects if needed

Ambience mics help IEM users feel connected. Options: Audience pair, stage lip pair, room mics, shotgun crowd mics. Be careful: too much ambience smears timing.`
    },
    {
      id: 'S1-16',
      source: 'S1',
      section: '16',
      title: 'Networked Audio',
      tag: 'technical',
      content: `Common protocols/ecosystems: Dante, AES67, AVB/Milan, Ravenna, SoundGrid, MADI, Optocore, Waves SuperRack networks, Proprietary console stagebox networks.

Network Design Principles:
• Separate show-critical audio from general IT traffic where practical.
• Use managed switches for serious systems.
• Disable energy-efficient Ethernet where recommended.
• Understand multicast behavior.
• Configure QoS when needed.
• Label every switch and cable.
• Keep primary and secondary networks truly separate if using redundancy.
• Avoid loops unless using supported redundancy protocols.
• Monitor clock master status.
• Keep a paper routing map.

Dante / AES67 Practical Concerns — Watch for:
• Clock instability, misconfigured sample rates, device latency mismatch
• Multicast flooding, IGMP snooping problems, VLAN trunk mistakes
• Shared office network congestion, duplicate IPs, wrong subnet
• Firmware mismatches, switches with bad QoS defaults`
    },
    {
      id: 'S1-17',
      source: 'S1',
      section: '17',
      title: 'Console Workflow & Show Files',
      tag: 'sound',
      content: `A show file should be: Logical, recoverable, documented, minimal where possible, built for speed under pressure.

Naming — Name everything.
Bad: Ch 37, Aux 9, Matrix 4, FX 2
Good: Lead Vox RF A, Drum Fill, Broadcast L/R, Front Fill, Vox Plate

Scene / Snapshot Strategy — Use snapshots for: Theater cues, corporate panels, festival changeovers, song-specific vocal FX, playback-heavy shows, guest acts.

Protect from snapshots: Preamp gain unless intentional, output routing, system processing, critical mute groups, talkback routing, RF spare channels, recording feeds.

VCAs / DCAs — Organize by action, not just source. Useful DCAs: Drums, Bass, Guitars, Keys, Tracks, BGVs, Lead vocals, All vocals, FX returns, Playback, MC/host, Band all, Emergency mute groups.

Console Redundancy: Save to USB. Save to cloud/laptop if allowed. Keep previous known-good file. Keep printed patch. Know how to bypass plugins. Know what audio passes during reboot.`
    },
    {
      id: 'S1-4',
      source: 'S1',
      section: '4',
      title: 'Input Lists and Patch Discipline',
      tag: 'sound',
      content: `Keep the input list stable.

Patch Principles:
• Label both ends of every cable.
• Use stage box numbering logically.
• Leave spare channels near critical groups.
• Put playback, RF, and guest inputs where they can be found quickly.
• Avoid "mystery channels."
• Never repatch during show unless the failure is worse than the risk.
• Document every deviation from the input list.

Standard Input List Example (18-channel band):
Ch 1: Kick In — Beta 91A — Phantom — Gate/Comp — Inside beater
Ch 2: Kick Out — Beta 52/D6 — No phantom — Gate/Comp — Outside
Ch 3: Snare Top — SM57/i5 — No phantom — Gate/Comp — Watch hat bleed
Ch 4: Snare Bottom — SM57 — No phantom — Gate — Polarity invert likely
Ch 5: Hat — KM184/SM81 — Phantom — HPF — Often not needed
Ch 6-9: Toms — e904/604 — Clips — Gate — Label by size
Ch 10-11: OH L/R — C414/KM184 — Phantom — Comp — Cymbal image
Ch 12: Bass DI — Active DI — Maybe — Comp — Pre-pedal?
Ch 13: Bass Mic — RE20/421 — No phantom — Comp — Phase with DI
Ch 14: Gtr 1 — SM57/906 — No phantom — Mark cab position
Ch 18: Lead Vox — Artist mic — Tall/HH — Comp/De-ess — Spare ready

Analog Split Strategy:
• Passive transformer split — Pros: Isolation, reliable. Cons: Cost, weight
• Passive parallel split — Pros: Simple, cheap. Cons: Ground issues, loading
• Active split — Pros: Flexible, gain control. Cons: Requires power
• Digital split — Pros: Lightweight, recallable. Cons: Clock/network dependency

For mission-critical events, physical transformer splits are still extremely valuable because they decouple FOH, monitors, broadcast, and recording.`
    },
    {
      id: 'S1-7',
      source: 'S1',
      section: '7',
      title: 'Direct Boxes',
      tag: 'sound',
      content: `Passive DI — Best for:
• Active instruments
• Keyboards
• DJ mixers
• Hot line-level sources
Pros: No power required. Handles high level well. Transformer isolation.
Cons: Can load passive pickups depending on design.

Active DI — Best for:
• Passive bass
• Acoustic guitar
• Piezo pickups
• Low-output sources
Pros: High input impedance. Clean detail.
Cons: Needs phantom or battery. Can overload if source is very hot.

DI Checklist:
• Ground lift available
• Pad available
• Phantom requirement known
• Thru output works
• Label source clearly
• Secure against accidental unplugging`
    },
    {
      id: 'S1-10',
      source: 'S1',
      section: '10',
      title: 'Subwoofer Deployment',
      tag: 'sound',
      content: `Before placing subs, ask:
• Is the show music-heavy, speech-heavy, or mixed?
• Is stage low-frequency buildup a problem?
• Are there neighbors or noise limits?
• Can subs be flown?
• Is there room for cardioid/end-fire spacing?
• Will the deployment block sightlines or exits?

Common Sub Arrays:
• Mono center cluster — Strong coupling, centered image. Cons: Power alley/uneven width coverage
• Left/right subs — Easy placement. Cons: Comb filtering across audience
• Arc array — Smooth horizontal control. Cons: Needs space and processing
• End-fire — Rear rejection, forward summation. Cons: Requires depth
• Gradient/cardioid — Rear rejection. Cons: Needs processing and matching
• Flown subs — Better vertical integration. Cons: Less visceral ground coupling
• Distributed subs — Coverage control. Cons: Complex timing

Sub Alignment Workflow:
1. Measure mains alone.
2. Measure subs alone.
3. Match polarity.
4. Adjust delay for summation through crossover.
5. Check multiple seats, not just FOH.
6. Confirm subjective punch with music.
7. Walk front rows, center, sides, rear.
8. Confirm stage rejection if cardioid.

Do not align only at FOH and declare victory.`
    },
    {
      id: 'S1-11',
      source: 'S1',
      section: '11',
      title: 'System Tuning and Measurement',
      tag: 'sound',
      content: `Common measurement tools: Smaart, SysTune, Open Sound Meter, SATlive, SIM/manufacturer tools, calibrated measurement mic, dual-channel FFT interface, SPL meter, laser distance meter.

Measurement Concepts:
• Transfer function — Output compared to input
• Magnitude — Frequency response
• Phase — Time relationship by frequency
• Coherence — Reliability of measurement
• Impulse response — Time-domain arrival
• Polarity — Positive/negative pressure direction
• Delay — Time offset
• Crossover — Frequency handoff between elements

15-Step Tuning Workflow:
1. Verify physical deployment
2. Verify amp/processor presets
3. Verify routing
4. Verify polarity of every zone
5. Verify each box/circuit works
6. Set initial gain structure
7. Measure mains
8. Align subs
9. Align fills
10. Align delays
11. Set tonal target
12. Walk the room
13. Listen to speech
14. Listen to music
15. Recheck after audience enters

EQ Can Help: Tonal shaping, minor resonances, excess energy from system/room interaction, matching zones.

EQ Cannot Fix: Bad aiming, wrong speaker count, comb filtering from overlapping sources, severe room reflections, bad mic technique, excessive stage volume, insufficient headroom, wrong sub placement.

Target Curve: There is no universal target curve. A useful live music target often has controlled LF extension, smooth low-mid response, slightly relaxed HF at distance, no harsh 2–5 kHz buildup, no uncontrolled sub bloom. Speech-heavy systems need more intelligibility and less LF energy.`
    },
    {
      id: 'S1-15',
      source: 'S1',
      section: '15',
      title: 'Feedback Control',
      tag: 'sound',
      content: `Feedback loop: Microphone → preamp → processing → speaker → room/stage → microphone. You can attack the loop at any point.

Prevention:
• Use correct mic pattern.
• Aim speakers away from microphones.
• Reduce stage volume.
• Place wedges in mic nulls.
• Use HPFs.
• Use fewer open mics.
• Automix speech channels.
• Avoid excessive compression.
• Avoid excessive high-frequency boosts.
• Keep lavs away from PA coverage.
• Train presenters not to stand in front of speakers.

Ringing Out Procedure:
Ringing out is not "destroy the wedge with 20 filters."
1. Bring level up gradually.
2. Identify first feedback frequency.
3. Cut narrowly.
4. Repeat only as needed.
5. Stop before tone is ruined.
6. Test with actual mic position and performer distance.
7. Do not ring out empty-stage wedges and assume show conditions match.`
    },
    {
      id: 'S1-18',
      source: 'S1',
      section: '18',
      title: 'Virtual Soundcheck',
      tag: 'sound',
      content: `Virtual soundcheck uses a multitrack recording of a previous performance played back through the console to simulate the band being present.

Benefits:
• Build mix before band arrives
• Train new engineers
• Tune scenes
• Check plugins
• Verify routing
• Prepare broadcast mix
• Diagnose problems without performers

Risks — Virtual soundcheck is not the real show. It may not capture:
• Performer adrenaline
• Audience absorption
• Stage volume
• Mic movement
• RF issues
• Feedback margins
• Changed arrangements
• Real monitor interactions

Use it as preparation, not truth.`
    },
    {
      id: 'S1-19',
      source: 'S1',
      section: '19',
      title: 'Playback, Tracks, and Timecode',
      tag: 'sound',
      content: `Playback failure is one of the fastest ways for a modern show to collapse.

Critical Playback System Design:
• Main computer
• Backup computer
• Redundant interfaces
• Auto or manual switcher
• UPS
• Clear operator workflow
• Printed cue sheet
• Emergency stop
• Emergency vamp/skip plan

Common Playback Outputs:
• Tracks L/R → FOH
• Stems → FOH / broadcast
• Click → Monitors only
• Cues → Monitors / MD
• LTC/SMPTE → Lighting / video / pyro
• Guide vocal → Monitors only
• Sub stem → FOH / playback mixer
• Spare → Emergency

Playback Failure Questions (before show):
• What happens if the main laptop dies?
• Who switches to backup?
• Does timecode continue?
• Can band continue without tracks?
• Are there songs that must be skipped if playback fails?
• Is there a verbal cue from MD?
• Does lighting/video know fallback mode?

Common playback software: Ableton, QLab, Reaper, Pro Tools, LiveProfessor.`
    },
    {
      id: 'S1-20',
      source: 'S1',
      section: '20',
      title: 'Corporate Audio',
      tag: 'sound',
      content: `Corporate audio is unforgiving because the source is often speech and the audience expects perfection.

Priorities:
1. Intelligibility
2. Stability
3. Clean transitions
4. Recording/stream quality
5. Presenter confidence
6. Minimal visible intrusion

Corporate Sources:
• Lectern mic
• Lavalier
• Headset
• Handheld Q&A
• Panel table mics
• Playback laptops
• Remote callers
• Video conference
• Translation feeds
• Press mults / IFB
• Voice of God

Corporate Pitfalls:
• Presenters wearing lavs too low
• Necklaces hitting lavs
• Scarves covering mics
• Open Q&A mics feeding back
• Laptop audio hum
• HDMI audio routing confusion
• Zoom/Teams echo cancellation artifacts
• Last-minute panel size changes
• No comms with show caller
• Lectern moved after tuning
• CEO walking in front of PA

Automixers: Use for panels, boardrooms, houses of worship speech, corporate Q&A. But monitor it. Automixers do not understand politics, jokes, applause, or emotional timing.`
    },
    {
      id: 'S1-21',
      source: 'S1',
      section: '21',
      title: 'Theater and Musical Theater',
      tag: 'sound',
      content: `Theater Priorities:
• Every word understood
• Cues executed correctly
• Mics hidden and stable
• Scene changes seamless
• Orchestra balanced
• Localization believable
• Redundancy ready

Theater Workflow:
• Script marking
• Line-by-line mixing
• DCA assignment by scene
• Mic plot
• Costume integration
• Sweat protection
• Backup elements
• RF scan every day
• Battery schedule
• Cue sheets
• Understudy files

Common Theater Mic Placement:
• Hairline
• Ear rig
• Forehead
• Cheek
• Hat/costume
• Lavalier on chest only when acceptable

Hairline often sounds more natural than chest lav, but requires skill and costume/hair coordination.`
    },
    {
      id: 'S1-22',
      source: 'S1',
      section: '22',
      title: 'Houses of Worship',
      tag: 'sound',
      content: `Houses of Worship Unique Challenges:
• Volunteer operators
• High emotional stakes
• Speech and music in one event
• Changing bands
• Limited rehearsal
• Livestream mix
• Room acoustics often difficult
• Budget constraints
• Many wireless channels
• Choirs, pastors, panels, playback

Best Practices:
• Simplify console layout.
• Use templates.
• Train volunteers on gain, mute, and feedback first.
• Make pastor mic bulletproof.
• Separate livestream mix from room mix where possible.
• Use controlled stage volume.
• Document everything.
• Build recovery procedures.`
    },
    {
      id: 'S1-23',
      source: 'S1',
      section: '23',
      title: 'Festivals',
      tag: 'sound',
      content: `Festival Mindset — Festivals are logistics under time pressure.

Priorities:
• Fast changeovers
• Standardized patch
• Clear stage plots
• Guest engineer support
• RF coordination
• Backline flow
• Line check discipline
• Console file management
• Weather readiness
• Spare everything

Standard 24-Channel Festival Patch:
1 Kick In | 2 Kick Out | 3 Snare Top | 4 Snare Bottom | 5 Hat | 6 Rack Tom | 7 Floor Tom 1 | 8 Floor Tom 2 | 9 OH L | 10 OH R | 11 Bass DI | 12 Bass Mic | 13 Gtr 1 | 14 Gtr 2 | 15 Keys L | 16 Keys R | 17 Tracks L | 18 Tracks R | 19 BGV 1 | 20 BGV 2 | 21 BGV 3 | 22 Lead Vox | 23 Spare Vox | 24 Talkback/Guest

Guest Engineer Etiquette:
• Hand them clear documentation.
• Give them working talkback.
• Explain PA quirks honestly. Do not hide system limits.
• Help without taking over.
• Save their file correctly.
• Reset after their set.`
    },
    {
      id: 'S1-24',
      source: 'S1',
      section: '24',
      title: 'Broadcast, Streaming, and Recording',
      tag: 'sound',
      content: `FOH mix ≠ Broadcast mix.

The room mix is influenced by acoustic stage sound. Broadcast needs a complete mix.

Broadcast often needs:
• More ambience
• More direct sources
• Different vocal compression
• Less PA correction
• More controlled dynamics
• Audience mics
• Redundant recording
• Timecode
• Loudness compliance

Split Options:
• Direct outs → Multitrack recording
• Matrix mix → Simple stream
• Broadcast console split → Serious broadcast
• Post-fade aux → Quick reference
• Stem mix → Hybrid broadcast support

Audience Mics — Use for:
• Applause
• Singalong
• Room feel
• Broadcast realism
• IEM ambience
Mute or reduce them during quiet speech if they add noise.`
    },
    {
      id: 'S1-25',
      source: 'S1',
      section: '25',
      title: 'Comms and Show Communication',
      tag: 'sound',
      content: `Communication Channels:
• Production intercom
• Audio partyline
• Lighting
• Video
• Stage manager
• RF
• Backline
• Security
• Artist talkback
• Shout speakers
• Text/WhatsApp/Slack
• Cue lights

Good Comms Practice:
• Say who you are calling.
• Keep messages short.
• Confirm critical instructions.
• Avoid panic language.
• Do not clutter comms during cues.
• Have backup comms.
• Keep audio talkback separate from production comms where possible.`
    },
    {
      id: 'S1-26',
      source: 'S1',
      section: '26',
      title: 'Power and Grounding',
      tag: 'sound',
      content: `Power Risks:
• Shared circuits with lighting/video
• Generators
• Bad grounds
• Neutral issues
• Brownouts
• Rain
• Unlabeled distros
• Overloaded circuits
• Laptop power supplies
• Pin-1 problems

Audio Power Best Practices:
• Use proper distro.
• Keep audio and lighting separated where possible.
• Verify voltage.
• Use UPS for consoles, computers, switches, RF, and playback.
• Avoid lifting safety earth.
• Use isolation transformers for audio, not dangerous power hacks.
• Label power paths.
• Know what dies if one breaker trips.`
    },
    {
      id: 'S1-27',
      source: 'S1',
      section: '27',
      title: 'Troubleshooting Method',
      tag: 'sound',
      content: `The Rule: Change one thing at a time.

Signal Flow Method — Follow the signal:
Source → Mic/DI → Cable → Stagebox → Preamp → Console channel → Insert/plugin → Bus/aux/matrix → Network/output → Processor → Amp → Speaker → Air → Listener

Common Failures:
• No signal — Mute, wrong patch, bad cable, phantom off, dead battery
• Hum — Ground loop, bad DI, unbalanced run, power issue
• Buzz — Lighting dimmer, LED wall, bad cable, RF interference
• Distortion — Gain too high, bad capsule, clipping bus, blown driver
• Thin sound — Polarity issue, HPF too high, phase cancellation
• Feedback — Mic/speaker geometry, too much gain, compression
• RF dropouts — Bad frequency, antenna issue, low battery, body blocking
• Network clicks — Clocking, latency, switch config, overloaded link
• Delay weirdness — Wrong alignment, duplicate source, fill too loud
• Harsh mix — PA tuning, mic choice, over-compression, SPL fatigue

Emergency Triage During Show:
1. Protect the audience.
2. Protect the artist.
3. Keep the show moving.
4. Fix the root cause only if time allows.
5. Use the backup.
6. Document after.

Do not perform deep surgery during a song unless the show is already failing.`
    },
    {
      id: 'S1-28',
      source: 'S1',
      section: '28',
      title: 'Critical Spares',
      tag: 'sound',
      content: `Always Useful Spares:
• XLR cables and short XLR jumpers
• IEC cables and power strips
• DI boxes (passive and active)
• Batteries
• Mic clips
• Gaff tape and e-tape
• Sharpies and console lamps
• USB drives
• Network cables and fiber jumpers if used
• SFPs if used
• Headphones
• IEM pack
• Spare vocal mic
• Spare lav element and spare headset element
• RF antennas and BNC cables
• Laptop chargers and USB adapters
• Small analog mixer
• Measurement mic and SPL meter
• Flashlight/headlamp
• Multimeter and cable tester`
    },
    {
      id: 'S1-29',
      source: 'S1',
      section: '29',
      title: 'Safety',
      tag: 'sound',
      content: `Audio Department Safety Concerns:
• Hearing exposure
• Cable trip hazards
• Rigging below suspended loads
• Electrical shock
• Weather
• Crowd barriers
• Laser/pyro coordination
• Dark stage movement
• Heavy lifting
• Forklifts and lifts
• Fire exits
• Temporary structures

Cable Safety:
• Cross walkways at 90 degrees.
• Use cable ramps where required.
• Tape edges, not entire coils.
• Keep exits clear.
• Avoid creating water traps.
• Separate power and signal when practical.
• Label long runs.

No mix is worth someone dying under a roof or truss.`
    },
    {
      id: 'S1-30',
      source: 'S1',
      section: '30',
      title: 'Weather and Outdoor Shows',
      tag: 'sound',
      content: `Outdoor Risk Factors:
• Rain, lightning, wind
• Heat, dust, humidity
• Sun on consoles/screens
• Generator instability
• RF changes from humidity
• Temperature-related tuning changes

Outdoor Checklist:
[ ] Weather radar monitored
[ ] Lightning policy known
[ ] PA wind limits known
[ ] Console covered
[ ] Stage boxes protected
[ ] Cable connectors elevated
[ ] Power distro protected
[ ] Towels/plastic ready
[ ] Evacuation plan known
[ ] Restart procedure known

No mix is worth someone dying under a roof or truss.`
    },
    {
      id: 'S1-31',
      source: 'S1',
      section: '31',
      title: 'Documentation',
      tag: 'sound',
      content: `What to Document:
• Input list
• Output list
• Patch
• RF frequencies
• Network IPs
• Console file version
• Speaker positions
• Processor settings
• Delay times
• SPL notes
• Problems and fixes
• Photos of stage and racks
• Notes for next show

SPL Monitoring — Track: LAeq, LCeq, LAmax, LCpeak, slow/fast response, measurement location, time window, show start/end. Document readings. Do not rely on vibes.

Post-Show Notes Template sections:
• What Worked
• What Failed
• System Notes
• Mix Notes
• RF Notes
• Monitor Notes
• Playback Notes
• Client/Artist Notes
• Fix Before Next Show`
    },
    {
      id: 'S1-32',
      source: 'S1',
      section: '32',
      title: 'Psychology and People Skills',
      tag: 'sound',
      content: `With Artists:
• Listen first.
• Do not argue during stress.
• Translate vague requests.
• Confirm changes.
• Keep your face calm.
• Never shame a performer over comms.
• Build trust early.

When an artist says "I need more vibe," they may mean ambience, reverb, audience, low end, confidence, or less isolation.

With Crew:
• Be clear and respectful.
• Share information.
• Admit uncertainty.
• Do not blame before verifying.
• Thank people.
• Keep jokes off open comms when tension is high.

With Clients — Clients care about outcomes, not your signal chain. Use language like:
• "We have a backup ready."
• "The issue is isolated to the spare channel."
• "The audience feed is stable."
• "We need two minutes before doors to verify the lectern mic."
Avoid unnecessary technical monologues during crisis.`
    },
    {
      id: 'S1-33',
      source: 'S1',
      section: '33',
      title: 'Genre-Specific Mixing Notes',
      tag: 'sound',
      content: `Rock: Vocal must survive guitars. Control 200–500 Hz buildup. Use parallel drum compression carefully. Keep guitars wide but not masking vocal. Subs should support, not blur.

Pop: Vocal polish matters. Tracks must integrate with band. Low end must be controlled. FX cues often matter. Playback redundancy is critical.

EDM / DJ: Protect subs and limiters. Watch DJ mixer output. Manage long-term SPL fatigue. Keep stereo image stable. Beware redlined mixers feeding distortion.

Jazz: Preserve dynamics. Avoid over-compression. Natural imaging matters. Stage volume may be part of the sound. Acoustic bass needs careful LF control.

Classical / Orchestra: Minimal intervention. Mic placement is everything. Avoid PA localization problems. Preserve transient and dynamic range. Audience noise and HVAC become important.

Hip-Hop: Vocal intelligibility over dense tracks. RF handheld reliability is critical. Control low-end buildup. Watch cupped mics. Have spare vocal mic live.

Metal: Vocals need aggressive intelligibility. Kick and bass separation matters. Guitars can destroy 2–5 kHz clarity. Fast drums need transient control, not mud. Stage volume can be extreme.

Worship: Blend band, vocals, pastor, and room participation. Keep spoken word bulletproof. IEMs and tracks often central. Volunteers need repeatable workflow. Livestream needs independent attention.`
    },
    {
      id: 'S1-34',
      source: 'S1',
      section: '34',
      title: 'Training Path for Live Sound Engineers',
      tag: 'sound',
      content: `Beginner — Learn: Signal flow, cable types, mic placement, gain structure, basic EQ, stage patch, feedback basics, console navigation.
Beginner — Do: Patch stage, ring wedges with supervision, mix small speech events, build input lists, record multitracks.

Intermediate — Learn: System tuning basics, RF coordination, dynamics, digital consoles, networking, IEMs, festival workflows, corporate comms.
Intermediate — Do: Mix bands, run monitors, tune small PAs, build show files, manage RF for small events.

Advanced — Learn: Large-format PA design, complex RF, redundant playback, broadcast splits, immersive audio, theater programming, network architecture, crew leadership.
Advanced — Do: Tour, lead festivals, design systems, mix broadcast-connected events, train others.`
    },
    {
      id: 'S1-35',
      source: 'S1',
      section: '35',
      title: 'Modern Industry Trends',
      tag: 'sound',
      content: `1. Standardized Loudspeaker Performance Data — AES75 pushes the industry toward more meaningful loudspeaker maximum linear level measurement using M-Noise signals closer to real music. Practical effect: better spec-sheet skepticism — do not compare boxes only by peak SPL marketing claims.

2. More Networked Audio and Control — AES70 is part of the broader move toward interoperable control and monitoring. Practical effect: live sound engineers need IT literacy.

3. RF Spectrum Pressure — Channel counts rise while usable spectrum remains contested. Practical effect: "auto scan" is not enough for professional shows.

4. Wireless Ecosystem Integration — Newer systems combine mic, IEM/IFB, control data, telemetry, and network integration. Practical effect: fewer antennas may not mean simpler engineering; it means different engineering.

5. IEM-Centric Stages — Many productions are moving away from loud wedge stages toward IEMs, tracks, click, cues, and personal mixing. Practical effect: cleaner FOH, but higher dependence on RF, monitoring, and musician mix discipline.

6. Broadcast Expectations Everywhere — Even small events now often have livestreams, recordings, social clips, or hybrid audiences. Practical effect: a board mix is rarely good enough.

7. Measurement-Literate Mixing — Engineers are expected to understand SPL, transfer functions, phase, prediction, and documentation. Practical effect: ears remain essential, but measurement literacy is now a professional baseline.`
    },
    {
      id: 'S1-36',
      source: 'S1',
      section: '36',
      title: "The Live Sound Engineer's Golden Rules",
      tag: 'sound',
      content: `1. Verify signal flow before blaming gear.
2. Fix the source before EQ.
3. Fix placement before processing.
4. Fix system coverage before mixing harder.
5. Leave headroom.
6. Label everything.
7. Save often.
8. Carry spares.
9. Use your ears, but verify with tools.
10. Walk the room.
11. Protect hearing.
12. Communicate early.
13. Stay calm on comms.
14. Never assume the file is current.
15. Never assume wireless is clean.
16. Never assume the PA is aligned.
17. Never assume the audience hears what FOH hears.
18. Document what changed.
19. The show matters more than your preferred method.
20. Be the person people trust when things go wrong.`
    },
    {
      id: 'S1-37',
      source: 'S1',
      section: '37',
      title: 'Fast Field Checklists',
      tag: 'sound',
      content: `Before Load-In:
[ ] Rider reviewed | [ ] Input list confirmed | [ ] Stage plot confirmed | [ ] Console file prepared | [ ] RF inventory requested | [ ] SPL limits known | [ ] Power plan known | [ ] Recording/stream needs known | [ ] Comms plan known | [ ] Weather plan checked

Before Line Check:
[ ] PA verified | [ ] Outputs labeled | [ ] Stage boxes online | [ ] Console patched | [ ] Talkback working | [ ] RF scanned/coordinated | [ ] Mics placed | [ ] DIs powered | [ ] Phantom checked | [ ] Playback patched | [ ] Monitors routed

Before Doors:
[ ] System walked | [ ] Fills/delays checked | [ ] Subs aligned | [ ] SPL monitoring ready | [ ] RF stable | [ ] Batteries fresh | [ ] Console saved | [ ] Backup file saved | [ ] Recording armed | [ ] Comms checked | [ ] Emergency mics ready

Before Show:
[ ] Correct scene loaded | [ ] Mutes checked | [ ] Talkback muted from PA | [ ] Playback ready | [ ] RF packs on talent | [ ] Spare mic ready | [ ] Monitor engineer ready | [ ] Stage manager ready | [ ] Recording rolling | [ ] SPL log started

After Show:
[ ] Save final console file | [ ] Stop recordings | [ ] Back up multitracks | [ ] Power down safely | [ ] Collect RF packs | [ ] Remove batteries if needed | [ ] Coil and count cables | [ ] Note failures | [ ] Photograph final setup if useful | [ ] Update documentation`
    },
    {
      id: 'S1-38',
      source: 'S1',
      section: '38',
      title: 'Final Mental Model',
      tag: 'sound',
      content: `A live sound engineer's real job is not to operate a console.

It is to manage a fragile chain:
Artist intent → Source capture → Signal integrity → Processing → Routing → Amplification → Acoustic delivery → Human perception → Emotional result

Every weak link matters.

The best engineers are not the ones who know the most tricks. They are the ones who make the fewest bad assumptions, prepare thoroughly, listen critically, communicate clearly, and recover gracefully when reality refuses to follow the plan.`
    }
  ],

  sound_advanced: [
    {
      id: 'ADD-8A',
      source: 'Additions',
      section: '8A',
      title: 'WMAS — Wireless Multichannel Audio Systems',
      tag: 'rf',
      content: `WMAS (Wireless Multichannel Audio System) is a regulatory classification and technology category approved by the FCC in February 2024 in the United States, and by ETSI in Europe in 2021. It permits a new class of wireless audio devices to transmit multiple audio channels within a single broadband RF channel — typically 6 or 8 MHz wide — using digital multiplexing.

Conventional wireless systems use individual narrow slots (~200 kHz per device). WMAS uses time-division multiplexing across a wide channel to pack many devices — microphones, IEMs, control data — into a single coordinated RF block.

Why It Matters Now: From 2017 onward, the FCC auction of the 600 MHz band compressed usable UHF spectrum. Many major US markets went from 17+ open TV channels to fewer than 10 after the repack. WMAS makes existing spectrum more efficient — a single 6 MHz TV channel block can support up to 32 or more audio links where conventional narrowband might support 8.

Sennheiser Spectera — First shipping WMAS product (began shipping April 2025):
• 1U rack Base Station handles up to 64 audio links (32 inputs + 32 outputs)
• One Base Station accommodates up to two wideband RF channels
• Bodypacks (SEK) are frequency-agnostic; Base Station handles all coordination
• Same bodypack functions as both mic transmitter and IEM receiver
• IEM latency down to 0.7 milliseconds
• MADI and Dante integration
• Includes permanent spectrum sensing

WMAS Workflow pressure points: Selecting and clearing the wideband block (you still need a clean TV channel), coexistence with conventional narrowband systems, understanding system-level failure modes, firmware and software management of the Base Station.

WMAS Regulatory Status:
• USA — FCC approved February 2024
• Europe / ETSI — Approved 2021
• Many APAC regions — Approved

WMAS does not change: The need to scan before deploying, the need to understand the local TV landscape, the need for quality antenna infrastructure, the fundamental physics of RF propagation, the need for show-critical redundancy planning.

WMAS makes sense for: High channel-count productions (>20 wireless devices), Broadway/large theatrical runs, major touring with extensive RF rigs, sporting events, venues in congested RF markets. Conventional narrowband remains practical for small productions (<12 wireless channels) and markets with open spectrum.`
    },
    {
      id: 'ADD-9A',
      source: 'Additions',
      section: '9A',
      title: 'Immersive & Spatial Audio for Live Sound',
      tag: 'sound',
      content: `Immersive audio for live events is no longer experimental. It is deployed on major tours, in installed venues, at sporting stadiums, and in permanent theatrical installations worldwide.

Traditional stereo PA: Sources are panned left/right in a stereo bus. Every seat hears a version of the same left-right image, and localization is approximate.

Object-based immersive systems: Individual sources are treated as discrete objects with X/Y/Z position data. The system can make a vocal appear to come from the singer's exact position on stage rather than from the left array.

L-ISA (L-Acoustics): Uses a horizontal array of five speaker clusters (left, left-center, center, right-center, right). Sources positioned in L-ISA Processor software. Each source gets Pan, Width, Distance, and Elevation parameters. L-ISA Studio (free software) allows engineers to build and rehearse spatial mixes on headphones before arriving at the venue. Deployed on: Adele's Las Vegas residency, Katy Perry's Play residency, Bon Iver's 2022 tour.

d&b audiotechnik Soundscape: Uses EN-Scene object placement software paired with EN-Space (electronically-derived room acoustic enhancement). DS100 Signal Engine is the core processor (1U rack, 64 inputs, 64 outputs). EN-Space adds early reflections and reverb derived from real room measurements. Deployed in: NFL's Lumen Field Stadium, Frankfurt Opera.

Meyer Sound Spacemap Go: iPad app interfacing with GALAXY Network Platform processor. Snapshots integrate with SSL Live V5.0 and other supported consoles.

Mix philosophy shift in immersive: Pan, distance, and width become spatial positioning tools. Over-panning becomes more obvious and disorienting. Reverb must be considered spatially. The mix should serve localization, not fight it.

Walking the room: Listen for localization accuracy, phase coherence between object outputs, consistent image width across seats, whether rear or overhead energy is appropriate.

Immersive audio cannot fix: Bad speaker coverage, poorly aligned arrays, stage volume that overwhelms the system, poor source capture at the microphone.

Active Acoustic Enhancement (related technology): Meyer Sound Constellation/VRAS, LARES, Yamaha AFC — fixed installations that electronically alter reverberant behavior of a room. If working in such a room, work with the house systems engineer; do not adjust AAE settings without understanding the implications.`
    },
    {
      id: 'ADD-14A',
      source: 'Additions',
      section: '14A',
      title: 'Personal Monitoring Systems & Musician-Controlled Mixes',
      tag: 'sound',
      content: `On many modern productions, performers are no longer passive recipients of a mix built by the monitor engineer. Personal monitoring systems give musicians direct control over their own IEM mix.

This changes the monitor engineer's role from mix builder to systems architect and support resource.

KLANG:technologies (now part of DiGiCo Group): Market-leading system for 3D immersive personal monitoring. A KLANG processor receives inputs via Dante or MADI, processes them with binaural algorithms, and outputs each performer's mix to their IEM transmitter. Each performer can position sources in a virtual 360° space — drums behind, guitar left, piano right.

Key specs (KLANG:konductor):
• 128 input signals processed at up to 96 kHz
• Processing latency below 0.25 ms
• Control via KLANG:app (iOS/Android/Mac/Windows)
• DiGiCo SD and Q series console integration

Aviom A-Net Personal Mixing: Up to 16 mono channels over Cat-5 network to personal mixers (A-16II or Pro16 series). Simple to operate, hardware-only, very low performer training requirement.

Roland M-48 Personal Mixer: Uses Roland's Cat-5 network. 16 channels with stereo or individual control. Hardware unit with jog wheel. Common in mid-tier touring and theater.

What changes in monitor engineer workflow:
• Channel labeling becomes critical (Bad: "CH 01, CH 02". Good: "KICK, SNARE, HI-HAT, TOMS, YOUR VOX, CLICK")
• Gain structure becomes performer-facing — performers cannot compensate for wildly different source levels
• Ambience microphones are essential — personal systems benefit significantly from ambient mics at the stage lip
• Monitor engineer remains safety net: monitors for RF dropouts, hardware failures, ensures no performer exceeds safe SPL levels, has a plan for hardware failures and emergency revert to conventional mix

KLANG Integration with DiGiCo Consoles: Console integration allows loading KLANG snapshots from DiGiCo snapshot automation, controlling KLANG parameters from the DiGiCo surface, and routing via built-in Dante or MADI without additional network hardware.`
    }
  ],

  sound_advanced2: [
    {
      id: 'ADD-16A',
      source: 'Additions',
      section: '16A',
      title: 'Milan vs. AVB: What the Difference Actually Means',
      tag: 'sound',
      content: `AVB (Audio Video Bridging) is a collection of IEEE standards (802.1AS, 802.1Qav, 802.1Qat, 1722, 1722.1) published between 2009 and 2011. It defines time synchronization (gPTP), bandwidth reservation, stream transport (AVTP), and device discovery (AVDECC / 1722.1). Problem: the standards left significant implementation detail open to manufacturers. Early AVB products from different manufacturers often failed to interoperate in practice.

Milan is a certified implementation profile created in 2016 by Avnu Alliance members — primarily d&b audiotechnik, L-Acoustics, and Meyer Sound. Milan takes AVB and adds:
• Mandatory interoperability requirements between certified devices
• Defined stream formats and strict clocking behavior
• Application-layer device discovery requirements
• Certification testing (devices must pass conformance tests)

Result: two Milan-certified devices from different manufacturers should connect and work reliably without manual configuration.

Milan vs. Dante comparison:
• Network layer — Dante: Layer 3 (IP/UDP) | Milan: Layer 2 (AVB/TSN)
• Switch requirement — Dante: Managed switch with QoS | Milan: AVB-capable switch
• Clocking — Dante: Software PLL | Milan: Hardware gPTP, deterministic
• Interoperability — Dante: Within Dante ecosystem | Milan: Across any certified Milan device
• Market penetration — Dante: Very high | Milan: Growing; dominated by speaker manufacturers

D&b audiotechnik: "Milan is the only protocol that guarantees the synchronization necessary for line arrays, under all conditions."

In January 2024, d&b and L-Acoustics jointly announced a collaboration to accelerate Milan adoption.

In practice: If you see Milan-labeled devices, verify you have an AVB-capable switch. Milan devices should auto-discover and auto-configure — if not, check switch compatibility first. Do not mix Milan and standard AVB devices without confirming interoperability. Milan and Dante can coexist on separate network segments but require different switch hardware.`
    },
    {
      id: 'ADD-20A',
      source: 'Additions',
      section: '20A',
      title: 'Hybrid Events: In-Room and Remote Audiences Simultaneously',
      tag: 'sound',
      content: `Hybrid events — where some participants are physically present and others attend remotely via video conference — have become a standard corporate AV use case. The two audiences have conflicting needs. Remote attendees need a clean, echo-free audio feed from the room. In-room attendees need to hear remote contributors clearly without that audio causing feedback or echo.

The AEC Problem:
AEC (Acoustic Echo Cancellation) prevents conference systems from creating feedback loops between room speaker output and room microphones. Consumer-grade AEC (Zoom/Teams/WebEx built-in software) fails in professional event environments because:
• It does not know the acoustic relationship between the PA and each microphone
• It cannot track level changes in the room mix
• It often removes wanted signal (audience, music) along with echo

Professional AEC hardware is required: Biamp Tesira, QSC Q-SYS, Shure IntelliMix P300, ClearOne, Extron DMP 128 series. The reference signal — what is being played into the room — must feed the AEC hardware as a discrete input.

Critical rule: Do not use consumer-grade softcodec AEC in a professional room event.

Signal routing for hybrid events:
Remote audio → AEC hardware reference input → Room PA (in-room attendees hear remote speakers)
Room microphones → AEC hardware (processes out room PA signal) → Clean signal → Video codec → Remote attendees

AEC reference and room PA feed must be in precise time alignment — if the room PA feeding the AEC reference is delayed versus the actual acoustic output, AEC convergence will fail.

Common hybrid event failures:
• Remote attendees hear echo of themselves — AEC not configured or reference signal missing
• Remote presenter sounds hollow — consumer AEC removing wanted signal
• Remote audio muted during applause — consumer AEC treating applause as echo
• Feedback when remote audio is raised — AEC not operational
• Two AEC layers fighting — bypass softcodec AEC in conferencing platform settings

What to ask before a hybrid event: Is there a dedicated AEC DSP? What is the reference signal path from PA to AEC? Can the softcodec AEC be bypassed? Who manages the conference platform?`
    },
    {
      id: 'ADD-24A',
      source: 'Additions',
      section: '24A',
      title: 'Loudness Standards for Broadcast and Streaming Feeds',
      tag: 'sound',
      content: `If providing a broadcast or streaming output from a live event, loudness standards apply to that feed. Delivering a non-compliant feed will either be rejected, automatically normalized (compromising dynamics), or sound inconsistent against other content on the platform.

EBU R128 (European Broadcasting Union, Version 5.0, November 2023):
• Integrated loudness target: -23 LUFS (±1 LU tolerance for live programmes, ±0.2 LU for pre-recorded)
• True Peak maximum: -1 dBTP
• Measurement gating: Relative gate at -10 LU below the ungated average
• Uses the ITU-R BS.1770 K-weighted algorithm (same as all LUFS meters)

US Broadcast — ATSC A/85 (CALM Act, 2010):
• Target: -24 LKFS
• True Peak maximum: -2 dBTP

LUFS terminology:
• Integrated LUFS: Whole-programme average — the delivery metric
• Momentary LUFS: 400 ms average — useful for live mix monitoring
• Short-term LUFS: 3-second average — useful for segment-level awareness
• True Peak: Actual peak after D/A reconstruction; may exceed sample peak by 1–3 dB
• LRA (Loudness Range): Statistical spread of loudness across the programme

For the broadcast mix engineer at a live event:
• Use a LUFS meter displaying Integrated, Short-term, and Momentary simultaneously, plus True Peak
• EBU R128 allows ±1 LU tolerance for live programmes (-22 to -24 LUFS is compliant)
• True Peak is a hard limit — use a True Peak limiter on the broadcast output bus (ceiling: -1 dBTP)
• The board mix is NOT a broadcast mix — it may lack ambience, have excess low-end, be dynamically unsuitable
• Broadcast mix should be a separate console output or matrix feed with its own processing chain

Broadcast Loudness Checklist:
☐ LUFS metering on broadcast output bus (Integrated + Short-term + Momentary)
☐ True Peak metering active
☐ True Peak limiter on broadcast bus (ceiling: -1 dBTP)
☐ Target: -23 LUFS integrated (EBU R128) or -24 LKFS (ATSC A/85 for US)
☐ Separate broadcast mix matrix — not a direct tap of FOH mix bus
☐ Ambience mics included in broadcast feed`
    },
    {
      id: 'ADD-26A',
      source: 'Additions',
      section: '26A',
      title: 'The Pin 1 Problem',
      tag: 'sound',
      content: `The Pin 1 Problem is a specific, named equipment design defect described by Neil Muncy in a landmark 1994 AES paper. It is the single most common cause of RF interference and hum injection in professional audio equipment.

What it is: In an XLR connector, Pin 1 carries the cable shield. To function correctly, Pin 1 must connect directly to chassis ground — the physical metal enclosure — before reaching any audio circuitry.

Correct implementation: Pin 1 → chassis ground (direct)
Defective implementation: Pin 1 → circuit board common → chassis (sharing the path with audio)

The defective implementation allows any current flowing on the cable shield — from RF sources, ground potential differences, LED/dimmer lighting — to travel through the audio circuit path to ground, injecting noise directly into the audio signal.

Symptoms of the Pin 1 Problem:
• Buzz that correlates with LED wall content or dimmer position
• Hum that changes when lighting rigs are altered
• RF pickup from nearby transmitters
• Interference that persists even when the shield ground lift is engaged

Distinguishing from ground loops:
• 50/60 Hz hum, changes with which cables are connected → Ground loop (solve with isolation transformer, DI box with ground lift)
• Buzz that changes with dimmer position or LED wall content → Pin 1 Problem in equipment in the signal path
• High-frequency hash, worsens with RF sources nearby → Pin 1 Problem

Standard advice "try a ground lift" does NOT resolve a Pin 1 Problem — lifting the shield removes protection without addressing the equipment defect.

Practical mitigation:
1. Identify the offending equipment: remove devices from the signal path one at a time until noise disappears
2. Insert a quality audio isolation transformer (Jensen, Radial, or equivalent) before the offending equipment's input
3. Note the offending equipment for future reference — replace or avoid in professional applications
4. Do not use "XLR ground lift adapters" as a long-term fix — they leave the shield disconnected

Correct long-term fix: equipment implementing AES48-2005, which mandates Pin 1 connected to chassis ground at entry point.`
    },
    {
      id: 'ADD-35A',
      source: 'Additions',
      section: '35A',
      title: 'Additional Trends: AI, WMAS & the Multi-Skill Engineer',
      tag: 'sound',
      content: `Trend 8: AI-Assisted Audio Tools
AI is in current production environments across multiple points:
• Feedback suppression: AI-based suppressors (recent dbx and BSS products) use neural models to distinguish tonal musical content from feedback buildup, reducing frequency of feedback with less coloration than traditional filter approaches
• Intelligent gain control: Some consoles use ML models to suggest or auto-apply gain staging, reducing setup time
• Noise reduction in broadcast feeds: Real-time AI noise reduction (Waves Clarity Vx, iZotope RX Live) inserted into broadcast/stream sends to clean up room noise, HVAC, background interference
• Automixing: Algorithms becoming more sophisticated handling overlapping speech, emotion transitions, music-speech blends
• AI-assisted PA design: Some manufacturer prediction tools include optimization algorithms suggesting array configuration given a room model and coverage goal

What AI does NOT change: the need for trained human ears and judgment, the physics of acoustic systems, the relational dimensions of live sound work, emergency response and real-time adaptation. Verify AI output. Do not delegate final authority over mix decisions, safety-critical feedback suppression, or RF management to automated systems.

Trend 9: WMAS as the Future of High-Channel-Count RF
Sennheiser Spectera began shipping April 2025. More manufacturers expected to enter the WMAS market by 2026. For engineers working large-channel-count productions — theater, major touring, broadcast sports — WMAS will increasingly be the correct tool, not a curiosity.

Trend 10: The Multi-Skill Engineer
Structural economics of live production are pushing toward engineers who span traditional role boundaries:
• Broadcast literacy (loudness compliance, split design, recording management) is now expected of FOH engineers on events with any streaming component
• RF coordination was once a specialist role; it is now expected competency for monitor engineers on wireless-heavy shows
• Network literacy (Dante, basic switch management, IP addressing) is no longer optional for anyone deploying digital systems
• Systems literacy (measurement, alignment, prediction) is expected of engineers who tour

The breadth does not replace depth. Know one or two areas at expert level. Know the rest well enough to execute and know when you are out of your depth.`
    },
    {
      id: 'ADD-AppA',
      source: 'Additions',
      section: 'App A',
      title: 'Glossary of Key Terms',
      tag: 'sound',
      content: `AEC (Acoustic Echo Cancellation): DSP process that removes the acoustic echo of room speaker output from room microphone signals. Required for hybrid events and video conferencing in rooms with PA systems.

AES48: AES standard specifying correct grounding and EMC practices for audio equipment, including proper Pin 1 connection to chassis ground.

AES67: Interoperability standard for audio-over-IP systems, based on RAVENNA and IEEE 1588 PTP. Allows AoIP systems from different manufacturers to exchange streams.

AES75: AES standard for measuring loudspeaker maximum linear sound levels using M-Noise/Music-Noise signals, providing more realistic specifications than older broadband noise methods.

AVB (Audio Video Bridging): IEEE standards collection (802.1AS, 802.1Qav, 802.1Qat, 1722, 1722.1) for real-time media transport over Ethernet. Requires AVB-capable switches.

Coherence: In dual-channel FFT measurement, a value 0–1 indicating measurement reliability at each frequency. High coherence (approaching 1.0) means the measurement is valid. Do not EQ based on low-coherence data.

Dante: Audinate's proprietary audio-over-IP protocol — dominant networked audio standard in live sound. Operates over Layer 3 (IP/UDP) on standard managed Ethernet switches with QoS configuration.

EBU R128: European Broadcasting Union loudness recommendation specifying -23 LUFS integrated loudness (±1 LU tolerance for live), True Peak maximum of -1 dBTP.

End-fire subwoofer array: Sub deployment using two or more subwoofers spaced longitudinally with time-alignment chosen for constructive summation toward the audience and destructive interference to the rear.

KLANG: Brand name for KLANG:technologies (DiGiCo Group), manufacturer of binaural 3D IEM mixing processors for spatial, immersive personal monitor mixes.

L-ISA: L-Acoustics Immersive Sound Architecture — object-based immersive audio system using a multi-cluster PA and L-ISA Processor for source positioning. Parameters: Pan, Width, Distance, Elevation.

LRA (Loudness Range): EBU Tech 3342 descriptor expressing the statistical spread of loudness in a programme in Loudness Units.

LUFS (Loudness Units Full Scale): Unit of measure for integrated loudness per ITU-R BS.1770 and EBU R128. Numerically equivalent to LKFS. Integrated measurement = whole-programme average for broadcast delivery compliance.

MADI (Multichannel Audio Digital Interface): AES10 standard for serial digital audio carrying up to 64 channels on a single coaxial or fiber connection.

Milan: Certified implementation profile of AVB, developed by Avnu Alliance (d&b, L-Acoustics, Meyer Sound). Adds mandatory interoperability requirements, defined stream formats, certification testing.

Pin 1 Problem: Equipment design defect (Neil Muncy, 1994) where XLR Pin 1 connects to circuit board common ground rather than directly to chassis ground, allowing shield-conducted interference to inject into the audio signal path.

Soundscape: d&b audiotechnik's immersive audio system combining object-based placement (EN-Scene) and room acoustic enhancement (EN-Space) via the DS100 Signal Engine.

Spacemap Go: Meyer Sound's spatial sound mixing tool running on iPad, integrated with GALAXY Network Platform processors.

True Peak: Actual peak amplitude after digital-to-analog reconstruction, accounting for inter-sample peaks. May exceed sample peak by 1–3 dB. EBU R128 ceiling: -1 dBTP.

WMAS (Wireless Multichannel Audio System): FCC-approved (February 2024 USA; ETSI 2021 Europe) regulatory classification for wireless audio devices transmitting multiple audio channels within a single 6–8 MHz broadband RF channel using digital multiplexing. First product: Sennheiser Spectera (shipping April 2025).`
    }
  ]
};

// ─── ACHIEVEMENTS ────────────────────────────────────────────────────────────
const ACHIEVEMENTS = [
  { id: 'ach_first', icon: '🎯', name: 'First Shot', desc: 'Answer your first question', condition: s => s.totalAnswered >= 1 },
  { id: 'ach_streak3', icon: '🔥', name: 'On Fire', desc: '3 correct in a row', condition: s => s.streak >= 3 },
  { id: 'ach_streak5', icon: '⚡', name: 'Shockwave', desc: '5 correct in a row', condition: s => s.streak >= 5 },
  { id: 'ach_streak10', icon: '🌩️', name: 'Thunderclap', desc: '10 correct in a row', condition: s => s.streak >= 10 },
  { id: 'ach_perfect', icon: '💎', name: 'Diamond Mix', desc: 'Perfect score on a full quiz', condition: s => s.perfectQuiz },
  { id: 'ach_rf10', icon: '📡', name: 'RF Wizard', desc: 'Answer 10 RF questions correctly', condition: s => s.rfCorrect >= 10 },
  { id: 'ach_sound10', icon: '🔊', name: 'Ears of Steel', desc: 'Answer 10 sound questions correctly', condition: s => s.soundCorrect >= 10 },
  { id: 'ach_light10', icon: '💡', name: 'Light Chaser', desc: 'Answer 10 lighting questions correctly', condition: s => s.lightCorrect >= 10 },
  { id: 'ach_daily', icon: '🌅', name: 'Daily Devotee', desc: 'Complete a daily challenge', condition: s => s.dailyCompleted >= 1 },
  { id: 'ach_rapid5', icon: '⚡', name: 'Rapid Fire Ace', desc: 'Get 5+ correct in rapid fire', condition: s => s.rfBestScore >= 5 },
  { id: 'ach_advance', icon: '🎓', name: 'Advanced Class', desc: 'Answer 5 advanced questions correctly', condition: s => s.advCorrect >= 5 },
  { id: 'ach_total50', icon: '🏆', name: 'Century Mark', desc: 'Answer 50 questions total', condition: s => s.totalAnswered >= 50 }
];

// ─── HOUR-BASED PALETTES ──────────────────────────────────────────────────────
const HOUR_PALETTES = [
  { hour: 0,  theme: 'night',    name: 'Midnight Rave',    emoji: '🌙' },
  { hour: 1,  theme: 'night',    name: 'Late Night Grind',  emoji: '🌙' },
  { hour: 2,  theme: 'night',    name: 'After Dark',       emoji: '🌙' },
  { hour: 3,  theme: 'night',    name: 'Deep Blue',        emoji: '💙' },
  { hour: 4,  theme: 'night',    name: 'Pre-Dawn',         emoji: '💙' },
  { hour: 5,  theme: 'dawn',     name: 'Dawn Warmup',      emoji: '🌅' },
  { hour: 6,  theme: 'dawn',     name: 'Golden Hour',      emoji: '🌅' },
  { hour: 7,  theme: 'morning',  name: 'Morning Energy',   emoji: '☀️' },
  { hour: 8,  theme: 'morning',  name: 'Fresh Start',      emoji: '☀️' },
  { hour: 9,  theme: 'morning',  name: 'Creative Flow',    emoji: '✨' },
  { hour: 10, theme: 'morning',  name: 'Peak Morning',     emoji: '⚡' },
  { hour: 11, theme: 'morning',  name: 'Pre-Show Prep',    emoji: '🎛️' },
  { hour: 12, theme: 'noon',     name: 'Noon Fire',        emoji: '🔥' },
  { hour: 13, theme: 'noon',     name: 'Post-Lunch Surge', emoji: '🔥' },
  { hour: 14, theme: 'noon',     name: 'Afternoon Power',  emoji: '⚡' },
  { hour: 15, theme: 'afternoon',name: 'Golden Afternoon', emoji: '🌟' },
  { hour: 16, theme: 'afternoon',name: 'Load-In Time',     emoji: '🎪' },
  { hour: 17, theme: 'afternoon',name: 'Soundcheck Hour',  emoji: '🎧' },
  { hour: 18, theme: 'evening',  name: 'Doors Open',       emoji: '🚪' },
  { hour: 19, theme: 'evening',  name: 'Pre-Show',         emoji: '🎭' },
  { hour: 20, theme: 'evening',  name: 'Show Time',        emoji: '🎸' },
  { hour: 21, theme: 'evening',  name: 'On Stage',         emoji: '🎤' },
  { hour: 22, theme: 'night',    name: 'After Party',      emoji: '🎉' },
  { hour: 23, theme: 'night',    name: 'Strike Time',      emoji: '🌙' }
];

// ─── MARQUEE FACTS ────────────────────────────────────────────────────────────
const MARQUEE_FACTS = [
  'DMX512 — DAISY CHAIN ONLY, NO STAR SPLITS',
  'WMAS FCC APPROVED FEBRUARY 2024',
  'BLACKTRAX USES IR BEACONS — NOT GPS',
  'R9 MINIMUM 50+ FOR CAMERA KEY LIGHT',
  'KLANG:KONDUCTOR — 128 INPUTS AT 96kHz',
  'BEAM LIGHTS = PUNCTUATION MARKS, NOT PARAGRAPHS',
  'CLARITY BEFORE LOUDNESS — ALWAYS',
  'THE BEST EQ IS MIC PLACEMENT',
  'A GREAT A2 SAVES THE SHOW QUIETLY',
  'HAZE REVEALS BEAMS — NO HAZE, NO LOOK',
  'DMX TERMINATION = 120Ω — NOT OPTIONAL',
  'SPECTERA IEM LATENCY: DOWN TO 0.7ms',
  'L-ISA: PAN + WIDTH + DISTANCE + ELEVATION',
  'PREDICTION ≠ MEASUREMENT ≠ LISTENING',
  'FOH PAINTS ON THE CANVAS SYSTEMS BUILT',
  'BACKLIGHT = FASTEST WAY TO LOOK PRO',
  'DO NOT START WITH GEAR — START WITH THE SHOW',
  'GRANDMA3 ≠ GRANDMA2 — NOT COMPATIBLE',
  'BUSKING IS STRUCTURED IMPROVISATION',
  'A SHOW AT FULL INTENSITY ALL THE TIME HAS NOWHERE TO GO',
  'EUROVISION 2024: 14 MA3 CONSOLES, 682 UNIVERSES',
  'RTTrP = REAL-TIME TRACKING PROTOCOL',
  'EN-SCENE + EN-SPACE = D&B SOUNDSCAPE',
  'WIRELESS = SPECTRUM MANAGEMENT, NOT CABLE REPLACEMENT',
  'ADELE\'S LAS VEGAS RESIDENCY USED L-ISA',
  'MVR = MY VIRTUAL RIG (OPEN STANDARD)',
  'ATMOS FOR LIVE: OBJECT-BASED MIXING',
  'A BAD GATE IS WORSE THAN BLEED',
  'PLAYBACK FAILURE = FASTEST WAY TO COLLAPSE A SHOW',
  'CHANGE ONE THING AT A TIME — TROUBLESHOOTING RULE #1',
  'PASSIVE DI: HOT SOURCES — ACTIVE DI: LOW-OUTPUT SOURCES',
  'EMERGENCY TRIAGE: PROTECT AUDIENCE FIRST',
  'NO MIX IS WORTH SOMEONE DYING — SAFETY FIRST',
  'BOARD MIX ≠ BROADCAST MIX — EVERY TIME',
  'GOLDEN RULE #1: VERIFY SIGNAL FLOW BEFORE BLAMING GEAR',
  'HAIRLINE MIC OFTEN SOUNDS MORE NATURAL THAN CHEST LAV',
  'CLICK TRACK → MONITORS ONLY, NEVER TO FOH',
  'EQ CANNOT FIX BAD AIMING OR COMB FILTERING',
  '20 GOLDEN RULES — RULE 20: BE THE PERSON PEOPLE TRUST',
  'DO NOT ALIGN ONLY AT FOH AND DECLARE VICTORY',
  'JAZZ: PRESERVE DYNAMICS — AVOID OVER-COMPRESSION',
  'ROCK: VOCAL MUST SURVIVE GUITARS'
];

// Export for use in other modules
if (typeof module !== 'undefined') {
  module.exports = { QUOTES, QUESTIONS, RAPID_FIRE, CONTENT, ACHIEVEMENTS, HOUR_PALETTES, MARQUEE_FACTS };
}
