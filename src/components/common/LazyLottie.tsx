import React, { lazy, Suspense, useState, useEffect, useRef } from 'react';

// Lazy load the DotLottieReact component
const DotLottieReact = lazy(() =>
  import('@lottiefiles/dotlottie-react').then(module => ({
    default: module.DotLottieReact
  }))
);

interface LazyLottieProps {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

// Intersection Observer based lazy loading
const LazyLottie: React.FC<LazyLottieProps> = ({
  src,
  loop = true,
  autoplay = true,
  style,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px', // Start loading slightly before visible
        threshold: 0
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={style} className={className}>
      {isVisible && (
        <Suspense fallback={<div style={{ width: '100%', height: '100%' }} />}>
          <DotLottieReact
            src={src}
            loop={loop}
            autoplay={autoplay}
          />
        </Suspense>
      )}
    </div>
  );
};

export default LazyLottie;
