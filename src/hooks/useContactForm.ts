import { ApiResponse, ContactFormData } from '@/lib/contact/types';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

interface UseContactFormReturn {
  formData: ContactFormData;
  isSubmitting: boolean;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  resetForm: () => void;
  isFormValid: boolean;
}

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    interestedIn: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();

      if (result.success) {
        toast.success(result.message);
        resetForm();
      } else {
        toast.error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      interestedIn: '',
      message: '',
    });
  };

  const isFormValid = formData.fullName.trim() !== '' && 
                     formData.email.trim() !== '';

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit,
    resetForm,
    isFormValid,
  };
};