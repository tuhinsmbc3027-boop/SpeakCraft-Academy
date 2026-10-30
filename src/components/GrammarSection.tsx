import React, { useState } from 'react';
import { BookOpen, Check, X, HelpCircle, ArrowRight, Lightbulb } from 'lucide-react';
import { GRAMMAR_LESSONS } from '../data/mockData';
import { Language, GrammarTopic } from '../types';

interface GrammarSectionProps {
  currentLang: Language;
}

export const GrammarSection: React.FC<GrammarSectionProps> = ({ currentLang }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(GRAMMAR_LESSONS[0].id);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  const activeTopic = GRAMMAR_LESSONS.find((t) => t.id === selectedTopicId) || GRAMMAR_LESSONS[0];

  const handleSelectTopic = (id: string) => {
    setSelectedTopicId(id);
    setSelectedQuizOption(null);
    setQuizSubmitted(false);
  };

  const handleOptionClick = (idx: number) => {
    setSelectedQuizOption(idx);
    setQuizSubmitted(true);
  };

  return (
    <section id="grammar" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-600 mb-2 uppercase">
            <span>PRACTICAL GRAMMAR LABORATORY</span>
            <span aria-hidden="true">·</span>
            <span>NO BORING MEMORIZATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mb-4">
            {currentLang === 'en'
              ? 'Grammar for Speaking: Fast & Formulaic'
              : 'স্পোকেনের জন্য দরকারি প্র্যাকটিক্যাল গ্রামার'}
          </h2>
          <p className="text-base text-slate-600">
            {currentLang === 'en'
              ? 'Forget confusing 500-page grammar books. Master the 5 essential structures you actually need in daily conversation and job interviews.'
              : 'মুখস্থ বিদ্যা ভুলে সরাসরি বাস্তব উদাহরণের সাহায্যে জটিল ব্যাকরণ সহজে বুঝে নিন।'}
          </p>
        </div>

        {/* Topic Selector Tabs (Interactive functional buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {GRAMMAR_LESSONS.map((topic) => {
            const isActive = topic.id === selectedTopicId;
            return (
              <button
                key={topic.id}
                onClick={() => handleSelectTopic(topic.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#0B1B3D] text-amber-300 border-[#0B1B3D] shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                {currentLang === 'en' ? topic.title : topic.titleBn}
              </button>
            );
          })}
        </div>

        {/* Lesson Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Lesson Explanations & Examples */}
          <div className="lg:col-span-7 space-y-6">
            {/* Rule Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wide mb-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>{currentLang === 'en' ? 'Core Principle & Rule' : 'মূল নিয়ম ও সহজ ব্যাখ্যা'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B3D] mb-3">
                {currentLang === 'en' ? activeTopic.title : activeTopic.titleBn}
              </h3>
              <p className="text-sm text-slate-700 mb-4 leading-relaxed font-bangla">
                {currentLang === 'en' ? activeTopic.explanationEn : activeTopic.explanationBn}
              </p>

              {activeTopic.formula && (
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs font-mono font-semibold mb-4">
                  <span className="font-sans font-bold text-amber-800">Formula: </span>
                  {activeTopic.formula}
                </div>
              )}

              <div className="text-xs font-semibold text-slate-600 bg-white p-3 rounded-lg border border-slate-200 font-bangla">
                <span className="font-bold text-[#0B1B3D]">
                  {currentLang === 'en' ? 'Remember: ' : 'মনে রাখুন: '}
                </span>
                {currentLang === 'en' ? activeTopic.keyRule : activeTopic.keyRuleBn}
              </div>
            </div>

            {/* Practical Examples List */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                {currentLang === 'en' ? 'Real Spoken Comparisons:' : 'বাস্তব উদাহরণ ও ভুল সংশোধন:'}
              </div>

              {activeTopic.examples.map((eg, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs"
                >
                  {/* Correct Sentence */}
                  <div className="flex items-start gap-2.5 text-sm font-semibold text-emerald-800 mb-1.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{eg.correct}</span>
                  </div>

                  {/* Incorrect Sentence if available */}
                  {eg.incorrect && (
                    <div className="flex items-start gap-2.5 text-xs text-rose-600/90 line-through mb-1.5 pl-6">
                      <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                      <span>{eg.incorrect}</span>
                    </div>
                  )}

                  {/* Bengali meaning & notes */}
                  <div className="text-xs text-slate-600 pl-6 font-bangla">
                    <span className="text-slate-800 font-medium">{eg.bengaliMeaning}</span>
                    {eg.note && (
                      <span className="text-slate-500 block mt-0.5">· {eg.note}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Check Quiz */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0B1B3D] text-white border border-slate-800 shadow-xl sticky top-24">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-3">
                <HelpCircle className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'Interactive Instant Quiz' : 'তাৎক্ষণিক প্র্যাকটিস কুইজ'}</span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                {activeTopic.quiz.question}
              </h4>
              <p className="text-xs text-slate-300 font-bangla mb-6">
                {activeTopic.quiz.questionBn}
              </p>

              {/* Quiz Options */}
              <div className="space-y-2.5 mb-6">
                {activeTopic.quiz.options.map((opt, idx) => {
                  const isSelected = selectedQuizOption === idx;
                  const isCorrect = idx === activeTopic.quiz.correctIndex;

                  let buttonStyles =
                    'border-slate-700 bg-slate-900/60 text-slate-200 hover:border-slate-500 hover:bg-slate-800/80';

                  if (quizSubmitted) {
                    if (isCorrect) {
                      buttonStyles =
                        'border-emerald-500 bg-emerald-950/80 text-emerald-200 font-bold';
                    } else if (isSelected && !isCorrect) {
                      buttonStyles =
                        'border-rose-500 bg-rose-950/80 text-rose-200 line-through';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(idx)}
                      disabled={quizSubmitted}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${buttonStyles}`}
                    >
                      <span>{opt}</span>
                      {quizSubmitted && isCorrect && (
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                      {quizSubmitted && isSelected && !isCorrect && (
                        <X className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Quiz Feedback */}
              {quizSubmitted && (
                <div
                  className={`p-4 rounded-xl text-xs leading-relaxed font-bangla border ${
                    selectedQuizOption === activeTopic.quiz.correctIndex
                      ? 'bg-emerald-950/60 border-emerald-800 text-emerald-200'
                      : 'bg-rose-950/60 border-rose-800 text-rose-200'
                  }`}
                >
                  <div className="font-bold mb-1">
                    {selectedQuizOption === activeTopic.quiz.correctIndex
                      ? '✓ অভিনন্দন! আপনার উত্তরটি সঠিক হয়েছে।'
                      : '✗ উত্তরটি ভুল হয়েছে। সঠিক উত্তরটি দেখে নিন:'}
                  </div>
                  <div>{activeTopic.quiz.explanation}</div>

                  <button
                    onClick={() => {
                      setSelectedQuizOption(null);
                      setQuizSubmitted(false);
                    }}
                    className="mt-3 text-amber-300 hover:underline font-semibold text-xs inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Try again / পুনরায় চেষ্টা করুন</span>
                  </button>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>SpeakCraft Smart Grammar Engine</span>
                <span className="text-amber-400">Bangla + English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
