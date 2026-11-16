import React from 'react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#F7F9FC] min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>DATA PROTECTION & PRIVACY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#142B49] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            How Registify Services collects, utilizes, and protects your personal and commercial data in compliance with the Digital Personal Data Protection (DPDP) Act and the Information Technology Act, 2000.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#142B49]">1. Information We Collect</h2>
            <p>
              When you submit a consultation enquiry, request a business service, or apply for loan facilitation on Registify Services, we may collect the following categories of information:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Personal Identifiers:</strong> Full name, telephone/mobile number, email address, residential address.</li>
              <li><strong>Business Credentials:</strong> Business name, proposed entity structure, registered office proofs, Udyam / GST details.</li>
              <li><strong>Financial Indicators:</strong> Required loan amount, approximate monthly turnover or annual turnover ranges (as volunteered by you).</li>
              <li><strong>Digital Device Data:</strong> IP address, browser type, referral page, and interaction timestamps.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#142B49]">2. Purpose and Use of Collected Data</h2>
            <p>
              Your data is collected strictly to deliver our consultancy and facilitation services:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To evaluate eligibility for company incorporation, certifications, or commercial financing options.</li>
              <li>To communicate with you regarding your application status, queries, and document checklists.</li>
              <li>To coordinate with authorized commercial banks, NBFCs, or secretarial professionals upon your explicit consent.</li>
              <li>To prevent fraudulent enquiries, spam, and duplicate submissions.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#142B49]">3. No Sale of Customer Information</h2>
            <p className="font-semibold text-[#142B49]">
              Registify Services does not sell, rent, lease, or publicly expose customer contact information or personal data to third-party telemarketers or external advertising networks.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#142B49]">4. Secure Data Storage & Protection</h2>
            <p>
              All customer records and enquiry submissions are maintained within encrypted databases backed by enterprise-grade Row Level Security (RLS) and SSL/TLS transmission protocols. Access is restricted exclusively to authorized staff and consultants who require the data to process your files.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#142B49]">5. Grievance Officer & Contact</h2>
            <p>
              In accordance with the Information Technology Rules, 2011, for any questions or data removal requests regarding our privacy practices, please contact our Grievance Desk at:
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1 text-xs">
              <p><strong>Grievance Officer:</strong> Compliance Desk, Registify Services</p>
              <p><strong>Email:</strong> privacy@registifyservices.com / contact@registifyservices.com</p>
              <p><strong>Address:</strong> Corporate Road, SG Highway, Ahmedabad, Gujarat 380054 (India)</p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Effective Date: 2026</span>
            <Link to="/terms" className="font-bold text-teal-600 hover:underline">
              Terms & Conditions →
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};
