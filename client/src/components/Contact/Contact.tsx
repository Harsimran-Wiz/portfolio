import { FC, memo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContactForm } from "../../types/types";
import { motion } from "framer-motion";
import { SECTION_PADDING } from "../../constant/constantStyles";
import emailjs from "@emailjs/browser";

const Contact: FC = memo(() => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    user_email: "",
    user_name: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = (data: ContactForm): void => {
    if (!data.user_email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      throw new Error("Invalid email format");
    }
    if (data.message.length < 10 || data.message.length > 5000) {
      throw new Error("Message must be between 10 and 5000 characters");
    }
    if (data.user_name.length < 2 || data.user_name.length > 100) {
      throw new Error("Name must be between 2 and 100 characters");
    }
    // Add XSS prevention
    if (/[<>]/.test(data.message)) {
      throw new Error("Invalid characters detected");
    }
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      validateForm(formData);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.user_name.trim(),
          user_email: formData.user_email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully! ✅");
      setFormData({
        user_email: "",
        user_name: "",
        subject: "",
        message: "",
      });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to send message";
      toast.error(errorMessage);

      if (import.meta.env.DEV) {
        console.error("Email error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const inputClassName = `w-full p-4 rounded-lg bg-[hsl(var(--background))] 
    border border-[hsl(var(--primary)_/_0.1)] 
    hover:border-[hsl(var(--primary)_/_0.2)] 
    focus:border-[hsl(var(--primary))] 
    focus:ring-2 focus:ring-[hsl(var(--primary)_/_0.3)] 
    transition-colors outline-none`;

  return (
    <section
      id="contact"
      className={SECTION_PADDING}
      aria-label="Contact Section"
    >
      <ToastContainer theme="dark" />

      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-[hsl(var(--foreground))]">
          CONTACT
        </h2>
        <div className="w-32 h-1 bg-[hsl(var(--primary))] mx-auto mt-4" />
        <p className="text-[hsl(var(--muted-foreground))] mt-4 text-lg">
          Let's connect — I'm open to opportunities
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="w-full max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form onSubmit={sendEmail} className="space-y-6">
          <div className="space-y-4">
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
              className={inputClassName}
            />
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className={inputClassName}
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              className={inputClassName}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              required
              className={`${inputClassName} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 px-8 rounded-lg bg-[hsl(var(--primary))] 
              hover:bg-[hsl(var(--primary)_/_0.9)] text-white font-medium 
              transition-all transform hover:scale-[1.02] 
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 
              shadow-lg shadow-[hsl(var(--primary)_/_0.25)] 
              focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-offset-2"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
