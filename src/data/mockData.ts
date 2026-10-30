import {
  Course,
  GrammarTopic,
  VocabularyWord,
  SpeakingPrompt,
  DialogueRoleplay,
  IELTSCueCard,
  Testimonial,
  VideoLesson,
  AssessmentQuestion
} from '../types';

export const COURSES: Course[] = [
  {
    id: 'spoken-foundation',
    title: 'Spoken English Foundation (জিরো থেকে ফ্লুয়েন্ট)',
    titleBn: 'স্পোকেন ইংলিশ ফাউন্ডেশন (জিরো থেকে ফ্লুয়েন্ট)',
    tagline: 'Eliminate hesitation, build natural sentence flow, and start speaking English comfortably within 8 weeks.',
    taglineBn: 'মুখের জড়তা দূর করে মাত্র ৮ সপ্তাহে সাবলীলভাবে আত্মবিশ্বাসের সাথে ইংরেজি বলুন।',
    level: 'Beginner to Intermediate',
    duration: '8 Weeks',
    classes: '24 Live Interactive Classes (1.5 hrs each)',
    batchType: '3 Days / Week (Evening: 8:00 PM - 9:30 PM)',
    priceBDT: 3500,
    originalPriceBDT: 5500,
    popular: true,
    features: [
      'Daily 1-on-1 breakout room speaking practice',
      'Overcome Mother Tongue Influence (MTI) & regional accent',
      '1,000+ most common conversational sentence structures',
      'Dedicated WhatsApp speaking club with native feedback',
      'Lifetime recorded video & PDF class notes access',
      'Certificate upon course completion'
    ],
    featuresBn: [
      'প্রতি ক্লাসে ১-অন-১ ব্রেকআউট রুমে সরাসরি স্পিকিং প্র্যাকটিস',
      'আঞ্চলিক টোন দূর করে ন্যাচারাল প্রোনাউনসিয়েশন অর্জন',
      'দৈনন্দিন কথোপকথনের ১০০০+ গুরুত্বপূর্ণ বাক্য কাঠামো',
      '২৪/৭ সক্রিয় হোয়াটসঅ্যাপ স্পিকিং ক্লাব ও ট্রেইনার সাপোর্ট',
      'লাইফটাইম রেকর্ডেড ক্লাস ও লেকচার শিট অ্যাক্সেস',
      'কোর্স শেষে স্পিকক্রাফট অফিশিয়াল সার্টিফিকেট'
    ],
    curriculum: [
      { week: 'Week 1-2', topic: 'Breaking the Silence & Overcoming Fear', topicBn: 'ভয় ও জড়তা দূরীকরণ এবং সেলফ ইন্ট্রোডাকশন', details: 'Pronunciation fundamentals, daily routine dialogues, asking spontaneous questions without translating from Bangla.' },
      { week: 'Week 3-4', topic: 'Conversational Fluency & Small Talk', topicBn: 'দৈনন্দিন লাইফ, শপিং ও রেস্তোরাঁ কনভারসেশন', details: 'Expanding sentences using connectors (although, moreover, honestly), ordering food, navigating travel scenarios.' },
      { week: 'Week 5-6', topic: 'Professional & Social Scenarios', topicBn: 'অফিস ও সামাজিক আড্ডা সিমুলেশন', details: 'Expressing agreements/disagreements politely, storytelling frameworks, phone call and zoom etiquette.' },
      { week: 'Week 7-8', topic: 'Public Speaking & Debate Drills', topicBn: 'পাবলিক স্পিকিং ও লাইভ প্রেজেন্টেশন', details: 'Extempore speaking, 2-minute spontaneous speech, handling counter-questions, final viva assessment.' }
    ]
  },
  {
    id: 'corporate-english',
    title: 'Corporate English & Workplace Communication',
    titleBn: 'কর্পোরেট ইংলিশ ও কর্মক্ষেত্র যোগাযোগ',
    tagline: 'Master executive business communication, email writing, cross-border client handling, and high-impact presentations.',
    taglineBn: 'বহুজাতিক কোম্পানি ও রিমোট জবের জন্য প্রফেশনাল প্রেজেন্টেশন ও ক্লায়েন্ট কমিউনিকেশন আয়ত্ত করুন।',
    level: 'Intermediate to Advanced',
    duration: '6 Weeks',
    classes: '18 Specialized Executive Sessions',
    batchType: 'Weekend Batch (Fri & Sat: 7:30 PM - 9:30 PM)',
    priceBDT: 4500,
    originalPriceBDT: 7000,
    popular: false,
    features: [
      'High-impact corporate presentation mastery',
      'Writing professional emails, memos & meeting minutes',
      'Tech & MNC job interview mock simulations',
      'Negotiation & conflict resolution roleplay',
      'LinkedIn profile English audit & resume polishing'
    ],
    featuresBn: [
      'আত্মবিশ্বাসী বিজনেস প্রেজেন্টেশন ডেলিভারি কৌশল',
      'প্রফেশনাল ইমেইল ড্রাফটিং ও কর্পোরেট ইটিকেট',
      'এমএনসি ও রিমোট সফটওয়্যার জবের মক ইন্টারভিউ',
      'আন্তর্জাতিক ক্লায়েন্ট নেগোসিয়েশন সিমুলেশন',
      'লিঙ্কডইন প্রোফাইল ও রেজুমি ইংলিশ অডিট'
    ],
    curriculum: [
      { week: 'Week 1-2', topic: 'The Executive Presence & Tone', topicBn: 'এক্সিকিউটিভ ব্যক্তিত্ব ও সঠিক প্রফেশনাল টোন', details: 'Diplomatic language, avoiding blunt statements, active listening techniques in virtual meetings.' },
      { week: 'Week 3-4', topic: 'Precision Business Writing', topicBn: 'ইমেইল, স্ল্যাক ও রিপোর্ট রাইটিং ফর্মুলা', details: 'Cold emails, project updates, concise status reporting, avoiding corporate jargon traps.' },
      { week: 'Week 5-6', topic: 'Pitching, Client Demos & Negotiations', topicBn: 'প্রেজেন্টেশন পিচিং ও ক্লায়েন্ট হ্যান্ডলিং', details: 'Data storytelling, handling hostile Q&A, negotiating contracts with foreign stakeholders.' }
    ]
  },
  {
    id: 'ielts-mastery',
    title: 'IELTS Speaking & Writing Mastery (Target 7.5+)',
    titleBn: 'আইইএলটিএস স্পিকিং ও রাইটিং মাস্টারি (টার্গেট ৭.৫+)',
    tagline: 'Engineered for Bangladeshi candidates targeting higher studies in UK, Canada, Australia, and USA.',
    taglineBn: 'বিদেশে উচ্চশিক্ষার জন্য ক্যামব্রিজ সিলেবাস অনুযায়ী ব্যান্ড ৭.৫+ অর্জনের স্পেশাল কোর্স।',
    level: 'Upper Intermediate to Advanced',
    duration: '10 Weeks',
    classes: '30 Comprehensive Sessions + 8 Full Mock Tests',
    batchType: '3 Days / Week (Mon, Wed, Fri: 9:00 PM - 10:30 PM)',
    priceBDT: 5500,
    originalPriceBDT: 8500,
    popular: true,
    features: [
      '8 Full-length IELTS speaking one-on-one mock tests',
      'Task 1 & Task 2 detailed essay evaluation with scoring rubrics',
      'Lexical resource booster: Band 8+ idioms & academic collocations',
      'Real exam strategies from British Council & IDP certified mentors',
      'Free access to SpeakCraft IELTS Resource Bank (500+ solved cue cards)'
    ],
    featuresBn: [
      '৮টি পূর্ণাঙ্গ ওয়ান-অন-ওয়ান স্পিকিং মক টেস্ট ও লাইভ ব্যান্ড স্কোরিং',
      'রাইটিং টাস্ক ১ ও ২ এর লাইন-বাই-লাইন ফিডব্যাক ও কারেকশন',
      'ব্যান্ড ৮+ এর লেক্সিকাল রিসোর্স, ফ্রেজাল ভার্ব ও কলকেশন',
      'ব্রিটিশ কাউন্সিল ও আইডিপি সার্টিফাইড মেন্টরদের স্পেশাল গাইডলাইন',
      'স্পিকক্রাফট আইইএলটিএস রিসোর্স ব্যাংক (৫০০+ সলভড কিউ কার্ড)'
    ],
    curriculum: [
      { week: 'Week 1-3', topic: 'IELTS Speaking Parts 1, 2, 3 Strategy', topicBn: 'স্পিকিং পার্ট ১, ২ ও ৩ এর ফ্লুয়েন্সি টেকনিক', details: 'Formula for Part 1 rapid answers, 1-minute cue card note-taking method, abstract ideas in Part 3.' },
      { week: 'Week 4-6', topic: 'Academic & General Writing Task 1', topicBn: 'রাইটিং টাস্ক ১ গ্রাফ, চার্ট ও লেটার স্ট্রাকচার', details: 'Trend analysis, comparison vocabulary, cohesive devices, achieving coherence & cohesion band 8.' },
      { week: 'Week 7-9', topic: 'Task 2 Essay Architectonics', topicBn: 'টাস্ক ২ অপিনিয়ন, ডিসকাশন ও প্রবলেম-সল্যুশন এসে', details: 'Thesis generation, paragraph expansion, counter-arguments, avoiding mechanical template penalties.' },
      { week: 'Week 10', topic: 'Full Mocks & Personalized Exam Blueprint', topicBn: 'কমপ্লিট মক টেস্ট ও পার্সোনালাইজড ফাইনাল রিভিশন', details: 'Real-time simulated exam conditions, psychological confidence drills, final band prediction.' }
    ]
  },
  {
    id: 'phonetics-accent',
    title: 'Smart Pronunciation & Connected Speech',
    titleBn: 'স্মার্ট প্রোনাউনসিয়েশন ও কানেক্টেড স্পিচ',
    tagline: 'Sound natural, master linking words, contractions, rhythm, and speak like a global communicator.',
    taglineBn: 'ন্যাচারাল ব্রিটিশ ও আমেরিকান এক্সেন্টের উচ্চারণ ও কানেক্টেড স্পিচের সহজ ফর্মুলা।',
    level: 'All Levels',
    duration: '4 Weeks',
    classes: '12 Intensive Audio-Visual Sessions',
    batchType: '2 Days / Week (Saturday & Tuesday: 6:30 PM - 8:00 PM)',
    priceBDT: 2500,
    originalPriceBDT: 4000,
    popular: false,
    features: [
      'Phonetic chart (IPA) breakdown for Bengali speakers',
      'Fixing the common /p/ vs /f/, /v/ vs /b/, /s/ vs /sh/ errors',
      'Mastering elision, assimilation, and connected speech',
      'Sentence stress and intonation patterns for clarity'
    ],
    featuresBn: [
      'বাঙালিদের জন্য আন্তর্জাতিক ফোনেটিক বর্ণমালার (IPA) সহজ ব্যবহার',
      'সবচেয়ে সাধারণ উচ্চারণ ভুল (p/f, v/b, s/sh) সংশোধন',
      'নেটিভ স্পিকারদের মতো কানেক্টেড স্পিচ ও লিংকিং সাউন্ড টেকনিক',
      'সঠিক ইন্টোনেশন ও স্ট্রেস প্যাটার্ন আয়ত্ত করা'
    ],
    curriculum: [
      { week: 'Week 1', topic: 'Vowel & Consonant Sound Clarity', topicBn: 'ভাওয়েল ও কনসোনেন্ট সাউন্ডের সঠিক উচ্চারণ', details: 'Mouth positioning, tongue placement, correcting typical Bengali pronunciation habits.' },
      { week: 'Week 2', topic: 'Word Stress & Syllable Timing', topicBn: 'ওয়ার্ড স্ট্রেস ও সিলেবল টাইমিং', details: 'Primary vs secondary stress, noun-verb stress shift (e.g. RECORD vs reCORD).' },
      { week: 'Week 3', topic: 'Connected Speech Mechanics', topicBn: 'কানেক্টেড স্পিচ ও লিংকিং সাউন্ডস', details: 'Linking R, intrusive W, glottal stops, why "want to" sounds like "wanna".' },
      { week: 'Week 4', topic: 'Intonation & Conversational Rhythm', topicBn: 'ইন্টোনেশন, পিচ ও মিউজিক্যাল রিদম', details: 'Rising vs falling tones, sounding polite vs aggressive, real audio shadowing workouts.' }
    ]
  }
];

export const GRAMMAR_LESSONS: GrammarTopic[] = [
  {
    id: 'tenses-simplified',
    title: 'Tenses Simplified (টেন্সের নির্ভুল কৌশল)',
    titleBn: 'টেন্সের নির্ভুল কৌশল ও স্পোকেনে প্রয়োগ',
    category: 'tenses',
    explanationEn: 'Most Bangladeshi learners struggle with Tenses because traditional schools focus on rigid 12 charts without practical spoken context. Master these 3 active everyday tenses first.',
    explanationBn: 'মুখস্থ বিদ্যা পরিহার করে বাংলায় সহজ উদাহরণের মাধ্যমে দৈনন্দিন কথোপকথনে টেন্স ব্যবহারের সঠিক নিয়ম।',
    formula: 'Subject + Verb (Present / Past / Future auxiliary) + Context',
    keyRule: 'Never translate word-for-word from Bengali. Instead of translating "আমি ভাত খেয়েছি" as past indefinite, use Present Perfect (I have eaten) when the effect is still present.',
    keyRuleBn: 'বাংলা থেকে হুবহু অনুবাদ করবেন না। অতীত কাজের ফল এখনও বর্তমান থাকলে Present Perfect (have/has + V3) ব্যবহার করতে হয়।',
    examples: [
      {
        correct: 'I haven\'t received your email yet.',
        incorrect: 'I didn\'t received your email yet.',
        bengaliMeaning: 'আমি এখনো আপনার ইমেইলটি পাইনি।',
        note: 'Did এর পর সর্বদা মূল Verb এর Base Form বসে।'
      },
      {
        correct: 'I have been living in Dhaka for three years.',
        incorrect: 'I am living in Dhaka since three years.',
        bengaliMeaning: 'আমি তিন বছর ধরে ঢাকায় বসবাস করছি।',
        note: 'সময়কাল (Duration) বোঝাতে "for" এবং নির্দিষ্ট শুরুর সময় বোঝাতে "since" বসে।'
      },
      {
        correct: 'When I reached the station, the train had already left.',
        incorrect: 'When I reached the station, the train already left.',
        bengaliMeaning: 'আমি যখন স্টেশনে পৌঁছালাম, ট্রেনটি ততক্ষণে ছেড়ে গিয়েছিল।',
        note: 'অতীতের দুটি কাজের মধ্যে যেটি আগে ঘটেছিল সেটিতে Past Perfect (had + V3) বসে।'
      }
    ],
    quiz: {
      question: 'Choose the correct sentence for someone who finished lunch 10 minutes ago:',
      questionBn: '১০ মিনিট আগে দুপুরের খাবার শেষ করেছেন, এমন ক্ষেত্রে কোনটি সঠিক?',
      options: [
        'I have just had my lunch.',
        'I had just eaten my lunch yesterday.',
        'I just lunch eaten.',
        'I was just have my lunch.'
      ],
      correctIndex: 0,
      explanation: '"have just had" বা "have just eaten" বর্তমান নিকটবর্তী কাজের জন্য নিখুঁত Present Perfect টেন্স।'
    }
  },
  {
    id: 'prepositions-in-on-at',
    title: 'Mastering Prepositions: In, On, At',
    titleBn: 'ইন, অন ও অ্যাট (In, On, At) এর সঠিক ব্যবহার',
    category: 'prepositions',
    explanationEn: 'In, On, and At follow an inverted triangle rule: General/Big (In), More Specific (On), and Ultra Precise (At).',
    explanationBn: 'জায়গা ও সময়ের ক্ষেত্রে সাধারণ/বৃহৎ হলে "In", তুলনামূলক নির্দিষ্ট হলে "On", এবং সুনির্দিষ্ট বিন্দু বা সময় হলে "At" বসে।',
    formula: 'In (Years/Cities) → On (Days/Streets) → At (Exact Time/Exact Address)',
    keyRule: 'We say "in Dhaka", "on Mirpur Road", and "at 7:30 PM".',
    keyRuleBn: 'বড় শহর বা দেশের আগে In, বার বা রাস্তার নামের আগে On, আর ঘড়ির কাঁটার নির্দিষ্ট সময়ের আগে At বসে।',
    examples: [
      {
        correct: 'The meeting is scheduled at 4:00 PM on Monday.',
        incorrect: 'The meeting is scheduled in 4:00 PM at Monday.',
        bengaliMeaning: 'সোমবার বিকেল ৪টায় মিটিং নির্ধারিত হয়েছে।',
        note: 'সময় = At, দিন = On।'
      },
      {
        correct: 'She lives in Chittagong, on Agrabad Commercial Area.',
        incorrect: 'She lives at Chittagong, in Agrabad Commercial Area.',
        bengaliMeaning: 'তিনি চট্টগ্রামে আগ্রাবাদ বাণিজ্যিক এলাকায় থাকেন।',
        note: 'বড় শহর = in, নির্দিষ্ট এলাকা/সড়ক = on/at।'
      },
      {
        correct: 'I will see you at the weekend (UK) / on the weekend (US).',
        bengaliMeaning: 'সাপ্তাহিক ছুটিতে তোমার সাথে দেখা হবে।',
        note: 'উভয়টিই মানসম্মত, তবে "in the weekend" সম্পূর্ণ ভুল।'
      }
    ],
    quiz: {
      question: 'Complete the sentence: "The concert will begin ___ 8:00 PM ___ Friday night."',
      questionBn: 'বাক্যটি পূর্ণ করুন: "The concert will begin ___ 8:00 PM ___ Friday night."',
      options: [
        'at, on',
        'in, at',
        'on, in',
        'at, in'
      ],
      correctIndex: 0,
      explanation: 'ঘড়ির সময় (8:00 PM) এর আগে "at" এবং বারের নাম (Friday) এর আগে "on" ব্যবহৃত হয়।'
    }
  },
  {
    id: 'common-bangladeshi-errors',
    title: 'Top 10 English Mistakes Made by Bengalis',
    titleBn: 'বাঙালিদের সবচেয়ে কমন ১০টি ইংরেজি ভুল ও সমাধান',
    category: 'common-errors',
    explanationEn: 'Bengali speakers often directly translate idioms and colloquial phrasing into English, leading to awkward or grammatically invalid sentences.',
    explanationBn: 'আমরা প্রায়ই বাংলায় যা ভাবি তা হুবহু শব্দে শব্দে রূপান্তর করার চেষ্টা করি, যা নেটিভদের কাছে ভুল শোনায়।',
    keyRule: 'Avoid literal Bengali-to-English translations like "cousin brother" or "pass out from university".',
    keyRuleBn: '"Cousin brother/sister" এর বদলে শুধু "Cousin", এবং বিশ্ববিদ্যালয় শেষ করতে "graduate" বলুন।',
    examples: [
      {
        correct: 'We need to discuss this proposal.',
        incorrect: 'We need to discuss about this proposal.',
        bengaliMeaning: 'আমাদের এই প্রস্তাবটি নিয়ে আলোচনা করা দরকার।',
        note: '"Discuss" একটি ট্রানজিটিভ ভার্ব, এর পর "about" বসে না।'
      },
      {
        correct: 'He is my cousin.',
        incorrect: 'He is my cousin brother.',
        bengaliMeaning: 'সে আমার খালাতো/মামাতো ভাই।',
        note: 'ইংরেজিতে cousin শব্দেই ভাই বা বোন বোঝায়, brother/sister যুক্ত করা ভুল।'
      },
      {
        correct: 'I graduated from Dhaka University in 2023.',
        incorrect: 'I passed out from Dhaka University in 2023.',
        bengaliMeaning: 'আমি ২০২৩ সালে ঢাকা বিশ্ববিদ্যালয় থেকে স্নাতক শেষ করেছি।',
        note: '"Pass out" মানে অজ্ঞান হয়ে যাওয়া (faint); বিশ্ববিদ্যালয় সমাপ্তিতে "graduate" বলুন।'
      },
      {
        correct: 'Could you please repeat that?',
        incorrect: 'Could you please repeat that again?',
        bengaliMeaning: 'আপনি কি অনুগ্রহ করে কথাটা আবার বলবেন?',
        note: '"Repeat" শব্দের মধ্যেই "again" নিহিত রয়েছে, তাই "repeat again" অপ্রয়োজনীয় দ্বৈত প্রয়োগ।'
      }
    ],
    quiz: {
      question: 'Which of the following is natural and grammatically correct?',
      questionBn: 'কোন বাক্যটি ব্যাকরণগতভাবে সম্পূর্ণ নির্ভুল?',
      options: [
        'Let us discuss about the budget tomorrow.',
        'Let us discuss the budget tomorrow.',
        'Let us discuss on the budget tomorrow.',
        'Let us discuss regarding the budget tomorrow.'
      ],
      correctIndex: 1,
      explanation: 'Discuss এর পরে কোনো Preposition বসে না; সরাসরি Object বসে (discuss the budget)।'
    }
  },
  {
    id: 'conditionals-mastery',
    title: 'Conditionals (যদি-তাহলে শর্তমূলক বাক্য)',
    titleBn: 'কন্ডিশনালস: বাস্তব ও অবাস্তব শর্তের বাক্য গঠন',
    category: 'conditionals',
    explanationEn: 'Conditionals express scenarios, hypotheses, and regrets. Knowing when to use "would", "would have", and simple present is vital for fluent communication and IELTS Band 7+.',
    explanationBn: 'আইইএলটিএস এবং কর্পোরেট প্রেজেন্টেশনে হাইপোথিটিকাল কথা বলতে কন্ডিশনাল সেন্টেন্স অপরিহার্য।',
    formula: 'If + Simple Past → would + base verb (2nd Conditional for imaginary situations)',
    keyRule: 'Use 2nd Conditional for dreams and hypothetical scenarios: "If I had more time, I would learn German."',
    keyRuleBn: 'কাল্পনিক বা বর্তমানে অবাস্তব সম্ভাবনার ক্ষেত্রে If + Past Indefinite, অপর অংশে would + V1 বসে।',
    examples: [
      {
        correct: 'If it rains tomorrow, we will reschedule the meeting.',
        incorrect: 'If it will rain tomorrow, we will reschedule.',
        bengaliMeaning: 'আগামীকাল যদি বৃষ্টি হয়, তবে আমরা মিটিং পিছিয়ে দেব।',
        note: 'If ক্লজে কখনো "will" বসে না; First conditional এ Present Tense হয়।'
      },
      {
        correct: 'If I were you, I would accept the job offer.',
        incorrect: 'If I was you, I would accept the job offer.',
        bengaliMeaning: 'আমি যদি তোমার জায়গায় হতাম, তবে চাকরির অফারটি গ্রহণ করতাম।',
        note: 'অবাস্তব বা কাল্পনিক শর্তে singular subject হলেও "were" ব্যবহার করা হয়।'
      },
      {
        correct: 'If I had studied harder, I would have achieved Band 8.',
        bengaliMeaning: 'আমি যদি আরো মনোযোগ দিয়ে পড়তাম, তবে ব্যান্ড ৮ পেতাম।',
        note: 'অতীতের অনুশোচনার ক্ষেত্রে 3rd conditional (had + V3 ... would have + V3)।'
      }
    ],
    quiz: {
      question: 'Fill in the blank: "If she ___ the flight, she will arrive by evening."',
      questionBn: 'শূন্যস্থান পূরণ করুন: "If she ___ the flight, she will arrive by evening."',
      options: [
        'catches',
        'will catch',
        'caught',
        'had caught'
      ],
      correctIndex: 0,
      explanation: 'First Conditional এ If-ক্লজে Present Simple (catches) বসে।'
    }
  }
];

export const VOCABULARY_LIST: VocabularyWord[] = [
  {
    id: 'v1',
    word: 'Articulate',
    phonetic: '/ɑːrˈtɪk.jə.lət/',
    partOfSpeech: 'adjective / verb',
    meaningBn: 'স্পষ্টভাষী, মনের ভাব সুন্দরভাবে প্রকাশ করতে সক্ষম',
    definitionEn: 'Able to express thoughts and ideas clearly and effectively in speech or writing.',
    exampleSentence: 'She gave an articulate presentation during the annual company summit.',
    exampleSentenceBn: 'তিনি কোম্পানির বার্ষিক সম্মেলনে চমৎকার ও সাবলীল একটি প্রেজেন্টেশন দিয়েছিলেন।',
    category: 'corporate',
    synonyms: ['eloquent', 'fluent', 'persuasive', 'coherent']
  },
  {
    id: 'v2',
    word: 'Hesitation',
    phonetic: '/ˌhez.əˈteɪ.ʃən/',
    partOfSpeech: 'noun',
    meaningBn: 'দ্বিধাদ্বন্দ্ব, দ্বিধা বা সংকোচবোধ',
    definitionEn: 'The act of pausing before doing something, often due to doubt or fear.',
    exampleSentence: 'With consistent speaking drills, you can overcome your hesitation entirely.',
    exampleSentenceBn: 'নিয়মিত কথা বলার অনুশীলনের মাধ্যমে আপনি আপনার মুখের দ্বিধাবোধ পুরোপুরি কাটিয়ে উঠতে পারেন।',
    category: 'daily',
    synonyms: ['reluctance', 'uncertainty', 'inhibition', 'pause']
  },
  {
    id: 'v3',
    word: 'Substantial',
    phonetic: '/səbˈstæn.ʃəl/',
    partOfSpeech: 'adjective',
    meaningBn: 'উল্লেখযোগ্য, প্রচুর বা টেকসই',
    definitionEn: 'Of considerable importance, size, or worth.',
    exampleSentence: 'The candidate demonstrated a substantial improvement in IELTS Writing Task 2.',
    exampleSentenceBn: 'পরীক্ষার্থী আইইএলটিএস রাইটিং টাস্ক ২-এ একটি উল্লেখযোগ্য অগ্রগতি প্রদর্শন করেছেন।',
    category: 'ielts',
    synonyms: ['significant', 'considerable', 'noteworthy', 'massive']
  },
  {
    id: 'v4',
    word: 'Touch base',
    phonetic: '/tʌtʃ beɪs/',
    partOfSpeech: 'idiom / phrase',
    meaningBn: 'কারো সাথে যোগাযোগ করা বা পরিস্থিতি জেনে নেওয়া',
    definitionEn: 'To make brief contact with someone to check their progress or update them.',
    exampleSentence: 'Let us touch base next Monday to review the client feedback.',
    exampleSentenceBn: 'ক্লায়েন্টের ফিডব্যাক পর্যালোচনার জন্য আসুন আগামী সোমবার সংক্ষেপে আলোচনায় বসি।',
    category: 'idioms',
    synonyms: ['check in', 'follow up', 'reach out', 'reconnect']
  },
  {
    id: 'v5',
    word: 'Collaborate',
    phonetic: '/kəˈlæb.ə.reɪt/',
    partOfSpeech: 'verb',
    meaningBn: 'একসাথে মিলেমিশে কাজ করা, সহযোগিতা করা',
    definitionEn: 'To work jointly with others on an activity or project to produce something.',
    exampleSentence: 'Our Dhaka tech team collaborates daily with international engineering teams.',
    exampleSentenceBn: 'আমাদের ঢাকার টেক টিম প্রতিদিন আন্তর্জাতিক ইঞ্জিনিয়ারিং টিমগুলোর সাথে যৌথভাবে কাজ করে।',
    category: 'corporate',
    synonyms: ['cooperate', 'partner', 'team up', 'coordinate']
  },
  {
    id: 'v6',
    word: 'Spontaneous',
    phonetic: '/spɒnˈteɪ.ni.əs/',
    partOfSpeech: 'adjective',
    meaningBn: 'স্বতঃস্ফূর্ত, তাৎক্ষণিক ও আন্তরিক',
    definitionEn: 'Performed or occurring as a result of a sudden impulse without premeditation.',
    exampleSentence: 'Spoken English sounds natural when your responses are spontaneous.',
    exampleSentenceBn: 'ইংরেজি কথা বলা তখনই স্বাভাবিক শোনায় যখন আপনার উত্তরগুলো স্বতঃস্ফূর্ত হয়।',
    category: 'daily',
    synonyms: ['unrehearsed', 'instinctive', 'impromptu', 'natural']
  },
  {
    id: 'v7',
    word: 'Comprehensive',
    phonetic: '/ˌkɑːm.prɪˈhen.sɪv/',
    partOfSpeech: 'adjective',
    meaningBn: 'ব্যাপক, সর্বাঙ্গীন বা সামগ্রিক',
    definitionEn: 'Including or dealing with all or nearly all elements or aspects of something.',
    exampleSentence: 'SpeakCraft provides a comprehensive syllabus covering grammar, listening, and accent.',
    exampleSentenceBn: 'স্পিকক্রাফট ব্যাকরণ, লিসেনিং ও এক্সেন্ট অন্তর্ভুক্ত করে একটি পূর্ণাঙ্গ সিলেবাস প্রদান করে।',
    category: 'ielts',
    synonyms: ['exhaustive', 'thorough', 'all-inclusive', 'detailed']
  },
  {
    id: 'v8',
    word: 'Ball is in your court',
    phonetic: '/bɔːl ɪz ɪn jʊər kɔːrt/',
    partOfSpeech: 'idiom',
    meaningBn: 'পরবর্তী সিদ্ধান্ত বা পদক্ষেপ নেওয়ার দায়িত্ব এখন আপনার',
    definitionEn: 'It is up to you to take the next decision or step.',
    exampleSentence: 'I have submitted the proposal; now the ball is in the client\'s court.',
    exampleSentenceBn: 'আমি প্রস্তাবটি জমা দিয়েছি; এখন সিদ্ধান্ত নেওয়ার দায়িত্ব সম্পূর্ণ ক্লায়েন্টের।',
    category: 'idioms',
    synonyms: ['it is your turn', 'up to you', 'your move']
  },
  {
    id: 'v9',
    word: 'Pivotal',
    phonetic: '/ˈpɪv.ə.t̬əl/',
    partOfSpeech: 'adjective',
    meaningBn: 'অত্যন্ত গুরুত্বপূর্ণ বা সন্ধিক্ষণীয়',
    definitionEn: 'Of crucial importance in relation to the development or success of something else.',
    exampleSentence: 'Securing an IELTS Band 7.5 was pivotal for his Canadian scholarship.',
    exampleSentenceBn: 'আইইএলটিএস ব্যান্ড ৭.৫ অর্জন তার কানাডিয়ান স্কলারশিপের জন্য একটি যুগান্তকারী বিষয় ছিল।',
    category: 'ielts',
    synonyms: ['crucial', 'vital', 'critical', 'decisive']
  },
  {
    id: 'v10',
    word: 'Perseverance',
    phonetic: '/ˌpɜː.səˈvɪə.rəns/',
    partOfSpeech: 'noun',
    meaningBn: 'অধ্যবসায়, নিরবচ্ছিন্ন প্রচেষ্টা',
    definitionEn: 'Persistence in doing something despite difficulty or delay in achieving success.',
    exampleSentence: 'Language acquisition requires perseverance rather than overnight miracles.',
    exampleSentenceBn: 'ভাষা শিক্ষায় রাতারাতি অলৌকিক কিছু ঘটার চেয়ে নিরবচ্ছিন্ন অধ্যবসায় সবচেয়ে বেশি প্রয়োজন।',
    category: 'daily',
    synonyms: ['persistence', 'tenacity', 'dedication', 'endurance']
  }
];

export const SPEAKING_PROMPTS: SpeakingPrompt[] = [
  {
    id: 'sp1',
    topic: 'Overcoming Career Challenges in Bangladesh',
    topicBn: 'ক্যারিয়ারের চ্যালেঞ্জ ও প্রস্তুতি',
    prompt: 'Describe a significant challenge you faced in your academic or professional life and how you handled it.',
    promptBn: 'আপনার লেখাপড়া বা কর্মজীবনে আপনি যে বড় চ্যালেঞ্জের মুখে পড়েছিলেন এবং কীভাবে তা সমাধান করেছিলেন তা বর্ণনা করুন।',
    durationSeconds: 60,
    guidingQuestions: [
      'What was the specific situation or roadblock?',
      'What action did you take to tackle the problem?',
      'Who supported you along the way?',
      'What key lesson did you learn from this experience?'
    ],
    samplePoints: [
      'Faced immense difficulty during initial client meetings in English',
      'Started practicing shadowing technique 20 minutes every evening',
      'Joined an English speaking club and recorded self-speeches',
      'Eventually delivered a successful proposal to a foreign client'
    ],
    recommendedVocabulary: ['perseverance', 'resilience', 'milestone', 'breakthrough', 'gradual']
  },
  {
    id: 'sp2',
    topic: 'Your Favorite Place in Bangladesh',
    topicBn: 'বাংলাদেশের প্রিয় দর্শনীয় স্থান',
    prompt: 'Talk about a memorable town, district, or natural attraction in Bangladesh that you would recommend to an international visitor.',
    promptBn: 'বাংলাদেশের এমন একটি স্থান সম্পর্কে কথা বলুন যা আপনি কোনো বিদেশি পর্যটককে দেখার পরামর্শ দেবেন।',
    durationSeconds: 90,
    guidingQuestions: [
      'Where is this place located and how can one travel there?',
      'What makes its landscape, food, or heritage unique?',
      'What season is best to explore it?',
      'Why is it personally special to you?'
    ],
    samplePoints: [
      'Sreemangal - the tea capital of Bangladesh',
      'Lush green rolling hills, seven-layer tea, and Lawachara rainforest',
      'Tranquil atmosphere away from Dhaka busy traffic',
      'Rich biodiversity and welcoming hospitality of the local people'
    ],
    recommendedVocabulary: ['breathtaking', 'hospitality', 'picturesque', 'unwind', 'serene']
  },
  {
    id: 'sp3',
    topic: 'The Impact of AI & Technology on Bangladeshi Youth',
    topicBn: 'বাংলাদেশের তরুণদের ওপর প্রযুক্তির প্রভাব',
    prompt: 'How is modern digital technology transforming education, freelancing, and career opportunities for young people in Bangladesh?',
    promptBn: 'ডিজিটাল প্রযুক্তি কীভাবে বাংলাদেশের তরুণ প্রজন্মের শিক্ষা, ফ্রিল্যান্সিং ও কর্মসংস্থানে পরিবর্তন আনছে?',
    durationSeconds: 90,
    guidingQuestions: [
      'What technological changes have you observed in the past 3 years?',
      'How are remote work and freelance platforms helping graduates?',
      'What are some potential downsides (e.g. screen addiction)?',
      'How can learners utilize AI responsibly to learn English?'
    ],
    samplePoints: [
      'Rise of digital payment systems like bKash and high-speed internet',
      'Thousands of young graduates earning foreign remittances from home',
      'Access to global educational resources on YouTube and e-learning platforms',
      'Need to focus on soft skills, spoken English, and critical thinking'
    ],
    recommendedVocabulary: ['transformation', 'empowerment', 'digital divide', 'remittance', 'remote workflow']
  }
];

export const DIALOGUE_ROLEPLAYS: DialogueRoleplay[] = [
  {
    id: 'job-interview',
    scenario: 'Software / Corporate Job Interview at a Top Firm in Dhaka',
    scenarioBn: 'ঢাকার বহুজাতিক প্রতিষ্ঠানে চাকরির ইন্টারভিউ সিমুলেশন',
    roleA: 'Interviewer (HR Manager)',
    roleB: 'Candidate (Applicant)',
    lines: [
      {
        speaker: 'Interviewer',
        text: 'Good morning, Tanvir. Welcome to our office. Could you please start by giving us a brief overview of your professional background?',
        textBn: 'শুভ সকাল তানভীর। আমাদের অফিসে স্বাগতম। অনুগ্রহ করে আপনার পেশাগত অভিজ্ঞতার একটি সংক্ষিপ্ত পরিচয় দিয়ে শুরু করবেন কি?'
      },
      {
        speaker: 'Candidate',
        text: 'Thank you for this opportunity, Ma\'am. Over the past three years, I have worked as a frontend engineer, spearheading user-facing features and collaborating across cross-functional teams.',
        textBn: 'সুযোগটির জন্য ধন্যবাদ ম্যাডাম। বিগত তিন বছর ধরে আমি ফ্রন্টএন্ড ইঞ্জিনিয়ার হিসেবে বিভিন্ন ফিচার তৈরি ও ক্রস-ফাংশনাল টিমের সাথে যৌথভাবে কাজ করেছি।'
      },
      {
        speaker: 'Interviewer',
        text: 'Impressive. Could you describe a situation where you had a disagreement with a team member and how you resolved it?',
        textBn: 'চমৎকার। এমন কোনো পরিস্থিতির কথা বলতে পারেন যেখানে কোনো সহকর্মীর সাথে আপনার মতদ্বৈততা তৈরি হয়েছিল এবং কীভাবে তা সমাধান করেছিলেন?'
      },
      {
        speaker: 'Candidate',
        text: 'Certainly. During our last project milestone, my teammate and I had contrasting opinions on the architecture. Instead of arguing, I proposed building a quick proof of concept for both approaches, which allowed us to make a data-driven decision objectively.',
        textBn: 'অবশ্যই। আমাদের শেষ প্রজেক্টে আর্কিটেকচার নিয়ে সহকর্মীর সাথে আমার ভিন্নমত তৈরি হয়। তর্কে না জড়িয়ে আমি দুটি পদ্ধতিরই দ্রুত প্রুফ অব কনসেপ্ট তৈরি করার প্রস্তাব দিই, যা আমাদের তথ্যের ভিত্তিতে সঠিক সিদ্ধান্ত নিতে সাহায্য করেছিল।'
      }
    ]
  },
  {
    id: 'client-call',
    scenario: 'International Client Update Call on Zoom',
    scenarioBn: 'আন্তর্জাতিক বিদেশি ক্লায়েন্টের সাথে জুম মিটিং আপডেট',
    roleA: 'Client (USA)',
    roleB: 'Team Lead (Bangladesh)',
    lines: [
      {
        speaker: 'Client',
        text: 'Hi Rahim, thanks for hopping on. Where are we currently standing with the Phase 2 product release?',
        textBn: 'হাই রহিম, মিটিংয়ে যোগ দেওয়ার জন্য ধন্যবাদ। ফেজ ২ প্রোডাক্ট রিলিজের বর্তমান অগ্রগতি কেমন?'
      },
      {
        speaker: 'Team Lead',
        text: 'Good evening Mark! Glad to connect. I am pleased to share that we have completed 90% of the core modules. Our QA team is currently running the final regression tests.',
        textBn: 'শুভ সন্ধ্যা মার্ক! সংযুক্ত হতে পেরে ভালো লাগছে। আনন্দের সাথে জানাচ্ছি আমরা মূল মডিউলের ৯০% সম্পন্ন করেছি। আমাদের কিউএ টিম এখন শেষ রিগ্রেশন টেস্ট চালাচ্ছে।'
      },
      {
        speaker: 'Client',
        text: 'That sounds on track. Do you foresee any bottlenecks before Friday\'s deployment?',
        textBn: 'শুনে ভালো লাগছে। শুক্রবারের ডিপ্লয়মেন্টের আগে কোনো সম্ভাব্য বাধার আশঙ্কা দেখছেন কি?'
      },
      {
        speaker: 'Team Lead',
        text: 'None at all. We have built an extra buffer day to handle unexpected edge cases, so we are confident about delivering right on schedule.',
        textBn: 'একদমই না। কোনো অপ্রত্যাশিত জটিলতা সামলাতে আমরা একটি অতিরিক্ত দিন বাফার হিসেবে রেখেছি, তাই নির্দিষ্ট সময়ে ডেলিভারির ব্যাপারে আমরা শতভাগ আত্মবিশ্বাসী।'
      }
    ]
  }
];

export const IELTS_CUE_CARDS: IELTSCueCard[] = [
  {
    id: 'cue-1',
    title: 'Describe a person who has greatly inspired you',
    topic: 'People & Mentorship (IELTS Part 2)',
    bulletPoints: [
      'Who this person is and how you know them',
      'What qualities make them admirable or distinct',
      'What specific achievement or action inspired you',
      'And explain why they continue to exert a strong influence on your life'
    ],
    bulletPointsBn: [
      'এই ব্যক্তি কে এবং আপনি তাকে কীভাবে চেনেন',
      'কোন গুণাবলী তাকে বিশেষ বা প্রশংসনীয় করে তুলেছে',
      'তার কোন নির্দিষ্ট সাফল্য বা কাজ আপনাকে অনুপ্রাণিত করেছে',
      'এবং ব্যাখ্যা করুন কেন তিনি আজও আপনার জীবনে গভীর প্রভাব ফেলে চলেছেন'
    ],
    modelAnswer: 'I would like to speak about my maternal uncle, Dr. Shamsul Haque, who has been an unwavering role model throughout my developmental years. He hails from a remote village in Sylhet and, despite severe financial constraints, managed to secure a prestigious scholarship to study civil engineering abroad. What strikes me most about him is his remarkable humility paired with relentless determination. Instead of settling permanently in North America, he returned to Bangladesh to build sustainable low-cost flood shelters in coastal zones. Whenever I encounter a formidable hurdle in my own career, his ethos reminds me that perseverance and purpose invariably triumph over immediate convenience.',
    modelAnswerBn: 'আমি আমার মামা ড. শামসুল হক সম্পর্কে বলতে চাই, যিনি আমার শৈশব থেকেই এক অনুপ্রেরণার বাতিঘর। সিলেটের এক প্রত্যন্ত গ্রাম থেকে শত আর্থিক অনটনের মধ্যেও তিনি বিদেশে সিভিল ইঞ্জিনিয়ারিং পড়ার স্কলারশিপ লাভ করেন। তার চরম বিনয় ও অদম্য ইচ্ছাশক্তি আমাকে সবচেয়ে বেশি টানে। বিদেশে স্থায়ী না হয়ে তিনি বাংলাদেশে ফিরে উপকূলীয় চরে বন্যা সহনশীল আশ্রয়কেন্দ্র নির্মাণে আত্মনিয়োগ করেন। আমার ক্যারিয়ারে যখনই কোনো কঠিন সংকট আসে, তার এই আত্মত্যাগ আমাকে মনে করিয়ে দেয় যে সততা ও অধ্যবসায় সবসময় জয়ী হয়।',
    bandVocabulary: [
      { word: 'Unwavering role model', meaningBn: 'অবিচল বা অটল আদর্শ ব্যক্তিত্ব' },
      { word: 'Financial constraints', meaningBn: 'আর্থিক সীমাবদ্ধতা বা টানাটানি' },
      { word: 'Formidable hurdle', meaningBn: 'কঠিন বা দুর্ভেদ্য বাধা' },
      { word: 'Perseverance and purpose', meaningBn: 'অধ্যবসায় ও মহৎ উদ্দেশ্য' }
    ]
  },
  {
    id: 'cue-2',
    title: 'Describe an environmental problem in your city or country',
    topic: 'Environment & Society (IELTS Part 2)',
    bulletPoints: [
      'What the problem is and how severe it is',
      'What are the primary causes contributing to it',
      'What steps the government or citizens are undertaking',
      'And suggest effective long-term solutions to mitigate it'
    ],
    bulletPointsBn: [
      'সমস্যাটি কী এবং এটি কতটা গুরুতর',
      'এর পেছনে মূল কারণগুলো কী কী',
      'সরকার বা সাধারণ নাগরিকেরা কী কী পদক্ষেপ নিচ্ছে',
      'এবং এটি প্রশমিত করার জন্য দীর্ঘমেয়াদী কার্যকর সমাধান প্রস্তাব করুন'
    ],
    modelAnswer: 'Living in Dhaka, one cannot overlook the pressing issue of severe air pollution, particularly during the dry winter months. The city frequently registers alarmingly high Air Quality Index scores, driven predominantly by unregulated brick kilns operating on the outskirts, rampant construction dust, and dense vehicular emissions. This takes an exorbitant toll on public health, aggravating respiratory ailments among children and senior citizens. While municipal authorities have introduced mechanical road sweepers and periodic bans on outdated vehicles, I believe the quintessential solution lies in enforcing green brick manufacturing and dramatically expanding our rapid electric transit network.',
    modelAnswerBn: 'ঢাকায় বসবাসকারী হিসেবে শুষ্ক শীতের মাসগুলোতে বায়ুদূষণের ভয়াবহ চিত্র উপেক্ষা করা অসম্ভব। শহরের চারপাশে অনিয়ন্ত্রিত ইটভাটা, অপরিকল্পিত নির্মাণকাজের ধূলিকণা এবং ফিটনেসবিহীন যানবাহনের কালো ধোঁয়ায় বায়ুর মান সূচক মারাত্মক ঝুঁকিপূর্ণ পর্যায়ে পৌঁছে। এটি শিশু ও বয়স্কদের শ্বাসকষ্ট সহ জনস্বাস্থ্যে ভয়াবহ প্রভাব ফেলে। সড়ক পরিষ্কার ও পুরাতন গাড়ি নিষিদ্ধ করার মতো উদ্যোগ নেওয়া হলেও দীর্ঘমেয়াদে টেকসই সমাধান হলো পরিবেশবান্ধব গ্রিন ব্রিক ও বৈদ্যুতিক গণপরিবহন ব্যবস্থার ব্যাপক সম্প্রসারণ।',
    bandVocabulary: [
      { word: 'Pressing issue', meaningBn: 'অতীব জরুরি বা জ্বলন্ত সমস্যা' },
      { word: 'Rampant emissions', meaningBn: 'লাগামহীন নিঃসরণ' },
      { word: 'Exorbitant toll', meaningBn: 'অত্যধিক ক্ষতি বা চড়া মূল্য' },
      { word: 'Quintessential solution', meaningBn: 'সর্বোত্তম বা মোক্ষম সমাধান' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sadia Rahman',
    role: 'Software Quality Engineer at bKash Ltd.',
    roleBn: 'সফটওয়্যার কোয়ালিটি ইঞ্জিনিয়ার, বিকাশ লিমিটেড',
    location: 'Dhaka, Bangladesh',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    beforeState: 'Could read and write English, but froze completely during client standups and English team meetings.',
    beforeStateBn: 'ইংরেজি পড়তে ও লিখতে পারতাম, কিন্তু ক্লায়েন্ট ও টিম মিটিংয়ে কথা বলতে গেলে নার্ভাস হয়ে যেতাম।',
    result: 'Now leads weekly cross-functional client syncs fluently without any script or fear.',
    resultBn: 'এখন কোনো স্ক্রিপ্ট ছাড়াই আত্মবিশ্বাসের সাথে আন্তর্জাতিক ক্লায়েন্ট মিটিং পরিচালনা করছি।',
    quote: 'SpeakCraft breakout rooms changed my life. Within 6 weeks, speaking English felt as natural as speaking Bengali. The trainers are patient, constructive, and truly understand the pain points of Bangladeshi professionals.',
    quoteBn: 'স্পিকক্রাফটের ব্রেকআউট রুম সেশন আমার ক্যারিয়ার বদলে দিয়েছে। ৬ সপ্তাহের মধ্যে ইংরেজি বলা আমার কাছে বাংলার মতোই স্বাভাবিক হয়ে ওঠে। ট্রেইনাররা অত্যন্ত আন্তরিক ও দক্ষ।',
    rating: 5
  },
  {
    id: 't2',
    name: 'Farhan Hossain',
    role: 'MSc Candidate, University of Manchester (UK)',
    roleBn: 'এমএসসি শিক্ষার্থী, ইউনিভার্সিটি অব ম্যানচেস্টার',
    location: 'Sylhet / Manchester',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    beforeState: 'Scored Band 6.0 in IELTS speaking previously due to hesitation and lack of topic expansion.',
    beforeStateBn: 'টপিক সম্প্রসারণ করতে না পারায় আগের পরীক্ষায় স্পিকিংয়ে মাত্র ব্যান্ড ৬.০ পেয়েছিলাম।',
    result: 'Achieved IELTS Overall Band 8.0 (Speaking 8.5) and won Commonwealth Shared Scholarship.',
    resultBn: 'আইইএলটিএস-এ ওভারঅল ব্যান্ড ৮.০ (স্পিকিং ৮.৫) অর্জন করে ইউকে স্কলারশিপ নিশ্চিত করেছি।',
    quote: 'The 1-minute cue card brainstorming framework taught by Tanvir Sir is pure gold. In the exam, I felt like I was casually conversing with a friend rather than taking a high-stakes test.',
    quoteBn: 'তানভীর স্যারের ১ মিনিটের কিউ কার্ড প্ল্যানিং মেথড ছিল অসাধারণ। পরীক্ষার হলে ভয় না পেয়ে খুব স্বাভাবিকভাবে কথা বলতে পেরেছি।',
    rating: 5,
    ieltsScore: 'Band 8.0 (Speaking 8.5)'
  },
  {
    id: 't3',
    name: 'Nusrat Jahan',
    role: 'Talent Acquisition Executive, BAT Bangladesh',
    roleBn: 'ট্যালেন্ট অ্যাকুইজিশন এক্সিকিউটিভ, বিএটি বাংলাদেশ',
    location: 'Chittagong, Bangladesh',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    beforeState: 'Struggled with Chittagong regional accent and hesitant business presentation style.',
    beforeStateBn: 'আঞ্চলিক টোনের কারণে প্রেজেন্টেশনে সংকোচবোধ করতাম।',
    result: 'Mastered connected speech and promoted to lead regional talent interviews in English.',
    resultBn: 'কানেক্টেড স্পিচ আয়ত্ত করে এখন আন্তর্জাতিক প্যানেলে ইন্টারভিউয়ার হিসেবে দায়িত্ব পালন করছি।',
    quote: 'The accent and corporate communication module is second to none in Bangladesh. Clear phonetics, actionable feedback on every assignment, and zero judgment.',
    quoteBn: 'কর্পোরেট কমিউনিকেশন ও এক্সেন্ট মডিউলটি বাংলাদেশে নিঃসন্দেহে সেরা। ট্রেইনারদের প্রতিটি ফিডব্যাক ছিল অত্যন্ত কার্যকরী।',
    rating: 5
  }
];

export const YOUTUBE_LESSONS: VideoLesson[] = [
  {
    id: 'yt-1',
    title: '5 Common English Mistakes Every Bangladeshi Makes (বাংলায় ব্যাখ্যা)',
    titleBn: 'বাঙালিদের ৫টি অতি পরিচিত ইংরেজি ভুল ও সঠিক ফর্মুলা',
    duration: '14:20 min',
    category: 'mistakes',
    youtubeId: 'dQw4w9WgXcQ', // Clean placeholder embed
    summaryEn: 'Understand why translating idioms from Bengali creates errors, and how to fix "discuss about", "give exam", and "cousin sister".',
    summaryBn: 'বাংলা থেকে সরাসরি অনুবাদ পরিহার করে কীভাবে ন্যাচারাল ইংরেজি বাক্য গঠন করবেন তার বিস্তারিত ক্লাস।',
    keyTakeaways: [
      'Take an exam (পরীক্ষা দেওয়া) vs Give an exam (পরীক্ষা নেওয়া)',
      'Discuss something (No "about" needed)',
      'Graduated from university (NOT "passed out")',
      'Tell me vs Say to me'
    ]
  },
  {
    id: 'yt-2',
    title: 'How to Speak English Fluently Without Hesitation in 30 Days',
    titleBn: '৩০ দিনে মুখের জড়তা কাটিয়ে ফ্লুয়েন্ট হওয়ার পরীক্ষিত টেকনিক',
    duration: '18:45 min',
    category: 'spoken',
    youtubeId: '3JZ_D3ELwOQ',
    summaryEn: 'The 3-step Daily Shadowing Drill used by polyglots to stop internal translation and achieve natural speech cadence.',
    summaryBn: 'মাথায় বাংলা অনুবাদ না করে সরাসরি ইংরেজিতে চিন্তা করার ৩টি বিশেষ শ্যাডোয়িং ড্রিল।',
    keyTakeaways: [
      'The 15-minute daily monologue routine',
      'Using fillers like "Well", "To be honest", "Interestingly" naturally',
      'Speaking in chunks instead of isolated words'
    ]
  },
  {
    id: 'yt-3',
    title: 'IELTS Speaking Part 2: How to Talk for 2 Minutes Non-Stop',
    titleBn: 'আইইএলটিএস কিউ কার্ডে না থেমে ২ মিনিট কথা বলার সহজ টেকনিক',
    duration: '22:10 min',
    category: 'ielts',
    youtubeId: 'kJQP7kiw5Fk',
    summaryEn: 'The PPF (Past, Present, Future) storytelling method that guarantees you never run out of ideas in IELTS Speaking Part 2.',
    summaryBn: 'আইইএলটিএস স্পিকিং টেস্টে কিউ কার্ডে আইডিয়া জেনারেশনের Past-Present-Future ফর্মুলা।',
    keyTakeaways: [
      'The 60-second note-taking shorthand system',
      'Transitioning smoothly across the bullet points',
      'Using Band 8 idiomatic collocations'
    ]
  },
  {
    id: 'yt-4',
    title: '50 Corporate English Phrases for Job Interviews & Meetings',
    titleBn: 'চাকরির ইন্টারভিউ ও অফিস মিটিংয়ের সেরা ৫০টি কর্পোরেট ফ্রেজ',
    duration: '16:30 min',
    category: 'vocabulary',
    youtubeId: 'L_LUpnjgPso',
    summaryEn: 'Learn how to politely disagree, ask clarifying questions, and deliver crisp executive project summaries.',
    summaryBn: 'এমএনসি ও রিমোট জবের প্রফেশনাল কমিউনিকেশনের জন্য ৫০টি গুরুত্বপূর্ণ স্মার্ট ফ্রেজ।',
    keyTakeaways: [
      '"I see your point, however..." instead of "You are wrong"',
      '"Let me circle back on that" for unanswered queries',
      '"To recap our key action items..."'
    ]
  }
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    question: 'Choose the correct option: "I have been working at this company ___ 2021."',
    questionBn: 'সঠিক উত্তরটি বাছাই করুন: "I have been working at this company ___ 2021."',
    options: ['for', 'since', 'from', 'in'],
    correctIndex: 1,
    skill: 'grammar',
    explanationBn: 'নির্দিষ্ট শুরুর সাল বা সময় বোঝাতে Present Perfect Continuous-এ "since" বসে।'
  },
  {
    id: 2,
    question: 'Select the natural sentence:',
    questionBn: 'কোন বাক্যটি স্বাভাবিক ও নির্ভুল?',
    options: [
      'She did not knew the answer.',
      'She did not know the answer.',
      'She do not knew the answer.',
      'She does not known the answer.'
    ],
    correctIndex: 1,
    skill: 'grammar',
    explanationBn: 'Did not এর পরে সর্বদা Verb-এর Base Form (know) ব্যবহৃত হয়।'
  },
  {
    id: 3,
    question: 'What is the closest synonym for "Articulate"?',
    questionBn: '"Articulate" শব্দের সবচেয়ে নিকটবর্তী সমার্থক শব্দ কোনটি?',
    options: ['Hesitant', 'Eloquent', 'Aggressive', 'Confused'],
    correctIndex: 1,
    skill: 'vocabulary',
    explanationBn: 'Articulate মানে স্পষ্ট ও প্রাঞ্জলভাষী; এর সমার্থক হলো Eloquent।'
  },
  {
    id: 4,
    question: 'If you want to say you are appearing for an exam in English, you should say:',
    questionBn: 'আপনি পরীক্ষা দিচ্ছেন বোঝাতে কোনটি শুদ্ধ?',
    options: [
      'I am giving an exam tomorrow.',
      'I am taking an exam tomorrow.',
      'I am throwing an exam tomorrow.',
      'I am making an exam tomorrow.'
    ],
    correctIndex: 1,
    skill: 'usage',
    explanationBn: 'শিক্ষার্থীরা পরীক্ষা দেয় অর্থে "take an exam" এবং শিক্ষক পরীক্ষা নেন অর্থে "give an exam" বসে।'
  },
  {
    id: 5,
    question: '"If I ___ you, I would take that prestigious fellowship."',
    questionBn: 'শূন্যস্থান পূরণ করুন: "If I ___ you, I would take that prestigious fellowship."',
    options: ['was', 'were', 'am', 'will be'],
    correctIndex: 1,
    skill: 'grammar',
    explanationBn: 'কাল্পনিক শর্তসূচক বাক্যে সাবজেক্ট যাই হোক না কেন "were" বসে (If I were you)।'
  },
  {
    id: 6,
    question: 'Choose the correct preposition: "The team will meet ___ Friday ___ 3:00 PM."',
    questionBn: 'সঠিক প্রেপজিশন নির্বাচন করুন:',
    options: ['at, on', 'on, at', 'in, at', 'on, in'],
    correctIndex: 1,
    skill: 'grammar',
    explanationBn: 'বারের নামের আগে "on" এবং নির্দিষ্ট সময়ের আগে "at" বসে।'
  },
  {
    id: 7,
    question: 'What does the corporate idiom "Touch base" mean?',
    questionBn: 'কর্পোরেট ফ্রেজ "Touch base" এর অর্থ কী?',
    options: [
      'To play baseball',
      'To make brief contact or follow up',
      'To cancel a contract',
      'To physically meet at a base'
    ],
    correctIndex: 1,
    skill: 'vocabulary',
    explanationBn: '"Touch base" মানে কারো সাথে সংক্ষেপে যোগাযোগ করা বা আপডেট নেওয়া।'
  },
  {
    id: 8,
    question: 'Identify the sentence with NO grammatical error:',
    questionBn: 'ব্যাকরণগতভাবে সম্পূর্ণ ত্রুটিহীন বাক্যটি নির্বাচন করুন:',
    options: [
      'We must discuss about the new policy.',
      'We must discuss the new policy.',
      'We must discuss on the new policy.',
      'We must discuss regarding the new policy.'
    ],
    correctIndex: 1,
    skill: 'usage',
    explanationBn: '"Discuss" এর পর কোনো preposition বসে না; সরাসরি object বসে।'
  },
  {
    id: 9,
    question: 'Which word describes someone who keeps trying despite repeated setbacks?',
    questionBn: 'বারবার ব্যর্থতা সত্ত্বেও যে নিরবচ্ছিন্ন চেষ্টা চালিয়ে যায় তাকে কী বলে?',
    options: ['Perseverant', 'Indifferent', 'Pessimistic', 'Complacent'],
    correctIndex: 0,
    skill: 'vocabulary',
    explanationBn: 'Perseverant বা অধ্যবসায়ী ব্যক্তি কখনোই সহজে হার মানে না।'
  },
  {
    id: 10,
    question: '"By the time the manager arrived, the presentation ___."',
    questionBn: 'শূন্যস্থানে সঠিক রূপটি বসান:',
    options: [
      'already started',
      'had already started',
      'has already started',
      'will already start'
    ],
    correctIndex: 1,
    skill: 'grammar',
    explanationBn: 'অতীতের দুটি কাজের মধ্যে পূর্বে সমাপ্ত কাজটিতে Past Perfect (had already started) বসে।'
  }
];

export const FAQS = [
  {
    q: 'ক্লাসগুলো কীভাবে অনুষ্ঠিত হবে?',
    qEn: 'How will the classes be conducted?',
    a: 'সকল লাইভ ক্লাস জুম (Zoom) প্রিমিয়াম প্ল্যাটফর্মে অনুষ্ঠিত হয়। প্রতি ক্লাসে ১-অন-১ ব্রেকআউট রুমে স্পিকিং প্র্যাকটিস থাকে। কোনো ক্লাস মিস হলে সঙ্গে সঙ্গেই ফুল এইচডি রেকর্ডিং ও লেকচার নোটস পেয়ে যাবেন।',
    aEn: 'All live classes are conducted on Zoom Premium with 1-on-1 breakout rooms for active speaking. Full HD recordings and lecture notes are uploaded immediately after each class.'
  },
  {
    q: 'কোর্স ফি কীভাবে পরিশোধ (Payment) করা যাবে?',
    qEn: 'What payment methods are supported?',
    a: 'আপনি বিকাশ (bKash Merchant), নগদ (Nagad), রকেট অথবা যেকোনো বাংলাদেশি ব্যাংকের ভিসা/মাস্টারকার্ড ডেবিট/ক্রেডিট কার্ডের মাধ্যমে নিরাপদে ফি পরিশোধ করতে পারবেন।',
    aEn: 'You can pay securely via bKash Merchant, Nagad, Rocket, or any Bangladeshi Visa/Mastercard debit or credit card.'
  },
  {
    q: 'আমি কি ভর্তির আগে ফ্রি ট্রায়াল বা ডেমো ক্লাস করতে পারব?',
    qEn: 'Can I attend a free demo trial class before enrolling?',
    a: 'হ্যাঁ, অবশ্যই! প্রতি শুক্রবার সন্ধ্যা ৮টায় আমাদের ফ্রি লাইভ ওরিয়েন্টেশন ও স্পিকিং অ্যাসেসমেন্ট ক্লাস অনুষ্ঠিত হয়। ওয়েবসাইটের "Register for Free Trial" বাটনে ক্লিক করে স্লট বুক করতে পারবেন।',
    aEn: 'Yes! Every Friday at 8:00 PM we host a free live demo class and speaking evaluation session. Simply click the "Register for Free Trial" button to book your seat.'
  },
  {
    q: 'কোর্স শেষে কি কোনো সার্টিফিকেট দেওয়া হবে?',
    qEn: 'Will I receive a verified certificate upon completion?',
    a: 'হ্যাঁ, কোর্স সমাপ্তির পর অনলাইন ফাইনাল ভাইভা ও ৮০% ক্লাস উপস্থিতির ভিত্তিতে স্পিকক্রাফট এর ভেরিফাইড ডিজিটাল সার্টিফিকেট প্রদান করা হয়, যা লিঙ্কডইন এবং রেজুমিতে যুক্ত করা যায়।',
    aEn: 'Yes, learners with at least 80% attendance and passing the final viva assessment receive an official verified SpeakCraft certificate for LinkedIn and resumes.'
  }
];
