const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to GitHub Actions Demo App!',
    status: 'running'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// API endpoint
app.get('/api/info', (req, res) => {
  res.json({ 
    name: 'GitHub Actions Demo',
    version: '1.0.0',
    description: 'A simple application to demonstrate CI/CD with GitHub Actions'
  });
});

// Calculator endpoint for testing
app.post('/api/calculate', (req, res) => {
  const { operation, a, b } = req.body;
  
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Invalid input: a and b must be numbers' });
  }

  let result;
  switch (operation) {
  case 'add':
    result = a + b;
    break;
  case 'subtract':
    result = a - b;
    break;
  case 'multiply':
    result = a * b;
    break;
  case 'divide':
    if (b === 0) {
      return res.status(400).json({ error: 'Cannot divide by zero' });
    }
    result = a / b;
    break;
  default:
    return res.status(400).json({ error: 'Invalid operation' });
  }

  res.json({ result });
});

// Start server only if not in test mode
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;
