"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FlobedButtonProps {
  href: string;
  className?: string;
  variant?: "default" | "alt" | "solid";
  children: React.ReactNode;
  icon?: React.ReactNode;
  postIcon?: boolean;
  external?: boolean;
}

const FlobedButton: React.FC<FlobedButtonProps> = ({
  href,
  className,
  variant = "default",
  children,
  icon,
  postIcon = false,
  external = false,
}) => {
  const buttonClasses = cn(
    "inline-flex items-center justify-center rounded-full border border-[hsl(var(--globed-foreground))] px-4 py-2 text-sm font-medium transition-colors",
    {
      "bg-transparent text-[hsl(var(--globed-foreground))] hover:bg-[hsl(var(--globed-foreground))]/10": variant === "default",
      "bg-transparent text-[hsl(var(--globed-accent))] border-[hsl(var(--globed-accent))] hover:bg-[hsl(var(--globed-accent))]/10": variant === "alt",
      "bg-[hsl(var(--globed-accent))] text-[#051618] border-[hsl(var(--globed-accent))] hover:bg-[hsl(var(--globed-accent-darker))]": variant === "solid",
    },
    "gap-2",
    className
  );

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={buttonClasses} {...linkProps}>
      {!postIcon && icon}
      <span className="content">{children}</span>
      {postIcon && icon}
    </Link>
  );
};

export default FlobedButton;
