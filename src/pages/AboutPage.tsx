import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Landmark, ShieldCheck, Target, Compass, 
  Users, CheckCircle2, ArrowRight, MapPin, Scale 
} from 'lucide-react';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-[#F7F9FC] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="bg-[#142B49] text-white rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-elevated text-center max-w-4xl mx-auto space-y-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-royal-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-400/30">
            ABOUT REGISTIFY SERVICES
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Your Business. Our Guidance. Simplified.
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Registify Services is a modern Indian business consultancy and loan facilitation firm. We bring multiple administrative, corporate registration, certification, and commercial financing solutions under one dependable roof.
          </p>

          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 bg-teal-500 hover:bg-teal-600 text-[#142B49] rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Story & Background Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold tracking-widest uppercase text-royal-600 bg-royal-50 px-3 py-1 rounded-full border border-royal-200">
              WHO WE ARE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B49] tracking-tight">
              Bridging the Complexity of Business Setup & Capital Access
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Founding and scaling an enterprise in India requires navigating diverse statutory requirements—ranging from choosing between a Private Limited company or LLP, securing GST and Udyam MSME certifications, maintaining annual ROC filings, to preparing bank-standard financial dossiers for business loans.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Entrepreneurs frequently face fragmented service providers: one accountant for bookkeeping, an independent agent for shop permits, and multiple visits to commercial banks without structured dossiers.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-medium text-[#142B49]">
              Registify Services was founded to solve this fragmentation. By consolidating corporate registrations, certifications, ongoing compliance calendars, and institutional loan facilitation into a unified digital advisory, we allow founders to focus on what matters most: growing their core business.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-6">
            <h3 className="text-lg font-bold text-[#142B49] border-b border-slate-100 pb-3">
              Our Core Operational Pillars
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-royal-50 text-royal-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#142B49]">Ethical & Realistic Advisory</h4>
                  <p className="text-xs text-slate-500 mt-0.5">We never fabricate statistics, promise guaranteed approvals, or mislead clients on loan eligibility.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#142B49]">Organized Dossier Collation</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Methodical checklists and pre-submission audits ensure files meet lender and authority standards.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#142B49]">Transparent Pricing</h4>
                  <p className="text-xs text-slate-500 mt-0.5">We clearly differentiate our professional consultancy charges from government fees and bank processing costs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gujarat Roots & Pan-India Reach */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card space-y-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              <MapPin className="w-3.5 h-3.5" />
              <span>PRIMARY MARKET & JURISDICTION</span>
            </div>
            <h2 className="text-2xl font-bold text-[#142B49]">
              Headquartered in Gujarat, Serving Clients Nationwide
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Gujarat is India’s industrial powerhouse, boasting vibrant manufacturing clusters in Ahmedabad, Surat, Vadodara, Rajkot, and Ankleshwar. Our roots here give us deep, practical familiarity with ground-level enterprise challenges.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Through our secure digital onboarding workflow, we seamlessly extend our incorporation and loan facilitation services to clients across all other Indian states.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-xs font-bold text-[#142B49] block">Gujarat Commercial Hubs</span>
              <p className="text-xs text-slate-500 mt-1">Direct presence serving Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar and GIDCs.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-xs font-bold text-[#142B49] block">Western & Southern Hubs</span>
              <p className="text-xs text-slate-500 mt-1">Active client coordination in Mumbai, Pune, Bengaluru, Hyderabad, and Chennai.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-xs font-bold text-[#142B49] block">Northern & Eastern Hubs</span>
              <p className="text-xs text-slate-500 mt-1">Seamless digital filings for Delhi NCR, Jaipur, Indore, Lucknow, and Kolkata.</p>
            </div>
          </div>
        </div>

        {/* Clear Institutional Legal Positioning */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4">
          <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-5 h-5 text-teal-400" />
            <span>Important Institutional Clarity & Legal Scope</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
            Registify Services is a private business consultancy and financial service facilitator. We are NOT a government authority, department, or public sector bank. We do not offer government loan schemes or government subsidies. 
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
            Furthermore, Registify Services is NOT a law firm and does NOT provide court litigation, advocate representation, or legal pleadings. Regulated legal and accounting attestations are coordinated with independent practicing advocates and Chartered Accountants in accordance with statutory requirements.
          </p>
        </div>

      </div>
    </div>
  );
};
