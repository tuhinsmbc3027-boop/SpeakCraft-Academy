import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import { ASSESSMENT_QUESTIONS } from '../data/mockData';
import { Language } from '../types';

interface LevelAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onEnrollCourse: (courseId: string) => void;
}

export const LevelAssessmentModal: React.FC<LevelAssessmentModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onEnrollCourse,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  if (!isOpen) return null;

  const currentQ = ASSESSMENT_QUESTIONS[currentStep];

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...selectedAnswers];
    updated[currentStep] = optionIndex;
    setSelectedAnswers(updated);
  };

  const handleNext = () => {
    if (currentStep < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers([]);
    setCurrentStep(0);
    setShowResult(false);
  };

  // Calculate score
  const correctCount = selectedAnswers.reduce((total, answerIndex, qIndex) => {
    if (answerIndex === ASSESSMENT_QUESTIONS[qIndex].correctIndex) {
      return total + 1;
    }
    return total;
  }, 0);

  // Determine Level & Recommendation
  const getLevelDetails = () => {
    if (correctCount >= 9) {
      return {
        level: 'C1 - Advanced (উচ্চস্তর)',
        badge: 'Proficient Speaker',
        descEn: 'Exceptional command of English! You understand nuanced grammar and high-level vocabulary.',
        descBn: 'অসাধারণ ইংরেজি দক্ষতা! আপনার ব্যাকরণ ও ভোকাবুলারির দখল অত্যন্ত মজবুত।',
        recommendedCourseId: 'corporate-english',
        recommendedCourseName: 'Corporate English & Workplace Communication',
        recommendedCourseNameBn: 'কর্পোরেট ইংলিশ ও কর্মক্ষেত্র যোগাযোগ'
      };
    } else if (correctCount >= 7) {
      return {
        level: 'B2 - Upper Intermediate (উচ্চ-মধ্যম)',
        badge: 'Fluent Communicator',
        descEn: 'Strong grasp of fundamentals with minor hesitation in complex structures or IELTS tasks.',
        descBn: 'আপনার ভিত্তি অনেক ভালো। আইইএলটিএস ব্যান্ড ৭.৫+ বা প্রফেশনাল এক্সেন্টের জন্য প্রস্তুতি নিন।',
        recommendedCourseId: 'ielts-mastery',
        recommendedCourseName: 'IELTS Speaking & Writing Mastery',
        recommendedCourseNameBn: 'আইইএলটিএস স্পিকিং ও রাইটিং মাস্টারি'
      };
    } else if (correctCount >= 5) {
      return {
        level: 'B1 - Intermediate (মধ্যম স্তর)',
        badge: 'Developing Fluency',
        descEn: 'Good sentence formation, but needs active practice to overcome translation in mind.',
        descBn: 'আপনি বাক্য গঠন পারেন কিন্তু মাথায় বাংলা অনুবাদ করার কারণে কথা বলার সময় ইতস্তত বোধ করেন।',
        recommendedCourseId: 'spoken-foundation',
        recommendedCourseName: 'Spoken English Foundation (জিরো থেকে ফ্লুয়েন্ট)',
        recommendedCourseNameBn: 'স্পোকেন ইংলিশ ফাউন্ডেশন (জিরো থেকে ফ্লুয়েন্ট)'
      };
    } else {
      return {
        level: 'A2 - Elementary (প্রাথমিক স্তর)',
        badge: 'Foundation Required',
        descEn: 'Frequent confusion with tenses and prepositions. Start with foundational spoken drills.',
        descBn: 'টেন্স ও সাধারণ ব্যাকরণের ভুলের কারণে কথা বলতে ভয় পাচ্ছেন। ফাউন্ডেশন কোর্স আপনার জন্য সেরা।',
        recommendedCourseId: 'spoken-foundation',
        recommendedCourseName: 'Spoken English Foundation (জিরো থেকে ফ্লুয়েন্ট)',
        recommendedCourseNameBn: 'স্পোকেন ইংলিশ ফাউন্ডেশন (জিরো থেকে ফ্লুয়েন্ট)'
      };
    }
  };

  const levelInfo = getLevelDetails();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[#0B1B3D] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold tracking-wide">
              <span>SPEAKCRAFT DIAGNOSTIC TEST</span>
              <span aria-hidden="true">·</span>
              <span>10 RAPID QUESTIONS</span>
            </div>
            <h3 className="text-lg font-bold text-white">
              {currentLang === 'en' ? 'Free English Level Assessment' : 'ফ্রি ইংরেজি লেভেল অ্যাসেসমেন্ট টেস্ট'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {!showResult ? (
          <div className="p-6">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
                <span>
                  {currentLang === 'en' ? 'Question' : 'প্রশ্ন'} {currentStep + 1} of {ASSESSMENT_QUESTIONS.length}
                </span>
                <span className="font-semibold text-slate-700">
                  {Math.round(((currentStep + 1) / ASSESSMENT_QUESTIONS.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / ASSESSMENT_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Box */}
            <div className="mb-6">
              <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">
                {currentQ.skill} skill
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                {currentQ.question}
              </h4>
              <p className="text-sm text-slate-600 font-bangla mb-4">
                {currentQ.questionBn}
              </p>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentStep] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'border-[#0B1B3D] bg-blue-50/70 text-[#0B1B3D] font-semibold shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60 text-slate-800'
                      }`}
                    >
                      <span className="text-sm">{option}</span>
                      <span
                        className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
                          isSelected
                            ? 'border-[#0B1B3D] bg-[#0B1B3D] text-white'
                            : 'border-slate-300 text-transparent'
                        }`}
                      >
                        ✓
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  currentStep === 0
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {currentLang === 'en' ? 'Previous' : 'পূর্ববর্তী'}
              </button>

              <button
                onClick={handleNext}
                disabled={selectedAnswers[currentStep] === undefined}
                className={`px-5 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedAnswers[currentStep] === undefined
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-[#0B1B3D] text-white hover:bg-slate-800 shadow-sm'
                }`}
              >
                <span>
                  {currentStep === ASSESSMENT_QUESTIONS.length - 1
                    ? currentLang === 'en' ? 'See My Results' : 'ফলাফল দেখুন'
                    : currentLang === 'en' ? 'Next Question' : 'পরবর্তী প্রশ্ন'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Result Screen */
          <div className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 text-amber-600 mx-auto flex items-center justify-center mb-4">
              <Award className="w-8 h-8" />
            </div>

            <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-1">
              {currentLang === 'en' ? 'Your CEFR Proficiency Level' : 'আপনার বর্তমান ইংরেজি স্তর'}
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-2">
              {levelInfo.level}
            </h4>

            <div className="inline-block px-3 py-1 bg-blue-50 text-[#0B1B3D] font-bold text-sm rounded-lg mb-4">
              Score: {correctCount} / 10 ({Math.round((correctCount / 10) * 100)}%)
            </div>

            <p className="text-sm text-slate-700 max-w-lg mx-auto mb-2">
              {currentLang === 'en' ? levelInfo.descEn : levelInfo.descBn}
            </p>
            <p className="text-xs text-slate-500 font-bangla mb-6">
              প্রতিটি ক্লাসের ওয়ান-অন-ওয়ান লাইভ স্পিকিং ড্রিলসের মাধ্যমে দ্রুত আপনার পরবর্তী লক্ষ্য অর্জিত হবে।
            </p>

            {/* Recommended Course Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left mb-6 max-w-lg mx-auto">
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">
                {currentLang === 'en' ? '★ Recommended Course for You' : '★ আপনার জন্য সেরা কোর্স'}
              </div>
              <div className="text-base font-bold text-slate-900 mb-1">
                {currentLang === 'en' ? levelInfo.recommendedCourseName : levelInfo.recommendedCourseNameBn}
              </div>
              <div className="text-xs text-slate-500 mb-3">
                {currentLang === 'en' ? 'Tailored to elevate you to the next tier with guaranteed speaking confidence.' : 'আপনার দুর্বলতা কাটিয়ে দ্রুত ফ্লুয়েন্ট হওয়ার জন্য বিশেষভাবে সাজানো।'}
              </div>
              <button
                onClick={() => {
                  onClose();
                  onEnrollCourse(levelInfo.recommendedCourseId);
                }}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0B1B3D] font-bold text-xs rounded-lg shadow-sm transition-all cursor-pointer"
              >
                {currentLang === 'en' ? 'Enroll in Recommended Course (৳3,500)' : 'রেকমেন্ডেড কোর্সে ভর্তি হোন (৳৩,৫০০)'}
              </button>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{currentLang === 'en' ? 'Retake Test' : 'পুনরায় টেস্ট দিন'}</span>
              </button>
              <span className="text-slate-300">·</span>
              <button
                onClick={onClose}
                className="text-xs text-slate-600 hover:text-slate-900 font-medium cursor-pointer"
              >
                {currentLang === 'en' ? 'Close Window' : 'উইন্ডো বন্ধ করুন'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
