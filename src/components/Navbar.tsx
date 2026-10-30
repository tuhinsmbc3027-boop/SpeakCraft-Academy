import React, { useState } from 'react';
import { Menu, X, Sparkles, Phone, Languages } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
  onOpenEnrollModal: (courseId?: string) => void;
  onOpenAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  onOpenEnrollModal,
  onOpenAssessment,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: currentLang === 'en' ? 'Courses' : 'কোর্সসমূহ', href: '#courses' },
    { label: currentLang === 'en' ? 'Grammar' : 'গ্রামার লেসন', href: '#grammar' },
    { label: currentLang === 'en' ? 'Vocabulary' : 'ভোকাবুলারি', href: '#vocabulary' },
    { label: currentLang === 'en' ? 'Speaking Lab' : 'স্পিকিং প্র্যাকটিস', href: '#speaking' },
    { label: currentLang === 'en' ? 'IELTS Prep' : 'আইইএলটিএস', href: '#ielts' },
    { label: currentLang === 'en' ? 'About Us' : 'আমাদের সম্পর্কে', href: '#about' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#0B1B3D] text-white border-b border-[#1E293B]/80 shadow-md">
        {/* Top utility sub-strip for Bangladeshi trust & contact */}
        <div className="bg-[#071126] border-b border-slate-800/60 px-4 lg:px-8 py-1.5 text-xs text-slate-300 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-amber-400 font-semibold tracking-wide">
              {currentLang === 'en' ? 'New Batch Enrollment Open!' : 'নতুন ব্যাচে ভর্তি চলছে!'}
            </span>
            <span className="hidden sm:inline text-slate-400">·</span>
            <span className="hidden sm:inline">
              {currentLang === 'en' ? '8 Weeks to Fluency with Live Zoom Classes' : 'লাইভ ক্লাসে ৮ সপ্তাহে সাবলীল ইংরেজি'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAssessment}
              className="text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-1 font-medium cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentLang === 'en' ? 'Free Level Test' : 'ফ্রি লেভেল টেস্ট'}</span>
            </button>
            <span className="text-slate-600">|</span>
            <a
              href="tel:+8801700000000"
              className="flex items-center gap-1 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>+880 1894-772211</span>
            </a>
          </div>
        </div>

        {/* Mandatory 3-Zone Top Navigation Contract */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Single element Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-[#0B1B3D] font-black text-lg shadow-inner">
              SC
            </span>
            <span>
              SpeakCraft <span className="text-amber-400 font-medium">English</span>
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language toggle & Primary Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Bilingual Switcher */}
            <button
              onClick={onToggleLang}
              className="px-2.5 py-1.5 rounded-lg border border-slate-700 hover:border-amber-400/50 text-xs font-semibold text-slate-200 hover:text-amber-300 transition-all flex items-center gap-1.5 cursor-pointer bg-slate-900/60"
              title="Switch Language / ভাষা পরিবর্তন"
            >
              <Languages className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-bold">{currentLang === 'en' ? 'বাংলা' : 'EN'}</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenEnrollModal()}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-[#0B1B3D] bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              {currentLang === 'en' ? 'Enroll Now' : 'ভর্তি হোন'}
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#0B1B3D] text-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-slate-800">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <span className="font-bold text-lg text-white">
                  SpeakCraft <span className="text-amber-400">English</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-slate-200 hover:text-amber-400 py-1 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#testimonials"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-200 hover:text-amber-400 py-1 transition-colors"
                >
                  {currentLang === 'en' ? 'Testimonials' : 'সফল শিক্ষার্থীদের গল্প'}
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-200 hover:text-amber-400 py-1 transition-colors"
                >
                  {currentLang === 'en' ? 'Contact' : 'যোগাযোগ'}
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssessment();
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-amber-300 border border-amber-400/40 rounded-lg text-center hover:bg-amber-400/10 transition-colors"
              >
                {currentLang === 'en' ? 'Take Free Level Test' : 'ফ্রি লেভেল টেস্ট দিন'}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnrollModal();
                }}
                className="w-full py-3 px-4 text-sm font-bold text-[#0B1B3D] bg-amber-400 hover:bg-amber-300 rounded-lg text-center shadow transition-colors"
              >
                {currentLang === 'en' ? 'Enroll in Course (৳3,500)' : 'কোর্সে ভর্তি হোন (৳৩,৫০০)'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
