import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
import { z } from "zod";

// Email validation schema
const emailSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin":
    process.env.NODE_ENV === "production"
      ? process.env.FRONTEND_URL || "https://your-domain.vercel.app"
      : "http://localhost:5173",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Credentials": "true",
} as const;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).json({}).end();
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  // Set CORS headers
  Object.entries(corsHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  try {
    // Validate request body
    const validation = emailSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        success: false,
        error: "Invalid email format",
        details: validation.error.errors,
      });
    }

    const { email } = validation.data;

    // Check if BREVO_API_KEY is available
    if (!process.env.BREVO_API_KEY) {
      console.error("BREVO_API_KEY is not configured");
      return res.status(500).json({
        success: false,
        error: "Server configuration error",
      });
    }

    // Make request to Brevo API
    const response = await axios.post(
      "https://api.brevo.com/v3/contacts",
      {
        email,
        updateEnabled: false,
      },
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": process.env.BREVO_API_KEY,
        },
      }
    );

    // Success response
    return res.status(200).json({
      success: true,
      message: "Successfully subscribed to newsletter",
      data: {
        email,
        id: response.data.id,
      },
    });
  } catch (error) {
    console.error("Subscription error:", error);

    if (axios.isAxiosError(error)) {
      // Handle Brevo API errors
      if (error.response?.status === 400) {
        return res.status(400).json({
          success: false,
          error: "Email already exists or invalid",
          details: error.response.data,
        });
      }

      if (error.response?.status === 401) {
        return res.status(500).json({
          success: false,
          error: "API authentication failed",
        });
      }

      return res.status(500).json({
        success: false,
        error: "Failed to subscribe to newsletter",
      });
    }

    // Handle other errors
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}
