import React, { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "font-(family-name:--font-urbanist) font-bold rounded-(--spacing-10px) transition-all duration-200 flex items-center justify-center w-full uppercase cursor-pointer focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-primary text-white text-shadow-primary hover:bg-secondary shadow-button",
    secondary:
      "bg-secondary text-white shadow-button hover:bg-primary hover:shadow-button-alt",
    ghost: "bg-transparent text-black hover:bg-gray-100",
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "text-sm px-3 py-2",
    md: "text-xl leading-none px-6 py-2",
    lg: "text-2xl px-8 py-4",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2.5">{rightIcon}</span>}
    </button>
  );
};

export default Button;
