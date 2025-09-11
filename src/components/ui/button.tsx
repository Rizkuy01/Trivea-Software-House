import React from "react";
import { cn } from "../../lib/utils"; // helper untuk merge className, bisa juga hapus kalau belum ada

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-xl transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39e639]";

  const variants: Record<typeof variant, string> = {
    primary: "bg-[#007bff] hover:bg-[#006ae6] text-white shadow-lg",
    outline:
      "border border-[#39e639] text-[#39e639] hover:bg-[#39e639] hover:text-black",
    ghost:
      "text-gray-300 hover:bg-gray-800 hover:text-white",
  };

  const sizes: Record<typeof size, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg rounded-2xl",
  };

  return (
    <button
      {...props}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}
