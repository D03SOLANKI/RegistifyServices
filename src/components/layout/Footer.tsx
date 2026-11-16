import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, MessageCircle, ShieldCheck, 
  ArrowUpRight, AlertTriangle, ExternalLink 
} from 'lucide-react';
import { Logo } from '../common/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1728] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Registify Services brings business registration, corporate certifications, statutory compliance, and loan facilitation under one structured platform. We simplify administrative and financial processes with clarity, transparency, and organized execution.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-xl text-xs font-semibold hover:bg-emerald-600/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Consultation Desk
              </a>
              <Link
                to="/admin"
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                Staff Portal
              </Link>
            </div>
          </div>

          {/* Loan Services Column */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase">
              Financial Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/loans/business-loan" className="hover:text-white transition-colors">Business Loan Assistance</Link></li>
              <li><Link to="/loans/personal-loan" className="hover:text-white transition-colors">Personal Loan Assistance</Link></li>
              <li><Link to="/loans/msme-loan" className="hover:text-white transition-colors">MSME Loan Facilitation</Link></li>
              <li><Link to="/loans/home-loan" className="hover:text-white transition-colors">Home Loan Assistance</Link></li>
              <li><Link to="/loans/loan-against-property" className="hover:text-white transition-colors">Loan Against Property (LAP)</Link></li>
              <li><Link to="/loans/working-capital-loan" className="hover:text-white transition-colors">Working Capital Loan</Link></li>
              <li><Link to="/loans/machinery-loan" className="hover:text-white transition-colors">Machinery & Equipment Finance</Link></li>
              <li><Link to="/loans/project-finance" className="hover:text-white transition-colors">Project Finance</Link></li>
              <li><Link to="/loans" className="text-teal-400 hover:text-teal-300 font-semibold">View All 14 Loan Options →</Link></li>
            </ul>
          </div>

          {/* Business Services Column */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase">
              Business Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/business/company-registration" className="hover:text-white transition-colors">Private Limited Company</Link></li>
              <li><Link to="/business/llp-registration" className="hover:text-white transition-colors">LLP Registration</Link></li>
              <li><Link to="/business/startup-india-recognition" className="hover:text-white transition-colors">Startup India / DPIIT</Link></li>
              <li><Link to="/business/udyam-registration" className="hover:text-white transition-colors">MSME / Udyam Certificate</Link></li>
              <li><Link to="/business/iso-certification" className="hover:text-white transition-colors">ISO Certification Assistance</Link></li>
              <li><Link to="/business/gst-services" className="hover:text-white transition-colors">GST Registration & Filings</Link></li>
              <li><Link to="/business/trademark-registration" className="hover:text-white transition-colors">Trademark Registration</Link></li>
              <li><Link to="/business/roc-compliance" className="hover:text-white transition-colors">Annual ROC Compliance</Link></li>
              <li><Link to="/business" className="text-teal-400 hover:text-teal-300 font-semibold">Explore All Business Services →</Link></li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase">
              Contact & Support
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>Registify Services, Corporate Heights, SG Highway, Ahmedabad, Gujarat 380054 (India)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>contact@registifyservices.com</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Operating Hours:
              </span>
              <p className="text-xs text-slate-400">
                Mon – Sat: 9:30 AM – 6:30 PM IST<br />
                Sunday: Emergency & Online Intake Only
              </p>
            </div>
          </div>

        </div>

        {/* MANDATORY LEGAL & BUSINESS DISCLAIMER (SECTION 13) */}
        <div className="py-8 border-b border-slate-800 text-slate-400 text-xs leading-relaxed space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>Important Statutory & Business Disclaimers</span>
          </div>
          <p className="text-[11px] text-slate-400/90 leading-normal text-justify">
            Registify Services is an independent private consultancy and service facilitation business. We are not a government department, government authority or government-affiliated organization. We provide assistance with business registrations, certification applications, documentation, compliance coordination and financial service enquiries.
          </p>
          <p className="text-[11px] text-slate-400/90 leading-normal text-justify">
            We do not guarantee the approval of any registration, certification, licence, loan or other application. Final approval and decisions rest with the relevant government authority, certification body, bank, NBFC or financial institution. Loan products are subject to lender-specific eligibility criteria, credit assessment, verification, interest rates, fees and applicable terms.
          </p>
          <p className="text-[11px] text-slate-400/90 leading-normal text-justify">
            Registify Services is not a law firm and does not provide court representation, litigation or advocate services. Legal opinions and regulated professional services must be obtained from appropriately qualified professionals. Professional fees, government charges, lender charges and other applicable costs should be clearly communicated before the commencement of any service.
          </p>
        </div>

        {/* Bottom Legal Links & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © 2026 Registify Services. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link to="/disclaimer" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Legal Disclaimer
            </Link>
            <span className="text-slate-700">•</span>
            <Link to="/privacy-policy" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link to="/terms" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Terms & Conditions
            </Link>
            <span className="text-slate-700">•</span>
            <Link to="/refund-policy" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Refund & Cancellation
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
