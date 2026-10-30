import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Users, Award, Play } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  currentLang: Language;
  onOpenEnrollModal: () => void;
  onOpenAssessment: () => void;
  onOpenVideoDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenEnrollModal,
  onOpenAssessment,
  onOpenVideoDemo,
}) => {
  return (
    <section className="relative bg-[#0B1B3D] text-white overflow-hidden pt-8 pb-16 lg:py-20 border-b border-slate-800">
      {/* Background radial ambient glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed kicker (Zero-pill discipline) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 mb-4">
              <span>SPEAKCRAFT BANGLADESH</span>
              <span aria-hidden="true">·</span>
              <span>LEARN ENGLISH WITH CONFIDENCE</span>
              <span aria-hidden="true">·</span>
              <span>BATCH 42 ADMISSIONS OPEN</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              {currentLang === 'en' ? (
                <>
                  Stop Translating in Your Head.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                    Start Speaking Fluently
                  </span>{' '}
                  with Pure Confidence.
                </>
              ) : (
                <>
                  মাথায় বাংলা অনুবাদ না করে{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                    ন্যাচারাল ফ্লুয়েন্সিতে
                  </span>{' '}
                  ইংরেজি বলুন আত্মবিশ্বাসের সাথে।
                </>
              )}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
              {currentLang === 'en'
                ? 'Designed specifically for Bangladeshi university students, job seekers, and corporate professionals aged 18-35. Master spoken English, conquer IELTS speaking, and overcome hesitation through live interactive Zoom breakout rooms.'
                : 'বাংলাদেশের তরুণ শিক্ষার্থী ও চাকরিপ্রার্থীদের জন্য বিশেষায়িত কোর্স। অপ্রয়োজনীয় ব্যাকরণ মুখস্থ না করে প্রতিদিন লাইভ ব্রেকআউট রুমে স্পিকিং প্র্যাকটিসের মাধ্যমে মাত্র ৮ সপ্তাহে অর্জিত হবে আপনার স্বপ্নপূরণের সাবলীল ইংরেজি।'}
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  {currentLang === 'en' ? 'Daily 1-on-1 Zoom Breakout Practice' : 'প্রতি ক্লাসে ১-অন-১ লাইভ স্পিকিং প্র্যাকটিস'}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  {currentLang === 'en' ? 'Cambridge & TESOL Certified Mentors' : 'ক্যামব্রিজ ও টিইএসওএল সার্টিফাইড মেন্টর'}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  {currentLang === 'en' ? 'Fix Mother Tongue Influence (MTI)' : 'আঞ্চলিক টান দূর করে শুদ্ধ প্রোনাউনসিয়েশন'}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  {currentLang === 'en' ? 'bKash / Nagad Easy Enrollment' : 'বিকাশ ও নগদে সহজ পেমেন্ট সুবিধা'}
                </span>
              </div>
            </div>

            {/* Primary Action Button Cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenEnrollModal}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-[#0B1B3D] bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all cursor-pointer group"
              >
                <span>{currentLang === 'en' ? 'Enroll in Spoken English (৳3,500)' : 'কোর্সে ভর্তি হোন (৳৩,৫০০)'}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenAssessment}
                className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-xl transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 mr-2 text-amber-400" />
                <span>{currentLang === 'en' ? 'Free English Level Test' : 'ফ্রি লেভেল টেস্ট দিন'}</span>
              </button>

              <button
                onClick={onOpenVideoDemo}
                className="inline-flex items-center justify-center px-4 py-3.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer group"
              >
                <span className="w-7 h-7 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center mr-2 group-hover:bg-amber-400 group-hover:text-[#0B1B3D] transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </span>
                <span>{currentLang === 'en' ? 'Watch Class Demo' : 'ক্লাস ডেমো দেখুন'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 group">
              <img
                src="/src/assets/images/hero_speakcraft_learning_1793359320826.jpg"
                alt="Bangladeshi students practicing English conversation at SpeakCraft studio"
                className="w-full h-80 sm:h-96 lg:h-[430px] object-cover transition-transform duration-500 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-transparent to-transparent opacity-85" />

              {/* Quiet overlay card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B1B3D]/90 backdrop-blur-md border border-amber-400/30 text-white">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      {currentLang === 'en' ? 'Live Breakout Session' : 'লাইভ স্পিকিং সেশন'}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-amber-400">Dhaka Campus & Zoom</span>
                </div>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {currentLang === 'en'
                    ? '"In just 4 weeks, my fear of speaking in front of clients in English vanished completely." — Tanzeem, DU'
                    : '"মাত্র ৪ সপ্তাহের মধ্যে ক্লায়েন্ট ও শিক্ষকদের সামনে কথা বলার ভয় পুরোপুরি দূর হয়েছে।" — তানজীম, ঢাবি'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Metrics Strip (Claim-to-Proof Adjacency) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight mb-1">
              18,500<span className="text-amber-400">+</span>
            </div>
            <div className="text-xs text-slate-400">
              {currentLang === 'en' ? 'Bangladeshi Graduates' : 'সফল শিক্ষার্থী (৬৪ জেলা)'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight mb-1">
              8.0<span className="text-amber-400">+</span>
            </div>
            <div className="text-xs text-slate-400">
              {currentLang === 'en' ? 'Avg. IELTS Speaking Band' : 'গড় আইইএলটিএস ব্যান্ড স্কোর'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight mb-1">
              96<span className="text-amber-400">%</span>
            </div>
            <div className="text-xs text-slate-400">
              {currentLang === 'en' ? 'Fluency Confidence Boost' : 'আত্মবিশ্বাস অর্জনের হার'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight mb-1">
              1-on-1
            </div>
            <div className="text-xs text-slate-400">
              {currentLang === 'en' ? 'Live Speaking Practice' : 'ওয়ান-অন-ওয়ান স্পিকিং ড্রিল'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
