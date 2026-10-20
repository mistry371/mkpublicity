# MK Publicity — Official Agency Web Platform

> **Positioning:** Digital Marketing & PR Agency in Surat for Brands Ready to Grow.  
> **Headquarters:** Rajmahal Mall, 2087, near Millenium Park, Dindoli, Surat, Gujarat 394210.  
> **Contact:** `+91 95372 95599` | `mkpublicitysurat@gmail.com` | [https://mkpublicity.com/](https://mkpublicity.com/)

---

## 1. System Architecture & Tech Stack

This platform is engineered as a high-performance, conversion-optimized Single-Page Application (SPA) with zero external runtime bloat:

* **Core Engine:** React 19 (`react`, `react-dom`)
* **Build System & Bundler:** Vite 8 with HMR (Build time: <900ms)
* **Routing Strategy:** React Router v7 (`react-router-dom`) with deep canonical routes and custom 404 recovery
* **Motion & Interactions:** Framer Motion v13 (respects `prefers-reduced-motion`)
* **Styling System:** Vanilla CSS & Modern Design Tokens (`src/index.css`, `src/editorial.css`)
* **Typography:** 
  * Display: *Bricolage Grotesque*
  * Italic Accents: *Instrument Serif*
  * Body: *Plus Jakarta Sans*
  * Telemetry / Labels: *JetBrains Mono*
* **Linter & Code Quality:** Oxlint (`.oxlintrc.json`)

---

## 2. Information Architecture & URL Sitemap

| Route | Page Component | Primary SEO Intent / Keywords |
| :--- | :--- | :--- |
| `/` | `src/pages/Home.jsx` | Digital Marketing & PR Agency in Surat |
| `/about` | `src/pages/About.jsx` | About MK Publicity, Leadership, Heritage & Operating Principles |
| `/services` | `src/pages/Services.jsx` | Integrated Marketing, PR & Custom Software Catalog |
| `/services/:slug` | `src/pages/ServiceDetail.jsx` | Individual 8-Part Service Framework (e.g. Performance Marketing, Digital PR, IT) |
| `/portfolio` | `src/pages/Portfolio.jsx` | Verified Client Campaigns & IT Software Showcase |
| `/process` | `src/pages/Process.jsx` | 6-Step Growth Methodology (Discover -> Strategize -> Create -> Execute -> Optimize -> Scale) |
| `/industries` | `src/pages/Industries.jsx` | Sector Solutions (Textiles, Diamonds, Healthcare, Real Estate, E-Commerce, B2B) |
| `/blog` | `src/pages/Blog.jsx` | Editorial Insights, Guides & Marketing Strategy Articles |
| `/contact` | `src/pages/Contact.jsx` | Strategic Growth Consultation, Google Map, Direct WhatsApp & Phone |
| `/privacy` | `src/pages/PrivacyPolicy.jsx` | DPDP Act 2023 & GDPR Privacy Compliance (Zero PII Retention) |
| `/terms` | `src/pages/TermsOfService.jsx` | Commercial Governance & Intellectual Property Terms |
| `/*` | `src/pages/NotFound.jsx` | Custom 404 Recovery with quick navigation to high-value pages |

---

## 3. Lead Generation & Conversion Funnel

The website deploys a multi-channel, friction-free conversion architecture:

1. **Direct Consultation Form:** Validated input fields on `/contact` with error states.
2. **Instant Brief Modal (`InstantBriefModal.jsx`):** Allows selecting service, budget bracket, timeline, and goals with an anti-bot honeypot field.
3. **Interactive Revenue Forecasting Calculator (`RevenueCalculator.jsx`):** Live slider allowing founders to project pipeline value and initiate pre-filled WhatsApp conversations.
4. **WhatsApp Direct Connect:** Deep links pre-filling client context to `+91 95372 95599`.
5. **Analytics Conversion Telemetry (`src/utils/analytics.js`):**
   * Dispatches PII-free events for `form_submit_success`, `whatsapp_click`, `phone_click`, `email_click`, `primary_cta_click`, and `case_study_view` to Google Analytics 4 (`gtag`) and Meta Pixel (`fbq`).

---

## 4. Technical SEO & Answer Engine Optimization (AEO)

* **Crawler Directives (`public/robots.txt`):** Permits search engines and AI crawlers (Google-Extended, GPTBot, PerplexityBot, ClaudeBot) while protecting private paths.
* **Sitemap (`public/sitemap.xml`):** Complete index with `<lastmod>` timestamps and prioritized weighting.
* **Structured Data (JSON-LD):**
  * `Organization` & `LocalBusiness`: Full verified address, coordinates (`21.1702, 72.8311`), founders, and phone numbers.
  * `FAQPage`: 15+ comprehensive, authoritative pre-sales questions targeting Surat queries.
  * `HowTo`: 6-step agency execution blueprint.
  * `Service` & `ItemList`: Schema markup for individual disciplines.

---

## 5. Development & Deployment

### Quick Start
```bash
# Install dependencies
npm install

# Start local development server with HMR
npm run dev

# Run Oxlint code analysis
npm run lint

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

### Production Deployment
The output bundle in `/dist` can be deployed directly to:
* **Netlify / Vercel:** Deploy from Git repository. SPA redirect rule is provided in `public/_redirects`.
* **Apache / Nginx:** Configure rewrite rules so all traffic routes to `index.html`.

---

## 6. Content Governance & Owner Approval Items

* **Factual Proof Standards:** In compliance with professional advertising standards, no statistics, client names, or reviews should be added without direct verification from client records.
* **Illustrative Models vs. Measured Outcomes:** Any hypothetical campaign models are explicitly labeled as *Strategic Frameworks* rather than historical client outcomes.
* **Live Inquiries:** Contact notifications route directly to `mkpublicitysurat@gmail.com` and official WhatsApp `+91 95372 95599`.
