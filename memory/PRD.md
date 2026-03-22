# Product Requirements Document (PRD)
## Velora Microns LLP - B2B Manufacturing Website

**Created:** December 22, 2025
**Last Updated:** December 22, 2025

---

## Original Problem Statement

Create a professional B2B website for Velora Microns LLP, a premium Calcium Carbonate (CaCO₃) manufacturer based in Morbi, Gujarat. The website should:
- Target factory owners and bulk buyers (B2B focus)
- Feature blue and grey industrial color scheme
- Include WhatsApp integration for quick inquiries
- Showcase products, applications, and company information
- Provide contact forms for bulk order inquiries
- Work without images initially (to be added later)

---

## User Personas

### Primary Persona: Factory Owner/Procurement Manager
- **Industry:** Ceramic tiles, plastic manufacturing, paint & coating
- **Location:** Primarily Gujarat, India
- **Needs:** Reliable bulk supplier, consistent quality, competitive pricing
- **Behavior:** Researches suppliers online, prefers WhatsApp for quick communication

### Secondary Persona: Business Development Manager
- **Industry:** Masterbatch units, industrial fillers
- **Location:** Pan India
- **Needs:** Technical specifications, product samples, detailed quotations
- **Behavior:** Formal inquiry through contact forms, requires detailed documentation

---

## Architecture & Tech Stack

### Frontend
- React 19.0.0
- React Router DOM for multi-page navigation
- Shadcn UI components (Button, Card, Input, Textarea, Badge)
- Tailwind CSS for styling
- Lucide React for icons

### Backend (Not Yet Implemented)
- FastAPI with Python
- MongoDB for database
- Contact form API endpoints (planned)

### Design System
- **Primary Colors:** Blue (#1e40af, #3b82f6) for trust and professionalism
- **Secondary Colors:** Grey (#64748b, #f1f5f9) for industrial feel
- **Accent:** Green (#16a34a) for WhatsApp CTAs
- **Typography:** Clean, professional sans-serif
- **Spacing:** Generous whitespace for premium feel

---

## Core Requirements (Static)

### Functional Requirements
1. Multi-page navigation (Home, About, Products, Applications, Contact)
2. WhatsApp integration with pre-filled messages
3. Contact form with validation
4. Responsive design for mobile and desktop
5. Clear call-to-action buttons throughout
6. Phone and email contact options

### Non-Functional Requirements
1. Professional B2B aesthetic
2. Fast page load times
3. Mobile-first responsive design
4. SEO-friendly structure
5. Accessible UI components

---

## What's Been Implemented (December 22, 2025)

### ✅ Completed Features

#### 1. **Homepage** (`/app/frontend/src/pages/Home.jsx`)
   - Hero section with value proposition
   - Trust badges (Consistent Quality, High Whiteness, Reliable Supply)
   - WhatsApp CTA prominently displayed
   - "Why Choose Velora Microns?" section with 4 benefit cards
   - Product highlight section (2 product cards)
   - Applications showcase with tags
   - Strong bottom CTA section

#### 2. **About Page** (`/app/frontend/src/pages/About.jsx`)
   - Company introduction and background
   - Morbi, Gujarat location emphasis
   - Core values section (4 values)
   - "Why Clients Trust Us" section (4 trust factors)
   - Professional storytelling approach

#### 3. **Products Page** (`/app/frontend/src/pages/Products.jsx`)
   - Detailed product cards for:
     * Calcium Carbonate Powder (specifications, features, applications)
     * Coated Calcium Carbonate (benefits, ideal uses, applications)
   - Technical specifications table
   - WhatsApp inquiry buttons for each product
   - Application breakdowns

#### 4. **Applications Page** (`/app/frontend/src/pages/Applications.jsx`)
   - Industry-specific applications:
     * Ceramic Industry (Morbi focus)
     * Plastic Industry
     * Filler Industry
     * Paint & Coating Industry
   - Benefit breakdowns for each industry
   - "Industries We Serve" summary section

#### 5. **Contact Page** (`/app/frontend/src/pages/Contact.jsx`)
   - Company contact information cards
   - Contact form with fields:
     * Name, Company, Email, Phone, Message
   - WhatsApp quick response section
   - Business hours information
   - Mock form submission with toast notification

#### 6. **Header Component** (`/app/frontend/src/components/Header.jsx`)
   - Sticky navigation bar
   - Desktop and mobile responsive menu
   - Active route highlighting
   - Quick access CTA buttons (Call Us, WhatsApp)

#### 7. **Footer Component** (`/app/frontend/src/components/Footer.jsx`)
   - Company information
   - Quick links navigation
   - Product list
   - Contact details
   - Social media placeholders
   - Copyright information

### Design Implementation
- ✅ Blue & grey color scheme as requested
- ✅ Professional B2B aesthetic
- ✅ No AI emoji icons (used lucide-react)
- ✅ Shadcn UI components properly utilized
- ✅ Responsive design
- ✅ WhatsApp integration throughout
- ✅ Clean, spacious layouts
- ✅ Hover effects and transitions
- ✅ Working without images (clean design-focused)

---

## Prioritized Backlog

### P0 - High Priority (Backend Development)
1. **Contact Form Backend**
   - Create `/api/contact` endpoint
   - MongoDB schema for inquiries
   - Email notification system
   - Store inquiry data

2. **WhatsApp Analytics**
   - Track WhatsApp click events
   - Store analytics data

### P1 - Medium Priority (Enhancements)
1. **Product Image Gallery**
   - Upload factory images
   - Product photography
   - Image optimization

2. **Testimonials Section**
   - Client testimonials
   - Success stories
   - Industry partner logos

3. **Technical Specifications PDF**
   - Downloadable product brochures
   - Technical data sheets

### P2 - Low Priority (Nice-to-Have)
1. **Search Functionality**
   - Product search
   - Content search

2. **Chatbot Integration**
   - Automated responses
   - Lead qualification

3. **Multi-language Support**
   - Hindi and Gujarati translations

---

## Next Action Items

1. **Immediate:** Review website functionality and design
2. **Phase 2:** Build backend for contact form submission
3. **Phase 3:** Add real factory/product images when available
4. **Phase 4:** Implement email notifications for inquiries
5. **Phase 5:** Add testimonials and case studies

---

## Notes
- Contact form currently uses mock submission (frontend only)
- WhatsApp number: +91 9119711811
- Email: info@veloramicrons.com
- All content is production-ready and conversion-optimized
- Design follows B2B best practices for trust and credibility
