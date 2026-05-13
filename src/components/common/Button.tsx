// src/components/ui/button.jsx
import React from "react";

export function Button({
  children,
  onClick,
  variant = "default",
  className = "",
  ...props
}) {
  const base =
    "px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200";

  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
