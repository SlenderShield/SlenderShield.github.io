/* eslint-disable react/prop-types */
import CTAButton from "./CTAButton";

const HomeSection = ({
  icon,
  title,
  ctaLink,
  ctaText,
  children,
  subtitle,
  columns = 3,
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="flex items-center justify-center gap-3 text-2xl font-bold md:text-4xl">
          {icon}
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-muted-foreground">{subtitle}</p>
        )}
      </div>

      <div className={`grid ${gridCols[columns]} gap-6`}>
        {children}
      </div>

      {ctaLink && (
        <div className="mt-12 text-center">
          <CTAButton ctaText={ctaText} href={ctaLink} />
        </div>
      )}
    </div>
  );
};

export default HomeSection;

// export default HomeSection;
