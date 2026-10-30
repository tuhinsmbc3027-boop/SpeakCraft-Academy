import React, { useState } from 'react';
import { Check, Clock, Calendar, ChevronDown, ChevronUp, Sparkles, ArrowRight } from 'lucide-react';
import { COURSES } from '../data/mockData';
import { Language, Course } from '../types';

interface CoursesSectionProps {
  currentLang: Language;
  onEnroll: (courseId: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ currentLang, onEnroll }) => {
  const [filter, setFilter] = useState<string>('all');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>('spoken-foundation');

  const filteredCourses = COURSES.filter((c) => {
    if (filter === 'all') return true;
    if (filter === 'spoken') return c.id.includes('spoken') || c.id.includes('phonetics');
    if (filter === 'corporate') return c.id.includes('corporate');
    if (filter === 'ielts') return c.id.includes('ielts');
    return true;
  });

  const toggleSyllabus = (courseId: string) => {
    setExpandedCourseId(expandedCourseId === courseId ? null : courseId);
  };

  return (
    <section id="courses" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-600 mb-2 uppercase">
            <span>PREMIUM BATCHES · 2026</span>
            <span aria-hidden="true">·</span>
            <span>LIVE INTERACTIVE TRAINING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mb-4">
            {currentLang === 'en'
              ? 'Structured Spoken English & IELTS Courses'
              : 'প্রফেশনাল স্পোকেন ইংলিশ ও আইইএলটিএস কোর্সসমূহ'}
          </h2>
          <p className="text-base text-slate-600">
            {currentLang === 'en'
              ? 'Every course includes live Zoom classes, 1-on-1 breakout speaking practice, lifetime recorded lectures, and personalized mentor feedback.'
              : 'প্রতিটি কোর্সে রয়েছে জুম লাইভ ক্লাস, ব্রেকআউট রুমে স্পিকিং প্র্যাকটিস, লেকচার শিট এবং মেন্টরদের নিয়মিত মনিটরিং।'}
          </p>

          {/* Interactive Filter Tabs */}
          <div className="mt-8 inline-flex items-center p-1 bg-slate-200/80 rounded-xl border border-slate-300">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-[#0B1B3D] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {currentLang === 'en' ? 'All Courses' : 'সব কোর্স'}
            </button>
            <button
              onClick={() => setFilter('spoken')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'spoken'
                  ? 'bg-white text-[#0B1B3D] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {currentLang === 'en' ? 'Spoken English' : 'স্পোকেন ইংলিশ'}
            </button>
            <button
              onClick={() => setFilter('corporate')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'corporate'
                  ? 'bg-white text-[#0B1B3D] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {currentLang === 'en' ? 'Corporate & Career' : 'কর্পোরেট কমিউনিকেশন'}
            </button>
            <button
              onClick={() => setFilter('ielts')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'ielts'
                  ? 'bg-white text-[#0B1B3D] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {currentLang === 'en' ? 'IELTS Prep' : 'আইইএলটিএস'}
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {filteredCourses.map((course: Course) => {
            const isExpanded = expandedCourseId === course.id;

            return (
              <div
                key={course.id}
                className={`rounded-2xl bg-white border transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between overflow-hidden ${
                  course.popular
                    ? 'border-amber-400/80 ring-1 ring-amber-400/40'
                    : 'border-slate-200'
                }`}
              >
                {/* Course Header Banner */}
                <div className="p-6 sm:p-7 border-b border-slate-100">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      {course.popular && (
                        <div className="text-[11px] font-bold text-amber-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                          <span>{currentLang === 'en' ? 'Most Popular in Bangladesh' : 'শিক্ষার্থীদের পছন্দের শীর্ষে'}</span>
                        </div>
                      )}
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B3D]">
                        {currentLang === 'en' ? course.title : course.titleBn}
                      </h3>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tabular-nums">
                        ৳{course.priceBDT.toLocaleString()}
                      </div>
                      <div className="text-xs text-slate-400 line-through tabular-nums">
                        ৳{course.originalPriceBDT.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-4 leading-relaxed font-bangla">
                    {currentLang === 'en' ? course.tagline : course.taglineBn}
                  </p>

                  {/* Metadata Chips (Clean unboxed metadata) */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-500 pt-2 border-t border-slate-100 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>{course.duration}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      <span>{course.batchType}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-700 font-semibold">{course.classes}</span>
                  </div>
                </div>

                {/* Course Features */}
                <div className="p-6 sm:p-7 bg-white flex-1">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                    {currentLang === 'en' ? 'What you will master:' : 'কোর্সে যা যা শিখবেন:'}
                  </div>
                  <ul className="space-y-2.5 mb-6 text-sm text-slate-700">
                    {(currentLang === 'en' ? course.features : course.featuresBn).map(
                      (feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 font-bangla">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      )
                    )}
                  </ul>

                  {/* Expandable Syllabus Section */}
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => toggleSyllabus(course.id)}
                      className="w-full flex items-center justify-between py-2 text-xs font-bold text-[#0B1B3D] hover:text-amber-600 transition-colors cursor-pointer"
                    >
                      <span>
                        {isExpanded
                          ? currentLang === 'en' ? 'Hide Curriculum Syllabus' : 'সিলেবাস আড়াল করুন'
                          : currentLang === 'en' ? 'View Weekly Curriculum & Topics' : 'সাপ্তাহিক ক্লাস সিলেবাস দেখুন'}
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 space-y-3 pt-2 text-xs">
                        {course.curriculum.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-slate-50 border border-slate-200"
                          >
                            <div className="font-bold text-[#0B1B3D] mb-1">
                              {item.week}: {currentLang === 'en' ? item.topic : item.topicBn}
                            </div>
                            <div className="text-slate-600 leading-relaxed font-bangla">
                              {item.details}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Course Footer Action */}
                <div className="p-6 sm:p-7 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-bangla">
                    {currentLang === 'en'
                      ? 'Live on Zoom + bKash / Nagad Instant Enrollment'
                      : 'জুম লাইভ ক্লাস · বিকাশ/নগদে ভর্তি'}
                  </div>

                  <button
                    onClick={() => onEnroll(course.id)}
                    className="px-5 py-2.5 bg-[#0B1B3D] hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <span>{currentLang === 'en' ? 'Enroll Now' : 'ভর্তি হোন'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
