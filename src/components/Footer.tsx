import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
  onOpenAssessment: () => void;
  onOpenEnrollModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenAssessment,
  onOpenEnrollModal,
}) => {
  return (
    <footer className="bg-[#071126] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2 text-xl font-bold text-white tracking-tight">
              <span className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center text-[#0B1B3D] font-black text-sm">
                SC
              </span>
              <span>
                SpeakCraft <span className="text-amber-400 font-medium">English</span>
              </span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-bangla">
              {currentLang === 'en'
                ? 'SpeakCraft English is Bangladesh’s leading conversational English and IELTS training institute. Engineered to eliminate hesitation and empower young learners aged 18-35 with global fluency.'
                : 'স্পিকক্রাফট ইংলিশ বাংলাদেশের তরুণ শিক্ষার্থীদের মুখের জড়তা দূর করে আত্মবিশ্বাসের সাথে ইংরেজি বলতে শেখার আধুনিক অনলাইন ইনস্টিটিউট।'}
            </p>

            <div className="flex items-center gap-2 text-[11px] text-amber-400/90 font-medium">
              <span>Dhaka Campus: Road 11, Banani</span>
              <span aria-hidden="true">·</span>
              <span>Helpline: 01894-772211</span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              {currentLang === 'en' ? 'Our Courses' : 'কোর্সসমূহ'}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#courses" className="hover:text-amber-400 transition-colors">
                  Foundation Spoken English
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-amber-400 transition-colors">
                  Corporate Communication
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-amber-400 transition-colors">
                  IELTS Speaking Band 7.5+
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-amber-400 transition-colors">
                  Smart Phonetics & Accent
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Tools */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              {currentLang === 'en' ? 'Free Learning Tools' : 'ফ্রি লার্নিং টুলস'}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenAssessment}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  English Level Test (CEFR)
                </button>
              </li>
              <li>
                <a href="#speaking" className="hover:text-amber-400 transition-colors">
                  Daily Speaking Practice Lab
                </a>
              </li>
              <li>
                <a href="#vocabulary" className="hover:text-amber-400 transition-colors">
                  Audio Vocabulary Flashcards
                </a>
              </li>
              <li>
                <a href="#grammar" className="hover:text-amber-400 transition-colors">
                  Bite-Sized Grammar Formulas
                </a>
              </li>
              <li>
                <a href="#youtube" className="hover:text-amber-400 transition-colors">
                  Curated Video Masterclasses
                </a>
              </li>
            </ul>
          </div>

          {/* Admission & Support */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              {currentLang === 'en' ? 'Admissions' : 'ভর্তি ও তথ্য'}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenEnrollModal}
                  className="text-amber-400 hover:underline font-semibold cursor-pointer"
                >
                  {currentLang === 'en' ? 'Enroll in Batch 42' : 'ব্যাচ ৪২-এ ভর্তি'}
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Campus Address & Map
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-400 transition-colors">
                  Learner Success Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  bKash Payment Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 SpeakCraft English. {currentLang === 'en' ? 'Learn English with Confidence. All rights reserved.' : 'আত্মবিশ্বাসের সাথে ইংরেজি শিখুন। সর্বস্বত্ব সংরক্ষিত।'}
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Accepted Payments: bKash · Nagad · Rocket · Cards</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">Made for Bangladeshi Learners</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
