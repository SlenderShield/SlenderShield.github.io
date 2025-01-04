import { HiOutlineBookmark } from "react-icons/hi2";
import { Button } from "@/components/ui/Button";
import { useForm } from 'react-hook-form';
import { ChevronsLeft, ChevronsRight } from "lucide-react";

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
    <section className="flex flex-col gap-6 lg:gap-10 mt-10 mx-5 md:mx-20">
      <div className="pb-3 border-b-2">
        <h3 className="flex flex-row items-center gap-2 font-bold text-xl md:text-3xl">
          <HiOutlineBookmark /> Let's Connect
        </h3>
        <p className="text-left text-md md:text-xl py-5">
          Reach out to discuss projects or inquiries.
        </p>
        <div className="flex flex-col md:flex-row justify-start items-center gap-5 w-full">
          <Button variant="default" className="w-full md:w-52">Projects</Button>
          <Button variant="outline" className="w-full md:w-52">Mail me</Button>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-slate-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-lg md:text-2xl font-medium">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="block w-full rounded-md px-3 py-3 text-sm dark:bg-slate-900 outline outline-1 outline-slate-700 placeholder:text-primary focus:outline-2 focus:outline-secondary-foreground sm:text-base"
                    {...register("name", { required: "Name is required.", minLength: { value: 3, message: "Name must be at least 3 characters." } })}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-lg md:text-2xl font-medium">
                  Email Address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full rounded-md px-3 py-3 text-sm dark:bg-slate-900 outline outline-1 outline-slate-700 placeholder:text-primary focus:outline-2 focus:outline-secondary-foreground sm:text-base"
                    {...register("email", { required: "Email is required." })}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="message" className="block text-lg md:text-2xl font-medium">
                  Message
                </label>
                <p className="mt-3 text-base md:text-lg">Write a few sentences about your query.</p>
                <div className="mt-2">
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Message..."
                    className="block w-full rounded-md px-3 py-6 text-sm dark:bg-slate-900 outline outline-1 outline-slate-700 placeholder:text-primary focus:outline-2 focus:outline-secondary-foreground sm:text-base"
                    {...register("message", { required: "Message is required." })}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <Button
                  variant="secondary"
                  type="submit"
                  className="group relative inline-flex justify-center items-center w-full border-2 border-slate-500 p-2 rounded-lg text-link tracking-wide hover:tracking-wider"
                >
                  <ChevronsLeft className="opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-transform" />
                  <span className="uppercase">Send Message</span>
                  <ChevronsRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
