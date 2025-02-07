/* eslint-disable react/prop-types */
import CTAButton from "./CTAButton";
import SplitText from "./ui/SplitText";
const Section = ({
  Icon,
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
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="flex items-center justify-center gap-3 text-2xl font-bold md:text-4xl bg-clip-text transparent text-transparent  bg-gradient-to-r from-purple-500 to-blue-500 animate-gradient">
          <Icon color="white" />
          <SplitText
            text={title}
            className="uppercase text-center"
            delay={10}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </h2>
        {subtitle && (
          <p className="mt-3 text-muted-foreground ">{subtitle}</p>

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
    </section>
  );
};

export default Section;

// export default Section;
