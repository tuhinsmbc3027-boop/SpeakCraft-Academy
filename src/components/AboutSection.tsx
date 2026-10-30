import React from 'react';
import { Target, Users, BookOpen, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface AboutSectionProps {
  currentLang: Language;
  onOpenEnrollModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang, onOpenEnrollModal }) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-600 mb-2 uppercase">
            <span>ABOUT SPEAKCRAFT ENGLISH</span>
            <span aria-hidden="true">·</span>
            <span>OUR MISSION & PEDAGOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mb-4">
            {currentLang === 'en'
              ? 'Why Traditional English Learning Failed You in Bangladesh'
              : '১২ বছর ব্যাকরণ পড়েও কেন আমরা ইংরেজিতে কথা বলতে পারি না?'}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {currentLang === 'en'
              ? 'From primary school to university, Bangladeshi students spend years memorizing rigid grammar rules and passive translation charts. Yet in job interviews or client calls, we freeze. SpeakCraft was born to fix this with 100% active communication.'
              : 'স্কুল-কলেজে মুখস্থ করা টেন্সের চার্ট দিয়ে বাস্তব জীবনের কনভারসেশন হয় না। মাথায় বাংলা অনুবাদ করার অভ্যাস ভেঙে সরাসরি ইংরেজিতে চিন্তা করা ও আত্মবিশ্বাসী স্পিকিং রপ্ত করার জন্যই স্পিকক্রাফটের সৃষ্টি।'}
          </p>
        </div>

        {/* 2-Column Story & Lead Instructor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Instructor Portrait & Credential Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 group">
              <img
                src="/src/assets/images/instructor_lead_trainer_1793359322705.jpg"
                alt="Tanvir Ahmed, Lead Mentor & IELTS Band 8.5 Coach at SpeakCraft English"
                className="w-full h-96 sm:h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-white border-t border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-slate-900">Tanvir Ahmed</h3>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    IELTS Band 8.5 (Speaking 9.0)
                  </span>
                </div>
                <div className="text-xs text-slate-500 mb-3 font-medium">
                  {currentLang === 'en'
                    ? 'Lead Trainer & Co-Founder · TESOL (Canada) Certified · Ex-Lecturer'
                    : 'প্রধান প্রশিক্ষক ও সহ-প্রতিষ্ঠাতা · টিইএসওএল (কানাডা) সার্টিফাইড · সাবেক প্রভাষক'}
                </div>
                <p className="text-xs text-slate-600 italic">
                  {currentLang === 'en'
                    ? '"My goal is simple: no Bangladeshi graduate should miss an international opportunity or corporate promotion just because of spoken English hesitation."'
                    : '"আমার লক্ষ্য একটাই: কেবল ইংরেজি স্পিকিংয়ের জড়তার কারণে যেন বাংলাদেশের কোনো মেধাবী তরুণের স্বপ্নের চাকরি বা উচ্চশিক্ষার সুযোগ নষ্ট না হয়।"'}
                </p>
              </div>
            </div>
          </div>

          {/* Pedagogy / The 3 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] text-amber-400 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {currentLang === 'en' ? '1. The 80/20 Speaking Rule' : '১. ৮০/২০ অ্যাক্টিভ স্পিকিং রুল'}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-bangla">
                    {currentLang === 'en'
                      ? 'In traditional classes, the teacher talks 90% of the time while students sit passively. At SpeakCraft, 80% of class time is spent with students actively speaking in small 2-to-3 person Zoom breakout rooms with guided prompts.'
                      : 'সাধারণ কোচিংয়ে শিক্ষক একাই কথা বলেন, ছাত্ররা শুধু শুনে থাকে। কিন্তু স্পিকক্রাফটে ক্লাসের ৮০% সময় শিক্ষার্থীরা ২-৩ জনের ব্রেকআউট রুমে সরাসরি কথা বলে এবং ট্রেইনার তাৎক্ষণিক ফিডব্যাক দেন।'}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] text-amber-400 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {currentLang === 'en' ? '2. Ending Bengali-to-English Mental Translation' : '২. মাথায় বাংলা অনুবাদ করার অভ্যাস দূরীকরণ'}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-bangla">
                    {currentLang === 'en'
                      ? 'When you translate sentence-by-sentence from Bengali, natural speech rhythm breaks. We train your subconscious mind through rapid speech shadowing and phrase chunking so words flow automatically.'
                      : 'বাংলা শব্দকে ইংরেজিতে হুবহু ট্রান্সলেট করার চেষ্টার কারণেই কথা আটকে যায়। আমরা সাইকোলিঙ্গুইস্টিক শ্যাডোয়িং মেথডে সরাসরি ইংরেজিতে চিন্তা করার ক্ষমতা গড়ে তুলি।'}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] text-amber-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {currentLang === 'en' ? '3. Zero-Judgment Safe Environment' : '৩. ভুল করার ভয়মুক্ত আন্তরিক পরিবেশ'}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-bangla">
                    {currentLang === 'en'
                      ? 'Most learners fear people will laugh at their mistakes or regional accent. Our classroom culture celebrates errors as stepping stones to mastery with supportive peer coaches.'
                      : 'ভুল হবে ভেবে অনেকেই কথা বলতে লজ্জা পান। আমাদের ক্লাসরুম এমনভাবে ডিজাইন করা যেন কেউ কাউকে উপহাস না করে, বরং সবাই মিলে আত্মবিশ্বাস গড়ে তোলে।'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnrollModal}
                className="px-6 py-3 bg-[#0B1B3D] hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>{currentLang === 'en' ? 'Start Your Transformation Today' : 'আজই আপনার শেখার যাত্রা শুরু করুন'}</span>
                <span className="text-amber-400">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
