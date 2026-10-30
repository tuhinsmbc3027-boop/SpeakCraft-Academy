import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Play, Pause, RotateCcw, Volume2, Sparkles, CheckCircle, MessageSquare } from 'lucide-react';
import { SPEAKING_PROMPTS, DIALOGUE_ROLEPLAYS } from '../data/mockData';
import { speakText, isSpeechRecognitionSupported, createSpeechRecognizer } from '../utils/speech';
import { Language, SpeakingPrompt, DialogueRoleplay } from '../types';

interface SpeakingPracticeSectionProps {
  currentLang: Language;
}

export const SpeakingPracticeSection: React.FC<SpeakingPracticeSectionProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'prompt' | 'dialogue'>('prompt');
  
  // Prompt mode state
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [transcribedText, setTranscribedText] = useState('');
  const [hasSpeechSupport, setHasSpeechSupport] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognizerRef = useRef<any>(null);

  // Dialogue mode state
  const [selectedDialogueIndex, setSelectedDialogueIndex] = useState(0);
  const [activeDialogueLine, setActiveDialogueLine] = useState<number | null>(null);

  const currentPrompt = SPEAKING_PROMPTS[selectedPromptIndex];
  const currentDialogue = DIALOGUE_ROLEPLAYS[selectedDialogueIndex];

  useEffect(() => {
    setHasSpeechSupport(isSpeechRecognitionSupported());
  }, []);

  // Timer interval
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      handleStopRecording();
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const handleStartPractice = () => {
    setIsTimerRunning(true);
    setTranscribedText('');

    if (hasSpeechSupport) {
      try {
        const recognizer = createSpeechRecognizer(
          (text) => {
            setTranscribedText(text);
          },
          (err) => {
            console.warn('Speech recognition error:', err);
          },
          () => {
            setIsRecording(false);
          }
        );

        if (recognizer) {
          recognizerRef.current = recognizer;
          recognizer.start();
          setIsRecording(true);
        }
      } catch (err) {
        console.warn('Failed to start speech recognition', err);
      }
    } else {
      setIsRecording(true);
    }
  };

  const handleStopRecording = () => {
    setIsTimerRunning(false);
    setIsRecording(false);
    if (recognizerRef.current) {
      try {
        recognizerRef.current.stop();
      } catch {
        // stopped
      }
    }
  };

  const handleResetPractice = () => {
    handleStopRecording();
    setTimerSeconds(currentPrompt.durationSeconds);
    setTranscribedText('');
  };

  const handlePromptChange = (idx: number) => {
    handleResetPractice();
    setSelectedPromptIndex(idx);
    setTimerSeconds(SPEAKING_PROMPTS[idx].durationSeconds);
  };

  const handlePlayDialogueAudio = async (text: string, lineIndex: number) => {
    setActiveDialogueLine(lineIndex);
    await speakText(text, 0.9);
    setActiveDialogueLine(null);
  };

  // Word count and WPM calculation
  const wordCount = transcribedText.trim() ? transcribedText.trim().split(/\s+/).length : 0;
  const elapsed = currentPrompt.durationSeconds - timerSeconds;
  const wpm = elapsed > 0 ? Math.round((wordCount / elapsed) * 60) : 0;

  return (
    <section id="speaking" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-600 mb-2 uppercase">
            <span>INTERACTIVE SPEAKING STUDIO</span>
            <span aria-hidden="true">·</span>
            <span>OVERCOME HESITATION DAILY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mb-4">
            {currentLang === 'en'
              ? 'Daily Spoken English Practice Lab'
              : 'দৈনিক স্পিকিং প্র্যাকটিস ল্যাব ও ভয়েস অ্যানালাইজার'}
          </h2>
          <p className="text-base text-slate-600">
            {currentLang === 'en'
              ? 'Practice real spontaneous speech. Speak into your microphone, measure your fluency speed, or train with real-world corporate dialogue roleplays.'
              : 'মাইক্রোফোনে কথা বলুন, স্পিকিং স্পিড (WPM) মাপুন এবং বিভিন্ন রিয়েল-লাইফ সিচুয়েশনে কথা বলার অভ্যাস ঝালিয়ে নিন।'}
          </p>

          {/* Mode Switcher */}
          <div className="mt-8 inline-flex items-center p-1 bg-slate-100 rounded-xl border border-slate-300">
            <button
              onClick={() => setActiveTab('prompt')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'prompt'
                  ? 'bg-[#0B1B3D] text-amber-300 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {currentLang === 'en' ? 'Timed Speaking Challenge' : 'টাইমড স্পিকিং চ্যালেঞ্জ'}
            </button>
            <button
              onClick={() => setActiveTab('dialogue')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'dialogue'
                  ? 'bg-[#0B1B3D] text-amber-300 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {currentLang === 'en' ? 'Dialogue Roleplay Drills' : 'রোলপ্লে কনভারসেশন ড্রিল'}
            </button>
          </div>
        </div>

        {activeTab === 'prompt' ? (
          /* Timed Speaking Challenge View */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Prompt Topic Card */}
            <div className="lg:col-span-7 space-y-6">
              {/* Topic selector */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {SPEAKING_PROMPTS.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => handlePromptChange(idx)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                      selectedPromptIndex === idx
                        ? 'bg-[#0B1B3D] text-white border-[#0B1B3D]'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    Topic {idx + 1}: {p.topic.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                    {currentPrompt.topic}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    Target Time: {currentPrompt.durationSeconds}s
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0B1B3D] mb-2 leading-snug">
                  "{currentPrompt.prompt}"
                </h3>
                <p className="text-xs text-slate-600 font-bangla mb-6">
                  {currentPrompt.promptBn}
                </p>

                {/* Guiding points */}
                <div className="mb-6">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    {currentLang === 'en' ? 'Questions to Guide Your Speech:' : 'কী কী বিষয়ে কথা বলবেন:'}
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {currentPrompt.guidingQuestions.map((q, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Vocabulary to use */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs">
                  <span className="font-bold text-[#0B1B3D]">
                    {currentLang === 'en' ? 'Recommended Power Words: ' : 'ব্যবহার করার মতো স্মার্ট শব্দ: '}
                  </span>
                  <span className="text-slate-600 font-medium">
                    {currentPrompt.recommendedVocabulary.join(' · ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Live Voice Recorder / Fluency Tracker */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0B1B3D] text-white border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        isRecording ? 'bg-rose-500 animate-ping' : 'bg-slate-500'
                      }`}
                    />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      {isRecording ? 'Listening / Recording...' : 'Ready to Practice'}
                    </span>
                  </div>

                  {/* Countdown Timer */}
                  <div className="text-2xl font-black font-mono text-amber-400 tabular-nums">
                    {Math.floor(timerSeconds / 60)}:
                    {(timerSeconds % 60).toString().padStart(2, '0')}
                  </div>
                </div>

                {/* Big Recording Button */}
                <div className="py-8 text-center">
                  {!isTimerRunning ? (
                    <button
                      onClick={handleStartPractice}
                      className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0B1B3D] flex items-center justify-center mx-auto shadow-xl hover:scale-105 transition-all cursor-pointer"
                      title="Start Speaking Practice"
                    >
                      <Mic className="w-8 h-8" />
                    </button>
                  ) : (
                    <button
                      onClick={handleStopRecording}
                      className="w-20 h-20 rounded-full bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center mx-auto shadow-xl hover:scale-105 transition-all cursor-pointer animate-pulse"
                      title="Stop Recording"
                    >
                      <MicOff className="w-8 h-8" />
                    </button>
                  )}

                  <div className="mt-4 text-xs text-slate-300 font-medium">
                    {isRecording
                      ? currentLang === 'en' ? 'Speaking now... Click button when finished.' : 'এখন কথা বলুন... শেষ হলে বাটনে চাপ দিন।'
                      : currentLang === 'en' ? 'Press microphone to begin your 60-second speech' : 'মাইক্রোফোনে ক্লিক করে কথা বলা শুরু করুন'}
                  </div>
                </div>

                {/* Live Speech Recognition Transcript */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 min-h-24 max-h-40 overflow-y-auto mb-4 text-xs text-slate-300 leading-relaxed font-mono">
                  {transcribedText ? (
                    <span>"{transcribedText}"</span>
                  ) : (
                    <span className="text-slate-500 italic">
                      {hasSpeechSupport
                        ? '(Your transcribed words will appear here in real-time as you speak...)'
                        : '(Live speech preview active. Speak clearly into your mic to test fluency.)'}
                    </span>
                  )}
                </div>

                {/* Metrics Bar */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-center">
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                    <div className="text-base font-bold text-white tabular-nums">
                      {wordCount}
                    </div>
                    <div className="text-[11px] text-slate-400">Total Words Spoken</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                    <div className="text-base font-bold text-amber-400 tabular-nums">
                      {wpm} WPM
                    </div>
                    <div className="text-[11px] text-slate-400">Speed (Words/Min)</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <button
                    onClick={handleResetPractice}
                    className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Timer</span>
                  </button>

                  <span className="text-amber-400 font-medium">Ideal Pace: 110-140 WPM</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Dialogue Roleplay View */
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Dialogue Scenario Selector */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              {DIALOGUE_ROLEPLAYS.map((d, idx) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDialogueIndex(idx)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
                    selectedDialogueIndex === idx
                      ? 'bg-[#0B1B3D] text-amber-300 border-[#0B1B3D] shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Scenario {idx + 1}: {d.scenario.split(' ')[0]}
                </button>
              ))}
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">
                {currentDialogue.scenario}
              </div>
              <p className="text-xs text-slate-600 font-bangla mb-6">
                {currentDialogue.scenarioBn}
              </p>

              {/* Dialogue Transcript */}
              <div className="space-y-4">
                {currentDialogue.lines.map((line, idx) => {
                  const isPlaying = activeDialogueLine === idx;
                  const isSpeakerA = line.speaker === currentDialogue.roleA.split(' ')[0];

                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border transition-colors ${
                        isPlaying
                          ? 'bg-amber-50 border-amber-300'
                          : isSpeakerA
                          ? 'bg-white border-slate-200'
                          : 'bg-blue-50/50 border-blue-200/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-[#0B1B3D]">
                          {line.speaker}
                        </span>
                        <button
                          onClick={() => handlePlayDialogueAudio(line.text, idx)}
                          className="text-xs text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer font-semibold"
                          title="Listen to audio"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>{isPlaying ? 'Playing...' : 'Shadow Audio'}</span>
                        </button>
                      </div>

                      <p className="text-sm font-medium text-slate-900 mb-1">
                        "{line.text}"
                      </p>
                      <p className="text-xs text-slate-500 font-bangla">
                        {line.textBn}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
