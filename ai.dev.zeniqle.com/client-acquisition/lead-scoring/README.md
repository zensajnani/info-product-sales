# Lead Scoring System

## Overview

The Zeniqle Lead Scoring Algorithm uses a multi-dimensional approach to evaluate lead quality across four key dimensions:

1. **Demographic** (25%) - Company size, industry, role, budget
2. **Behavioral** (35%) - Website activity, content consumption, engagement patterns  
3. **Engagement** (25%) - Email interactions, chat activity, social signals
4. **Intent** (15%) - Purchase signals, trial signups, demo requests

## Scoring Tiers

| Tier | Score | Action |
|------|-------|--------|
| 🔥 Hot | 80-100 | Immediate outreach within 24 hours |
| 🌡️ Warm | 60-79 | Priority follow-up within 48 hours |
| 🧊 Cold | 0-59 | Nurture with automated sequences |

## Usage

### Score a Single Lead

```javascript
const { scoreLead } = require('./algorithm');

const lead = {
  demographic: {
    companySize: 'enterprise',
    industry: 'saas',
    role: 'cto',
    budgetStatus: 'confirmed'
  },
  behavioral: {
    pagesViewed: ['/features', '/pricing', '/case-studies/zeniqle'],
    sessionMinutes: 12,
    returnVisits: 3,
    downloads: ['whitepaper']
  },
  engagement: {
    emailsOpened: 5,
    emailsClicked: 2,
    chatInitiated: true,
    meetingBooked: false
  },
  intent: {
    trialSignup: false,
    demoRequested: true,
    pricingInquiry: true,
    timelineDisclosed: 'Q2 2026'
  }
};

const result = scoreLead(lead);
console.log(result);
```

### Batch Score Leads

```javascript
const { batchScoreLeads } = require('./algorithm');

const leads = [lead1, lead2, lead3];
const scored = batchScoreLeads(leads);
// Returns leads sorted by score (highest first)
```

## Response Format

```json
{
  "score": 87,
  "tier": "hot",
  "recommendedAction": "immediate_outreach",
  "breakdown": {
    "demographic": { "score": 95, "weight": 0.25, "weightedScore": 24 },
    "behavioral": { "score": 78, "weight": 0.35, "weightedScore": 27 },
    "engagement": { "score": 85, "weight": 0.25, "weightedScore": 21 },
    "intent": { "score": 100, "weight": 0.15, "weightedScore": 15 }
  },
  "timestamp": "2026-03-05T22:04:00.000Z"
}
```

## Integration

### Webhook Endpoint

```bash
POST /api/leads/score
Content-Type: application/json

{
  "demographic": { ... },
  "behavioral": { ... },
  "engagement": { ... },
  "intent": { ... }
}
```

### CRM Integration

The scoring system integrates with:
- Salesforce
- HubSpot
- Pipedrive
- Custom CRM via webhook

## Configuration

Modify `LeadScoringConfig` in `algorithm.js` to adjust:
- Score weights
- Threshold values
- Point allocations
- Industry/role mappings
