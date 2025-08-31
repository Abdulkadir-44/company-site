import { useRef, useState, useEffect, RefObject } from "react";

interface CustomIntersectionObserverInit extends IntersectionObserverInit {
  once?: boolean;
}

function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: CustomIntersectionObserverInit = {}
): [RefObject<T | null>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const { once, ...observerOptions } = options;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) {
        setIsIntersecting(entry.isIntersecting);
        
        if (once && entry.isIntersecting) {
          observer.disconnect();
        }
      }
    }, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, isIntersecting];
}

export { useIntersectionObserver };