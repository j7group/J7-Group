// hooks/useReusableContactForm.ts
import { useState } from 'react';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  interestedIn: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  emailSent?: boolean;
  subscriberAdded?: boolean;
  errors?: Array<{ field: string; message: string }>;
}

interface UseContactFormReturn {
  submitForm: (data: ContactFormData) => Promise<ContactFormResponse>;
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string | null;
  reset: () => void;
}

export const useReusableContactForm = (): UseContactFormReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: ContactFormData): Promise<ContactFormResponse> => {
    setIsSubmitting(true);
    setIsError(false);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: ContactFormResponse = await response.json();

      if (!response.ok) {
        setIsError(true);
        setError(result.message || 'Something went wrong');
        return result;
      }

      setIsSuccess(true);
      return result;
    } catch (err) {
      const errorMessage = 'Network error. Please check your connection and try again.';
      setIsError(true);
      setError(errorMessage);
      
      return {
        success: false,
        message: errorMessage,
      };
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setIsError(false);
    setError(null);
  };

  return {
    submitForm,
    isSubmitting,
    isSuccess,
    isError,
    error,
    reset,
  };
};