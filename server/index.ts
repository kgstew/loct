import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import { z } from 'zod';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'your-production-domain.com' 
    : 'http://localhost:5173', // Vite default port
  credentials: true
}));
app.use(express.json());

// Email validation schema
const emailSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Email subscription endpoint
app.post('/api/subscribe', async (req, res) => {
  try {
    // Validate request body
    const validation = emailSchema.safeParse(req.body);
    
    if (!validation.success) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format',
        details: validation.error.errors
      });
    }

    const { email } = validation.data;

    // Check if BREVO_API_KEY is available
    if (!process.env.BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not configured');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error'
      });
    }

    // Make request to Brevo API
    const response = await axios.post(
      'https://api.brevo.com/v3/contacts',
      {
        email,
        updateEnabled: false,
      },
      {
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'api-key': process.env.BREVO_API_KEY,
        },
      }
    );

    // Success response
    res.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      data: {
        email,
        id: response.data.id
      }
    });

  } catch (error) {
    console.error('Subscription error:', error);

    if (axios.isAxiosError(error)) {
      // Handle Brevo API errors
      if (error.response?.status === 400) {
        return res.status(400).json({
          success: false,
          error: 'Email already exists or invalid',
          details: error.response.data
        });
      }
      
      if (error.response?.status === 401) {
        return res.status(500).json({
          success: false,
          error: 'API authentication failed'
        });
      }

      return res.status(500).json({
        success: false,
        error: 'Failed to subscribe to newsletter'
      });
    }

    // Handle other errors
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});

export default app;