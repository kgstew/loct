import { z } from "zod";
export const registerSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
