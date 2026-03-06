# Zeniqle Client Acquisition System

A complete lead generation and conversion system with AI-powered scoring, automated email sequences, and competitive positioning.

## Components

- **Lead Scoring Algorithm** (`lead-scoring/`) - Multi-factor scoring system with behavioral analysis
- **Email Sequences** (`email-sequences/`) - Conversion-optimized drip campaigns  
- **Competitive Analysis** (`competitive-analysis.html`) - Market positioning page
- **Sales Funnel Copy** (`sales-copy.md`) - Complete funnel messaging
- **API Server** (`../server.js`) - Express.js backend with REST endpoints

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Copy environment config
cp .env.example .env

# Start development server
npm run dev
```

### Docker Deployment

```bash
# Start with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f app
```

### API Usage

```javascript
// Score a single lead
POST /api/leads/score
{
  "demographic": { "companySize": "enterprise", "industry": "saas" },
  "behavioral": { "pagesViewed": ["/pricing"], "sessionMinutes": 10 },
  "engagement": { "emailsOpened": 2 },
  "intent": { "demoRequested": true }
}

// Score batch leads
POST /api/leads/score-batch
{ "leads": [...] }

// Get leads by tier
GET /api/leads/tier/:tier (hot/warm/cold)
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Health check |
| `/api` | GET | API documentation |
| `/api/leads/score` | POST | Score single lead |
| `/api/leads/score-batch` | POST | Score multiple leads |
| `/api/leads/tier/:tier` | GET | Get leads by tier |
| `/api/sequences` | GET | List email sequences |

## License

Proprietary - Zeniqle Systems
