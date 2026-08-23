import { 
  TrendingUp, Newspaper, Target, Smartphone, Star, PenTool, Palette, Film, Globe, ShoppingCart, Calendar,
  Factory, Scissors, Store, ShoppingBag, Stethoscope, GraduationCap, Home, Hotel, Package, Utensils,
  Laptop, Rocket, Briefcase, Landmark, Car, Shirt, Gem, Paintbrush,
  User, DollarSign, ClipboardList, BarChart
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
    title: 'Performance Marketing',
    shortDesc: 'Data-driven advertising campaigns that maximize ROI, increase conversions, and generate high-quality leads.',
    description: 'We create data-driven advertising campaigns that focus on maximizing return on investment, increasing conversions, and generating high-quality leads. Our performance marketing strategies are built on deep analytics and continuous optimization.',
    includes: [
      'Performance Marketing Strategy',
      'Lead Generation Campaigns',
      'Conversion Rate Optimization (CRO)',
      'Marketing Automation',
      'Campaign Planning & Execution',
      'Audience Targeting & Retargeting'
    ],
    deliverables: [
      'ROI-focused campaigns',
      'Lead generation systems',
      'Performance optimization',
      'Monthly reporting'
    ],
    color: '#FF6B35'
  },
  {
    id: 'public-relations',
    icon: Newspaper,
    title: 'Public Relations & Media',
    shortDesc: 'Build credibility and strengthen your brand reputation through professional PR and media engagement.',
    description: 'Build credibility and strengthen your brand reputation through professional public relations and media engagement. We create compelling narratives that resonate with your audience and establish thought leadership.',
    includes: [
      'Public Relations (PR) Management',
      'Digital PR',
      'Online Media Management',
      'Press Conference Management',
      'Media Relations',
      'Press Release Distribution',
      'Press Coverage Coordination',
      'Reputation Management',
      'Crisis Communication Support',
      'Award Nomination & Recognition Management'
    ],
    deliverables: [
      'Press coverage',
      'Media visibility',
      'Reputation enhancement',
      'Industry recognition'
    ],
    color: '#4ECDC4'
  },
  {
    id: 'advertising-solutions',
    icon: Target,
    title: 'Advertising Solutions',
    shortDesc: 'Reach the right audience through strategic advertising across major digital platforms.',
    description: 'Reach the right audience through strategic advertising across major digital platforms. We optimize your ad spend across Google, Meta, LinkedIn, YouTube and more for maximum impact.',
    includes: [
      'Google Ads Management',
      'Meta Ads (Facebook & Instagram)',
      'Instagram Advertising',
      'Facebook Advertising',
      'LinkedIn Advertising',
      'YouTube Advertising',
      'Display Advertising',
      'Remarketing Campaigns'
    ],
    deliverables: [
      'Campaign setup',
      'Budget optimization',
      'Performance monitoring',
      'Conversion tracking'
    ],
    color: '#FF3366'
  },
  {
    id: 'social-media',
    icon: Smartphone,
    title: 'Social Media Management',
    shortDesc: 'Create a powerful online presence through consistent content and audience engagement.',
    description: 'Create a powerful online presence through consistent content and audience engagement. We manage your social media channels with strategic content, community management, and data-driven growth tactics.',
    includes: [
      'Social Media Management',
      'Social Media Marketing (SMM)',
      'Content Calendar Planning',
      'Community Management',
      'Social Analytics',
      'Brand Engagement Campaigns'
    ],
    deliverables: [
      'Professional content',
      'Platform management',
      'Audience growth',
      'Monthly performance reports'
    ],
    color: '#7B68EE'
  },
  {
    id: 'influencer-marketing',
    icon: Star,
    title: 'Influencer Marketing',
    shortDesc: 'Connect your brand with trusted creators to expand reach and build consumer confidence.',
    description: 'Connect your brand with trusted creators to expand reach and build consumer confidence. We identify the right influencers, manage campaigns, and measure impact for your brand.',
    includes: [
      'Influencer Identification',
      'Creator Partnerships',
      'Campaign Management',
      'Product Collaborations',
      'Brand Ambassador Programs',
      'Campaign Performance Analysis'
    ],
    deliverables: [
      'Influencer campaigns',
      'Brand collaborations',
      'Engagement reports'
    ],
    color: '#FFD93D'
  },
  {
    id: 'content-writing',
    icon: PenTool,
    title: 'Content Writing & Communication',
    shortDesc: 'Powerful communication that connects with customers and drives business growth.',
    description: 'Powerful communication that connects with customers and drives business growth. From SEO content to ad copy, we craft messages that convert visitors into customers.',
    includes: [
      'Website Content Writing',
      'SEO Content Writing',
      'Copywriting',
      'Ad Copy',
      'Social Media Content',
      'Product Descriptions',
      'Blog Writing',
      'Corporate Profiles',
      'Business Presentations',
      'Email Copywriting'
    ],
    deliverables: [
      'SEO-friendly content',
      'Sales-focused messaging',
      'Professional documentation'
    ],
    color: '#6BCB77'
  },
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding & Creative',
    shortDesc: 'Create a memorable brand identity through strategic design and creative communication.',
    description: 'Create a memorable brand identity through strategic design and creative communication. We build complete brand systems that differentiate you in the market and connect emotionally with your audience.',
    includes: [
      'Brand Strategy',
      'Brand Positioning',
      'Corporate Branding',
      'Logo Design',
      'Brand Identity Development',
      'Graphic Design',
      'Marketing Collateral Design',
      'Motion Graphics',
      'Creative Campaign Design'
    ],
    deliverables: [
      'Complete brand identity',
      'Marketing creatives',
      'Brand consistency'
    ],
    color: '#FF8C94'
  },
  {
    id: 'video-production',
    icon: Film,
    title: 'Video Production & Media',
    shortDesc: 'Professional visual storytelling designed for modern marketing platforms.',
    description: 'Professional visual storytelling designed for modern marketing platforms. We produce cinematic corporate videos, advertisements, social media content, and motion graphics that captivate audiences.',
    includes: [
      'Corporate Video Production',
      'Commercial Advertisement Production',
      'Promotional Videos',
      'Product Videos',
      'Brand Films',
      'Social Media Reels',
      'Motion Graphics',
      'Product Photography'
    ],
    deliverables: [
      'High-quality videos',
      'Marketing-ready content',
      'Multi-platform creative assets'
    ],
    color: '#C39BD3'
  },
  {
    id: 'web-design',
    icon: Globe,
    title: 'Website Design & Digital',
    shortDesc: 'Build modern, responsive, and conversion-focused digital experiences.',
    description: 'Build modern, responsive, and conversion-focused digital experiences. We design and develop websites that look stunning, perform excellently, and convert visitors into customers.',
    includes: [
      'Website Design',
      'Website Development',
      'Landing Page Development',
      'WordPress Development',
      'UI/UX Design',
      'Website Maintenance',
      'Website Optimization'
    ],
    deliverables: [
      'Responsive websites',
      'SEO-ready architecture',
      'Scalable digital solutions'
    ],
    color: '#5DADE2'
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    shortDesc: 'Grow your online business through optimized marketplace management.',
    description: 'Grow your online business through optimized marketplace management. We manage your Amazon, Flipkart, and other marketplace accounts to maximize visibility, conversions, and revenue.',
    includes: [
      'Amazon Account Management',
      'Flipkart Account Management',
      'Product Listing Optimization',
      'Catalog Management',
      'Marketplace Advertising',
      'A+ Content Creation',
      'Product Image Optimization'
    ],
    deliverables: [
      'Optimized listings',
      'Marketplace growth',
      'Improved sales performance'
    ],
    color: '#F0B27A'
  },
  {
    id: 'event-marketing',
    icon: Calendar,
    title: 'Event Marketing & Promotions',
    shortDesc: 'Create memorable brand experiences through professionally managed events.',
    description: 'Create memorable brand experiences through professionally managed events. From corporate events and product launches to exhibitions and brand activations, we handle everything end-to-end.',
    includes: [
      'Corporate Event Management',
      'Brand Activations',
      'Product Launch Events',
      'Promotional Campaigns',
      'Exhibition Management',
      'Trade Show Marketing',
      'Event Promotions',
      'Offline Marketing Campaigns'
    ],
    deliverables: [
      'Event planning',
      'Brand engagement',
      'Promotional execution'
    ],
    color: '#EB984E'
  }
];

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
  { number: 500, suffix: '+', label: 'Clients Served' },
  { number: 2000, suffix: '+', label: 'Campaigns Delivered' },
  { number: 18, suffix: '+', label: 'Industries Covered' },
  { number: 98, suffix: '%', label: 'Client Satisfaction' }
];

export const whyChooseUs = [
  { icon: Target, title: 'End-to-End Solutions', desc: 'Complete marketing, PR, and media services under one roof — no need to juggle multiple agencies.' },
  { icon: BarChart, title: 'Performance-Driven', desc: 'Every campaign is built on data, optimized for results, and measured for real business impact.' },
  { icon: Palette, title: 'Creative Excellence', desc: 'Award-worthy creative work that captures attention, builds brands, and drives engagement.' },
  { icon: User, title: 'Dedicated Management', desc: 'A dedicated project manager for every client ensures seamless communication and timely delivery.' },
  { icon: DollarSign, title: 'ROI-Focused', desc: 'We don\'t just create campaigns — we create revenue. Every rupee spent is tracked and optimized.' },
  { icon: ClipboardList, title: 'Transparent Reporting', desc: 'Detailed monthly reports with clear metrics, insights, and actionable recommendations.' }
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
