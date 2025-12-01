import { useEffect, useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const {
    threshold = 0.1,
    rootMargin = '0px',
    animationClass = 'fade-in',
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, animationClass]);

  return ref;
};


