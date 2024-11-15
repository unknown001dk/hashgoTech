import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/Database.js';
import userRoutes from './routes/userRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Convert ES module to get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Routes
app.use('/api/v1/users', userRoutes);

// Root route
app.get('/', (req, res) => {
  res.status(200).send('API is running...');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
