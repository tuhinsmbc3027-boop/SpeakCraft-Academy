export type Language = 'en' | 'bn';

export interface Course {
  id: string;
  title: string;
  titleBn: string;
  tagline: string;
  taglineBn: string;
  level: string;
  duration: string;
  classes: string;
  batchType: string;
  priceBDT: number;
  originalPriceBDT: number;
  popular?: boolean;
  features: string[];
  featuresBn: string[];
  curriculum: {
    week: string;
    topic: string;
    topicBn: string;
    details: string;
  }[];
}

export interface GrammarTopic {
  id: string;
  title: string;
  titleBn: string;
  category: 'tenses' | 'prepositions' | 'common-errors' | 'conditionals' | 'sentence-structure';
  explanationEn: string;
  explanationBn: string;
  formula?: string;
  keyRule: string;
  keyRuleBn: string;
  examples: {
    correct: string;
    incorrect?: string;
    bengaliMeaning: string;
    note?: string;
  }[];
  quiz: {
    question: string;
    questionBn: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface VocabularyWord {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaningBn: string;
  definitionEn: string;
  exampleSentence: string;
  exampleSentenceBn: string;
  category: 'daily' | 'corporate' | 'ielts' | 'idioms';
  synonyms: string[];
}

export interface SpeakingPrompt {
  id: string;
  topic: string;
  topicBn: string;
  prompt: string;
  promptBn: string;
  durationSeconds: number;
  guidingQuestions: string[];
  samplePoints: string[];
  recommendedVocabulary: string[];
}

export interface DialogueRoleplay {
  id: string;
  scenario: string;
  scenarioBn: string;
  roleA: string;
  roleB: string;
  lines: {
    speaker: string;
    text: string;
    textBn: string;
    audioHint?: string;
  }[];
}

export interface IELTSCueCard {
  id: string;
  title: string;
  topic: string;
  bulletPoints: string[];
  bulletPointsBn: string[];
  modelAnswer: string;
  modelAnswerBn: string;
  bandVocabulary: {
    word: string;
    meaningBn: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  roleBn: string;
  location: string;
  image: string;
  beforeState: string;
  beforeStateBn: string;
  result: string;
  resultBn: string;
  quote: string;
  quoteBn: string;
  rating: number;
  ieltsScore?: string;
}

export interface VideoLesson {
  id: string;
  title: string;
  titleBn: string;
  duration: string;
  category: 'spoken' | 'mistakes' | 'ielts' | 'vocabulary';
  thumbnailUrl?: string;
  youtubeId: string;
  summaryEn: string;
  summaryBn: string;
  keyTakeaways: string[];
}

export interface AssessmentQuestion {
  id: number;
  question: string;
  questionBn: string;
  options: string[];
  correctIndex: number;
  skill: 'grammar' | 'vocabulary' | 'usage';
  explanationBn: string;
}
