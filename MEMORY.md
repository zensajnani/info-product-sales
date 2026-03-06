# MEMORY.md — Long-Term Memory

*Curated knowledge that persists across sessions. Updated as I learn.*

---

## Setup & Config

- **Installed:** 2026-03-05 on `zeneca-homelab-2`
- **Channel:** Telegram (direct DM with Zeniqle, id: 1934135950)
- **Model:** anthropic/claude-sonnet-4-6
- **Workspace:** `/home/zeneca/.openclaw/workspace`
- **Config file:** `/home/zeneca/.openclaw/openclaw.json`

### Tool Config History
- 2026-03-05: Set `tools.exec.ask = off` and `tools.exec.security = full` to allow shell commands without approval prompts

---

## About the User

- Goes by **Zeneca** (or Zen) — always use this alias
- Username: zeniqle
- **NEVER use or print real name — privacy rule, no exceptions**
- Running OpenClaw on a homelab server (`zeneca-homelab-2`)
- Connected via Telegram bot

---

## Infrastructure

### Coolify
- URL: `coolify.home.zeniqle.com`
- Manages multiple servers
- **Auto-deploy on git push** — pushing to a repo triggers deployment automatically

### Mem0
- URL: `https://mem0.home.zeniqle.com`
- Self-hosted personal memory/RAG layer
- Auth: `Authorization: Bearer <API_KEY>` or `X-API-Key: <API_KEY>`
- user_id: `zeneca`
- Key scopes (agent_id): `notes`, `ai_notes`, `xtyphoon`, `personal`, `tech`, `ai_ofm`, `email_marketing`, `transcripts`, `youtube_transcripts_zen`
- Key endpoints:
  - `GET /index?user_id=zeneca` — full knowledge index
  - `POST /search/lean` — semantic search with recency boost
  - `POST /memories` — add a memory
  - `POST /chat` — RAG chat endpoint
- MCP available at `/mcp` (Streamable HTTP)
- **Usage pattern:** search mem0 when asked about personal strategy, notes, projects, past decisions, Zeneca's content/products. Skip for general knowledge.

### GitHub
- Authenticated via `gh` CLI + SSH as **zensajnani**
- Token scopes: repo, gist, read:org, admin:public_key
- Git protocol: SSH
- Workflow: edit code → `git push` → Coolify auto-deploys

---

## Working Style

- Zeniqle wants me to update repos, manage projects, and handle testing
- Deployment pipeline: git push → Coolify auto-deploy across servers
- Prefers hands-off: make the change, push, done
- **Distribution-first mindset** — everything about getting products in front of people
- **Never stop executing** — always find something to build, test, or improve
- **Quick feedback loops** — real market feedback over theoretical planning

---

## Business Context

### Goals
- Target: $100K/month → $200K/month
- Approach: Client acquisition systems that sell themselves
- Key insight: Build systems → use systems to acquire clients → sell the system itself

### Revenue Streams (In Development)
1. **Client Acquisition SaaS** — Meta Ads + X DM automation
   - Pricing: $297–$997/mo
   - Target: AI agencies, SaaS founders, info-product sellers
   
2. **AI OnlyFans Agency Tools** — Creator management automation
   - Pricing: $2K–$10K setup + 20–50% commission
   - Target: OFM agencies wanting AI-generated creators
   
3. **Meta Ads Automation** — AI-powered campaign management
   - Pricing: $99–$500/mo SaaS
   - Target: E-commerce brands spending $10K+/mo on ads

### Platforms
- **Whop** — Preferred payment platform (not Stripe)
- **Meta Marketing API** — For ad automation
- **X/Twitter API** — DM automation at $0.015 per message
- **ai.dev.zeniqle.com** — Experiment platform

---

## Execution Principles

1. **Always be building** — Never idle, always executing
2. **Distribution beats product** — Get it in front of people fast
3. **Real feedback > research** — Launch, learn, iterate
4. **Automate everything** — Remove manual work at every step
5. **Document decisions** — Update MEMORY.md, daily logs, mem0

---

## Market Intelligence

### March 6, 2026 — Research Pulse Update (9:37 AM UTC)
**Full report:** `memory/2026-03-06-market-research.md`

#### High-Priority Opportunities (Cron Research)

**CLIENT ACQUISITION — Agentic AI SDRs**
- AI improves lead qualification accuracy 40%, speed 3x, conversions 25-35%
- Companies using AI see 20% higher conversion, 15% lower CAC
- **Opportunity:** Agentic AI SDRs at $500-2000/mo vs human SDRs $3000-5000/mo
- **Convergence:** First-party data + AI scoring stack (compliance-first post-cookie)
- **Quick Win:** Vertical-specific autonomous prospecting (SaaS, agencies, local services)

**AI CREATOR ECONOMY — Faceless Scale Infrastructure**
- Prediction: 60% of top OnlyFans accounts AI models by 2026; 90% content AI-generated
- Case study: $556k revenue with AI chatbots + automation
- **Opportunity:** AI Persona-as-a-Service ($200-500/mo + 10-20% rev share)
- **Pivot:** SFW niches (fitness, cosplay, lifestyle) — lower risk, advertiser-friendly
- **Quick Win:** Creator automation agency tools (managing 10-100 accounts)

**META ADS — AI Infrastructure Arbitrage**
- Meta spending $115-135B on AI in 2026 (2x 2025)
- Advantage+ campaigns: 10% lower CPL; AI dubbing unlocks global markets
- **Opportunity:** Cross-platform AI media buyer (Meta + YouTube + TikTok)
- **Convergence:** AI creative studio for algorithm-native UGC content ($2-5k/mo retainers)
- **Quick Win:** Meta Advantage+ migration + CAPI implementation

**Strategic Insight:** All three sectors converging on "faceless scale" — businesses built without personal brand dependency. Window: 6-12 months before saturation.

---

### March 6, 2026 — Research Pulse Update (9:02 AM)
**Full report:** `memory/2026-03-06.md`

#### 🎯 Client Acquisition (B2B SaaS)
- **Shift from "leads" → "qualified signups + activation + expansion triggers"**
- Segment by acquisition channel to identify high-LTV sources
- Security as sales driver, not just checkbox
- Opportunity: Channel quality measurement tools, AI-powered personalization

#### 🤖 AI OnlyFans / Virtual Companions
- **dFans** emerging as "OnlyFans of AI Era" with complete AI tool ecosystem
- AI influencers: Automation suites for hyper-realistic 9:16 content generation
- Revenue share models becoming standard: 35-40% (Aimour 35%, AI Allure 40%)
- Leaders: Joi (conversation quality), Aimour (gradual relationship), AI Allure
- Price points: $5-15/month for premium AI companion features

#### 📱 Meta Ads Strategy 2026
- **CRITICAL:** March 31, 2026 — detailed targeting exclusions REMOVED
- Andromeda update killed manual targeting → "Stop guessing who. Focus on what"
- Creative quality > audience precision (every asset = targeting signal)
- CAPI (Conversion API) + Pixel now **required** — no longer optional
- Max Conversions / Conversion Value outperforming Target CPA/ROAS
- Opportunity: CAPI consulting, creative production tools, landing page optimization

**Key Cross-Insight:** Creative is now the targeting lever — 50-100 AI-generated variations/month fed into Meta Advantage+ = winning strategy

---

## Market Intelligence

### March 6, 2026 — Research Pulse Findings
**Full report:** `memory/2026-03-06-market-research.md`

#### Top Opportunities Identified

**1. Client Acquisition (Highest Confidence)**
- AI-powered SDRs reducing CAC by 30-50%
- Community-led growth via Discord/Slack
- Clay + AI personalization stack emerging as standard
- Market: $87B → $127B by 2028 (32% CAGR)

**2. AI Virtual Creators (High Risk/Reward)**
- AI influencers earning $10K-100K/month
- Platform arbitrage: Fanvue/Fansly before saturation
- Compliance/verification tools needed (regulatory wave coming)
- Market: $4.6B → $15B by 2028
- **Risk:** Payment processor bans, platform policy changes

**3. Meta Ads Automation (Immediate Opportunity)**
- Advantage+ Shopping Campaigns showing +25-35% ROAS
- Reels ads: 40% lower CPC than feed
- Click-to-WhatsApp: +150% lead quality
- Creative fatigue accelerating (7-14 day lifespan)
- **Action:** CAPI implementation essential for attribution

#### Converging Play: AI-Generated Creative + Meta Advantage+
- Use Midjourney/Runway/ElevenLabs to produce 50-100 ad variations/month
- Feed into Meta's AI for automated optimization
- Result: 10x creative velocity at 1/10th the cost

### March 6, 2026 — Research Pulse Update (7:41 AM)
**Full report:** `memory/2026-03-06_market_research.md`

**1. Client Acquisition — Agentic Prospecting**
- Trend: Autonomous AI SDRs (research → outreach → objection handling → handoff)
- Opportunity: Intent-to-Meeting pipelines (Clearbit → AI personalization → booking)
- Play: Vertical-specific AI playbooks with proprietary objection handling data
- Action: Evaluate intent data providers; test warm outbound

**2. AI OnlyFans / Synthetic Creators**
- Trend: Creator burnout → "always-on" AI personas
- Infrastructure plays: Fan engagement tools, content pipelines, identity consistency engines
- Risk: Platform policy changes, disclosure requirements
- Action: Monitor OF/Patreon policy updates

**3. Meta Ads — 2026 Evolution**
- Trend: Advantage+ Creative outperforming manual; creative detection native
- Opportunities: Script-to-ad pipelines, micro-segment creative, CAPI maturity
- Action: Audit CAPI; test AI-generated video

**Cross-Vertical:** AI infrastructure arbitrage (workflow integration > AI itself), compliance-first positioning, first-party data obsession

---

## Notes

### March 5, 2026 — Overnight Build Session
- Spawned parallel sub-agents for continuous execution
- Built complete client acquisition platform in ~3 hours
- Research identified 5 hot opportunities in creator economy
- Hourly cron job orchestrating autonomous work
