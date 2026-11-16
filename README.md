# REGISTIFY SERVICES — OFFICIAL WEB PLATFORM

> **Tagline:** *"Your Business. Our Guidance. Simplified."*  
> **Brand Messaging:** Everything Your Business Needs, Under One Roof. | Simplifying Loans, Registrations & Business Compliance. | From Business Registration to Financial Assistance.

---

## 🏛️ Business Overview

**Registify Services** is an Indian business consultancy and commercial loan facilitation platform headquartered in Gujarat and serving clients nationwide.

The platform is organized across two primary business divisions:

### Division A: Loan & Financial Assistance
Assisting individuals, self-employed professionals, startups, MSMEs, and established companies in exploring suitable commercial financing products, assembling documentation dossiers, and coordinating applications with leading institutional banks and NBFCs.
- **14 Dedicated Loan Products:** Business Loan, Personal Loan, MSME Loan, Home Loan, Loan Against Property (LAP), Working Capital Loan, Machinery & Equipment Finance, Project Finance, Commercial Vehicle Loan, Car Loan, Education Loan, LAP for Business, Overdraft & Cash Credit (OD/CC), and Debt Consolidation.
- *Strict policy:* No government subsidies, grant schemes, or government loan schemes. Subject to institutional lender appraisal.

### Division B: Business Registration, Certification & Compliance
Assisting entrepreneurs and growing companies with entity setup, statutory certifications, taxation formalities, and ongoing secretarial filings.
- **Company Incorporation:** Private Limited, LLP, One Person Company (OPC), Partnership Firm, Proprietorship, Section 8 Company, Public Limited, and NGO/Trust coordination.
- **20 Business Certifications:** Startup India / DPIIT Recognition, MSME / Udyam Certificate, ISO Certifications (9001, 14001, 27001, 45001), FSSAI Licensing, Import Export Code (IEC), Trademark Registration, GeM Seller & OEM onboarding, NSIC, ZED, DSC, PAN/TAN, PF/ESIC, APEDA, NGO Darpan, 12A/80G, CE Marking, GMP, RoHS, BIFMA, and Organic Certification.
- **GST, Direct Taxation & Accounting:** Registration, monthly filings (GSTR-1, GSTR-3B), ITC reconciliation, ITR filing, bookkeeping, and bank-standard CMA Data preparation.
- **ROC Secretarial Compliance:** Annual filings (AOC-4, MGT-7, Form 11, Form 8), DIR-3 KYC, office relocation, and director secretarial changes.
- **Operational Documentation:** Drafting coordination for commercial contracts, NDAs, MoUs, SLAs, DPRs, and Investor Pitch Decks.

*Legal Positioning:* Registify Services operates as an independent private consultancy. It is **NOT** a law firm and does not provide court litigation or advocate representation.

---

## 🎨 Design & Corporate Identity

- **Primary Deep Navy Blue:** `#142B49`
- **Secondary Royal Blue:** `#246BCE`
- **Accent Teal:** `#18A999`
- **Background Off-White:** `#F7F9FC`
- **Text Dark Charcoal:** `#202B3C`
- **Typography:** *Plus Jakarta Sans* & *Inter* (Google Fonts)
- **Original Vector Emblem:** Custom SVG emblem uniting a geometric document fold, stylized 'R' monogram, and dynamic teal verification checkmark orb.

---

## 🚀 Technical Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Routing:** React Router DOM (v7)
- **Icons:** Lucide React
- **Database & Backend:** Supabase Client + PostgreSQL schema with robust offline/local-first persistent storage fallback.
- **SEO:** Dynamic metadata, Open Graph tags, XML Sitemap (`/sitemap.xml`), and `robots.txt`.

---

## 💼 Admin Management Portal

Protected internal management console available at `/admin`:
- **Demo Access Passcode:** `admin2026` (or `registify`)
- **Key Capabilities:**
  - Real-time enquiry counter metrics (Total, New, In Process, Completed, Loans, Business Services).
  - Search customers by Name, Mobile, Email, Unique Enquiry ID, or City.
  - Multi-tier filtering by service division and enquiry status.
  - Status updates (`new`, `contacted`, `consultation_scheduled`, `documents_pending`, `in_process`, `completed`, `rejected`, `closed`).
  - Internal timestamped note recording on lead records.
  - Team member assignment and follow-up date scheduling.
  - One-click CSV/Excel export for offline CRM sync.
  - Direct WhatsApp trigger pre-filled with customer details.

---

## 💬 WhatsApp Integration

- Floating responsive widget with quick-chat selector.
- Dynamic contextual messages matching current page and service (e.g. *"Hello Registify Services, I am interested in your Business Loan assistance. Please share the details."*).
- Configurable business phone placeholder: `+91 98765 43210`.

---

## 🗄️ Database & Supabase Integration

The app operates seamlessly in **offline/local-first mode** immediately out of the box using persistent browser storage and pre-seeded records.

To connect a live remote Supabase project:
1. Create a Supabase project at [supabase.com](https://supabase.com).
2. Execute the provided `supabase-schema.sql` file in the Supabase SQL Editor.
3. Create a `.env` file in the project root:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
4. Restart the development server. Submissions will automatically sync to your PostgreSQL tables while retaining the offline cache.

---

## 📜 Key Routes

| Route | Purpose |
| :--- | :--- |
| `/` | Homepage with 15 complete sections |
| `/about` | Corporate story, Gujarat roots & pan-India reach |
| `/loans` | Loan & financial assistance hub (14 options) |
| `/loans/:slug` | Dedicated individual loan service detail pages |
| `/business` | Business registration, certifications & compliance hub |
| `/business/:slug` | Dedicated individual business service detail pages |
| `/blog` | 10 SEO-optimized regulatory & educational articles |
| `/blog/:slug` | Detailed article reader with related service CTAs |
| `/contact` | Contact info, headquarters details & inquiry form |
| `/admin` | Protected staff enquiry dashboard |
| `/disclaimer` | Mandatory statutory legal & lending disclaimer |
| `/privacy-policy` | DPDP Act & IT Act compliant privacy policy |
| `/terms` | Commercial terms of engagement |
| `/refund-policy` | Transparent refund & cancellation terms |

---

## 💻 Development Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```

---

© 2026 Registify Services. All Rights Reserved.
