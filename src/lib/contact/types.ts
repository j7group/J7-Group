/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod';
export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  interestedIn?: string;
  message?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface MailerLiteSubscriber {
  email: string;
  fields: {
    name?: string;
    phone?: string;
    property_interest?: string;
  };
  groups?: string[];
}


export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  interestedIn: z.string().optional(),
  message: z.string().optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;