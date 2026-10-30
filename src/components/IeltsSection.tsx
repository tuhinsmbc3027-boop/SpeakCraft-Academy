import React, { useState, useEffect } from 'react';
import { Award, Timer, Volume2, Calculator, CheckCircle2, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';
import { IELTS_CUE_CARDS } from '../data/mockData';
import { speakText } from '../utils/speech';
import { Language } from '../types';
import ieltsImg from '../assets/images/ielts_preparation_desk_1793359323164.jpg';

interface IeltsSectionProps {
  currentLang: Language;
  onEnrollIelts: () => void;
}

export const IeltsSection: React.FC<IeltsSectionProps> = ({ currentLang, onEnrollIelts }) => {
  const [selectedCardIdx, setSelectedCardIdx] = useState(0);
  const [timerMode, setTimerMode] = useState<'prep' | 'speaking' | 'idle'>('idle');
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [isPlayingModelAnswer, setIsPlayingModelAnswer] = useState(false);

  // IELTS Score Calculator state
  const [correctAnswers, setCorrectAnswers] = useState(32);
  const [moduleType, setModuleType] = useState<'listening' | 'reading-academic'>('listening');

  const currentCard = IELTS_CUE_CARDS[selectedCardIdx];

  // Timer countdown
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (timerMode !== 'idle' && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && timerMode !== 'idle') {
      if (timerMode === 'prep') {
        // Automatically switch to 2-minute speaking time
        setTimerMode('speaking');
        setSecondsLeft(120);
      } else {
        setTimerMode('idle');
      }
    }
    return () => clearInterval(interval);
  }, [timerMode, secondsLeft]);

  const startPrepTimer = () => {
    setTimerMode('prep');
    setSecondsLeft(60);
  };

  const resetIeltsTimer = () => {
    setTimerMode('idle');
    setSecondsLeft(60);
  };

  const handleReadModelAnswer = async () => {
    setIsPlayingModelAnswer(true);
    await speakText(currentCard.modelAnswer, 0.9);
    setIsPlayingModelAnswer(false);
  };

  // Raw score to Band converter table (Listening / Academic Reading)
  const calculateBand = (score: number) => {
    if (score >= 39) return '9.0 (Expert User)';
    if (score >= 37) return '8.5 (Very Good User)';
    if (score >= 35) return '8.0 (Very Good User)';
    if (score >= 32) return '7.5 (Good User)';
    if (score >= 30) return '7.0 (Good User)';
    if (score >= 26) return '6.5 (Competent User)';
    if (score >= 23) return '6.0 (Competent User)';
    if (score >= 19) return '5.5 (Modest User)';
    if (score >= 15) return '5.0 (Modest User)';
    return '4.5 or below';
  };

  return (
    <section id="ielts" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-600 mb-2 uppercase">
            <span>CAMBRIDGE IELTS SPECIALIZATION</span>
            <span aria-hidden="true">·</span>
            <span>TARGET BAND 7.5 - 8.5</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mb-4">
            {currentLang === 'en'
              ? 'IELTS Preparation: Master Every Module'
              : 'আইইএলটিএস স্পিকিং ও রাইটিং ব্যান্ড ৭.৫+ প্রস্তুতি'}
          </h2>
          <p className="text-base text-slate-600">
            {currentLang === 'en'
              ? 'Prepare for higher studies abroad. Train with British Council certified mock tests, 1-minute cue card planning formulas, and band calculators.'
              : 'কানাডা ও ইউরোপের স্কলারশিপের জন্য স্পিকিং ও রাইটিংয়ে উচ্চ ব্যান্ড স্কোর অর্জনের সুনির্দিষ্ট দিকনির্দেশনা।'}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Visual Asset & Band Calculator */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
              <img
                src={ieltsImg}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/ielts_preparation_desk.jpg';
                }}
                alt="IELTS Preparation desk with official Cambridge books and 8.5 scorecard"
                className="w-full h-56 sm:h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-5">
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">
                  Cambridge Assessment English Syllabus
                </div>
                <h4 className="text-base font-bold text-[#0B1B3D] mb-1">
                  {currentLang === 'en' ? 'Official Test Standard Training' : 'ক্যামব্রিজ ও আইডিআইপি স্ট্যান্ডার্ড সিলেবাস'}
                </h4>
                <p className="text-xs text-slate-600 font-bangla mb-4">
                  {currentLang === 'en'
                    ? '8 Full-length 1-on-1 speaking mocks with live band evaluation and lexical feedback.'
                    : '৮টি ওয়ান-অন-ওয়ান লাইভ স্পিকিং মক টেস্ট এবং লাইন-বাই-লাইন রাইটিং এসে মূল্যায়ন।'}
                </p>
                <button
                  onClick={onEnrollIelts}
                  className="w-full py-2.5 px-4 bg-[#0B1B3D] hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer text-center"
                >
                  {currentLang === 'en' ? 'Enroll in IELTS Mastery Batch (৳5,500)' : 'আইইএলটিএস কোর্সে ভর্তি হোন (৳৫,৫০০)'}
                </button>
              </div>
            </div>

            {/* IELTS Raw Score Band Calculator Widget */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0B1B3D] uppercase tracking-wide mb-3">
                <Calculator className="w-4 h-4 text-amber-600" />
                <span>{currentLang === 'en' ? 'IELTS Band Score Calculator' : 'ব্যান্ড স্কোর ক্যালকুলেটর'}</span>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-slate-600">Correct Answers (out of 40):</span>
                  <span className="font-bold text-slate-900 tabular-nums text-sm">{correctAnswers} / 40</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="40"
                  value={correctAnswers}
                  onChange={(e) => setCorrectAnswers(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-500 font-medium">Estimated Band Score:</div>
                  <div className="text-xl font-black text-[#0B1B3D] tabular-nums">
                    Band {calculateBand(correctAnswers)}
                  </div>
                </div>
                <Award className="w-8 h-8 text-amber-600" />
              </div>
            </div>
          </div>

          {/* Right Column: IELTS Speaking Part 2 Cue Card Simulator */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md">
              {/* Cue Card Switcher */}
              <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
                <div>
                  <div className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                    IELTS Speaking Part 2 Simulator
                  </div>
                  <div className="text-xs text-slate-500 font-bangla">
                    ১ মিনিট প্রস্তুতি + ২ মিনিট কথা বলার রিয়েল এক্সাম ড্রিল
                  </div>
                </div>

                <div className="flex gap-2">
                  {IELTS_CUE_CARDS.map((c, i) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setSelectedCardIdx(i);
                        resetIeltsTimer();
                      }}
                      className={`px-3 py-1 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                        selectedCardIdx === i
                          ? 'bg-[#0B1B3D] text-white border-[#0B1B3D]'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Card {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cue Card Topic & Bullet Points */}
              <div className="p-5 rounded-xl bg-amber-50/40 border border-amber-200 mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  "{currentCard.title}"
                </h3>
                <div className="text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">
                  You should say:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {currentCard.bulletPoints.map((bp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive Timers */}
              <div className="p-4 rounded-xl bg-[#0B1B3D] text-white mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Timer className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="text-xs text-slate-300">
                      {timerMode === 'prep'
                        ? '1-Minute Preparation Time'
                        : timerMode === 'speaking'
                        ? '2-Minute Speaking Time'
                        : 'Simulated Exam Timer'}
                    </div>
                    <div className="text-2xl font-black font-mono text-amber-400 tabular-nums">
                      {Math.floor(secondsLeft / 60)}:
                      {(secondsLeft % 60).toString().padStart(2, '0')}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {timerMode === 'idle' ? (
                    <button
                      onClick={startPrepTimer}
                      className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-[#0B1B3D] font-bold text-xs rounded-lg transition-colors cursor-pointer"
                    >
                      Start 1-Min Prep
                    </button>
                  ) : (
                    <button
                      onClick={resetIeltsTimer}
                      className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Cambridge Band 8.5 Model Answer */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Band 8.5 Model Response:
                  </div>
                  <button
                    onClick={handleReadModelAnswer}
                    className="text-xs text-amber-700 hover:text-amber-800 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>{isPlayingModelAnswer ? 'Reading...' : 'Listen to Audio'}</span>
                  </button>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic mb-3">
                  "{currentCard.modelAnswer}"
                </p>
                <p className="text-xs text-slate-500 font-bangla border-t border-slate-200 pt-2">
                  <span className="font-semibold text-slate-700">বাংলা ভাবানুবাদ: </span>
                  {currentCard.modelAnswerBn}
                </p>
              </div>

              {/* Band Vocabulary Table */}
              <div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Band 8+ High-Lexical Phrases used:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {currentCard.bandVocabulary.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-white border border-slate-200 flex flex-col"
                    >
                      <span className="font-bold text-[#0B1B3D]">{item.word}</span>
                      <span className="text-slate-500 font-bangla">{item.meaningBn}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
