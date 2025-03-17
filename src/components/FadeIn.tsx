
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  threshold?: number;
  duration?: number;
  once?: boolean;
}

export const FadeIn = ({
  children,
  className,
  delay = 0,
  direction = "up",
  threshold = 0.1,
  duration = 600,
  once = true,
}: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px",
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
  }, [threshold, once]);

  const getDirectionClasses = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translate-y-10 opacity-0";
        case "down":
          return "-translate-y-10 opacity-0";
        case "left":
          return "translate-x-10 opacity-0";
        case "right":
          return "-translate-x-10 opacity-0";
        case "none":
          return "opacity-0";
        default:
          return "translate-y-10 opacity-0";
      }
    }
    return "translate-y-0 translate-x-0 opacity-100";
  };

  return (
    <div
      ref={ref}
      className={cn(getDirectionClasses(), className)}
      style={{
        transitionProperty: "transform, opacity",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
