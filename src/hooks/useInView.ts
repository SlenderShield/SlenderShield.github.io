import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number | number[];
  margin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook to detect when an element enters the viewport using Intersection Observer.
 * Useful for scroll-triggered animations and lazy loading patterns.
 */
export function useInView(options: UseInViewOptions = {}) {
  const {
    threshold = 0.1,
    margin = '0px',
    triggerOnce = false,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setHasBeenInView(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          if (!triggerOnce) {
            setIsInView(false);
          }
        }
      },
      {
        threshold,
        rootMargin: margin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, margin, triggerOnce]);

  return { ref, isInView, hasBeenInView };
}
