import { useState } from "react";
import { z } from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormData, registerSchema } from "./schema";

// Email schema using zod

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
    console.log(data);
    try {
      // Validate email with zod
      setError("");
      const { email } = data;
      console.log(email);
      console.log(import.meta.env.BREVO_API_KEY);

      // Make API call using axios
      await axios.post(
        "https://api.brevo.com/v3/contacts",
        {
          email,
          updateEnabled: false,
        },
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            "api-key": import.meta.env.VITE_BREVO_API_KEY,
          },
        }
      );

      onSubmit();
      setSuccess(true);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else if (axios.isAxiosError(err)) {
        setError("Failed to subscribe. Please try again later.");
      } else {
        console.log(err);
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
            className="max-w-96 mx-auto rounded-md border border-gray-300 py-3 px-4 text-sm bg-gray-100 text-gray-900"
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
