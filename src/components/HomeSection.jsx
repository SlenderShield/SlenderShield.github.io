/* eslint-disable react/prop-types */
import CTAButton from "./CTAButton";

const HomeSection = ({
  icon,
  title,
  ctaLink,
  ctaText,
  children,
  subtitle,
}) => {
  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="flex flex-row items-center gap-5 justify-center text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          {icon}
          {title}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-neutral-400">{subtitle}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center auto-cols-auto">
        {children}
      </div>
      {ctaLink &&
        <div className="mt-12 text-center">
          <CTAButton to={ctaLink} ctaText={ctaText} />
        </div>}
    </section>
  );
};

export default HomeSection;
