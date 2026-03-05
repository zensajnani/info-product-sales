# Whop Integration Guide

## Overview
This info product is configured for checkout via [Whop](https://whop.com) — the simplest way to sell digital products and memberships.

## Setup Steps

### 1. Create Your Whop Account
1. Go to https://whop.com and sign up
2. Complete your seller profile
3. Verify your payment details

### 2. Create Your Product
1. In your Whop dashboard, click "Create Product"
2. Select "Digital Product" or "Course"
3. Name it "Client Acquisition Mastery"
4. Upload the product image (use the included `assets/` folder)

### 3. Set Up Pricing Tiers

Create 3 separate plans:

#### Starter Plan - $497
- **Plan Name:** Starter
- **Price:** $497 (one-time)
- **Description:** Perfect for beginners ready to land their first high-ticket clients
- **Deliverables:**
  - Complete 8-module course
  - 60+ video lessons
  - Downloadable templates & scripts
  - Private community access
  - 6 months of content updates
  - Email support

#### Professional Plan - $997
- **Plan Name:** Professional (Most Popular)
- **Price:** $997 (one-time)
- **Description:** For serious entrepreneurs who want hands-on guidance
- **Deliverables:**
  - Everything in Starter
  - Weekly group coaching calls
  - 1-on-1 onboarding call
  - Advanced automation templates
  - Done-for-you email sequences
  - 12 months of updates
  - Priority support
  - Sales call recordings library

#### Elite Plan - $1,997
- **Plan Name:** Elite
- **Price:** $1,997 (one-time)
- **Description:** VIP experience with personalized strategy
- **Deliverables:**
  - Everything in Professional
  - 4 private 1-on-1 strategy sessions
  - Personalized outreach review
  - Direct instructor messaging
  - Lifetime access
  - Custom automation setup
  - Elite mastermind group
  - 1 year monthly check-ins
  - Proposal review & optimization

### 4. Update Checkout Links

Replace the placeholder checkout URLs in `index.html`:

```html
<!-- Starter -->
<a href="https://whop.com/checkout/YOUR_STARTER_PLAN_ID" ...>

<!-- Professional -->
<a href="https://whop.com/checkout/YOUR_PRO_PLAN_ID" ...>

<!-- Elite -->
<a href="https://whop.com/checkout/YOUR_ELITE_PLAN_ID" ...>
```

To get your plan IDs:
1. In Whop, go to each plan's settings
2. Copy the checkout URL
3. Paste into the corresponding href

### 5. Configure Delivery

#### For Digital Content:
- Upload videos to Whop's native hosting, OR
- Use external hosting (Vimeo/YouTube unlisted) and add links

#### For Templates/Downloads:
- Upload files directly to Whop, OR
- Host in Google Drive/Dropbox and share links

#### For Community Access:
- Whop has built-in community features
- Or link to Circle/Discord/Slack

### 6. Connect Payment Processor

1. Go to Settings → Payments
2. Connect Stripe or PayPal
3. Set payout schedule

### 7. Test Your Funnel

1. Use Whop's test mode to complete a purchase
2. Verify content delivery works
3. Check email confirmations
4. Test upgrade paths between tiers

## Advanced Features

### Upsells
- Configure post-purchase upsells in Whop
- Example: Offer Professional tier after Starter purchase

### Affiliate Program
- Enable Whop's affiliate feature
- Set commission rates (typically 30-50%)
- Share affiliate links with partners

### Analytics
- Track conversion rates by tier
- Monitor refund rates
- A/B test pricing with Whop's analytics

## Custom Domain (Optional)

1. Buy a domain (e.g., clientacquisitionmastery.com)
2. In Whop: Settings → Custom Domain
3. Follow DNS instructions
4. Deploy this sales page to your custom domain

## Support

For Whop-specific questions:
- Whop Help Center: https://help.whop.com
- Whop Discord: https://discord.gg/whop

For funnel optimization questions, refer to the course materials in Module 3.
