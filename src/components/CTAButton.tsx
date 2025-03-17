
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
  classNames?: {
    root?: string;
    text?: string;
  };
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ 
    variant = "primary", 
    size = "md", 
    fullWidth = false, 
    children, 
    classNames,
    className,
    ...props 
  }, ref) => {
    const baseClasses = "relative overflow-hidden inline-flex items-center justify-center rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variantClasses = {
      primary: "bg-primary text-white hover:bg-primary-600 focus:ring-primary-500",
      secondary: "bg-secondary text-white hover:bg-secondary-700 focus:ring-secondary-500",
      outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary-50 focus:ring-primary-500",
      text: "bg-transparent text-primary hover:bg-primary-50 focus:ring-primary-500",
    };
    
    const sizeClasses = {
      sm: "text-sm py-2 px-4",
      md: "text-base py-2.5 px-6",
      lg: "text-lg py-3 px-8",
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          fullWidth ? "w-full" : "",
          "group",
          classNames?.root,
          className
        )}
        {...props}
      >
        <span className={cn(
          "relative z-10 flex items-center gap-2 font-medium",
          classNames?.text
        )}>
          {children}
        </span>
        <span className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/10 transition-transform duration-300 ease-out group-hover:scale-100"></span>
      </button>
    );
  }
);

CTAButton.displayName = "CTAButton";

export default CTAButton;
