# Client Acquisition Mastery — Info Product Sales System

A complete sales funnel and curriculum for selling a high-ticket client acquisition course.

## 📁 Contents

| File | Description |
|------|-------------|
| `index.html` | Complete sales page with 3-tier pricing |
| `WHOP_SETUP.md` | Step-by-step Whop integration guide |
| `README.md` | This file |
| `curriculum.md` | Full course outline (extracted for reference) |

## 🎯 Product Overview

**Course:** Client Acquisition Mastery  
**Format:** Online video course + community + coaching (tier-dependent)  
**Positioning:** Turn cold prospects into paying clients on autopilot

## 💰 Pricing Structure

| Tier | Price | Target Audience |
|------|-------|-----------------|
| **Starter** | $497 | Beginners landing first clients |
| **Professional** | $997 | Serious entrepreneurs wanting guidance |
| **Elite** | $1,997 | VIP experience with 1-on-1 support |

## 📚 Curriculum Highlights

8 Comprehensive Modules:
1. Foundation & Mindset
2. Ideal Client Definition
3. Irresistible Offer Creation
4. Lead Generation Systems
5. The Perfect Sales Call
6. Automation & Scale
7. Retention & Expansion
8. Advanced Tactics

## 🚀 Getting Started

### Option 1: Quick Deploy to Static Host

```bash
# Upload to Vercel
cd info-product
vercel --prod

# Or Netlify
netlify deploy --prod --dir=.

# Or GitHub Pages
# Push to repo and enable GitHub Pages
```

### Option 2: Custom Domain + Whop

1. Follow `WHOP_SETUP.md` to configure checkout
2. Deploy `index.html` to your domain
3. Connect domain to Whop for seamless checkout

### Option 3: Use Whop's Native Pages

1. Create product in Whop
2. Use their landing page builder
3. Copy/paste content from `index.html` as needed

## 🎨 Customization

### Brand Colors
The sales page uses this color scheme (CSS custom properties):
- Primary gradient: `#667eea` → `#764ba2`
- Accent/CTA: `#ff6b6b`
- Success: `#48bb78`

To change colors, edit the CSS in `index.html`.

### Content Updates
- **Testimonials:** Add real student quotes to the Features section
- **Stats:** Update revenue/student numbers with actual data
- **FAQ:** Expand based on common questions
- **Images:** Add product screenshots, instructor photos

### Whop Links
Replace these placeholders in `index.html`:
- `YOUR_STARTER_PLAN_ID`
- `YOUR_PRO_PLAN_ID`
- `YOUR_ELITE_PLAN_ID`

## 📊 Conversion Optimization

### Recommended A/B Tests
1. **Headline variations** - Test different hooks
2. **Pricing order** - Show Professional first vs Starter first
3. **Guarantee placement** - Above fold vs after pricing
4. **Social proof** - Stats vs testimonials vs video

### Key Metrics to Track
- Page visit → Click-through rate
- Click → Purchase conversion
- Tier distribution (% choosing each level)
- Refund rate by tier
- Lifetime value by tier

## 🔒 Legal & Compliance

### Recommended Pages to Add
- Terms of Service
- Privacy Policy
- Refund Policy (already referenced in guarantee)
- Earnings Disclaimer

### Accessibility
The page includes basic accessibility features:
- Semantic HTML structure
- ARIA labels on interactive elements
- Responsive design
- Color contrast compliance

## 📝 TODO Before Launch

- [ ] Replace Whop checkout URLs with real plan IDs
- [ ] Add real testimonials and case studies
- [ ] Upload course videos to hosting platform
- [ ] Set up email automation (welcome, onboarding)
- [ ] Create community (Discord/Circle/Whop)
- [ ] Add legal pages (Terms, Privacy, Disclaimer)
- [ ] Test entire purchase flow end-to-end
- [ ] Set up analytics (Google Analytics, Facebook Pixel)
- [ ] Configure payment processor (Stripe/PayPal)
- [ ] Create affiliate program terms

## 📞 Support

For questions about:
- **Sales page:** Edit `index.html` directly
- **Whop integration:** See `WHOP_SETUP.md`
- **Course content:** See curriculum in Module files

## 📈 Future Enhancements

- [ ] Add video sales letter (VSL)
- [ ] Webinar funnel integration
- [ ] Email capture popup for abandoned visitors
- [ ] Live chat widget
- [ ] Exit-intent offer
- [ ] Payment plan options
- [ ] Order bumps at checkout
- [ ] Upsell/downsell sequences

---

**Built for:** Zeneca  
**Date:** March 2025  
**License:** Private — All rights reserved
