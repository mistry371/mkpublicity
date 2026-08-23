// ═══════════════════════════════════════════════════════════════
// MK PUBLICITY — CUSTOM AI CHAT ENGINE
// Intent detection, entity extraction, conversation flow
// No third-party APIs — fully self-contained
// ═══════════════════════════════════════════════════════════════

import { intentPatterns, fallbackResponses, quickReplies, botProfile } from './knowledgeBase';

class ChatEngine {
  constructor() {
    this.conversationState = 'initial';
    this.messageHistory = [];
    this.leadScore = 0;
    this.identifiedNeeds = [];
    this.turnCount = 0;
  }

  // ─── Text Preprocessing ───
  preprocess(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s/]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // ─── Tokenize ───
  tokenize(text) {
    return this.preprocess(text).split(' ').filter(t => t.length > 1);
  }

  // ─── Stop words to ignore ───
  isStopWord(word) {
    const stopWords = new Set([
      'i', 'me', 'my', 'we', 'our', 'you', 'your', 'he', 'she', 'it', 'they',
      'is', 'am', 'are', 'was', 'were', 'be', 'been', 'being',
      'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should',
      'can', 'may', 'might', 'shall',
      'the', 'a', 'an', 'and', 'but', 'or', 'for', 'nor',
      'in', 'on', 'at', 'to', 'of', 'with', 'by', 'from',
      'not', 'no', 'so', 'if', 'then', 'than', 'that', 'this',
      'what', 'which', 'who', 'whom', 'when', 'where', 'why', 'how',
      'all', 'each', 'every', 'both', 'some', 'any', 'few', 'more',
      'just', 'very', 'too', 'also', 'well', 'still', 'even',
      'want', 'need', 'like', 'know', 'tell', 'about', 'please'
    ]);
    return stopWords.has(word);
  }

  // ─── Intent Detection using TF-IDF-inspired scoring ───
  detectIntent(userMessage) {
    const processed = this.preprocess(userMessage);
    const tokens = this.tokenize(userMessage);
    let bestIntent = null;
    let bestScore = 0;

    for (const [intentName, intentData] of Object.entries(intentPatterns)) {
      let score = 0;

      for (const pattern of intentData.patterns) {
        const patternLower = pattern.toLowerCase();

        // Exact match (highest weight)
        if (processed === patternLower) {
          score += 10;
          continue;
        }

        // Full phrase contained in input
        if (processed.includes(patternLower)) {
          // Weight by pattern length (longer patterns = more specific = higher score)
          score += 5 + (patternLower.split(' ').length * 1.5);
          continue;
        }

        // Token overlap scoring
        const patternTokens = patternLower.split(' ');
        let tokenMatchCount = 0;
        for (const pToken of patternTokens) {
          if (tokens.includes(pToken) && !this.isStopWord(pToken)) {
            tokenMatchCount++;
          }
        }

        if (tokenMatchCount > 0) {
          // Score based on what fraction of pattern tokens matched
          const matchRatio = tokenMatchCount / patternTokens.length;
          score += matchRatio * 3;
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestIntent = intentName;
      }
    }

    // Minimum threshold to avoid false positives
    if (bestScore < 2) {
      return null;
    }

    return bestIntent;
  }

  // ─── Extract entities (service names, industries) ───
  extractEntities(text) {
    const processed = this.preprocess(text);
    const entities = {
      services: [],
      industries: [],
      actionIntent: null
    };

    // Service entity extraction
    const serviceMap = {
      'performance': 'Performance Marketing',
      'marketing': 'Performance Marketing',
      'pr': 'Public Relations',
      'public relations': 'Public Relations',
      'media': 'Public Relations',
      'advertising': 'Advertising Solutions',
      'ads': 'Advertising Solutions',
      'google ads': 'Advertising Solutions',
      'social media': 'Social Media Management',
      'social': 'Social Media Management',
      'influencer': 'Influencer Marketing',
      'content': 'Content Writing',
      'writing': 'Content Writing',
      'branding': 'Branding & Creative',
      'brand': 'Branding & Creative',
      'logo': 'Branding & Creative',
      'video': 'Video Production',
      'film': 'Video Production',
      'photography': 'Video Production',
      'website': 'Web Design',
      'web': 'Web Design',
      'ecommerce': 'E-Commerce Solutions',
      'amazon': 'E-Commerce Solutions',
      'flipkart': 'E-Commerce Solutions',
      'event': 'Event Marketing',
      'exhibition': 'Event Marketing'
    };

    for (const [keyword, service] of Object.entries(serviceMap)) {
      if (processed.includes(keyword) && !entities.services.includes(service)) {
        entities.services.push(service);
      }
    }

    // Action intent extraction
    const actionMap = {
      'quote': 'get_quote',
      'pricing': 'get_quote',
      'cost': 'get_quote',
      'price': 'get_quote',
      'book': 'book_meeting',
      'meeting': 'book_meeting',
      'call': 'contact',
      'contact': 'contact',
      'whatsapp': 'contact'
    };

    for (const [keyword, action] of Object.entries(actionMap)) {
      if (processed.includes(keyword)) {
        entities.actionIntent = action;
        break;
      }
    }

    return entities;
  }

  // ─── Update lead score based on engagement ───
  updateLeadScore(intent, entities) {
    const scores = {
      pricing: 15,
      contact: 10,
      portfolio: 8,
      services_general: 5,
      performance_marketing: 7,
      public_relations: 7,
      advertising: 7,
      social_media: 7,
      influencer: 7,
      content: 7,
      branding: 7,
      video: 7,
      web: 7,
      ecommerce: 7,
      events: 7,
      process: 5,
      about: 3,
      greeting: 1
    };

    if (intent && scores[intent]) {
      this.leadScore += scores[intent];
    }

    if (entities.actionIntent === 'get_quote') this.leadScore += 10;
    if (entities.services.length > 0) this.leadScore += entities.services.length * 3;

    this.turnCount++;
  }

  // ─── Get contextual suggestions ───
  getSuggestions(intent) {
    if (this.leadScore >= 20) {
      return quickReplies.closing;
    }

    switch (intent) {
      case 'greeting':
      case 'about':
        return quickReplies.initial;
      case 'services_general':
        return quickReplies.services;
      case 'performance_marketing':
      case 'public_relations':
      case 'advertising':
      case 'social_media':
      case 'influencer':
      case 'content':
      case 'branding':
      case 'video':
      case 'web':
      case 'ecommerce':
      case 'events':
        return quickReplies.afterService;
      case 'pricing':
      case 'contact':
        return quickReplies.closing;
      default:
        return quickReplies.initial;
    }
  }

  // ─── Select response ───
  selectResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // ─── Enhance response with lead-score-based CTAs ───
  enhanceResponse(response, intent) {
    // Add WhatsApp CTA for high-intent leads
    if (this.leadScore >= 25 && this.turnCount >= 3 && intent !== 'contact' && intent !== 'thanks' && intent !== 'goodbye') {
      response += '\n\n💡 Ready to take the next step? Chat with our experts on WhatsApp for personalized solutions!';
    }
    return response;
  }

  // ─── Main Process Method ───
  processMessage(userMessage) {
    this.messageHistory.push({ role: 'user', text: userMessage });

    const intent = this.detectIntent(userMessage);
    const entities = this.extractEntities(userMessage);

    this.updateLeadScore(intent, entities);

    if (entities.services.length > 0) {
      this.identifiedNeeds = [...new Set([...this.identifiedNeeds, ...entities.services])];
    }

    let response;
    let suggestions;

    if (intent && intentPatterns[intent]) {
      response = this.selectResponse(intentPatterns[intent].responses);
      suggestions = this.getSuggestions(intent);
    } else {
      response = this.selectResponse(fallbackResponses);
      suggestions = quickReplies.initial;
    }

    response = this.enhanceResponse(response, intent);

    this.messageHistory.push({ role: 'bot', text: response });

    // Update conversation state
    if (intent === 'pricing' || intent === 'contact') {
      this.conversationState = 'closing';
    } else if (intent && intent !== 'greeting' && intent !== 'thanks' && intent !== 'goodbye') {
      this.conversationState = 'engaged';
    }

    return {
      text: response,
      suggestions,
      intent,
      leadScore: this.leadScore,
      identifiedNeeds: this.identifiedNeeds
    };
  }

  // ─── Get initial greeting ───
  getGreeting() {
    return {
      text: botProfile.greeting,
      suggestions: quickReplies.initial
    };
  }

  // ─── Reset conversation ───
  reset() {
    this.conversationState = 'initial';
    this.messageHistory = [];
    this.leadScore = 0;
    this.identifiedNeeds = [];
    this.turnCount = 0;
  }
}

// Singleton instance
const chatEngine = new ChatEngine();
export default chatEngine;
