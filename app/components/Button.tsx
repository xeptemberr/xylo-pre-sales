"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "w-full font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const variantClasses = {
    primary: "bg-[#856285] hover:bg-[#6d4f6d] text-white focus:ring-[#856285]",
    secondary:
      "bg-green-500 hover:bg-green-600 text-white focus:ring-green-500",
    outline:
      "border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 focus:ring-gray-300",
  };

  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-[2.4rem]",
    lg: "py-4 px-8 text-lg",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed hover:bg-[#856285] hover:border-gray-300"
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
