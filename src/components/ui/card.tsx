import React from "react";
import { cn } from "../../lib/utils";

type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
};

export function Card({ title, description, icon, className }: CardProps) {
  return (
    <div
      className={cn(
        "p-8 rounded-2xl bg-[#1f1f1f] shadow-lg hover:scale-105 transition",
        className
      )}
    >
      {icon && <div className="mb-4 text-[#39e639]">{icon}</div>}
      <h3 className="text-2xl font-semibold mb-4 text-[#39e639]">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
