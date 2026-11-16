-- REGISTIFY SERVICES — SUPABASE POSTGRESQL SCHEMA
-- Execute in Supabase SQL Editor to initialize cloud backend

-- 1. LOAN ENQUIRIES TABLE
CREATE TABLE IF NOT EXISTS loan_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    enquiry_id VARCHAR(32) NOT NULL UNIQUE,
    full_name VARCHAR(150) NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    email VARCHAR(150) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    employment_type VARCHAR(50) NOT NULL,
    loan_category VARCHAR(100) NOT NULL,
    required_amount VARCHAR(100) NOT NULL,
    monthly_income VARCHAR(100),
    existing_obligations TEXT,
    additional_requirements TEXT,
    source_page VARCHAR(255),
    status VARCHAR(50) DEFAULT 'new',
    assigned_to VARCHAR(150),
    follow_up_date DATE,
    internal_notes JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. BUSINESS SERVICE ENQUIRIES TABLE
CREATE TABLE IF NOT EXISTS business_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    enquiry_id VARCHAR(32) NOT NULL UNIQUE,
    full_name VARCHAR(150) NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    email VARCHAR(150) NOT NULL,
    business_name VARCHAR(200),
    business_type VARCHAR(100),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    service_category VARCHAR(100) NOT NULL,
    specific_service VARCHAR(150) NOT NULL,
    additional_information TEXT,
    source_page VARCHAR(255),
    status VARCHAR(50) DEFAULT 'new',
    assigned_to VARCHAR(150),
    follow_up_date DATE,
    internal_notes JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. GENERAL CONTACT ENQUIRIES TABLE
CREATE TABLE IF NOT EXISTS contact_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    enquiry_id VARCHAR(32) NOT NULL UNIQUE,
    full_name VARCHAR(150) NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    email VARCHAR(150) NOT NULL,
    city VARCHAR(100),
    state VARCHAR(100),
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. NEWSLETTER SUBSCRIBERS TABLE
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(200) UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- INDEXES FOR PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_loan_enquiries_status ON loan_enquiries(status);
CREATE INDEX IF NOT EXISTS idx_loan_enquiries_created ON loan_enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_biz_enquiries_status ON business_enquiries(status);
CREATE INDEX IF NOT EXISTS idx_biz_enquiries_created ON business_enquiries(created_at DESC);

-- ENABLE ROW LEVEL SECURITY
ALTER TABLE loan_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Anonymous public can insert new leads
CREATE POLICY "Public can submit loan enquiries" 
ON loan_enquiries FOR INSERT 
TO anon 
WITH CHECK (true);

CREATE POLICY "Public can submit business enquiries" 
ON business_enquiries FOR INSERT 
TO anon 
WITH CHECK (true);

CREATE POLICY "Public can submit contact requests" 
ON contact_enquiries FOR INSERT 
TO anon 
WITH CHECK (true);

CREATE POLICY "Public can subscribe to newsletter" 
ON newsletter_subscribers FOR INSERT 
TO anon 
WITH CHECK (true);
