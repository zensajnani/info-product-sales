/**
 * Zeniqle Client Acquisition System
 * Main server entry point
 * @version 1.0.0
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

// Import route modules
const leadScoringRoutes = require('./client-acquisition/lead-scoring/api');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0',
    uptime: process.uptime()
  });
});

// API root
app.get('/api', (req, res) => {
  res.json({
    service: 'Zeniqle Client Acquisition API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      leads: {
        score: 'POST /api/leads/score',
        scoreBatch: 'POST /api/leads/score-batch',
        getByTier: 'GET /api/leads/tier/:tier'
      },
      sequences: 'Coming soon',
      campaigns: 'Coming soon'
    }
  });
});

// Mount route modules
app.use('/api/leads', leadScoringRoutes);

// Email sequences API (placeholder for future implementation)
app.get('/api/sequences', (req, res) => {
  const sequences = [
    { id: 'welcome_series', name: 'Welcome Series', emails: 5 },
    { id: 'product_discovery', name: 'Product Discovery', emails: 4 },
    { id: 'pricing_conversation', name: 'Pricing Conversation', emails: 3 },
    { id: 'reengagement', name: 'Re-engagement', emails: 3 }
  ];
  res.json({ success: true, data: sequences });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  console.error('Stack:', err.stack);
  
  res.status(err.status || 500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    path: req.path
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   Zeniqle Client Acquisition System                       ║
║   Server running on port ${PORT}                            ║
║                                                           ║
║   API Documentation: http://localhost:${PORT}/api           ║
║   Health Check: http://localhost:${PORT}/health             ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
  `);
});

module.exports = app; // Export for testing
