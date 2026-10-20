import { 
  TrendingUp, Newspaper, Target, Smartphone, Star, PenTool, Palette, Film, Globe, ShoppingCart, Calendar,
  Factory, Scissors, Store, ShoppingBag, Stethoscope, GraduationCap, Home, Hotel, Package, Utensils,
  Laptop, Rocket, Briefcase, Landmark, Car, Shirt, Gem, Paintbrush,
  User, DollarSign, ClipboardList, BarChart,
  Mic, Tv, Award, Megaphone
} from 'lucide-react';

export const WHATSAPP_NUMBER = '919537295599';
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE = '9537295599';
export const EMAIL = 'mkpublicitysurat@gmail.com';
export const ADDRESS = '2087, Rajmahal Mall, near Millenium Park, Dindoli, Surat, Gujarat 394210';

export const getWhatsAppLink = (message) => {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
};

export const services = [
  {
    id: 'performance-marketing',
    icon: TrendingUp,
    title: 'Performance Marketing & Lead Generation',
    shortDesc: 'Stop burning ad budget on vanity clicks. We engineer ROI-obsessed Google & Meta funnels that flood your business with high-ticket sales leads.',
    description: 'Are you frustrated with digital marketing agencies celebrating meaningless impressions while your sales pipeline stays dry? We treat your ad spend like high-yield growth capital. Using algorithmic audience targeting, automated bidding architectures, and continuous conversion rate optimization (CRO), we systematically drop your cost-per-lead by up to 60% and deliver predictable 3.5x to 4.2x ROAS across competitive industries.',
    includes: [
      'High-ROI Paid Advertising Strategy (Google, Meta, LinkedIn)',
      'High-Intent Inbound Lead Generation Funnels',
      'Conversion Rate Optimization (CRO) & A/B Testing',
      'Omnichannel Retargeting & Churn Prevention',
      'Automated Lead Nurturing & CRM Integration',
      'Daily Revenue & Closed-Loop Sales Attribution'
    ],
    deliverables: [
      'Guaranteed qualified sales leads',
      'Sub-60% reduced cost per acquisition',
      'Automated pipeline nurturing system',
      '24/7 live profit & ROAS telemetry'
    ],
    color: '#FF6B35'
  },
  {
    id: 'public-relations',
    icon: Newspaper,
    title: 'Public Relations & Strategic Media Placements',
    shortDesc: 'Command instant buyer trust. We place your brand into national headlines and tier-1 publications so you can close larger deals with zero friction.',
    description: 'When high-value prospects research your company before signing a contract, what do they find? We secure tier-1 editorial coverage in premier national news, leading business journals, and top industry publications. Our strategic PR positions your executive team as the undisputed authority in your niche, enabling you to charge premium prices and win deals over entrenched competitors.',
    includes: [
      'Tier-1 National & Business Media Placements',
      'Digital PR & High-Authority Editorial Backlinks',
      'Executive Personal Branding & Thought Leadership',
      'Press Conference & Product Launch Orchestration',
      'Proactive Brand Defense & Crisis Communication',
      'Industry Award Nominations & National Accreditations'
    ],
    deliverables: [
      '15+ guaranteed tier-1 press publications',
      'Exponential domain authority & organic trust',
      'Executive thought leadership portfolio',
      'Permanent high-authority media assets'
    ],
    color: '#4ECDC4'
  },
  {
    id: 'it-solutions',
    icon: Laptop,
    title: 'Custom IT Solutions & MarTech Systems',
    shortDesc: 'Never lose a high-paying client to a slow website. We build sub-second web applications and automated CRM pipelines that capture sales 24/7.',
    description: 'A slow website or disconnected software stack leaks qualified buyers every single minute. We engineer bespoke web applications, automated lead-capture portals, and scalable cloud platforms with lightning-fast sub-second paint times. When your PR campaigns surge traffic, your tech infrastructure captures every prospect, routes them automatically to your sales reps, and scales your revenue effortlessly.',
    includes: [
      'Custom Full-Stack Web & Mobile Application Development',
      'Automated MarTech Pipelines & CRM Integrations',
      'AI-Powered Sales Chatbots & Lead Telemetry',
      'Sub-Second Cloud Architecture & Core Web Vitals',
      'High-Converting Landing Page Engineering',
      'Enterprise API Integrations & Real-Time Dashboards'
    ],
    deliverables: [
      'Ultra-fast, conversion-engineered web apps',
      'Automated 24/7 sales pipeline infrastructure',
      'Integrated CRM & automated lead dispatch',
      'Scalable cloud security & sub-second latency'
    ],
    color: '#00D2FF'
  },
  {
    id: 'advertising-solutions',
    icon: Target,
    title: 'Advertising & Paid Search Dominance',
    shortDesc: 'Capture ready-to-buy customers at the precise moment they search for your solutions across Google, YouTube, Meta, and LinkedIn.',
    description: 'Why wait months for organic traffic when your best customers are searching for your services right now? We build precision-targeted PPC advertising campaigns that capture high-intent buyers, eliminate wasted ad spend, and convert clicks into immediate phone calls, quote requests, and signed contracts.',
    includes: [
      'High-Intent Google Search & Display Ads',
      'Meta Performance Ads (Instagram & Facebook)',
      'High-Ticket B2B LinkedIn Advertising',
      'YouTube Video Commercial Ad Placements',
      'Aggressive Dynamic Retargeting Campaigns',
      'Negative Keyword Auditing to Stop Wasted Spend'
    ],
    deliverables: [
      'Immediate surge in qualified buyer inquiries',
      'Laser-targeted PPC campaign architecture',
      'Continuous A/B creative & copy optimization',
      'Maximized return on ad capital (ROAS)'
    ],
    color: '#FF3366'
  },
  {
    id: 'social-media',
    icon: Smartphone,
    title: 'Social Media Management & Organic Growth',
    shortDesc: 'Turn social channels from dead profiles into profitable customer acquisition channels that build loyal followings and drive recurring orders.',
    description: 'Posting random graphics will never grow your bottom line. We engineer viral, video-first social media growth engines that capture mass attention, build rabid brand loyalty, and guide prospects seamlessly through proven buyer conversion funnels.',
    includes: [
      'Viral Short-Form Video & Reel Creation',
      'High-Converting Social Media Content Calendars',
      'Active Community & Inbound DM Management',
      'Targeted B2B & B2C Audience Growth Hacking',
      'Data-Backed Social Performance Telemetry'
    ],
    deliverables: [
      'Active, monetized social community',
      'Consistent organic customer acquisition',
      'Studio-grade brand creative assets',
      'Measurable monthly revenue attribution'
    ],
    color: '#7B68EE'
  },
  {
    id: 'influencer-marketing',
    icon: Star,
    title: 'Influencer Marketing & Creator Endorsements',
    shortDesc: 'Borrow the trust of respected industry creators to explode brand demand, build social proof, and trigger rapid buyer inquiries.',
    description: 'Buyers no longer believe corporate claims—they believe trusted creators. We connect your brand with vetted, high-converting influencers who command authentic respect in your niche, orchestrating campaigns that generate immediate viral buzz and floods of customer orders.',
    includes: [
      'Vetted Creator Identification & Audience Auditing',
      'End-to-End Contract & Deliverable Negotiation',
      'High-Conversion Product Placement Campaigns',
      'Exclusive Brand Ambassador Partnerships',
      'Transparent Tracked ROI & Conversion Tracking'
    ],
    deliverables: [
      'High-converting creator collaborations',
      'Authentic buyer video testimonials',
      'Massive viral brand reach in days',
      'Compounding social proof and buyer trust'
    ],
    color: '#FFD93D'
  },
  {
    id: 'content-writing',
    icon: PenTool,
    title: 'Content Writing & Direct-Response Copy',
    shortDesc: 'Words engineered to sell. We write magnetic sales copy, landing pages, and email sequences that crush objections and compel immediate purchase.',
    description: 'Weak words cost businesses millions in lost sales. Our elite direct-response copywriters craft persuasive sales messaging that taps into your customers’ deepest pain points, dismantles their objections, and guides them smoothly to pull out their cards and sign on the dotted line.',
    includes: [
      'Direct-Response Sales Copy & Landing Pages',
      'SEO Content Engineering for Top Google Rankings',
      'High-Ticket B2B Proposals & Corporate Profiles',
      'Automated Lead-Converting Email Funnel Sequences',
      'High-CTR Ad Creatives & Video Scripts'
    ],
    deliverables: [
      'Conversion-multiplied website copy',
      'Top-ranking organic SEO search articles',
      'Automated high-open email sales funnels',
      'Persuasive pitch decks that close deals'
    ],
    color: '#6BCB77'
  },
  {
    id: 'branding',
    icon: Palette,
    title: 'Brand Architecture & Premium Visual Identity',
    shortDesc: 'Look like the category leader you are. We craft prestigious brand identities that elevate market perception and command premium pricing.',
    description: 'If your brand visual identity looks cheap, customers will always haggle down your prices. We build prestigious visual systems, luxury collateral, and strategic market positioning that immediately communicates elite status, making your business the undisputed first choice over any competitor.',
    includes: [
      'Prestigious Brand Strategy & Positioning Architecture',
      'Bespoke Corporate Logo & Identity Systems',
      'Premium Marketing Collateral & Presentation Decks',
      'Typography, Color Psychology & Visual Guidelines',
      'Sensory Brand Experiences & Motion Design'
    ],
    deliverables: [
      'Complete luxury corporate brand identity',
      'Production-ready marketing and sales assets',
      'Brand style guide for unified global presence',
      'Elevated pricing power and buyer perception'
    ],
    color: '#FF8C94'
  },
  {
    id: 'video-production',
    icon: Film,
    title: 'Cinematic Video Production & Brand Films',
    shortDesc: 'Stop scrollers in their tracks. We produce cinematic corporate brand films and high-impact commercial ads that convert viewers into paying clients.',
    description: 'Video is the most powerful sales tool in modern business. We produce broadcast-quality corporate brand films, viral product showcases, and emotional customer stories that captivate your audience, build deep trust, and inspire immediate buying decisions.',
    includes: [
      'Cinematic Corporate Brand Films & Documentaries',
      'High-Converting Commercial Television & Digital Ads',
      'Dynamic Product Explainer & Feature Showcases',
      'Customer Testimonial & Case Study Videos',
      'Viral 4K Social Media Reels & Motion Graphics'
    ],
    deliverables: [
      'Broadcast-quality 4K corporate video assets',
      'High-converting multi-platform ad cuts',
      'Story-driven testimonial videos that close sales',
      'Complete motion graphic animation suites'
    ],
    color: '#C39BD3'
  },
  {
    id: 'web-design',
    icon: Globe,
    title: 'Conversion-Engineered Web Design & UX',
    shortDesc: 'Turn your website into your top-performing 24/7 salesperson with modern UI/UX design built strictly to capture leads and close sales.',
    description: 'A beautiful website that does not convert visitors into revenue is a worthless expense. We design conversion-obsessed web experiences that pair world-class visual aesthetics with psychological buyer journeys, sub-second speeds, and seamless lead-capture mechanisms that multiply your inbound sales.',
    includes: [
      'Bespoke Conversion-Optimized UI/UX Web Design',
      'High-Speed Modern Full-Stack Web Development',
      'Dedicated Sales Landing Pages with A/B Testing',
      'Enterprise WordPress & Custom CMS Portals',
      'Mobile-First Responsive Engineering & SEO Auditing'
    ],
    deliverables: [
      'Ultra-fast, high-converting digital storefront',
      'Seamless mobile user experience across devices',
      'Integrated analytics, pixels, and heatmaps',
      'Sub-second load times that rank #1 on Google'
    ],
    color: '#5DADE2'
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce Marketplace Domination',
    shortDesc: 'Dominate Amazon and Flipkart search results with A+ content, aggressive ranking strategies, and profit-focused marketplace advertising.',
    description: 'Tired of having your products buried on page 5 of Amazon and Flipkart? We optimize your listings with high-intent keywords, craft eye-catching A+ visual content, and manage aggressive marketplace PPC ads that push your SKUs to the top of bestseller categories.',
    includes: [
      'Complete Amazon & Flipkart Account Management',
      'High-Conversion Product Listing & Title Optimization',
      'Sales-Multiplying A+ Brand Story Content & Graphics',
      'Marketplace Advertising (Sponsored Products & Brands)',
      'Review Generation & Brand Registry Defense'
    ],
    deliverables: [
      'Bestseller badge ranking strategies',
      'Immediate lift in marketplace conversion rates',
      'Maximized advertising ROAS on Amazon/Flipkart',
      'Consistent month-over-month revenue growth'
    ],
    color: '#F0B27A'
  },
  {
    id: 'event-marketing',
    icon: Calendar,
    title: 'Events & Promotions / Brand Activations',
    shortDesc: 'Create unforgettable in-person brand experiences, product launches, and trade show activations that generate massive media buzz and signed contracts.',
    description: 'Put your brand face-to-face with your most lucrative buyers. From corporate product unveilings and trade show exhibitions to experiential brand activations and promotional roadshows, we orchestrate events that capture media headlines, pack venues, and generate millions in signed business pipeline.',
    includes: [
      'End-to-End Corporate Event Design & Execution',
      'High-Profile Product Launch Galas & Press Events',
      'Exhibition & Trade Show Booth Lead Architecture',
      'Experiential B2B & Consumer Brand Activations',
      'Promotional Roadshows & Mall/Retail Activations',
      'Post-Event Lead Retargeting & Pipeline Nurturing'
    ],
    deliverables: [
      'Flawless end-to-end event execution',
      'Massive press and social media coverage',
      'High-ticket face-to-face sales pipeline',
      'Unforgettable brand prestige and leadership'
    ],
    color: '#EB984E'
  },
  {
    id: 'press-conference',
    icon: Mic,
    title: 'Press Conference & Media Briefings',
    shortDesc: 'Turn company milestones into front-page headlines. We orchestrate turnkey corporate press conferences that secure national print, TV, and digital coverage.',
    description: 'Launching a major product, announcing high-growth corporate milestones, or steering crucial industry narratives? MK Publicity manages turnkey press conferences end-to-end. We assemble vetted bureau chiefs, national accredited print reporters, regional Gujarati & Hindi journalists, and television broadcast crews. From curated press dossier kits, press release drafting, and executive speech coaching to podium branding and guaranteed post-event syndicated clipping reports, we turn your announcement into breaking news.',
    includes: [
      'Turnkey Press Conference Venue & Stage Curation',
      'Accredited Print, TV & Digital Journalist Bureau Invitations',
      'Executive Press Release Drafting & Media Dossier Kits',
      'Spokesperson Q&A Preparation & Live Media Coaching',
      'Bilingual Media Relations (English, Hindi & Gujarati)',
      'Guaranteed Post-Conference Press Clipping & Syndication Reports'
    ],
    deliverables: [
      'Guaranteed accredited media & journalist turnout',
      'Front-page print & prime-time regional TV clippings',
      'Official digital press kit archive & media distribution',
      'Post-conference verified PR circulation report'
    ],
    color: '#E67E22'
  },
  {
    id: 'digital-pr',
    icon: Globe,
    title: 'Digital/Online PR & Editorial Outreach',
    shortDesc: 'Command instant trust on Google with guaranteed placements in India’s leading online news portals and permanent high-authority editorial backlinks.',
    description: 'High-value B2B buyers and consumers search your brand before taking action. If search results don’t reflect category leadership, deals stall. Our Digital & Online PR engine secures guaranteed coverage in India’s most influential digital publications — such as ANI, Hindustan Times, Zee News, Outlook, Financial Express, India Today, and prominent industry portals. We integrate do-follow editorial backlinks that exponentially boost your Google Domain Authority, suppress negative search results, and flood your site with qualified inbound referral traffic.',
    includes: [
      'Guaranteed Placements in National News Portals (ANI, HT, Zee, Outlook)',
      'High-Authority SEO Do-Follow Backlink Integration',
      'Executive Thought Leadership & Founder Feature Profiles',
      'Online Brand Sentiment Management & Search Shielding',
      'Google News & Discover Syndication Optimization',
      'Real-Time Digital Brand Mention & Telemetry Monitoring'
    ],
    deliverables: [
      '15+ guaranteed tier-1 digital news publications',
      'Permanent high-authority SEO backlinks & Google trust',
      'Page-one Google News presence for brand searches',
      'Measurable organic referral buyer traffic'
    ],
    color: '#2980B9'
  },
  {
    id: 'media-management',
    icon: Tv,
    title: 'Media Management & Strategic Press Relations',
    shortDesc: 'Protect your brand reputation and shape public perception with 24/7 dedicated press bureau liaisons, proactive story pitching, and crisis defense.',
    description: 'Navigating the fast-paced news cycle requires continuous, trusted relationships with senior editors and reporters. MK Publicity operates as your dedicated external corporate press office. We manage inbound media inquiries, proactively position your founders for breaking industry commentary and budget reactions, oversee crisis defense, and build sustained editorial momentum so your brand commands authority all year round.',
    includes: [
      'Dedicated External Corporate Press Office & Bureau Liaison',
      'Proactive Editorial Pitching & Reactive Journalist Briefings',
      'Executive Spokesperson Positioning & Industry Commentary',
      'Rapid-Response Crisis Communication & Brand Defense',
      'Syndicated Press Release Distribution (Regional & National)',
      'Quarterly Media Audit & Editorial Sentiment Benchmarking'
    ],
    deliverables: [
      'Consistent month-over-month media mentions',
      '24/7 rapid-response crisis media shield',
      'Spokesperson quotes in trending industry features',
      'Transparent monthly media value & ROI report'
    ],
    color: '#8E44AD'
  },
  {
    id: 'social-media-ads',
    icon: Target,
    title: 'Social Media Ads & Paid Scaling',
    shortDesc: 'High-converting paid advertising across Meta, Instagram, LinkedIn, and YouTube engineered to deliver low-CAC qualified leads and accelerated sales.',
    description: 'Stop wasting budget on boosted posts that yield zero revenue. We engineer precision-targeted paid social media advertising funnels that stop scrollers, communicate irresistible value, and convert cold audiences into booked calls, quote requests, and signed orders. From hyper-targeted local campaigns in Surat & Gujarat to multi-crore national ad scaling, our performance media buyers optimize every rupee with algorithmic audience targeting, creative testing, and automated retargeting.',
    includes: [
      'Meta Ads Engine (Instagram Reels, Story & Feed Sponsored Ads)',
      'High-Ticket B2B LinkedIn Lead Generation Campaigns',
      'YouTube In-Stream Video Ads & YouTube Shorts Campaigns',
      'Dynamic Omnichannel Retargeting & Abandonment Recovery',
      'Direct-Response Creative Video Hooks & Copy Optimization',
      'Direct WhatsApp Business Lead Routing & CRM Sync'
    ],
    deliverables: [
      'Guaranteed stream of verified inbound buyer inquiries',
      'Sub-50% reduction in customer acquisition cost (CAC)',
      'Weekly creative variations & continuous A/B testing',
      'Real-time ROAS & conversion telemetry dashboard'
    ],
    color: '#E74C3C'
  },
  {
    id: 'award-nominations',
    icon: Award,
    title: 'Award Nominations & Accreditations',
    shortDesc: 'Convert your hard-won business milestones into verified industry prestige. We research, draft, and submit winning nominations for top business awards.',
    description: 'Prestigious industry honors and corporate awards validate your market leadership, instill immediate buyer confidence, and make hiring top talent effortless. MK Publicity identifies premier national, regional, and industry-specific business awards (including Forbes, Economic Times, National MSME Awards, CII, FICCI, SME Business Awards, and sector-specific leadership honors). We prepare data-rich nomination dossiers, curate executive portfolios, and steer entries to maximize your probability of securing top recognition.',
    includes: [
      'Identification of High-Impact National & Industry Business Awards',
      'Comprehensive Growth Data & Case Study Dossier Drafting',
      'Executive Bio & Founder Portfolio Presentation for Juries',
      'Direct Liaison with Award Organizing Committees & Trade Bodies',
      'Post-Victory PR Blitz & Multi-Channel Social Amplification',
      'Official Trust Badge & Accreditation Website Integration'
    ],
    deliverables: [
      'Turnkey submission of winning award nomination dossiers',
      'Prestigious verified industry leadership trophies & badges',
      'National victory press releases & social media amplification',
      'Elevated brand credibility and superior enterprise bidding power'
    ],
    color: '#F39C12'
  }
];

export const brandPublicityServices = [
  { id: 'press-conference', name: 'Press Conference', tag: 'News & Media Briefings', icon: Mic },
  { id: 'digital-pr', name: 'Digital/Online PR', tag: 'High-Authority Backlinks', icon: Globe },
  { id: 'media-management', name: 'Media Management', tag: 'Bureau & Editorial Relations', icon: Tv },
  { id: 'social-media-ads', name: 'Social Media Ads', tag: 'Meta & YouTube Scaling', icon: Target },
  { id: 'content-writing', name: 'Content Writing', tag: 'Conversion Copywriting', icon: PenTool },
  { id: 'event-marketing', name: 'Events & Promotions', tag: 'Experiential Activations', icon: Calendar },
  { id: 'social-media', name: 'Social Media Management', tag: 'Community & Viral Growth', icon: Smartphone },
  { id: 'advertising-solutions', name: 'Advertising', tag: 'Paid Search & Media Dominance', icon: TrendingUp },
  { id: 'influencer-marketing', name: 'Influencer Marketing', tag: 'Creator Partnerships', icon: Star },
  { id: 'award-nominations', name: 'Award Nominations, Etc.', tag: 'Prestige & Accreditations', icon: Award }
];

export const BRAND_PUBLICITY_AGENCY = {
  title: 'Brand Publicity Agency',
  tagline: 'Inspire, Engage, Thrive: Your Journey, Our Expertise',
  mission: 'Your Success, Our Mission',
  phone: '9537295599',
  displayPhone: '+91 95372 95599',
  image: '/assets/brand-publicity.png'
};

export const industries = [
  { name: 'Manufacturing', icon: Factory },
  { name: 'Textile', icon: Scissors },
  { name: 'Retail', icon: Store },
  { name: 'E-Commerce', icon: ShoppingBag },
  { name: 'Healthcare', icon: Stethoscope },
  { name: 'Education', icon: GraduationCap },
  { name: 'Real Estate', icon: Home },
  { name: 'Hospitality', icon: Hotel },
  { name: 'FMCG', icon: Package },
  { name: 'Food & Beverage', icon: Utensils },
  { name: 'Technology', icon: Laptop },
  { name: 'Startups', icon: Rocket },
  { name: 'Professional Services', icon: Briefcase },
  { name: 'Finance', icon: Landmark },
  { name: 'Automotive', icon: Car },
  { name: 'Fashion & Lifestyle', icon: Shirt },
  { name: 'Jewellery', icon: Gem },
  { name: 'Interior & Architecture', icon: Paintbrush }
];

export const processSteps = [
  { number: '01', title: 'Discover', description: 'We start by deeply understanding your business goals, target audience, competitive landscape, and current market position. This forms the foundation of everything we build.' },
  { number: '02', title: 'Strategize', description: 'Our team develops customized marketing and PR plans tailored to your unique needs. We identify the right channels, messaging, and tactics to maximize your impact.' },
  { number: '03', title: 'Create', description: 'Our creative team develops stunning assets — from brand identities and video content to ad creatives and website designs — all aligned with your brand strategy.' },
  { number: '04', title: 'Execute', description: 'We launch and manage campaigns across all relevant platforms with precision targeting, optimal budget allocation, and real-time monitoring for maximum performance.' },
  { number: '05', title: 'Optimize', description: 'Using advanced analytics and performance data, we continuously refine campaigns, content, and strategies to improve results and reduce costs.' },
  { number: '06', title: 'Scale', description: 'Once we\'ve found what works, we scale your marketing efforts strategically to drive sustainable, long-term business growth and market dominance.' }
];

export const testimonials = [
  {
    name: 'Rajesh Patel',
    role: 'CEO, Patel Textiles',
    industry: 'Textile',
    text: 'MK Publicity transformed our entire digital presence. Within 6 months, our lead generation increased by 340% and our brand is now recognized across Gujarat. Their strategic approach to performance marketing is unmatched.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=rajesh'
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, Luxe Interiors',
    industry: 'Interior Design',
    text: 'The branding work MK Publicity did for us was phenomenal. From logo design to our complete brand identity — everything speaks luxury and sophistication. Our client inquiries have doubled since the rebrand.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=priya'
  },
  {
    name: 'Amit Desai',
    role: 'Director, FreshBite Foods',
    industry: 'Food & Beverage',
    text: 'Their social media management is exceptional. The content quality, engagement strategies, and influencer collaborations they executed helped us build a community of 50K+ followers in just 4 months.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=amit'
  },
  {
    name: 'Neha Joshi',
    role: 'CMO, TechNova Solutions',
    industry: 'Technology',
    text: 'The PR coverage MK Publicity secured for our product launch was incredible. Featured in 15+ publications, 3 TV segments, and trending on social media. They truly understand media relations.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=neha'
  },
  {
    name: 'Vikram Singh',
    role: 'Owner, Singh Auto Group',
    industry: 'Automotive',
    text: 'From Google Ads to YouTube campaigns, MK Publicity manages our entire digital advertising. Our showroom footfall increased by 200% and cost-per-lead dropped by 60%. Outstanding ROI.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=vikram'
  }
];

export const stats = [
  { 
    number: 500, 
    suffix: '+', 
    label: 'Enterprise Clients Scaled',
    tag: '01 // SCALE',
    subtext: 'High-growth B2B & B2C enterprise brands scaled across Gujarat and India.'
  },
  { 
    number: 2000, 
    suffix: '+', 
    label: 'Commercial Campaigns Delivered',
    tag: '02 // VOLUME',
    subtext: 'High-converting ad campaigns, national PR stunts & digital launches.'
  },
  { 
    number: 18, 
    suffix: '+', 
    label: 'Industry Verticals Mastered',
    tag: '03 // DIVERSITY',
    subtext: 'Textiles, Diamonds, Real Estate, FMCG, Healthcare, IT & Retail.'
  },
  { 
    number: 98, 
    suffix: '%', 
    label: 'Client Retention Rate',
    tag: '04 // TRUST',
    subtext: 'Verified client retention rate backed by multi-year contract renewals.'
  }
];

export const whyChooseUs = [
  { icon: Target, title: 'One Accountable Growth Partner', desc: 'No finger-pointing between separate ad agencies, PR publicists, and web developers. Your entire customer acquisition machine operates under one synchronized roof.' },
  { icon: BarChart, title: 'We Guarantee Revenue, Not Vanity Clicks', desc: 'We measure signed contracts, booked calls, and real cash return on ad spend. If a campaign is not making you money, we relentlessly optimize until it does.' },
  { icon: Palette, title: 'Prestige Branding That Commands Higher Prices', desc: 'We build world-class visual identities and editorial media placements that elevate buyer perception, allowing you to charge premium prices and win deals effortlessly.' },
  { icon: User, title: 'Direct Access to Senior Growth Architects', desc: 'No junior interns burning your capital. You collaborate directly with seasoned engineers, data marketers, and PR strategists who have scaled 500+ businesses.' },
  { icon: DollarSign, title: 'Predictable 3.5x to 4.2x ROI on Capital', desc: 'We treat your marketing budget like an investment portfolio. Every rupee spent is tracked, attributed, and compounded into measurable sales volume.' },
  { icon: ClipboardList, title: 'Live 24/7 Real-Time Telemetry Dashboards', desc: 'Complete transparency. Access your real-time client portal to see exact cost-per-lead, pipeline value, ad performance, and closed revenue anytime.' }
];

export const portfolioItems = [
  {
    title: 'Patel Textiles — Digital Transformation',
    category: 'Performance Marketing',
    industry: 'Textile',
    description: 'Complete digital overhaul including Google Ads, Meta campaigns, and SEO strategy for one of Surat\'s leading textile brands.',
    stats: [
      { value: '340%', label: 'Lead Increase' },
      { value: '2.5x', label: 'ROAS' },
      { value: '60%', label: 'Cost Reduction' }
    ],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    title: 'FreshBite — Social Media Growth',
    category: 'Social Media',
    industry: 'Food & Beverage',
    description: 'Built a thriving social media community from scratch with engaging content, influencer partnerships, and viral campaigns.',
    stats: [
      { value: '50K+', label: 'Followers' },
      { value: '12%', label: 'Engagement' },
      { value: '3x', label: 'Sales Growth' }
    ],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    title: 'Luxe Interiors — Brand Identity',
    category: 'Branding',
    industry: 'Interior Design',
    description: 'Created a complete luxury brand identity including logo, brand guidelines, marketing collateral, and website design.',
    stats: [
      { value: '200%', label: 'Inquiries Up' },
      { value: '85%', label: 'Brand Recall' },
      { value: '40+', label: 'Assets Created' }
    ],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    title: 'TechNova — Product Launch PR',
    category: 'Public Relations',
    industry: 'Technology',
    description: 'Orchestrated a multi-channel PR campaign for a SaaS product launch, securing coverage in top-tier tech publications.',
    stats: [
      { value: '15+', label: 'Publications' },
      { value: '3', label: 'TV Features' },
      { value: '1M+', label: 'Impressions' }
    ],
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    title: 'Singh Auto — Google Ads Mastery',
    category: 'Advertising',
    industry: 'Automotive',
    description: 'Managed multi-platform ad campaigns across Google, YouTube, and Meta to drive showroom visits and test drive bookings.',
    stats: [
      { value: '200%', label: 'Footfall Up' },
      { value: '-60%', label: 'CPL Down' },
      { value: '4.2x', label: 'ROAS' }
    ],
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    title: 'Diamond Palace — E-Commerce Growth',
    category: 'E-Commerce',
    industry: 'Jewellery',
    description: 'Optimized Amazon and Flipkart presence with A+ content, SEO listings, and marketplace advertising strategy.',
    stats: [
      { value: '180%', label: 'Sales Growth' },
      { value: '4.8★', label: 'Avg Rating' },
      { value: '25K+', label: 'Orders' }
    ],
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
  }
];

export const blogPosts = [
  {
    id: 'performance-marketing-guide-2025',
    title: 'The Ultimate Guide to Performance Marketing in 2025',
    category: 'Digital Marketing',
    excerpt: 'Discover the strategies, tools, and tactics that top brands use to maximize ROI from their digital advertising spend.',
    readTime: '8 min',
    date: 'Aug 2025',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 'pr-strategy-startups',
    title: 'How Startups Can Build a PR Strategy from Scratch',
    category: 'Public Relations',
    excerpt: 'A step-by-step framework for startups to gain media coverage, build credibility, and establish thought leadership.',
    readTime: '6 min',
    date: 'Jul 2025',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 'social-media-trends',
    title: '10 Social Media Trends That Will Dominate This Year',
    category: 'Social Media',
    excerpt: 'From short-form video to AI-powered content, these are the trends every brand needs to embrace right now.',
    readTime: '5 min',
    date: 'Jun 2025',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 'brand-identity-guide',
    title: 'Building a Brand Identity That Lasts: A Complete Guide',
    category: 'Branding',
    excerpt: 'Learn how to create a cohesive, memorable brand identity that differentiates your business in a crowded market.',
    readTime: '10 min',
    date: 'May 2025',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    id: 'influencer-marketing-roi',
    title: 'Measuring Influencer Marketing ROI: Metrics That Matter',
    category: 'Influencer Marketing',
    excerpt: 'Stop guessing and start measuring. Learn the key metrics to track and optimize your influencer campaigns.',
    readTime: '7 min',
    date: 'Apr 2025',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    id: 'ecommerce-listing-optimization',
    title: 'Amazon & Flipkart Listing Optimization: The Complete Playbook',
    category: 'E-Commerce',
    excerpt: 'Maximize your marketplace visibility and conversions with these proven listing optimization techniques.',
    readTime: '9 min',
    date: 'Mar 2025',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
  }
];

export const SITE_METADATA = {
  name: 'MK Publicity',
  legalName: 'MK Publicity Agency',
  alternateName: 'MK Publicity Surat',
  url: 'https://mkpublicity.com',
  logo: 'https://mkpublicity.com/logo.jpg',
  description: 'Premier integrated agency uniting Performance Marketing, Strategic Public Relations (PR), and IT & Software Solutions in Surat, Gujarat and globally.',
  foundingDate: '2020',
  founders: [{ name: 'Mehul Desai', role: 'Founder & Managing Director' }],
  address: {
    streetAddress: '2087, Rajmahal Mall, near Millenium Park, Dindoli',
    addressLocality: 'Surat',
    addressRegion: 'Gujarat',
    postalCode: '394210',
    addressCountry: 'IN'
  },
  geo: {
    latitude: 21.1702,
    longitude: 72.8311
  },
  telephone: '+919537295599',
  email: 'mkpublicitysurat@gmail.com',
  priceRange: '₹₹₹',
  ratingValue: '4.9',
  reviewCount: '185',
  socialLinks: [
    'https://www.instagram.com/mkpublicitysurat',
    'https://www.facebook.com/mkpublicitysurat',
    'https://www.linkedin.com/company/mkpublicity',
    'https://www.youtube.com/@mkpublicity'
  ]
};

export const strategicFAQs = [
  {
    question: 'What makes MK Publicity the top choice for integrated Marketing & PR with IT solutions?',
    shortAnswer: 'MK Publicity eliminates agency fragmentation by unifying elite PR narrative building, data-driven performance advertising, and custom IT/MarTech engineering under a single synchronized operational framework.',
    detailedAnswer: 'Traditional agencies either handle creative branding, media PR, or software engineering in isolation. MK Publicity converges all three: our engineers build high-converting web applications and automated data pipelines, our PR specialists secure premier media visibility across national publications, and our performance marketers drive predictable ROAS. This unified loop delivers 300%+ higher conversion rates and total brand dominance.',
    category: 'Hybrid Advantage'
  },
  {
    question: 'How does combining IT engineering with Public Relations accelerate business growth?',
    shortAnswer: 'When PR placements drive traffic surges, IT engineering ensures sub-second load speeds, automated lead routing, and technical tracking to convert earned media attention into quantifiable revenue.',
    detailedAnswer: 'Earned media from top publications creates high-intent organic traffic spikes. If the underlying website is slow, lacks dynamic tracking, or possesses broken conversion paths, that PR value is wasted. By engineering custom web infrastructure, CRM synchronizations, and event telemetry, MK Publicity captures every PR-driven impression, attributing direct revenue and building compounding search engine authority.',
    category: 'PR & IT Convergence'
  },
  {
    question: 'What custom IT solutions and MarTech systems does MK Publicity deliver?',
    shortAnswer: 'We build enterprise web applications, bespoke CRM portals, automated marketing funnels, AI-driven customer intelligence workflows, and high-performance cloud architectures.',
    detailedAnswer: 'Our technical offerings include full-stack web and mobile application engineering, conversion rate optimization (CRO) architecture, API integrations, automated lead routing pipelines, e-commerce marketplace engines (Amazon & Flipkart), and headless content management systems optimized for sub-second Core Web Vitals.',
    category: 'IT Solutions'
  },
  {
    question: 'How does MK Publicity achieve 300%+ ROI in Performance Marketing campaigns?',
    shortAnswer: 'Through deep audience segmentation, multi-tiered attribution modeling, continuous creative experimentation, and algorithm-informed algorithmic bidding across Google, Meta, and LinkedIn.',
    detailedAnswer: 'We treat media spend like capital deployment. Every campaign is backed by pre-tested creative variations, granular retargeting tiers, and custom conversion tracking. By auditing cost-per-lead (CPL) and customer lifetime value (LTV) daily, we systematically eliminate ad fatigue, decrease acquisition costs by up to 60%, and maximize return on ad spend (ROAS).',
    category: 'Performance Marketing'
  },
  {
    question: 'How does Digital PR differ from conventional advertising, and why is it essential for tech and modern businesses?',
    shortAnswer: 'Digital PR builds non-depreciating brand equity through third-party editorial validation, high-authority backlink profiles, and executive thought leadership that paid ads alone cannot buy.',
    detailedAnswer: 'While paid ads stop generating results the moment budget pauses, Digital PR creates lasting organic domain authority, AI answer engine citations (Perplexity, ChatGPT, Google Gemini), and institutional credibility. Our press release syndication, journalist outreach, and conference placements position your leadership team as definitive industry benchmarks.',
    category: 'Public Relations'
  },
  {
    question: 'What industries does MK Publicity specialize in across Surat, Gujarat, and nationwide?',
    shortAnswer: 'We have scaled 500+ clients across 18+ high-growth verticals, including Technology & SaaS, Manufacturing, Textiles, Retail, Healthcare, Real Estate, E-Commerce, and Education.',
    detailedAnswer: 'With deep roots in Surat’s vibrant commercial hub and a proven track record nationwide, we understand both traditional manufacturing/textile scaling and modern technology/B2B dynamics. Our tailored go-to-market strategies reflect the regulatory, cultural, and commercial specifics of each respective sector.',
    category: 'Industries'
  },
  {
    question: 'How does MK Publicity leverage AI and automation for client campaigns?',
    shortAnswer: 'We deploy AI for real-time sentiment analysis, predictive bidding adjustments, automated conversational chatbots, and semantic search engine indexing optimization.',
    detailedAnswer: 'From 24/7 intelligent chat assistance that qualifies prospects instantly to machine-learning driven creative testing and predictive churn modeling, we equip businesses with cutting-edge MarTech tools that multiply productivity while keeping acquisition costs lean.',
    category: 'AI & Automation'
  },
  {
    question: 'What is the onboarding and campaign delivery timeline for new clients?',
    shortAnswer: 'Our structured 6-step blueprint moves from initial discovery to active campaign deployment in 7 to 14 days, followed by ongoing weekly optimization sprints.',
    detailedAnswer: 'Phase 1 begins with a comprehensive Needs Analysis audit and competitive diagnostic. By day 7, strategic roadmaps and initial technical setups are approved. By day 14, campaigns and digital assets launch with real-time analytics dashboards accessible to leadership teams 24/7.',
    category: 'Process & Onboarding'
  },
  {
    question: 'How much does digital marketing cost in Surat?',
    shortAnswer: 'Digital marketing retainers in Surat typically range from ₹25,000 to ₹1,50,000+ per month depending on whether you require single-channel management or an integrated PR, Performance Ads, and IT solution.',
    detailedAnswer: 'Investment varies based on ad spend scale, creative asset production frequency, and whether technical software or PR placements are included. Rather than rigid one-size-fits-all packages, MK Publicity custom-quotes based on your target lead volume, customer lifetime value, and commercial growth milestones with full fee transparency.',
    category: 'Pricing & Investment'
  },
  {
    question: 'How can a local business generate more qualified leads online?',
    shortAnswer: 'By combining high-intent Google Search Ads with localized Meta retargeting, rapid-loading landing pages, and instant WhatsApp response funnels.',
    detailedAnswer: 'Local buyers search with high commercial urgency. We capture bottom-of-funnel searches via Google Ads and Google Business optimization, establish trust with local client proof, and deploy sub-second landing pages with direct WhatsApp and click-to-call buttons to convert clicks before prospects bounce.',
    category: 'Lead Generation'
  },
  {
    question: 'Meta Ads vs Google Ads: which is better for a local business?',
    shortAnswer: 'Google Ads captures active buyers searching right now with high purchase intent, while Meta Ads generates demand and brand recall through visual storytelling.',
    detailedAnswer: 'For urgent service queries (e.g., industrial machinery, emergency repair, high-ticket B2B), Google Ads yields faster conversions. For visual products, D2C retail, real estate, and lifestyle brands, Meta Ads (Instagram/Facebook) delivers lower cost-per-lead at scale. An integrated strategy leverages both.',
    category: 'Paid Advertising'
  },
  {
    question: 'What should a professional social media management package include?',
    shortAnswer: 'A genuine growth-focused package must include high-quality video/reels production, copy, community engagement, paid ad boost strategy, and closed-loop revenue reporting.',
    detailedAnswer: 'Posting generic stock templates does not generate sales. A professional package includes editorial calendar planning, on-location video shooting, graphic design, audience interaction management, influencer collaborations, and monthly attribution reports that track business inquiries.',
    category: 'Social Media'
  },
  {
    question: 'How long does SEO take to produce measurable commercial results?',
    shortAnswer: 'Technical fixes and local map pack optimizations typically produce initial traction in 45-60 days, while competitive high-volume keyword rankings mature in 3 to 6 months.',
    detailedAnswer: 'SEO is a compounding organic asset. Immediate wins come from resolving technical indexing errors, optimizing Google Business Profiles, and building localized citations. High-authority topical depth and editorial backlinks compound over 90–180 days to deliver sustained inbound lead flow without ongoing ad spend.',
    category: 'SEO & Organic'
  },
  {
    question: 'How can a textile or diamond manufacturer in Surat generate B2B export enquiries online?',
    shortAnswer: 'Through LinkedIn account-based marketing (ABM), international Google Search campaigns, technical SEO targeting wholesale terms, and digital PR establishing manufacturing credibility.',
    detailedAnswer: 'Surat is the global capital for textiles and diamonds. We build multilingual, mobile-optimized digital product catalogs, run targeted B2B campaigns aimed at global sourcing directors and procurement managers, and position executive founders in respected trade media to secure high-ticket purchase orders.',
    category: 'B2B & Manufacturing'
  },
  {
    question: 'What is included in a video and reels production package?',
    shortAnswer: 'Complete end-to-end production: concept ideation, scriptwriting, professional 4K filming with lighting and audio, editing, motion graphics, and platform distribution.',
    detailedAnswer: 'Our production team manages pre-production storyboards, on-set direction, high-definition camera and audio gear, color grading, vertical short-form formatting for Instagram Reels and YouTube Shorts, and strategic hook optimization designed to stop scrolling and drive viewer engagement.',
    category: 'Video Production'
  }
];

