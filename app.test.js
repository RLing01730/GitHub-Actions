const request = require('supertest');
const app = require('./app');

describe('GitHub Actions Demo App', () => {
  describe('GET /', () => {
    it('should return welcome message', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Welcome to GitHub Actions Demo App!');
      expect(response.body.status).toBe('running');
    });
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.body.status).toBe('healthy');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /api/info', () => {
    it('should return app information', async () => {
      const response = await request(app).get('/api/info');
      expect(response.status).toBe(200);
      expect(response.body.name).toBe('GitHub Actions Demo');
      expect(response.body.version).toBe('1.0.0');
    });
  });

  describe('POST /api/calculate', () => {
    it('should add two numbers', async () => {
      const response = await request(app)
        .post('/api/calculate')
        .send({ operation: 'add', a: 5, b: 3 });
      expect(response.status).toBe(200);
      expect(response.body.result).toBe(8);
    });

    it('should subtract two numbers', async () => {
      const response = await request(app)
        .post('/api/calculate')
        .send({ operation: 'subtract', a: 10, b: 4 });
      expect(response.status).toBe(200);
      expect(response.body.result).toBe(6);
    });

    it('should multiply two numbers', async () => {
      const response = await request(app)
        .post('/api/calculate')
        .send({ operation: 'multiply', a: 6, b: 7 });
      expect(response.status).toBe(200);
      expect(response.body.result).toBe(42);
    });

    it('should divide two numbers', async () => {
      const response = await request(app)
        .post('/api/calculate')
        .send({ operation: 'divide', a: 20, b: 4 });
      expect(response.status).toBe(200);
      expect(response.body.result).toBe(5);
    });

    it('should return error for division by zero', async () => {
      const response = await request(app)
        .post('/api/calculate')
        .send({ operation: 'divide', a: 10, b: 0 });
      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Cannot divide by zero');
    });

    it('should return error for invalid input', async () => {
      const response = await request(app)
        .post('/api/calculate')
        .send({ operation: 'add', a: 'invalid', b: 3 });
      expect(response.status).toBe(400);
      expect(response.body.error).toContain('Invalid input');
    });

    it('should return error for invalid operation', async () => {
      const response = await request(app)
        .post('/api/calculate')
        .send({ operation: 'invalid', a: 5, b: 3 });
      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Invalid operation');
    });
  });
});
