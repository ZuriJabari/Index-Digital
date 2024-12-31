import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface JobApplicationFormProps {
  jobTitle: string;
  onClose: () => void;
}

export const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ jobTitle, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    resume: null as File | null,
    coverLetter: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful submission
      setSubmitStatus('success');
      
      // Close the form after a delay
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-2xl"
      >
        {/* Graph Paper Background */}
        <div className="absolute inset-0 graph-paper-small opacity-10" />
        <div className="absolute inset-0 graph-paper-accent opacity-15" />

        {/* Form Content */}
        <div className="relative bg-[#1e1e1e]/90 backdrop-blur-sm rounded-lg border border-[#323232]/30 p-6 md:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-light/50 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="text-2xl font-bold text-white mb-2">Apply for {jobTitle}</h2>
          <p className="text-neutral-light/70 mb-6">Fill out the form below to apply for this position.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-[#1e1e1e] border border-[#323232] rounded-lg px-4 py-2.5 text-white placeholder-neutral-light/30 focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#1e1e1e] border border-[#323232] rounded-lg px-4 py-2.5 text-white placeholder-neutral-light/30 focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-[#1e1e1e] border border-[#323232] rounded-lg px-4 py-2.5 text-white placeholder-neutral-light/30 focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50"
                  placeholder="+256 700 000000"
                />
              </div>

              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium text-white mb-2">
                  Portfolio URL
                </label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="w-full bg-[#1e1e1e] border border-[#323232] rounded-lg px-4 py-2.5 text-white placeholder-neutral-light/30 focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50"
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-white mb-2">
                Resume/CV *
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="resume"
                  className="flex items-center justify-center w-full bg-[#1e1e1e] border border-dashed border-[#323232] rounded-lg px-4 py-4 text-neutral-light/70 hover:text-white hover:border-secondary/50 transition-colors cursor-pointer"
                >
                  <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  {formData.resume ? formData.resume.name : 'Upload Resume/CV (PDF, DOC, DOCX)'}
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium text-white mb-2">
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows={4}
                value={formData.coverLetter}
                onChange={handleInputChange}
                className="w-full bg-[#1e1e1e] border border-[#323232] rounded-lg px-4 py-2.5 text-white placeholder-neutral-light/30 focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 resize-none"
                placeholder="Tell us why you're interested in this position..."
              />
            </div>

            <div className="flex items-center justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 text-neutral-light hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2.5 rounded-lg bg-secondary text-white font-medium hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center ${
                  isSubmitting ? 'cursor-wait' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Application Sent!
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>

            {submitStatus === 'error' && (
              <p className="text-red-500 text-sm mt-2">
                There was an error submitting your application. Please try again.
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};
