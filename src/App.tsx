import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { GrammarSection } from './components/GrammarSection';
import { VocabularySection } from './components/VocabularySection';
import { SpeakingPracticeSection } from './components/SpeakingPracticeSection';
import { IeltsSection } from './components/IeltsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { YouTubeLessonsSection } from './components/YouTubeLessonsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LevelAssessmentModal } from './components/LevelAssessmentModal';
import { RegistrationModal } from './components/RegistrationModal';
import { Language } from './types';
import { Sparkles, MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('bn'); // Default to Bangla for authentic Bangladeshi learner resonance
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for scroll-to-top button
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleLang = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const handleOpenEnrollModal = (courseId?: string) => {
    setSelectedCourseForEnroll(courseId);
    setIsEnrollModalOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Top Navbar */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onOpenEnrollModal={() => handleOpenEnrollModal()}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Professional Home Page / Hero */}
        <Hero
          currentLang={currentLang}
          onOpenEnrollModal={() => handleOpenEnrollModal('spoken-foundation')}
          onOpenAssessment={() => setIsAssessmentOpen(true)}
          onOpenVideoDemo={() => {
            const ytSection = document.getElementById('youtube');
            ytSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. About Us Section */}
        <AboutSection
          currentLang={currentLang}
          onOpenEnrollModal={() => handleOpenEnrollModal()}
        />

        {/* 3. Spoken English Courses */}
        <CoursesSection
          currentLang={currentLang}
          onEnroll={(courseId) => handleOpenEnrollModal(courseId)}
        />

        {/* 4. Grammar Lessons */}
        <GrammarSection currentLang={currentLang} />

        {/* 5. Vocabulary Learning */}
        <VocabularySection currentLang={currentLang} />

        {/* 6. Daily Speaking Practice */}
        <SpeakingPracticeSection currentLang={currentLang} />

        {/* 7. IELTS Preparation */}
        <IeltsSection
          currentLang={currentLang}
          onEnrollIelts={() => handleOpenEnrollModal('ielts-mastery')}
        />

        {/* 8. Student Testimonials */}
        <TestimonialsSection currentLang={currentLang} />

        {/* 9. YouTube Video Lessons */}
        <YouTubeLessonsSection currentLang={currentLang} />

        {/* 10. Contact and Course Registration */}
        <ContactSection
          currentLang={currentLang}
          onOpenEnrollModal={() => handleOpenEnrollModal()}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
        onOpenEnrollModal={() => handleOpenEnrollModal()}
      />

      {/* Interactive Free Level Assessment Modal */}
      <LevelAssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        currentLang={currentLang}
        onEnrollCourse={(courseId) => handleOpenEnrollModal(courseId)}
      />

      {/* Multi-step Course Registration & bKash Payment Modal */}
      <RegistrationModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        currentLang={currentLang}
        preselectedCourseId={selectedCourseForEnroll}
      />

      {/* Floating Action Quick Access Pill */}
      <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-none">
        {showScrollTop && (
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-full bg-white text-[#0B1B3D] border border-slate-300 shadow-lg flex items-center justify-center hover:bg-slate-50 transition-all pointer-events-auto cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setIsAssessmentOpen(true)}
            className="px-4 py-2.5 bg-[#0B1B3D] text-amber-300 hover:text-white border border-slate-700 font-bold text-xs rounded-full shadow-xl flex items-center gap-2 transition-all cursor-pointer hover:scale-102"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{currentLang === 'en' ? 'Free Level Test' : 'ফ্রি টেস্ট'}</span>
          </button>

          <a
            href="https://wa.me/8801894772211?text=Hello%20SpeakCraft,%20I%20want%20to%20learn%20more%20about%20your%20English%20courses."
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-all cursor-pointer hover:scale-105"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <MessageSquare className="w-5 h-5" />
          </a>
        </div>
      </aside>
    </div>
  );
}
