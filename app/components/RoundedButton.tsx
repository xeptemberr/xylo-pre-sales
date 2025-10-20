"use client";

import React from "react";

interface RoundedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

export default function RoundedButton({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}: RoundedButtonProps) {
  const baseClasses =
    "font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer rounded-full";

  const variantClasses = {
    primary:
      "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400 shadow-md hover:shadow-lg",
    secondary:
      "bg-white hover:bg-gray-50 text-gray-800 focus:ring-gray-300 shadow-lg hover:shadow-xl",
  };

  const sizeClasses = {
    sm: "py-2 px-6 text-sm",
    md: "py-3 px-12 text-[20px] h-[66px]",
    lg: "py-4 px-10 text-lg",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed hover:bg-gray-200 hover:shadow-md"
    : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabledClasses}
        ${className}
      `.trim()}
    >
      {children}
    </button>
  );
}
