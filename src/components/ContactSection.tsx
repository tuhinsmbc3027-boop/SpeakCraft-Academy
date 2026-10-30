import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, ChevronDown, ChevronUp, CheckCircle, Clock } from 'lucide-react';
import { FAQS } from '../data/mockData';
import { Language } from '../types';

interface ContactSectionProps {
  currentLang: Language;
  onOpenEnrollModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang, onOpenEnrollModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setMessage('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-amber-600 mb-2 uppercase">
            <span>GET IN TOUCH WITH SPEAKCRAFT</span>
            <span aria-hidden="true">·</span>
            <span>DHAKA LEARNING HUB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mb-4">
            {currentLang === 'en'
              ? 'Have Questions? Talk to an Academic Advisor'
              : 'যেকোনো প্রশ্নে সরাসরি কথা বলুন আমাদের একাডেমিক টিমের সাথে'}
          </h2>
          <p className="text-base text-slate-600">
            {currentLang === 'en'
              ? 'We are here to help you select the ideal course, schedule a free level assessment, or resolve admission queries.'
              : 'সঠিক কোর্স নির্বাচন ও ফ্রি ওরিয়েন্টেশন ক্লাসের তথ্যের জন্য আমাদের বনানী ক্যাম্পাসে আসুন অথবা হোয়াটসঅ্যাপে মেসেজ দিন।'}
          </p>
        </div>

        {/* 2-Column Grid: Contact Details & Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-[#0B1B3D] mb-4">
                {currentLang === 'en' ? 'Admission & Counseling Center' : 'অফিস ও কাউন্সেলিং সেন্টার'}
              </h3>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Banani Campus, Dhaka</div>
                    <div className="text-slate-500 font-bangla mt-0.5">
                      লেভেল ৬, টাওয়ার ৭১, রোড ১১, বনানী, ঢাকা-১২১৩, বাংলাদেশ
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Call & WhatsApp Helpline</div>
                    <a
                      href="tel:+8801894772211"
                      className="text-amber-700 hover:underline font-mono font-semibold"
                    >
                      +880 1894-772211
                    </a>
                    <span className="text-slate-400 block text-[11px]">(সকাল ১০:০০ টা - রাত ৯:০০ টা)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Email Inquiries</div>
                    <a
                      href="mailto:admissions@speakcraftenglish.com"
                      className="text-slate-600 hover:text-amber-700 font-mono"
                    >
                      admissions@speakcraftenglish.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Online Live Classes</div>
                    <div className="text-slate-500">
                      Saturday – Thursday via Zoom Premium with live recording archive.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-3">
                <a
                  href="https://wa.me/8801894772211?text=Hello%20SpeakCraft,%20I%20have%20an%20inquiry%20about%20your%20English%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  onClick={onOpenEnrollModal}
                  className="py-2.5 px-4 bg-[#0B1B3D] hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  {currentLang === 'en' ? 'Enroll Directly' : 'সরাসরি ভর্তি'}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Send Query Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-[#0B1B3D] mb-1">
                {currentLang === 'en' ? 'Send Us an Academic Inquiry' : 'বার্তা পাঠান বা ফ্রি কাউন্সেলিং চান'}
              </h3>
              <p className="text-xs text-slate-600 font-bangla mb-6">
                আপনার নাম ও ফোন নম্বর লিখুন; আমাদের ট্রেইনার আগামী ২ ঘণ্টার মধ্যে কল দিয়ে আপনার উপযোগী কোর্স জানিয়ে দেবেন।
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                  <div className="font-bold text-emerald-800 text-base">
                    {currentLang === 'en' ? 'Message Sent Successfully!' : 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে!'}
                  </div>
                  <p className="text-xs text-emerald-700 font-bangla">
                    আমাদের একাডেমি কাউন্সেলর দ্রুত আপনার সাথে হোয়াটসঅ্যাপ বা ফোনে যোগাযোগ করবেন।
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        {currentLang === 'en' ? 'Your Name' : 'আপনার নাম'} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Shakib Al Hasan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B1B3D] text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        {currentLang === 'en' ? 'Phone / WhatsApp' : 'মোবাইল নম্বর'} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="018xxxxxxxx"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B1B3D] text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      {currentLang === 'en' ? 'Your Learning Goal / Question' : 'আপনার লক্ষ্য বা প্রশ্ন'}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={currentLang === 'en' ? 'e.g. I want to prepare for IELTS Speaking Band 7.5 or overcome office presentation fear...' : 'যেমন: আমি অফিসে কথা বলতে গেলে আটকে যাই, কোন ব্যাচে ভর্তি হলে ভালো হবে?'}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B1B3D] text-slate-900 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0B1B3D] hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>{currentLang === 'en' ? 'Request Free Call from Mentor' : 'মেন্টরের সাথে ফ্রি কাউন্সেলিং কল বুক করুন'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">
              {currentLang === 'en' ? 'Frequently Asked Questions' : 'সাধারণ জিজ্ঞাসা ও উত্তর'}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B3D]">
              {currentLang === 'en' ? 'Everything You Need to Know' : 'কোর্স সম্পর্কে আপনার যা জানা প্রয়োজন'}
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-slate-50/60 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#0B1B3D] hover:text-amber-700 transition-colors cursor-pointer"
                  >
                    <span className="font-bangla">{currentLang === 'en' ? faq.qEn : faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-amber-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed font-bangla border-t border-slate-100 pt-3">
                      {currentLang === 'en' ? faq.aEn : faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
