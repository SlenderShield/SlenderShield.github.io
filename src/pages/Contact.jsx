import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Section from '@/components/Section';
import { FaAddressBook } from 'react-icons/fa';
import { useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
const Contact = () => {
  const toastConfig = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { name: '', email: '', message: '' },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const notify = ({ message, state }) => {
    toast[state](message, toastConfig);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {

      await new Promise(resolve => setTimeout(resolve, 1500));

      notify({ message: 'Successfully saved!', state: 'success' });
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      notify({ message: 'Something went wrong. Please try again later.', state: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      Icon={FaAddressBook}
      title="Get in touch with me."
      subtitle=" Would love to talk about how i can help you."
      columns={1}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div className="space-y-8 p-8 bg-neutral-50 dark:bg-neutral-800/50 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Location</h3>
              <p className="text-neutral-600 dark:text-neutral-300">Bengaluru, India</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <Link
                to="mailto:ksmuralidhara0@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                ksmuralidhara0@gmail.com
              </Link>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-600 dark:bg-blue-500 rounded-xl text-white">
            <h4 className="font-semibold mb-2">View My Projects</h4>
            <p className="mb-4 text-blue-100">Check out my portfolio of work and past projects</p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-200">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters" } })}
              className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-700'} bg-transparent focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all`}
              placeholder="John Doe"
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>} {/* Error message */}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-200">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })}
              className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-700'} bg-transparent focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all`}
              placeholder="john@example.com"
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>} {/* Error message */}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-200">
              Your Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              rows="4"
              className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-700'} bg-transparent focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all resize-none`}
              placeholder="Tell me about your project..."
              disabled={isSubmitting}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>} {/* Error message */}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
            I typically respond within 1-2 days
          </p>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </Section >

  );
};

export default Contact;