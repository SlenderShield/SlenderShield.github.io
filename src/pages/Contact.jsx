import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: { name: "", email: "", message: "" }
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Get in touch with me.
          </h1>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Would love to talk about how i can help you.
          </p>
        </div>

        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          <div className="flex flex-col p-4 sm:p-6 lg:p-8 dark:border-neutral-700 gap-16">
            <div className="flex gap-x-5 items-center justify-center">
              <svg className="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              <div className="grow">
                <h4 className="text-neutral-800 dark:text-white font-semibold">Projects: </h4>
                <Link to="/projects" className="group inline-flex items-center gap-x-2 font-medium text-sm  decoration-2 hover:underline focus:outline-none focus:underline mt-2">
                  click to navigate
                  <svg className="shrink-0 size-4 transition group-hover:translate-x-0.5 translate-x-0 group-focus:translate-x-0.5 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
            <div className="flex gap-x-5 items-center justify-center">
              <svg className="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              <div className="grow">
                <h4 className="text-neutral-800 dark:text-white font-semibold">Address:</h4>

                <address className="mt-1 text-neutral-600 dark:text-neutral-200 text-sm not-italic">
                  Bengaluru, India.
                </address>
              </div>
            </div>
            <div className="flex gap-x-5 items-center justify-center">
              <svg className="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" /><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" /></svg>
              <div className="grow">
                <h4 className="text-neutral-800 dark:text-white font-semibold">Email:</h4>

                <a className="mt-1 text-neutral-600 dark:text-neutral-200 text-sm hover:text-neutral-200 focus:outline-none focus:text-neutral-200" href="#mailto:ksmuralidhara0@gmail.com" target="_blank">
                  ksmuralidhara0@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
              Fill in the form
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input type="text" name="name" id="name" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-100 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-300 dark:focus:ring-neutral-600" {...register("name", { required: "Name is required.", minLength: { value: 3, message: "Name must be at least 3 characters." } })} placeholder="Name" aria-invalid={!!errors.name} />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" name="email" id="email" autoComplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-100 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-300 dark:focus:ring-neutral-600" placeholder="Email" {...register("email", { required: "Email is required." })}
                    aria-invalid={!!errors.email} />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Details</label>
                  <textarea id="message" name="message" rows="4" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-100 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-300 dark:focus:ring-neutral-600" placeholder="Details"
                    {...register("message", { required: "Message is required." })}
                    aria-invalid={!!errors.message}></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

              </div>

              <div className="mt-4 grid">
                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Send inquiry</button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Contact;
