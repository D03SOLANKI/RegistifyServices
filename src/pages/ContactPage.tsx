import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, MessageCircle, Clock, 
  Send, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { submitContactEnquiry } from '../services/enquiryService';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [enquiryId, setEnquiryId] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: 'Ahmedabad',
    state: 'Gujarat',
    subject: 'General Enquiry',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      setErrorMessage('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage('Please enter your query message.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await submitContactEnquiry({
        fullName: formData.fullName,
        mobile: cleanMobile,
        email: formData.email,
        city: formData.city,
        state: formData.state,
        subject: formData.subject,
        message: formData.message,
        sourcePage: '/contact'
      });

      if (res.success) {
        setEnquiryId(res.enquiryId);
        setFormSubmitted(true);
      } else {
        setErrorMessage('Failed to submit message. Please try again or message via WhatsApp.');
      }
    } catch {
      setErrorMessage('An unexpected error occurred. Please contact us on WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F7F9FC] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero */}
        <div className="bg-[#142B49] text-white rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-elevated">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-4 relative">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-600/40 text-teal-200 text-xs font-semibold border border-teal-400/30">
              <Phone className="w-3.5 h-3.5 text-teal-300" />
              <span>CONSULTATION & ASSISTANCE DESK</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Let's Connect & Simplify Your Business Needs
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Have questions regarding company registration, loan assistance, GST, certifications, or secretarial compliance? Reach out to our dedicated advisory team.
            </p>
          </div>
        </div>

        {/* 2-Column Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-card space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#142B49]">Gujarat Headquarters</h3>
                  <p className="text-xs text-slate-400">Serving Gujarat & All India</p>
                </div>
              </div>

              <div className="text-xs text-slate-600 leading-relaxed space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="font-semibold text-[#142B49]">Registify Services</p>
                <p>Registify Business Tower, Corporate Road, SG Highway</p>
                <p>Ahmedabad, Gujarat 380054 (India)</p>
              </div>

              <div className="space-y-4 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-teal-600 transition-colors">
                    +91 98765 43210 (Consultation Desk)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <a href="mailto:contact@registifyservices.com" className="hover:text-teal-600 transition-colors">
                    contact@registifyservices.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Mon – Sat: 9:30 AM – 6:30 PM IST</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919876543210?text=Hello%20Registify%20Services%2C%20I%20would%20like%20to%20connect%20regarding%20business%20consultancy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat With Us on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Assistance Scope Reminder */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-xs text-slate-600 space-y-2">
              <span className="font-bold text-[#142B49] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                Transparent Advisory Notice
              </span>
              <p className="leading-relaxed">
                Registify Services is an independent consultancy. We do not charge consultation fees for initial service requirement scoping. We do not offer government subsidies or guaranteed loan sanctions.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#142B49]">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs text-slate-500">
                  Our team responds to all verified commercial enquiries within 2-4 business hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-[#142B49]">Message Received!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you for contacting Registify Services. Your enquiry reference number is:
                  </p>
                  <span className="font-mono font-bold text-base text-[#142B49] bg-white px-4 py-2 rounded-xl border border-slate-200 inline-block">
                    {enquiryId}
                  </span>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          fullName: '',
                          mobile: '',
                          email: '',
                          city: 'Ahmedabad',
                          state: 'Gujarat',
                          subject: 'General Enquiry',
                          message: ''
                        });
                      }}
                      className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Patel"
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-royal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number *</label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-xs text-slate-500 bg-slate-100 border border-r-0 border-slate-200 rounded-l-xl">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          placeholder="9876543210"
                          value={formData.mobile}
                          onChange={e => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-r-xl focus:outline-none focus:border-royal-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-royal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Enquiry Subject *</label>
                      <select
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-royal-500 bg-white"
                      >
                        <option value="General Enquiry">General Business Enquiry</option>
                        <option value="Loan Assistance">Loan & Financial Assistance</option>
                        <option value="Company Registration">Company Registration / Incorporation</option>
                        <option value="Certifications">Business Certifications (ISO/MSME/GeM)</option>
                        <option value="GST & Compliance">GST & Annual ROC Compliance</option>
                        <option value="Documentation">Business Documentation / Agreement Drafting</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">City *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ahmedabad"
                        value={formData.city}
                        onChange={e => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-royal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">State *</label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={e => setFormData({ ...formData, state: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-royal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message / Requirements *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please share details about your business activity, loan requirement, or registration questions..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-royal-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-[#142B49] hover:bg-[#0d1d33] text-white rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Submitting Message...' : 'Send Message to Consultation Desk'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
