/**
 * Client Acquisition API Server
 * Express server for lead scoring and email sequences
 */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const leadScoringRouter = require('./lead-scoring/api');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/leads', leadScoringRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'Client Acquisition API',
    version: '1.0.0',
    endpoints: [
      '/health',
      '/api/leads/score',
      '/api/leads/score-batch',
      '/api/leads/tier/:tier'
    ]
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🎯 API base: http://localhost:${PORT}/api/leads`);
});

module.exports = app;
</invoke>