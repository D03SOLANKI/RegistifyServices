import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, Phone, Mail, MessageCircle, Menu, X, 
  ArrowRight, Landmark, Building, ShieldCheck, Award, 
  Receipt, Calculator, ClipboardCheck, FileText, ChevronRight
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { LOAN_SERVICES } from '../../data/loansData';

interface NavbarProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loansOpen, setLoansOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [mobileLoansOpen, setMobileLoansOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setLoansOpen(false);
    setBusinessOpen(false);
  }, [location.pathname]);

  const businessCategories = [
    {
      title: 'Company Registration',
      icon: Building,
      description: 'Pvt Ltd, LLP, OPC, Partnership, Section 8',
      links: [
        { label: 'Private Limited Company', path: '/business/company-registration' },
        { label: 'LLP Registration', path: '/business/llp-registration' },
        { label: 'One Person Company (OPC)', path: '/business/opc-registration' },
        { label: 'View All Entity Structures', path: '/business#incorporation' },
      ]
    },
    {
      title: 'Certifications',
      icon: Award,
      description: 'Startup India, MSME, ISO, FSSAI, IEC',
      links: [
        { label: 'Startup India / DPIIT', path: '/business/startup-india-recognition' },
        { label: 'MSME / Udyam Registration', path: '/business/udyam-registration' },
        { label: 'ISO Certification', path: '/business/iso-certification' },
        { label: 'FSSAI License', path: '/business/fssai-license' },
      ]
    },
    {
      title: 'GST & Taxation',
      icon: Receipt,
      description: 'Registration, Return Filing & Assessment',
      links: [
        { label: 'GST Registration & Filings', path: '/business/gst-services' },
        { label: 'Taxation & Accounting', path: '/business/taxation-accounting' },
        { label: 'CMA Data Preparation', path: '/business/taxation-accounting#cma' },
      ]
    },
    {
      title: 'Compliance & Legal',
      icon: ClipboardCheck,
      description: 'Annual ROC, Secretarial & Agreements',
      links: [
        { label: 'Annual ROC Compliance', path: '/business/roc-compliance' },
        { label: 'Business Agreements & NDAs', path: '/business/documentation-agreements' },
        { label: 'Trademark Registration', path: '/business/trademark-registration' },
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification & Assistance Strip */}
      <div className="bg-[#0e2037] text-slate-300 text-xs border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-teal-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              Gujarat Headquarters • Serving Pan-India
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300 font-normal">
              Your Business. Our Guidance. Simplified.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="tel:+919876543210" 
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>+91 98765 43210 (Consultation Desk)</span>
            </a>
            <a 
              href="mailto:contact@registifyservices.com" 
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>contact@registifyservices.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className={`w-full transition-all duration-200 ${
        isScrolled 
          ? 'glass-nav shadow-card border-b border-slate-200 py-3' 
          : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname === '/' ? 'text-[#246BCE] bg-blue-50/70' : 'text-slate-700 hover:text-[#142B49] hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname === '/about' ? 'text-[#246BCE] bg-blue-50/70' : 'text-slate-700 hover:text-[#142B49] hover:bg-slate-50'
              }`}
            >
              About Us
            </Link>

            {/* LOANS MEGA DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setLoansOpen(true)}
              onMouseLeave={() => setLoansOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1 transition-colors ${
                  location.pathname.startsWith('/loans') 
                    ? 'text-[#246BCE] bg-blue-50/70' 
                    : 'text-slate-700 hover:text-[#142B49] hover:bg-slate-50'
                }`}
              >
                <span>Loans</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${loansOpen ? 'rotate-180 text-royal-500' : 'text-slate-400'}`} />
              </button>

              {loansOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[720px] animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-2xl shadow-elevated border border-slate-200 p-6 overflow-hidden">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                      <div>
                        <h4 className="text-sm font-bold text-[#142B49] flex items-center gap-2">
                          <Landmark className="w-4 h-4 text-royal-500" />
                          Loan & Financial Assistance Solutions
                        </h4>
                        <p className="text-xs text-slate-500">
                          Commercial bank and NBFC credit facilitation across India.
                        </p>
                      </div>
                      <Link 
                        to="/loans" 
                        className="text-xs font-semibold text-royal-600 hover:text-royal-800 flex items-center gap-1"
                      >
                        All 14 Loan Options
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
                      {LOAN_SERVICES.map((loan) => (
                        <Link
                          key={loan.id}
                          to={`/loans/${loan.slug}`}
                          className="p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group flex items-start gap-3"
                        >
                          <div className="w-8 h-8 rounded-lg bg-royal-50 text-royal-600 flex items-center justify-center flex-shrink-0 group-hover:bg-royal-600 group-hover:text-white transition-colors">
                            <Landmark className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-slate-800 group-hover:text-royal-600 transition-colors">
                                {loan.title}
                              </span>
                              {loan.popular && (
                                <span className="text-[10px] bg-teal-100 text-teal-700 px-1.5 py-0.2 rounded font-semibold">
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {loan.shortDescription}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-4 flex items-center justify-between text-xs text-slate-500">
                      <span>* Subject to lender verification and terms. No government subsidized schemes.</span>
                      <button
                        onClick={() => onOpenConsultation('loan')}
                        className="text-xs font-bold text-royal-600 hover:text-royal-800 underline"
                      >
                        Enquire for Custom Loan Assessment →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* BUSINESS SERVICES MEGA DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setBusinessOpen(true)}
              onMouseLeave={() => setBusinessOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1 transition-colors ${
                  location.pathname.startsWith('/business') 
                    ? 'text-teal-600 bg-teal-50/70' 
                    : 'text-slate-700 hover:text-[#142B49] hover:bg-slate-50'
                }`}
              >
                <span>Business Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${businessOpen ? 'rotate-180 text-teal-600' : 'text-slate-400'}`} />
              </button>

              {businessOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[820px] animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-2xl shadow-elevated border border-slate-200 p-6 overflow-hidden">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                      <div>
                        <h4 className="text-sm font-bold text-[#142B49] flex items-center gap-2">
                          <Building className="w-4 h-4 text-teal-600" />
                          Registration, Certification & Ongoing Compliance
                        </h4>
                        <p className="text-xs text-slate-500">
                          End-to-end guidance from company formation to statutory filings.
                        </p>
                      </div>
                      <Link 
                        to="/business" 
                        className="text-xs font-semibold text-teal-600 hover:text-teal-800 flex items-center gap-1"
                      >
                        Explore All Business Solutions
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                      {businessCategories.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                          <div key={idx} className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-md bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <h5 className="text-xs font-bold text-[#142B49]">
                                {cat.title}
                              </h5>
                            </div>
                            <p className="text-[11px] text-slate-400 leading-tight">
                              {cat.description}
                            </p>
                            <ul className="space-y-1.5 pt-1">
                              {cat.links.map((link, lIdx) => (
                                <li key={lIdx}>
                                  <Link
                                    to={link.path}
                                    className="text-xs text-slate-600 hover:text-teal-600 hover:underline block py-0.5 transition-colors"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-4 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                        Business consultancy & facilitation. Not a law firm.
                      </span>
                      <button
                        onClick={() => onOpenConsultation('business')}
                        className="text-xs font-bold text-teal-600 hover:text-teal-800 underline"
                      >
                        Start Company Incorporation Inquiry →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname.startsWith('/blog') ? 'text-[#246BCE] bg-blue-50/70' : 'text-slate-700 hover:text-[#142B49] hover:bg-slate-50'
              }`}
            >
              Resources & Blog
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname === '/contact' ? 'text-[#246BCE] bg-blue-50/70' : 'text-slate-700 hover:text-[#142B49] hover:bg-slate-50'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp Quick CTA */}
            <a
              href="https://wa.me/919876543210?text=Hello%20Registify%20Services%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-[#25D366] hover:border-[#25D366] transition-colors"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            {/* Primary Consultation Button */}
            <button
              onClick={() => onOpenConsultation()}
              className="px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#142B49] to-[#246BCE] hover:from-[#0d1d33] hover:to-royal-600 text-white shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center gap-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenConsultation()}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#142B49] text-white"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                About Us
              </Link>

              {/* Mobile Loans Accordion */}
              <div>
                <button
                  onClick={() => setMobileLoansOpen(!mobileLoansOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  <span className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-royal-500" />
                    Loans & Financing
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileLoansOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileLoansOpen && (
                  <div className="pl-6 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1 text-xs">
                    <Link to="/loans" className="block py-1.5 font-bold text-royal-600">
                      All Loan Solutions →
                    </Link>
                    {LOAN_SERVICES.map(l => (
                      <Link 
                        key={l.id} 
                        to={`/loans/${l.slug}`} 
                        className="block py-1 text-slate-600 hover:text-royal-600"
                      >
                        {l.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Business Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileBusinessOpen(!mobileBusinessOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  <span className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-teal-600" />
                    Business Services
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileBusinessOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileBusinessOpen && (
                  <div className="pl-6 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1 text-xs">
                    <Link to="/business" className="block py-1.5 font-bold text-teal-600">
                      Explore All Business Services →
                    </Link>
                    <Link to="/business/company-registration" className="block py-1 text-slate-600">Company Registration</Link>
                    <Link to="/business/llp-registration" className="block py-1 text-slate-600">LLP Registration</Link>
                    <Link to="/business/startup-india-recognition" className="block py-1 text-slate-600">Startup India / DPIIT</Link>
                    <Link to="/business/udyam-registration" className="block py-1 text-slate-600">MSME / Udyam</Link>
                    <Link to="/business/gst-services" className="block py-1 text-slate-600">GST Registration & Filing</Link>
                    <Link to="/business/taxation-accounting" className="block py-1 text-slate-600">Taxation & CMA Data</Link>
                    <Link to="/business/roc-compliance" className="block py-1 text-slate-600">Annual ROC Compliance</Link>
                    <Link to="/business/trademark-registration" className="block py-1 text-slate-600">Trademark Registration</Link>
                  </div>
                )}
              </div>

              <Link
                to="/blog"
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                Resources & Blog
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                Contact Us
              </Link>
              <Link
                to="/admin"
                className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Admin Portal
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-200 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-[#142B49] text-white rounded-xl font-bold text-sm text-center shadow-md"
              >
                Get Free Consultation
              </button>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 border border-[#25D366] text-[#25D366] rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
