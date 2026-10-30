import React from 'react';
import { Star, Quote, Award, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { Language } from '../types';

interface TestimonialsSectionProps {
  currentLang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLang }) => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-600 mb-2 uppercase">
            <span>REAL RESULTS FROM REAL LEARNERS</span>
            <span aria-hidden="true">·</span>
            <span>ACROSS 64 DISTRICTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mb-4">
            {currentLang === 'en'
              ? 'Proven Transformations: From Hesitation to Mastery'
              : 'জড়তা কাটিয়ে সফল শিক্ষার্থীদের বাস্তব গল্প'}
          </h2>
          <p className="text-base text-slate-600">
            {currentLang === 'en'
              ? 'Hear directly from university graduates, software engineers, and corporate professionals who overcame hesitation at SpeakCraft.'
              : 'জানুন কীভাবে আমাদের শিক্ষার্থীরা আন্তর্জাতিক ক্লায়েন্ট মিটিং ও আইইএলটিএস পরীক্ষায় অসাধারণ সাফল্য অর্জন করেছেন।'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top: Stars & IELTS Badge if present */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {t.ieltsScore && (
                    <span className="text-xs font-bold text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full border border-amber-200">
                      {t.ieltsScore}
                    </span>
                  )}
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-7 h-7 text-amber-200 absolute -top-3 -left-2 -z-0 opacity-80" />
                  <p className="relative z-10 text-sm text-slate-800 leading-relaxed font-bangla italic">
                    "{currentLang === 'en' ? t.quote : t.quoteBn}"
                  </p>
                </div>

                {/* Before vs After Outcome Pill Box */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 mb-6 space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-rose-700">
                      {currentLang === 'en' ? 'Before: ' : 'পূর্বে: '}
                    </span>
                    <span className="text-slate-600 font-bangla">
                      {currentLang === 'en' ? t.beforeState : t.beforeStateBn}
                    </span>
                  </div>
                  <div className="pt-1.5 border-t border-slate-100">
                    <span className="font-bold text-emerald-700">
                      {currentLang === 'en' ? 'Outcome: ' : 'ফলাফল: '}
                    </span>
                    <span className="text-slate-900 font-semibold font-bangla">
                      {currentLang === 'en' ? t.result : t.resultBn}
                    </span>
                  </div>
                </div>
              </div>

              {/* Student Identity Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-amber-400/50 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#0B1B3D]">{t.name}</h4>
                  <div className="text-xs text-slate-500 font-bangla leading-tight">
                    {currentLang === 'en' ? t.role : t.roleBn}
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-amber-600" />
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Community Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0B1B3D] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white">
                {currentLang === 'en'
                  ? 'Join 18,500+ Bangladeshi Learners in our Daily Speaking Circle'
                  : 'যুক্ত হোন বাংলাদেশের ১৮,৫০০+ শিক্ষার্থীর স্পিকিং কমিউনিটিতে'}
              </div>
              <div className="text-xs text-slate-300">
                {currentLang === 'en'
                  ? 'Active WhatsApp group for audio exchange, peer feedback, and vocabulary drills.'
                  : '২৪/৭ সক্রিয় হোয়াটসঅ্যাপ গ্রুপে অডিও প্র্যাকটিস ও সহপাঠীদের সাথে কথা বলার সুযোগ।'}
              </div>
            </div>
          </div>

          <a
            href="https://chat.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow transition-colors whitespace-nowrap"
          >
            {currentLang === 'en' ? 'Join Free Speaking Group' : 'ফ্রি স্পিকিং গ্রুপে যুক্ত হোন'}
          </a>
        </div>
      </div>
    </section>
  );
};
