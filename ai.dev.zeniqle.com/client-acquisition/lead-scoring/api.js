/**
 * Lead Scoring API Endpoints
 * Express.js routes for lead scoring integration
 */

const express = require('express');
const router = express.Router();
const { scoreLead, batchScoreLeads, getLeadsByTier } = require('./algorithm');

// POST /api/leads/score - Score a single lead
router.post('/score', (req, res) => {
  try {
    const result = scoreLead(req.body);
    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// POST /api/leads/score-batch - Score multiple leads
router.post('/score-batch', (req, res) => {
  try {
    const { leads } = req.body;
    if (!Array.isArray(leads)) {
      return res.status(400).json({
        success: false,
        error: 'leads must be an array'
      });
    }
    
    const results = batchScoreLeads(leads);
    res.json({
      success: true,
      data: {
        leads: results,
        summary: {
          total: results.length,
          hot: results.filter(l => l.scoring.tier === 'hot').length,
          warm: results.filter(l => l.scoring.tier === 'warm').length,
          cold: results.filter(l => l.scoring.tier === 'cold').length
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET /api/leads/tier/:tier - Get leads by tier
router.get('/tier/:tier', (req, res) => {
  try {
    const { tier } = req.params;
    const { leads } = req.body; // Would typically come from DB
    
    const filtered = getLeadsByTier(leads || [], tier);
    res.json({
      success: true,
      data: filtered
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
