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

## Notes

### March 5, 2026 — Overnight Build Session
- Spawned parallel sub-agents for continuous execution
- Built complete client acquisition platform in ~3 hours
- Research identified 5 hot opportunities in creator economy
- Hourly cron job orchestrating autonomous work
