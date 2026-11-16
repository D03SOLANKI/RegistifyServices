import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, CheckCircle2, Building, Landmark, Receipt, Award } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f5fc] via-[#F7F9FC] to-white pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-royal-700 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span>Your Business. Our Guidance. Simplified.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#142B49] tracking-tight leading-[1.15]">
              Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#246BCE] to-[#18A999]">Start, Manage & Grow</span> Your Business.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Whether you're planning to start a new business, looking for financial assistance, or managing your company's registrations and compliance, Registify Services helps simplify the process with reliable guidance and professional support.
            </p>

            {/* Trust Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 max-w-xl mx-auto lg:mx-0 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Commercial Bank & NBFC Loan Assistance</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Pvt Ltd, LLP & Entity Formation</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>GST, ISO, MSME & FSSAI Certifications</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Gujarat Headquarters • Pan-India Reach</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-[#142B49] hover:bg-[#0d1d33] text-white shadow-card hover:shadow-card-hover transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onOpenConsultation()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-slate-50 text-[#142B49] border-2 border-slate-200 hover:border-royal-500 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 shadow-xs"
              >
                <PhoneCall className="w-4 h-4 text-teal-600" />
                <span>Talk to Our Experts</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-400">
              * Independent consultancy & service facilitation. No guaranteed approvals or government subsidies.
            </p>
          </div>

          {/* Right Column: Dynamic Corporate Dashboard Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Central Elevated Card Frame */}
              <div className="bg-white rounded-3xl shadow-elevated border border-slate-200/80 p-6 md:p-8 space-y-6 relative overflow-hidden backdrop-blur-sm">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#142B49] text-white flex items-center justify-center font-bold text-sm">
                      RS
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#142B49]">Registify Advisory Engine</h3>
                      <p className="text-[11px] text-slate-400">Corporate & Financial Facilitation</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 text-[10px] font-bold border border-teal-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-ping"></span>
                    ACTIVE
                  </span>
                </div>

                {/* 4 Core Pillars Grid */}
                <div className="grid grid-cols-2 gap-3.5">
                  
                  {/* Pillar 1: Business Registration */}
                  <div 
                    onClick={() => onOpenConsultation('business', 'Private Limited Company Registration')}
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-royal-200 transition-all cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-royal-100 text-royal-700 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                      <Building className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-[#142B49] group-hover:text-royal-600 transition-colors">
                      Business Registration
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">Pvt Ltd, LLP, OPC & Firms</p>
                  </div>

                  {/* Pillar 2: Loan Assistance */}
                  <div 
                    onClick={() => onOpenConsultation('loan', 'Business Loan')}
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-royal-200 transition-all cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                      <Landmark className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-[#142B49] group-hover:text-teal-600 transition-colors">
                      Loan Assistance
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">Business, LAP, MSME & Personal</p>
                  </div>

                  {/* Pillar 3: GST & Taxation */}
                  <div 
                    onClick={() => onOpenConsultation('business', 'GST Registration')}
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-royal-200 transition-all cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                      <Receipt className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-[#142B49] group-hover:text-amber-600 transition-colors">
                      GST & Taxation
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">Filings, Bookkeeping & CMA</p>
                  </div>

                  {/* Pillar 4: Certifications */}
                  <div 
                    onClick={() => onOpenConsultation('business', 'ISO Certification')}
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-royal-200 transition-all cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                      <Award className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-[#142B49] group-hover:text-indigo-600 transition-colors">
                      Certifications
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">ISO, MSME, FSSAI & GeM</p>
                  </div>

                </div>

                {/* Status Indicator Bar */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">Application Readiness Assessment</span>
                    <span className="font-bold text-teal-600">Structured Review</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-royal-500 to-teal-500 h-full w-[88%] rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                    <span>Organized Documentation</span>
                    <span>Transparent Coordination</span>
                  </div>
                </div>

              </div>

              {/* Floating Floating Badge Left */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-elevated border border-slate-200 p-3.5 items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-teal-500 text-white flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#142B49] block">100% Transparent</span>
                  <span className="text-[10px] text-slate-500">Documented processes</span>
                </div>
              </div>

              {/* Floating Floating Badge Right */}
              <div className="hidden sm:flex absolute -top-5 -right-6 bg-white rounded-2xl shadow-elevated border border-slate-200 p-3.5 items-center gap-3 animate-float [animation-delay:2s]">
                <div className="w-10 h-10 rounded-xl bg-royal-600 text-white flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#142B49] block">Structured Guidance</span>
                  <span className="text-[10px] text-slate-500">Pan-India Support</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
