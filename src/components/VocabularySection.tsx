import React, { useState } from 'react';
import { Volume2, Search, Bookmark, BookmarkCheck, Sparkles, RotateCw } from 'lucide-react';
import { VOCABULARY_LIST } from '../data/mockData';
import { speakText } from '../utils/speech';
import { Language, VocabularyWord } from '../types';

interface VocabularySectionProps {
  currentLang: Language;
}

export const VocabularySection: React.FC<VocabularySectionProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [playingWordId, setPlayingWordId] = useState<string | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('speakcraft_saved_vocab');
      return saved ? JSON.parse(saved) : ['v1', 'v4'];
    } catch {
      return ['v1', 'v4'];
    }
  });
  const [flashcardMode, setFlashcardMode] = useState<boolean>(false);
  const [revealedCardIds, setRevealedCardIds] = useState<Record<string, boolean>>({});

  const toggleBookmark = (id: string) => {
    const next = bookmarkedIds.includes(id)
      ? bookmarkedIds.filter((item) => item !== id)
      : [...bookmarkedIds, id];
    setBookmarkedIds(next);
    try {
      localStorage.setItem('speakcraft_saved_vocab', JSON.stringify(next));
    } catch {
      // storage error ignored
    }
  };

  const handlePronounce = async (word: string, id: string) => {
    setPlayingWordId(id);
    await speakText(word, 0.85);
    setPlayingWordId(null);
  };

  const toggleRevealCard = (id: string) => {
    setRevealedCardIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredWords = VOCABULARY_LIST.filter((w) => {
    const matchesCategory =
      selectedCategory === 'all'
        ? true
        : selectedCategory === 'saved'
        ? bookmarkedIds.includes(w.id)
        : w.category === selectedCategory;

    const matchesSearch =
      w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.meaningBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.definitionEn.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="vocabulary" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-600 mb-2 uppercase">
            <span>HIGH-RETENTION VOCABULARY ENGINE</span>
            <span aria-hidden="true">·</span>
            <span>WITH NATIVE AUDIO PRONUNCIATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mb-4">
            {currentLang === 'en'
              ? 'Active Spoken Vocabulary & Idioms'
              : 'স্মার্ট স্পোকেন ভোকাবুলারি ও অডিও প্রোনাউনসিয়েশন'}
          </h2>
          <p className="text-base text-slate-600">
            {currentLang === 'en'
              ? 'Learn words in authentic context with natural pronunciation, Bengali meanings, and instant sentence applications.'
              : 'প্রতিটি শব্দের সঠিক উচ্চারণ শুনুন, বাংলায় সহজ অর্থ ও বাস্তব বাক্য প্রয়োগের মাধ্যমে সহজে আয়ত্ত করুন।'}
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl border border-slate-300">
            {[
              { id: 'all', label: currentLang === 'en' ? 'All Words' : 'সব শব্দ' },
              { id: 'daily', label: currentLang === 'en' ? 'Daily Spoken' : 'দৈনন্দিন স্পোকেন' },
              { id: 'corporate', label: currentLang === 'en' ? 'Corporate & Office' : 'কর্পোরেট' },
              { id: 'ielts', label: currentLang === 'en' ? 'IELTS High-Band' : 'আইইএলটিএস' },
              { id: 'idioms', label: currentLang === 'en' ? 'Idioms & Phrases' : 'বাগধারা ও ফ্রেজ' },
              { id: 'saved', label: `${currentLang === 'en' ? 'Saved' : 'সংরক্ষিত'} (${bookmarkedIds.length})` },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-white text-[#0B1B3D] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar & Flashcard mode switch */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={currentLang === 'en' ? 'Search word or Bangla meaning...' : 'শব্দ বা বাংলা অর্থ খুঁজুন...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent text-slate-900 placeholder:text-slate-400"
              />
            </div>

            <button
              onClick={() => setFlashcardMode(!flashcardMode)}
              className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                flashcardMode
                  ? 'bg-amber-400 text-[#0B1B3D] border-amber-500 font-bold'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
              title="Toggle Flashcard Study Mode"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>{flashcardMode ? 'Flashcard Mode: ON' : 'Flashcard Mode'}</span>
            </button>
          </div>
        </div>

        {/* Vocabulary Cards Grid */}
        {filteredWords.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm">
              {currentLang === 'en' ? 'No words found matching your query.' : 'কোনো শব্দ পাওয়া যায়নি।'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWords.map((item: VocabularyWord) => {
              const isSaved = bookmarkedIds.includes(item.id);
              const isRevealed = revealedCardIds[item.id] || !flashcardMode;
              const isAudioPlaying = playingWordId === item.id;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  {/* Card Top: Word, Category & Pronunciation */}
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-[#0B1B3D] tracking-tight">
                          {item.word}
                        </h3>
                        <button
                          onClick={() => handlePronounce(item.word, item.id)}
                          className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                            isAudioPlaying
                              ? 'bg-amber-400 text-[#0B1B3D] border-amber-500 animate-pulse'
                              : 'bg-slate-50 hover:bg-amber-50 text-slate-600 hover:text-amber-700 border-slate-200'
                          }`}
                          title="Listen to pronunciation"
                          aria-label={`Listen to pronunciation for ${item.word}`}
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => toggleBookmark(item.id)}
                        className="text-slate-400 hover:text-amber-500 transition-colors p-1 cursor-pointer"
                        title={isSaved ? 'Remove from saved' : 'Save word'}
                      >
                        {isSaved ? (
                          <BookmarkCheck className="w-4 h-4 text-amber-500 fill-amber-500" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Phonetic & Part of speech */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-4">
                      <span>{item.phonetic}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-sans italic">{item.partOfSpeech}</span>
                    </div>

                    {/* Flashcard Hidden / Revealed state */}
                    {!isRevealed ? (
                      <div className="py-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200 mb-4">
                        <div className="text-xs text-slate-500 mb-2">
                          {currentLang === 'en' ? 'Bangla meaning hidden' : 'বাংলা অর্থ আড়াল করা আছে'}
                        </div>
                        <button
                          onClick={() => toggleRevealCard(item.id)}
                          className="px-3 py-1.5 bg-[#0B1B3D] text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
                        >
                          Reveal Meaning / অর্থ দেখুন
                        </button>
                      </div>
                    ) : (
                      <>
                        {/* Bengali Meaning */}
                        <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/80 mb-3">
                          <div className="text-xs text-amber-800 font-bold uppercase tracking-wider mb-0.5">
                            বাংলা অর্থ:
                          </div>
                          <div className="text-sm font-bold text-slate-900 font-bangla">
                            {item.meaningBn}
                          </div>
                        </div>

                        {/* English definition */}
                        <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                          {item.definitionEn}
                        </p>

                        {/* Example sentence with speech button */}
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-4">
                          <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                            <span>{currentLang === 'en' ? 'Sentence Usage:' : 'বাক্যে প্রয়োগ:'}</span>
                            <button
                              onClick={() => handlePronounce(item.exampleSentence, `ex-${item.id}`)}
                              className="text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-pointer font-sans"
                            >
                              <Volume2 className="w-3 h-3" />
                              <span>Listen</span>
                            </button>
                          </div>
                          <p className="text-xs font-medium text-slate-800 mb-1 leading-relaxed">
                            "{item.exampleSentence}"
                          </p>
                          <p className="text-xs text-slate-500 font-bangla">
                            {item.exampleSentenceBn}
                          </p>
                        </div>

                        {/* Synonyms */}
                        {item.synonyms.length > 0 && (
                          <div className="text-[11px] text-slate-500">
                            <span className="font-semibold text-slate-700">Synonyms: </span>
                            {item.synonyms.join(', ')}
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {flashcardMode && isRevealed && (
                    <button
                      onClick={() => toggleRevealCard(item.id)}
                      className="mt-4 text-center text-xs text-slate-400 hover:text-slate-600 underline cursor-pointer"
                    >
                      Hide meaning again
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
