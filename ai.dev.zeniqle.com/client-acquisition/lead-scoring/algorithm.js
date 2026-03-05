/**
 * Zeniqle Lead Scoring Algorithm
 * Multi-dimensional scoring with behavioral, demographic, and engagement factors
 * @version 2.0.0
 */

const LeadScoringConfig = {
  // Weight distribution (must total 1.0)
  weights: {
    demographic: 0.25,
    behavioral: 0.35,
    engagement: 0.25,
    intent: 0.15
  },
  
  // Score thresholds
  thresholds: {
    hot: 80,
    warm: 60,
    cold: 40
  },
  
  // Demographic scoring criteria
  demographic: {
    companySize: {
      'enterprise': 25,      // 1000+ employees
      'large': 20,           // 500-999
      'mid': 15,             // 100-499
      'small': 10,           // 10-99
      'startup': 5           // <10
    },
    industry: {
      'saas': 25,
      'fintech': 25,
      'healthcare': 20,
      'ecommerce': 20,
      'manufacturing': 15,
      'retail': 15,
      'other': 10
    },
    role: {
      'cto': 25,
      'vp_engineering': 23,
      'engineering_manager': 20,
      'tech_lead': 18,
      'developer': 12,
      'founder': 22,
      'other': 8
    },
    budget: {
      'confirmed': 20,
      'discussed': 15,
      'unknown': 5
    }
  },
  
  // Behavioral scoring
  behavioral: {
    pageViews: {
      pointsPerPage: 2,
      maxPoints: 20,
      pricingPage: 15,
      caseStudies: 12,
      features: 8,
      about: 3
    },
    sessionDuration: {
      pointsPerMinute: 1,
      maxPoints: 15
    },
    returnVisits: {
      pointsPerVisit: 5,
      maxPoints: 25
    },
    contentDownloads: {
      whitepaper: 15,
      casestudy: 12,
      ebook: 10,
      guide: 8
    }
  },
  
  // Engagement scoring
  engagement: {
    email: {
      opened: 3,
      clicked: 8,
      replied: 20,
      forwarded: 12,
      unsubscribed: -50
    },
    chat: {
      initiated: 10,
      qualified: 20,
      meetingBooked: 30
    },
    social: {
      linkedinView: 2,
      linkedinConnect: 8,
      twitterMention: 10
    }
  },
  
  // Intent scoring
  intent: {
    trialSignup: 25,
    demoRequest: 30,
    pricingInquiry: 25,
    competitorMention: 15,
    timelineDisclosed: 20,
    decisionMakerIdentified: 15
  }
};

/**
 * Calculate demographic score
 * @param {Object} lead - Lead demographic data
 * @returns {number} Score 0-100
 */
function calculateDemographicScore(lead) {
  const config = LeadScoringConfig.demographic;
  let score = 0;
  
  score += config.companySize[lead.companySize] || 0;
  score += config.industry[lead.industry] || config.industry.other;
  score += config.role[lead.role] || config.role.other;
  score += config.budget[lead.budgetStatus] || config.budget.unknown;
  
  return Math.min(score, 100);
}

/**
 * Calculate behavioral score based on website activity
 * @param {Object} activity - Behavioral tracking data
 * @returns {number} Score 0-100
 */
function calculateBehavioralScore(activity) {
  const config = LeadScoringConfig.behavioral;
  let score = 0;
  
  // Page views
  const pageViewPoints = (activity.pagesViewed || []).reduce((acc, page) => {
    if (page.includes('pricing')) return acc + config.pageViews.pricingPage;
    if (page.includes('case-study')) return acc + config.pageViews.caseStudies;
    if (page.includes('features')) return acc + config.pageViews.features;
    return acc + config.pageViews.pointsPerPage;
  }, 0);
  score += Math.min(pageViewPoints, config.pageViews.maxPoints);
  
  // Session duration
  const durationPoints = (activity.sessionMinutes || 0) * config.sessionDuration.pointsPerMinute;
  score += Math.min(durationPoints, config.sessionDuration.maxPoints);
  
  // Return visits
  const visitPoints = (activity.returnVisits || 0) * config.returnVisits.pointsPerVisit;
  score += Math.min(visitPoints, config.returnVisits.maxPoints);
  
  // Content downloads
  (activity.downloads || []).forEach(download => {
    score += config.contentDownloads[download] || 0;
  });
  
  return Math.min(score, 100);
}

/**
 * Calculate engagement score
 * @param {Object} engagement - Engagement tracking data
 * @returns {number} Score 0-100
 */
function calculateEngagementScore(engagement) {
  const config = LeadScoringConfig.engagement;
  let score = 0;
  
  // Email interactions
  score += (engagement.emailsOpened || 0) * config.email.opened;
  score += (engagement.emailsClicked || 0) * config.email.clicked;
  score += (engagement.emailsReplied || 0) * config.email.replied;
  score += (engagement.emailsForwarded || 0) * config.email.forwarded;
  
  if (engagement.unsubscribed) score += config.email.unsubscribed;
  
  // Chat interactions
  if (engagement.chatInitiated) score += config.chat.initiated;
  if (engagement.chatQualified) score += config.chat.qualified;
  if (engagement.meetingBooked) score += config.chat.meetingBooked;
  
  // Social interactions
  score += (engagement.linkedinViews || 0) * config.social.linkedinView;
  score += (engagement.linkedinConnects || 0) * config.social.linkedinConnect;
  score += (engagement.twitterMentions || 0) * config.social.twitterMention;
  
  return Math.max(0, Math.min(score, 100));
}

/**
 * Calculate intent score
 * @param {Object} signals - Intent signals
 * @returns {number} Score 0-100
 */
function calculateIntentScore(signals) {
  const config = LeadScoringConfig.intent;
  let score = 0;
  
  if (signals.trialSignup) score += config.trialSignup;
  if (signals.demoRequested) score += config.demoRequest;
  if (signals.pricingInquiry) score += config.pricingInquiry;
  if (signals.competitorMentioned) score += config.competitorMention;
  if (signals.timelineDisclosed) score += config.timelineDisclosed;
  if (signals.decisionMaker) score += config.decisionMakerIdentified;
  
  return Math.min(score, 100);
}

/**
 * Main lead scoring function
 * @param {Object} leadData - Complete lead data
 * @returns {Object} Scoring result with breakdown
 */
function scoreLead(leadData) {
  const weights = LeadScoringConfig.weights;
  
  const demographicScore = calculateDemographicScore(leadData.demographic || {});
  const behavioralScore = calculateBehavioralScore(leadData.behavioral || {});
  const engagementScore = calculateEngagementScore(leadData.engagement || {});
  const intentScore = calculateIntentScore(leadData.intent || {});
  
  const totalScore = Math.round(
    demographicScore * weights.demographic +
    behavioralScore * weights.behavioral +
    engagementScore * weights.engagement +
    intentScore * weights.intent
  );
  
  // Determine tier
  let tier = 'cold';
  if (totalScore >= LeadScoringConfig.thresholds.hot) tier = 'hot';
  else if (totalScore >= LeadScoringConfig.thresholds.warm) tier = 'warm';
  
  // Recommended action
  let recommendedAction = 'nurture';
  if (tier === 'hot') recommendedAction = 'immediate_outreach';
  else if (tier === 'warm') recommendedAction = 'priority_followup';
  
  return {
    score: totalScore,
    tier,
    recommendedAction,
    breakdown: {
      demographic: {
        score: demographicScore,
        weight: weights.demographic,
        weightedScore: Math.round(demographicScore * weights.demographic)
      },
      behavioral: {
        score: behavioralScore,
        weight: weights.behavioral,
        weightedScore: Math.round(behavioralScore * weights.behavioral)
      },
      engagement: {
        score: engagementScore,
        weight: weights.engagement,
        weightedScore: Math.round(engagementScore * weights.engagement)
      },
      intent: {
        score: intentScore,
        weight: weights.intent,
        weightedScore: Math.round(intentScore * weights.intent)
      }
    },
    timestamp: new Date().toISOString()
  };
}

/**
 * Batch score multiple leads
 * @param {Array} leads - Array of lead data
 * @returns {Array} Scored leads
 */
function batchScoreLeads(leads) {
  return leads.map(lead => ({
    ...lead,
    scoring: scoreLead(lead)
  })).sort((a, b) => b.scoring.score - a.scoring.score);
}

/**
 * Get leads by tier
 * @param {Array} scoredLeads - Array of leads with scoring data
 * @param {string} tier - 'hot', 'warm', or 'cold'
 * @returns {Array} Filtered leads
 */
function getLeadsByTier(scoredLeads, tier) {
  return scoredLeads.filter(lead => lead.scoring.tier === tier);
}

module.exports = {
  scoreLead,
  batchScoreLeads,
  getLeadsByTier,
  LeadScoringConfig,
  calculateDemographicScore,
  calculateBehavioralScore,
  calculateEngagementScore,
  calculateIntentScore
};
