import { useState } from "react";
import { z } from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormData, registerSchema } from "./schema";

// API configuration for Vercel deployment
const getApiBaseUrl = () => {
  // In production (Vercel), use the same domain
  if (import.meta.env.PROD) {
    return window.location.origin;
  }
  // In development, check if we have a custom API URL
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  // Default to local development server
  return 'http://localhost:5000';
};

const BrevoEmailSubscribe = ({ onSubmit }: { onSubmit: () => void }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
    },
  });

  const submitToBrevo = async (data: RegisterFormData) => {
    try {
      setError("");
      const { email } = data;

      const apiBaseUrl = getApiBaseUrl();
      
      // Make API call to your backend (Vercel API route or local server)
      const response = await axios.post(
        `${apiBaseUrl}/api/subscribe`,
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          // Don't use withCredentials in production unless needed
          ...(import.meta.env.DEV && { withCredentials: true }),
        }
      );

      if (response.data.success) {
        onSubmit();
        setSuccess(true);
      } else {
        setError(response.data.error || "Failed to subscribe. Please try again later.");
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else if (axios.isAxiosError(err)) {
        // Handle backend error responses
        const errorMessage = err.response?.data?.error || "Failed to subscribe. Please try again later.";
        setError(errorMessage);
        
        // Log detailed error for debugging (only in development)
        if (import.meta.env.DEV) {
          console.error('Subscription error:', {
            status: err.response?.status,
            data: err.response?.data,
            message: err.message
          });
        }
      } else {
        console.error('Unexpected error:', err);
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      {error && (
        <div className="mb-6">
          <span className="text-red-600">{error}</span>
        </div>
      )}
      {success ? (
        <span className="text-gray-800">Thank you for subscribing!</span>
      ) : (
        <form
          onSubmit={handleSubmit(submitToBrevo)}
          className="w-full flex flex-col items-center"
          noValidate
        >
          <input
            type="email"
            id="input-label"
            className="w-80 sm:w-[400px] mx-auto rounded-md border border-gray-300 py-3 px-4 text-sm bg-gray-100 text-gray-900"
            placeholder="Enter your email..."
            disabled={isSubmitting}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 py-3 px-6 text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      )}
    </div>
  );
};

export default BrevoEmailSubscribe;