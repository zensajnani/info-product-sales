# X-DM Pro - Twitter DM Automation System

A complete Twitter DM outreach platform with AI personalization, template library, analytics, and client-acquisition integration.

## 🚀 Features

1. **Landing Page** - $0.015 per DM pricing showcase
2. **Template Library** - 20 battle-tested DM templates across 5 categories
3. **AI Personalization Engine** - Dynamic message generation based on profile analysis
4. **Analytics Dashboard** - Real-time campaign metrics and insights
5. **Client Acquisition API** - Seamless integration with lead scoring and email sequences

## 📁 Project Structure

```
ai.dev.zeniqle.com/x-dm-system/
├── index.html              # Landing page with pricing
├── templates.html          # 20 DM templates library
├── personalize.html        # AI personalization demo
├── analytics.html          # Campaign analytics dashboard
├── css/
│   ├── styles.css          # Base styles
│   ├── templates.css       # Templates page styles
│   ├── personalize.css     # Personalization demo styles
│   └── analytics.css       # Analytics dashboard styles
├── js/
│   ├── templates.js        # Templates page functionality
│   ├── personalize.js      # Personalization demo logic
│   └── analytics.js        # Analytics dashboard logic
└── api/
    ├── index.html          # API documentation
    ├── api-styles.css      # API docs styles
    └── api.js              # API docs functionality
```

## 🎯 Template Categories

- **Cold Outreach** (5 templates) - Value first, question hooks, resource sharing
- **Networking** (5 templates) - Mutual connections, shared interests, event follow-ups
- **Sales** (4 templates) - Problem agitation, ROI focus, social proof, demos
- **Follow-Up** (3 templates) - Gentle reminders, value adds, break-up messages
- **Recruiting** (3 templates) - Passive candidates, referral requests, talent communities

## 🔌 API Endpoints

### Core Endpoints
- `POST /dms/send` - Send single DM
- `POST /dms/batch` - Batch send DMs (up to 1,000)
- `GET /templates` - Get all templates
- `POST /personalize` - Generate personalized message
- `GET /campaigns/{id}` - Get campaign status
- `GET /analytics/campaigns/{id}` - Get campaign metrics

### Client Acquisition Integration
- `POST /integrations/leads/sync` - Sync leads from lead scoring
- `POST /integrations/leads/score` - Send engagement data to scoring system
- `POST /integrations/sequences/sync` - Coordinate with email sequences
- `POST /webhooks/configure` - Configure webhooks

## 💰 Pricing

- **Base Rate**: $0.015 per DM
- **Volume Discounts**:
  - 10K+ DMs: $0.014/DM
  - 50K+ DMs: $0.012/DM
  - 100K+ DMs: $0.010/DM

## 🎨 Design System

- **Colors**: Twitter-inspired dark theme
  - Primary: #1d9bf0 (Twitter blue)
  - Background: #000000 (Black)
  - Surface: #16181c (Dark gray)
  - Text: #e7e9ea (Off-white)
  - Accent: #00ba7c (Green)

- **Typography**: Inter font family
- **Borders**: Subtle #2f3336

## 🛠️ Tech Stack

- Pure HTML/CSS/JavaScript (no frameworks)
- Responsive design
- CSS Grid & Flexbox
- CSS Variables for theming

## 📊 Analytics Features

- Real-time campaign metrics
- Response rate by template
- Best time to send heatmap
- ROI calculator
- AI-generated insights

## 🔗 Integration Points

The system integrates with the existing client-acquisition infrastructure at:
- `/ai.dev.zeniqle.com/client-acquisition/lead-scoring/`
- `/ai.dev.zeniqle.com/client-acquisition/email-sequences/`

## 📄 License

Proprietary - All rights reserved.

---

Built for Zeniqle's AI development portfolio.
