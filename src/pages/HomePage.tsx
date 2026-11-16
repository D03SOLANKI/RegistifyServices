import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustIntroSection } from '../components/home/TrustIntroSection';
import { CoreDivisionsSection } from '../components/home/CoreDivisionsSection';
import { PopularLoansSection } from '../components/home/PopularLoansSection';
import { BusinessRegistrationSection } from '../components/home/BusinessRegistrationSection';
import { CertificationsSection } from '../components/home/CertificationsSection';
import { TaxationAccountingSection } from '../components/home/TaxationAccountingSection';
import { ComplianceSection } from '../components/home/ComplianceSection';
import { DocumentationSection } from '../components/home/DocumentationSection';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { WhoWeServeSection } from '../components/home/WhoWeServeSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { HomeFaqSection } from '../components/home/HomeFaqSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

interface HomePageProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  const scrollToServices = () => {
    const el = document.getElementById('divisions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* SECTION 1: HERO */}
      <HeroSection 
        onOpenConsultation={onOpenConsultation}
        onExploreServices={scrollToServices}
      />

      {/* SECTION 2: TRUST & INTRO */}
      <TrustIntroSection />

      {/* SECTION 3: TWO CORE DIVISIONS */}
      <CoreDivisionsSection onOpenConsultation={onOpenConsultation} />

      {/* SECTION 4: POPULAR LOAN SERVICES */}
      <PopularLoansSection onOpenConsultation={onOpenConsultation} />

      {/* SECTION 5: BUSINESS REGISTRATION SERVICES */}
      <BusinessRegistrationSection onOpenConsultation={onOpenConsultation} />

      {/* SECTION 6: CERTIFICATION SERVICES */}
      <CertificationsSection onOpenConsultation={onOpenConsultation} />

      {/* SECTION 7: GST, TAXATION & ACCOUNTING */}
      <TaxationAccountingSection onOpenConsultation={onOpenConsultation} />

      {/* SECTION 8: COMPANY COMPLIANCE SERVICES */}
      <ComplianceSection onOpenConsultation={onOpenConsultation} />

      {/* SECTION 9: BUSINESS DOCUMENTATION SERVICES */}
      <DocumentationSection onOpenConsultation={onOpenConsultation} />

      {/* SECTION 10: HOW OUR PROCESS WORKS */}
      <HowItWorksSection />

      {/* SECTION 11: WHO WE SERVE */}
      <WhoWeServeSection />

      {/* SECTION 12: WHY CHOOSE REGISTIFY SERVICES */}
      <WhyChooseUsSection />

      {/* SECTION 13: FAQ ACCORDION */}
      <HomeFaqSection onOpenConsultation={() => onOpenConsultation()} />

      {/* SECTION 14: FINAL CALL TO ACTION */}
      <FinalCtaSection onOpenConsultation={() => onOpenConsultation()} />
    </div>
  );
};
