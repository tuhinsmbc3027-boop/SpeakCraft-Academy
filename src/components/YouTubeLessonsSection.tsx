import React, { useState } from 'react';
import { Play, Clock, CheckCircle2, X, ExternalLink, Sparkles } from 'lucide-react';
import { YOUTUBE_LESSONS } from '../data/mockData';
import { Language, VideoLesson } from '../types';

interface YouTubeLessonsSectionProps {
  currentLang: Language;
}

export const YouTubeLessonsSection: React.FC<YouTubeLessonsSectionProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeVideo, setActiveVideo] = useState<VideoLesson | null>(null);

  const filteredVideos = YOUTUBE_LESSONS.filter((v) => {
    if (selectedCategory === 'all') return true;
    return v.category === selectedCategory;
  });

  return (
    <section id="youtube" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-600 mb-2 uppercase">
            <span>FREE VIDEO MASTERCLASSES</span>
            <span aria-hidden="true">·</span>
            <span>OVER 120,000+ SUBSCRIBERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mb-4">
            {currentLang === 'en'
              ? 'Watch Curated English Video Lessons'
              : 'স্পিকক্রাফট ইউটিউব ফ্রি ভিডিও লেসন'}
          </h2>
          <p className="text-base text-slate-600">
            {currentLang === 'en'
              ? 'Bite-sized high-impact lessons taught in clear English and Bengali. Fix mistakes, expand vocabulary, and practice on your own schedule.'
              : 'বাঙালি শিক্ষার্থীদের অতি পরিচিত ভুলত্রুটি এবং দ্রুত ফ্লুয়েন্ট হওয়ার পরীক্ষিত টেকনিক নিয়ে আমাদের স্পেশাল ভিডিও ক্লাস।'}
          </p>

          {/* Category Filter */}
          <div className="mt-8 inline-flex items-center p-1 bg-slate-200/80 rounded-xl border border-slate-300">
            {[
              { id: 'all', label: currentLang === 'en' ? 'All Videos' : 'সব ভিডিও' },
              { id: 'spoken', label: currentLang === 'en' ? 'Fluency Hacks' : 'ফ্লুয়েন্সি হ্যাকস' },
              { id: 'mistakes', label: currentLang === 'en' ? 'Common Mistakes' : 'কমন ভুলত্রুটি' },
              { id: 'ielts', label: currentLang === 'en' ? 'IELTS Speaking' : 'আইইএলটিএস' },
              { id: 'vocabulary', label: currentLang === 'en' ? 'Corporate Phrasing' : 'কর্পোরেট ফ্রেজ' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-white text-[#0B1B3D] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVideos.map((video: VideoLesson) => (
            <div
              key={video.id}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Video Mock/Poster Frame */}
                <div
                  onClick={() => setActiveVideo(video)}
                  className="relative aspect-video bg-[#071126] cursor-pointer overflow-hidden flex items-center justify-center group-hover:opacity-95 transition-opacity"
                >
                  {/* Stylized Video Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1B3D] via-[#0F275A] to-slate-900 opacity-90" />
                  
                  {/* Decorative soundwaves / geometry */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-15">
                    <div className="w-48 h-48 rounded-full border border-amber-400" />
                    <div className="w-64 h-64 rounded-full border border-amber-400 absolute" />
                  </div>

                  {/* Play Button Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-amber-400 text-[#0B1B3D] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-amber-300 transition-all">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 right-3 z-10 bg-black/80 text-white text-[11px] font-mono font-semibold px-2 py-1 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0B1B3D] mb-2 leading-snug group-hover:text-amber-700 transition-colors">
                    {currentLang === 'en' ? video.title : video.titleBn}
                  </h3>
                  <p className="text-xs text-slate-600 mb-4 font-bangla leading-relaxed">
                    {currentLang === 'en' ? video.summaryEn : video.summaryBn}
                  </p>

                  {/* Key Takeaways */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wide">
                      {currentLang === 'en' ? 'Key Learning Points:' : 'ক্লাসের মূল পয়েন্টসমূহ:'}
                    </div>
                    {video.keyTakeaways.slice(0, 3).map((pt, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-bangla">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveVideo(video)}
                  className="w-full py-2.5 px-4 rounded-xl border border-[#0B1B3D] text-[#0B1B3D] hover:bg-[#0B1B3D] hover:text-white font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{currentLang === 'en' ? 'Watch Full Lesson Video' : 'সম্পূর্ণ ভিডিও ক্লাস দেখুন'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 bg-[#0B1B3D] text-white flex items-center justify-between border-b border-slate-800">
              <div className="font-bold text-sm truncate pr-4 text-white">
                {currentLang === 'en' ? activeVideo.title : activeVideo.titleBn}
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Notes */}
            <div className="p-6 bg-slate-900 text-white">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                Class Summary & Notes
              </div>
              <p className="text-xs text-slate-300 font-bangla mb-4 leading-relaxed">
                {currentLang === 'en' ? activeVideo.summaryEn : activeVideo.summaryBn}
              </p>

              <div className="flex flex-wrap gap-2">
                {activeVideo.keyTakeaways.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs bg-slate-800 text-slate-200 px-3 py-1 rounded-lg border border-slate-700 font-bangla"
                  >
                    • {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
