// ═══════════════════════════════════════════════════════════════
// MK PUBLICITY — AI CHATBOT KNOWLEDGE BASE
// Complete service data, FAQs, and response templates
// ═══════════════════════════════════════════════════════════════

export const botProfile = {
  name: 'MK Assistant',
  greeting: "Hello! 👋 I'm your MK Publicity assistant. I can help you discover the right marketing solutions for your business. What are you looking for today?",
};

export const quickReplies = {
  initial: [
    'Our Services',
    'Get a Quote',
    'View Portfolio',
    'Contact Us'
  ],
  services: [
    'Performance Marketing',
    'Public Relations',
    'Social Media',
    'Branding',
    'Video Production',
    'Web Design',
    'Other Services'
  ],
  afterService: [
    'Get a Quote',
    'See Case Studies',
    'Another Service',
    'Talk to Expert'
  ],
  closing: [
    'Chat on WhatsApp',
    'Call Us',
    'Visit Office',
    'Back to Services'
  ]
};

export const intentPatterns = {
  greeting: {
    patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'sup', 'namaste', 'hola', 'greetings', 'yo'],
    responses: [
      "Hello! 😊 Welcome to MK Publicity. How can I help you grow your business today?",
      "Hi there! 👋 Great to connect with you. Are you looking for marketing, PR, or branding solutions?",
      "Hey! Welcome to MK Publicity — Your Success, Our Mission. What brings you here today?"
    ]
  },
  services_general: {
    patterns: ['services', 'what do you do', 'what you offer', 'offerings', 'what can you do', 'help me with', 'solutions', 'your work'],
    responses: [
      "We offer 11 comprehensive services: 📈 Performance Marketing, 📰 PR & Media, 🎯 Advertising, 📱 Social Media, 🌟 Influencer Marketing, ✍️ Content Writing, 🎨 Branding, 🎬 Video Production, 🌐 Web Design, 🛒 E-Commerce, and 🎪 Event Marketing. Which area interests you?"
    ]
  },
  performance_marketing: {
    patterns: ['performance marketing', 'performance', 'lead generation', 'leads', 'conversion', 'cro', 'marketing automation', 'roi', 'paid marketing'],
    responses: [
      "Our Performance Marketing services include:\n\n📊 Lead Generation Campaigns\n🎯 Conversion Rate Optimization (CRO)\n⚡ Marketing Automation\n📋 Campaign Planning & Execution\n👥 Audience Targeting & Retargeting\n\nWe've helped clients achieve up to 340% increase in leads! Want to discuss your campaign goals?"
    ]
  },
  public_relations: {
    patterns: ['pr', 'public relations', 'press', 'media coverage', 'press release', 'reputation', 'crisis', 'media management', 'press conference', 'award'],
    responses: [
      "Our PR & Media services cover:\n\n📰 Digital & Traditional PR\n🎤 Press Conference Management\n📝 Press Release Distribution\n🛡️ Reputation Management\n🏆 Award Nomination Management\n⚡ Crisis Communication\n\nWe've secured coverage in 15+ publications for a single launch! Shall I get a PR strategist to connect with you?"
    ]
  },
  advertising: {
    patterns: ['advertising', 'ads', 'google ads', 'facebook ads', 'instagram ads', 'meta ads', 'linkedin ads', 'youtube ads', 'display ads', 'remarketing', 'ppc', 'paid ads'],
    responses: [
      "We run targeted campaigns across all major platforms:\n\n🔍 Google Ads\n📘 Meta Ads (Facebook & Instagram)\n💼 LinkedIn Advertising\n▶️ YouTube Advertising\n🖥️ Display Advertising\n🔄 Remarketing Campaigns\n\nOur clients see an average ROAS of 4.2x! Would you like a free ad audit?"
    ]
  },
  social_media: {
    patterns: ['social media', 'social', 'instagram', 'facebook', 'linkedin', 'content calendar', 'community', 'smm', 'social marketing', 'engagement'],
    responses: [
      "Our Social Media Management includes:\n\n📱 Full Platform Management\n📅 Content Calendar Planning\n💬 Community Management\n📊 Social Analytics\n🎯 Brand Engagement Campaigns\n\nWe've grown clients to 50K+ followers in just 4 months! Want us to audit your social presence?"
    ]
  },
  influencer: {
    patterns: ['influencer', 'influencer marketing', 'creator', 'ambassador', 'collaboration', 'collab', 'kol'],
    responses: [
      "Our Influencer Marketing services:\n\n🌟 Influencer Identification & Vetting\n🤝 Creator Partnerships\n📋 Campaign Management\n📦 Product Collaborations\n👑 Brand Ambassador Programs\n📊 Performance Analysis\n\nWe work with influencers across all industries and follower tiers. Want to explore influencer partnerships?"
    ]
  },
  content: {
    patterns: ['content', 'writing', 'copywriting', 'blog', 'seo content', 'ad copy', 'content writing', 'website content', 'email', 'copy'],
    responses: [
      "Our Content & Communication services:\n\n✍️ Website & SEO Content\n📝 Copywriting & Ad Copy\n📱 Social Media Content\n📦 Product Descriptions\n📧 Email Copywriting\n📊 Business Presentations\n\nCompelling content that converts visitors into customers. Need content for your business?"
    ]
  },
  branding: {
    patterns: ['branding', 'brand', 'logo', 'identity', 'graphic design', 'brand strategy', 'corporate branding', 'visual identity', 'logo design', 'design'],
    responses: [
      "Our Branding & Creative services:\n\n🎨 Brand Strategy & Positioning\n🏢 Corporate Branding\n✏️ Logo Design\n🎭 Brand Identity Development\n🖼️ Graphic Design\n📄 Marketing Collateral\n🎬 Motion Graphics\n\nWe create brands that people remember and trust. Ready to build your brand?"
    ]
  },
  video: {
    patterns: ['video', 'video production', 'film', 'reels', 'commercial', 'ad film', 'photography', 'product video', 'corporate video', 'motion graphics'],
    responses: [
      "Our Video Production services:\n\n🎬 Corporate & Commercial Videos\n📣 Promotional & Product Videos\n🎞️ Brand Films\n📱 Social Media Reels\n🎨 Motion Graphics\n📸 Product Photography\n\nProfessional storytelling for the digital age. Shall we discuss your video project?"
    ]
  },
  web: {
    patterns: ['website', 'web design', 'web development', 'landing page', 'wordpress', 'ui', 'ux', 'ui/ux', 'app', 'site'],
    responses: [
      "Our Web Design & Digital services:\n\n🌐 Website Design & Development\n📄 Landing Page Development\n🔧 WordPress Development\n🎨 UI/UX Design\n🛠️ Website Maintenance\n⚡ Website Optimization\n\nWe build stunning, high-converting digital experiences. Want a website consultation?"
    ]
  },
  ecommerce: {
    patterns: ['ecommerce', 'e-commerce', 'amazon', 'flipkart', 'marketplace', 'product listing', 'online store', 'catalog', 'a+ content'],
    responses: [
      "Our E-Commerce Solutions:\n\n🛒 Amazon & Flipkart Management\n📋 Product Listing Optimization\n📦 Catalog Management\n🎯 Marketplace Advertising\n⭐ A+ Content Creation\n📸 Product Image Optimization\n\nWe've helped brands achieve 180% sales growth on marketplaces! Ready to dominate online?"
    ]
  },
  events: {
    patterns: ['event', 'events', 'event marketing', 'launch', 'exhibition', 'trade show', 'promotion', 'activation', 'corporate event', 'offline'],
    responses: [
      "Our Event Marketing services:\n\n🎪 Corporate Event Management\n🚀 Product Launch Events\n🎭 Brand Activations\n📣 Promotional Campaigns\n🏛️ Exhibition Management\n🤝 Trade Show Marketing\n\nWe create memorable brand experiences. Planning an event?"
    ]
  },
  pricing: {
    patterns: ['price', 'pricing', 'cost', 'budget', 'how much', 'charges', 'fees', 'rate', 'quote', 'estimate', 'package', 'plan', 'affordable'],
    responses: [
      "Great question! Our pricing is customized based on your specific needs, goals, and scope. We offer flexible packages for:\n\n🏢 Enterprises — Comprehensive solutions\n📈 Growing Businesses — Scalable packages\n🚀 Startups — Budget-friendly options\n\nThe best way to get accurate pricing is to chat with our team. Shall I connect you with an expert on WhatsApp?",
      "We tailor our pricing to fit your business goals and budget. Whether you're a startup or enterprise, we have solutions for you.\n\n💡 For a personalized quote, our team can discuss your requirements in detail. Want to connect on WhatsApp?"
    ]
  },
  contact: {
    patterns: ['contact', 'call', 'phone', 'email', 'address', 'location', 'office', 'visit', 'reach', 'connect', 'get in touch', 'whatsapp', 'number'],
    responses: [
      "Here's how to reach us:\n\n📞 Phone: +91 9537295599\n📧 Email: mkpublicitysurat@gmail.com\n📍 Address: 2087, Rajmahal Mall, near Millenium Park, Dindoli, Surat, Gujarat 394210\n\n💬 Or chat with us directly on WhatsApp for the fastest response!"
    ]
  },
  portfolio: {
    patterns: ['portfolio', 'case study', 'case studies', 'work', 'previous work', 'examples', 'results', 'clients', 'projects'],
    responses: [
      "We've delivered outstanding results across industries:\n\n📈 340% lead increase for a textile brand\n📱 50K+ followers in 4 months for a food brand\n📰 15+ publication features for a tech launch\n🚗 200% footfall increase for an auto group\n💎 180% sales growth for a jewellery brand\n\nWant to see detailed case studies? Visit our Portfolio page or chat with us!"
    ]
  },
  industries: {
    patterns: ['industry', 'industries', 'sectors', 'which industries', 'who do you serve', 'types of clients'],
    responses: [
      "We serve 18+ industries including:\n\n🏭 Manufacturing • 🧵 Textile • 🏪 Retail\n🛍️ E-Commerce • 🏥 Healthcare • 🎓 Education\n🏠 Real Estate • 🏨 Hospitality • 📦 FMCG\n💻 Technology • 🚀 Startups • 💼 Professional Services\n🏦 Finance • 🚗 Automotive • 👗 Fashion\n💎 Jewellery • 🍽️ Food & Beverage • 🏛️ Architecture\n\nWhatever your industry, we have experience driving growth!"
    ]
  },
  about: {
    patterns: ['about', 'who are you', 'tell me about', 'company', 'about mk', 'background', 'team', 'history'],
    responses: [
      "MK Publicity is a full-service marketing, PR, and media agency based in Surat, Gujarat. 🏢\n\n🎯 We combine creative storytelling, strategic communication, digital marketing, and technology to deliver measurable business growth.\n\n📊 500+ clients served across 18+ industries\n🏆 2000+ campaigns delivered\n⭐ 98% client satisfaction rate\n\nOur tagline says it all: \"Your Success, Our Mission\" 💪"
    ]
  },
  thanks: {
    patterns: ['thanks', 'thank you', 'thankyou', 'thx', 'appreciate', 'great', 'awesome', 'perfect', 'cool', 'nice'],
    responses: [
      "You're welcome! 😊 If you need anything else, I'm here to help. You can also chat with our team on WhatsApp for immediate assistance!",
      "Glad I could help! 🙏 Don't hesitate to reach out anytime. We're here to make your brand grow!",
      "Thank you for your interest! 💛 Remember, we're just a WhatsApp message away for detailed discussions."
    ]
  },
  goodbye: {
    patterns: ['bye', 'goodbye', 'see you', 'later', 'gotta go', 'talk later'],
    responses: [
      "Goodbye! 👋 It was great chatting with you. Remember, MK Publicity is always here when you're ready to grow your brand. Have a wonderful day!",
      "Take care! 🌟 When you're ready to take your brand to the next level, we're just a message away. Bye for now!"
    ]
  },
  process: {
    patterns: ['process', 'how do you work', 'workflow', 'approach', 'methodology', 'steps', 'how it works'],
    responses: [
      "Our proven 6-step process:\n\n1️⃣ Discover — Understand your business & goals\n2️⃣ Strategize — Build custom marketing plans\n3️⃣ Create — Develop stunning creative assets\n4️⃣ Execute — Launch & manage campaigns\n5️⃣ Optimize — Refine based on data\n6️⃣ Scale — Drive sustainable growth\n\nThis systematic approach ensures predictable, measurable results!"
    ]
  }
};

export const fallbackResponses = [
  "That's an interesting question! For a detailed discussion, I'd recommend connecting with our team on WhatsApp. They can provide personalized solutions for your business. 💬",
  "I'd love to help you with that! Our experts can provide the best guidance. Want me to connect you with our team on WhatsApp? 📞",
  "Great question! To give you the most accurate answer, let me connect you with our marketing specialists. They're available on WhatsApp right now! 🚀"
];
