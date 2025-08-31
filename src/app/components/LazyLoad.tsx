"use client";
import { useState, useEffect, useRef } from 'react';

// Component map'ini burada tanımlayalım
const componentMap = {
  PartnersSection: () => import('../components/sections/PartnersSection'),
  ServicesSection: () => import('../components/sections/ServicesSection'),
} as const;

type ComponentName = keyof typeof componentMap;

interface Props {
  componentName: ComponentName;
  fallback?: React.ReactNode;
  rootMargin?: string;
  minHeight?: string | number;
}

export default function LazySection({ 
  componentName,
  fallback,
  rootMargin = "200px",
  minHeight
}: Props) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    if (!isVisible || Component) return;
    
    setIsLoading(true);
    
    const importFunc = componentMap[componentName];
    importFunc()
      .then(module => {
        setComponent(() => module.default);
      })
      .catch(error => {
        console.error('Component loading failed:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isVisible, componentName, Component]);

  return (
    <div 
      ref={ref} 
      style={{ minHeight }}
      className="w-full"
    >
      {Component ? (
        <Component />
      ) : isLoading ? (
        fallback || <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg" />
      ) : (
        <div style={{ height: minHeight }} />
      )}
    </div>
  );
}