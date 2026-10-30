import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Copy, Check, MessageSquare } from 'lucide-react';
import { COURSES } from '../data/mockData';
import { Language } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  preselectedCourseId?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  preselectedCourseId,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [copiedBkash, setCopiedBkash] = useState(false);

  // Form states
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Dhaka');
  const [ageGroup, setAgeGroup] = useState('22-26');
  const [selectedCourseId, setSelectedCourseId] = useState(preselectedCourseId || COURSES[0].id);
  const [selectedBatchTime, setSelectedBatchTime] = useState('evening');
  const [paymentOption, setPaymentOption] = useState<'bkash' | 'nagad' | 'trial'>('bkash');
  const [trxId, setTrxId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const activeCourse = COURSES.find((c) => c.id === selectedCourseId) || COURSES[0];

  const handleCopyBkash = () => {
    navigator.clipboard.writeText('01894772211');
    setCopiedBkash(true);
    setTimeout(() => setCopiedBkash(false), 2000);
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setErrorMsg(currentLang === 'en' ? 'Please enter your name and phone number.' : 'অনুগ্রহ করে আপনার নাম ও ফোন নম্বর লিখুন।');
      return;
    }
    setErrorMsg('');
    setStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentOption !== 'trial' && !trxId.trim()) {
      setErrorMsg(currentLang === 'en' ? 'Please enter the bKash/Nagad Transaction ID (TrxID).' : 'অনুগ্রহ করে পেমেন্ট ট্রানজ্যাকশন আইডি (TrxID) লিখুন।');
      return;
    }
    setErrorMsg('');
    setStep(4);
  };

  const handleCloseAndReset = () => {
    setStep(1);
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#0B1B3D] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              SpeakCraft Admission Portal
            </div>
            <h3 className="text-lg font-bold text-white">
              {currentLang === 'en' ? 'Course Registration & Enrollment' : 'কোর্স ভর্তি ও রেজিস্ট্রেশন'}
            </h3>
          </div>
          <button
            onClick={handleCloseAndReset}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicators (Zero-pill text format) */}
        {step < 4 && (
          <div className="bg-slate-50 px-6 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs font-medium text-slate-600">
            <span className={step === 1 ? 'font-bold text-[#0B1B3D]' : 'text-slate-400'}>
              1. {currentLang === 'en' ? 'Personal Info' : 'শিক্ষার্থীর তথ্য'}
            </span>
            <span className="text-slate-300">/</span>
            <span className={step === 2 ? 'font-bold text-[#0B1B3D]' : 'text-slate-400'}>
              2. {currentLang === 'en' ? 'Course & Batch' : 'কোর্স ও ব্যাচ'}
            </span>
            <span className="text-slate-300">/</span>
            <span className={step === 3 ? 'font-bold text-[#0B1B3D]' : 'text-slate-400'}>
              3. {currentLang === 'en' ? 'Payment' : 'পেমেন্ট ও কনফার্ম'}
            </span>
          </div>
        )}

        {/* Step 1: Personal Info */}
        {step === 1 && (
          <form onSubmit={handleStep1Submit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                {currentLang === 'en' ? 'Full Name' : 'পূর্ণ নাম'} *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Tanvir Ahmed / তানভীর আহমেদ"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B1B3D] text-slate-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  {currentLang === 'en' ? 'Phone / WhatsApp' : 'মোবাইল / হোয়াটসঅ্যাপ নম্বর'} *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="017xxxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B1B3D] text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  {currentLang === 'en' ? 'Email Address' : 'ইমেইল অ্যাড্রেস'}
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B1B3D] text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  {currentLang === 'en' ? 'City / District' : 'জেলা / শহর'}
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B1B3D] text-slate-900"
                >
                  <option value="Dhaka">Dhaka (ঢাকা)</option>
                  <option value="Chittagong">Chittagong (চট্টগ্রাম)</option>
                  <option value="Sylhet">Sylhet (সিলেট)</option>
                  <option value="Rajshahi">Rajshahi (রাজশাহী)</option>
                  <option value="Khulna">Khulna (খুলনা)</option>
                  <option value="Barisal">Barisal (বরিশাল)</option>
                  <option value="Rangpur">Rangpur (রংপুর)</option>
                  <option value="Mymensingh">Mymensingh (ময়মনসিংহ)</option>
                  <option value="Other">Other District (অন্যান্য জেলা)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  {currentLang === 'en' ? 'Age Group' : 'বয়সসীমা'}
                </label>
                <select
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B1B3D] text-slate-900"
                >
                  <option value="18-21">18 - 21 (College / University 1st-2nd Year)</option>
                  <option value="22-26">22 - 26 (University Graduate / Job Seeker)</option>
                  <option value="27-35">27 - 35 (Corporate Professional / BCS / IELTS)</option>
                  <option value="35+">Above 35</option>
                </select>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium font-bangla">
                {errorMsg}
              </div>
            )}

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#0B1B3D] hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>{currentLang === 'en' ? 'Next: Course Selection' : 'পরবর্তী: কোর্স নির্বাচন'}</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Course & Batch Time */}
        {step === 2 && (
          <form onSubmit={handleStep2Submit} className="p-6 space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                {currentLang === 'en' ? 'Select Your Course' : 'কোর্স নির্বাচন করুন'}
              </label>
              <div className="space-y-2.5">
                {COURSES.map((course) => {
                  const isSelected = selectedCourseId === course.id;
                  return (
                    <div
                      key={course.id}
                      onClick={() => setSelectedCourseId(course.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'border-[#0B1B3D] bg-blue-50/70 text-[#0B1B3D] shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          {currentLang === 'en' ? course.title : course.titleBn}
                        </div>
                        <div className="text-xs text-slate-500 font-bangla">
                          {course.duration} · {course.classes}
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-sm font-extrabold text-[#0B1B3D] tabular-nums">
                          ৳{course.priceBDT.toLocaleString()}
                        </div>
                        <div className="text-[11px] text-slate-400 line-through tabular-nums">
                          ৳{course.originalPriceBDT.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                {currentLang === 'en' ? 'Preferred Batch Timing' : 'পছন্দের ক্লাসের সময়'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'evening', title: 'Evening Batch', time: '8:00 PM - 9:30 PM', days: 'Sun, Tue, Thu' },
                  { id: 'night', title: 'Night Owl Batch', time: '10:00 PM - 11:30 PM', days: 'Mon, Wed, Fri' },
                  { id: 'weekend', title: 'Weekend Executive', time: '7:30 PM - 9:30 PM', days: 'Fri & Sat' },
                ].map((b) => (
                  <div
                    key={b.id}
                    onClick={() => setSelectedBatchTime(b.id)}
                    className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                      selectedBatchTime === b.id
                        ? 'border-[#0B1B3D] bg-blue-50/70 font-bold text-[#0B1B3D]'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="font-bold">{b.title}</div>
                    <div className="text-[11px] text-slate-500">{b.time}</div>
                    <div className="text-[10px] text-amber-600 mt-1">{b.days}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-slate-600 hover:text-slate-900 font-semibold cursor-pointer"
              >
                ← {currentLang === 'en' ? 'Back' : 'পূর্ববর্তী'}
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 bg-[#0B1B3D] hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>{currentLang === 'en' ? 'Next: Payment Details' : 'পরবর্তী: পেমেন্ট অপশন'}</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Payment Instruction */}
        {step === 3 && (
          <form onSubmit={handleFinalSubmit} className="p-6 space-y-5">
            {/* Payment Method Selector */}
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setPaymentOption('bkash')}
                className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                  paymentOption === 'bkash'
                    ? 'border-[#E2136E] bg-pink-50 text-[#E2136E] font-bold shadow-xs'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="text-sm font-extrabold">bKash</div>
                <div className="text-[10px] text-slate-500">বিকাশ পেমেন্ট</div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentOption('nagad')}
                className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                  paymentOption === 'nagad'
                    ? 'border-[#F7941D] bg-amber-50 text-[#F7941D] font-bold shadow-xs'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="text-sm font-extrabold">Nagad</div>
                <div className="text-[10px] text-slate-500">নগদ পেমেন্ট</div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentOption('trial')}
                className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                  paymentOption === 'trial'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-800 font-bold shadow-xs'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="text-sm font-extrabold">Free Demo</div>
                <div className="text-[10px] text-slate-500">১ দিনের ফ্রি ক্লাস</div>
              </button>
            </div>

            {paymentOption !== 'trial' ? (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-slate-900 uppercase">
                    {paymentOption === 'bkash' ? 'bKash Merchant Number:' : 'Nagad Merchant Number:'}
                  </div>
                  <div className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Course Fee: ৳{activeCourse.priceBDT.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-300 font-mono text-sm font-bold text-slate-900">
                  <span>01894772211</span>
                  <button
                    type="button"
                    onClick={handleCopyBkash}
                    className="text-xs text-amber-700 hover:text-amber-800 flex items-center gap-1 font-sans cursor-pointer font-semibold"
                  >
                    {copiedBkash ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedBkash ? 'Copied!' : 'Copy Number'}</span>
                  </button>
                </div>

                <div className="text-xs text-slate-600 space-y-1 font-bangla">
                  <p>১. আপনার বিকাশ/নগদ অ্যাপে গিয়ে <strong>"Make Payment"</strong> অপশন সিলেক্ট করুন।</p>
                  <p>২. প্রাপক নম্বরে <strong>01894772211</strong> এবং টাকার পরিমাণ <strong>৳{activeCourse.priceBDT}</strong> দিন।</p>
                  <p>৩. রেফারেন্সে আপনার নাম বা <strong>SC42</strong> লিখে পেমেন্ট সম্পন্ন করুন।</p>
                  <p>৪. সফল পেমেন্টের পর প্রাপ্ত <strong>Transaction ID (TrxID)</strong> নিচের বক্সে লিখুন।</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    {currentLang === 'en' ? 'Transaction ID (TrxID)' : 'ট্রানজ্যাকশন আইডি (TrxID)'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. BL9A229KM"
                    value={trxId}
                    onChange={(e) => setTrxId(e.target.value.toUpperCase())}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B1B3D] font-mono text-slate-900"
                  />
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-2 font-bangla">
                <div className="font-bold text-sm text-emerald-800">
                  🎉 ফ্রি ১ দিনের লাইভ ডেমো ক্লাস বুকিং!
                </div>
                <p>
                  কোনো ফি প্রদান ছাড়াই আগামী শুক্রবার রাত ৮:০০ টায় আমাদের স্পেশাল লাইভ ডেমো ক্লাসে অংশগ্রহণ করুন।
                </p>
                <p>
                  কনফার্ম করার সাথে সাথে আপনার হোয়াটসঅ্যাপে জুম মিটিং লিংক ও ক্লাস ম্যাটেরিয়ালস পাঠিয়ে দেওয়া হবে।
                </p>
              </div>
            )}

            {errorMsg && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium font-bangla">
                {errorMsg}
              </div>
            )}

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs text-slate-600 hover:text-slate-900 font-semibold cursor-pointer"
              >
                ← {currentLang === 'en' ? 'Back' : 'পূর্ববর্তী'}
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0B1B3D] font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                {paymentOption === 'trial'
                  ? currentLang === 'en' ? 'Confirm Free Demo Seat' : 'ফ্রি ডেমো ক্লাসের আসন নিশ্চিত করুন'
                  : currentLang === 'en' ? 'Submit Enrollment' : 'ভর্তি নিশ্চিত করুন'}
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Success Screen */}
        {step === 4 && (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="text-xs font-bold text-emerald-700 tracking-wider uppercase">
              {currentLang === 'en' ? 'Registration Successful!' : 'রেজিস্ট্রেশন সফল হয়েছে!'}
            </div>

            <h4 className="text-2xl font-black text-slate-900">
              Welcome to SpeakCraft, {fullName}!
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-bangla leading-relaxed">
              {paymentOption === 'trial'
                ? `আপনার ফ্রি ডেমো ক্লাসের আসন বুক করা হয়েছে। খুব শীঘ্রই ${phone} নম্বরে হোয়াটসঅ্যাপের মাধ্যমে জুম লিঙ্ক পাঠানো হবে।`
                : `আপনার আবেদন ও পেমেন্ট (TrxID: ${trxId}) ভেরিফিকেশন চলছে। আগামী ২ ঘণ্টার মধ্যে কনফার্মেশন এসএমএস ও ব্যাচ গ্রুপ ইনভাইটেশন পাঠানো হবে।`}
            </p>

            {/* Registration Receipt Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-left text-xs space-y-1.5 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">Student ID:</span>
                <span className="font-bold text-slate-800">SC-2026-BD{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Course:</span>
                <span className="font-bold text-[#0B1B3D] truncate max-w-[180px]">{activeCourse.title.split('(')[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Phone:</span>
                <span className="font-bold text-slate-800">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Batch Timing:</span>
                <span className="font-bold text-slate-800 uppercase">{selectedBatchTime}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/8801894772211?text=Hello%20SpeakCraft,%20I%20have%20registered%20for%20${encodeURIComponent(activeCourse.title)}.%20Name:%20${encodeURIComponent(fullName)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Join Official WhatsApp Support</span>
              </a>

              <button
                onClick={handleCloseAndReset}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
              >
                {currentLang === 'en' ? 'Done & Close' : 'সম্পন্ন করুন'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
