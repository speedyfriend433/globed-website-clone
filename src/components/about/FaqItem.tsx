import React from "react";
import { ReactNode } from "react";

interface FaqItemProps {
  question: string;
  children: ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, children }) => {
  return (
    <article className="relative flex mb-12">
      <div className="absolute left-0 top-0">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1a9ba0] text-[hsl(var(--globed-foreground))] font-bold text-2xl">
          ?
        </div>
      </div>
      <div className="flex flex-col sm:items-start max-sm:items-center sm:gap-8 max-sm:gap-4 ml-24">
        <p className="max-w-paragraph text-accent-lightest font-head sm:text-2xl max-sm:text-xl text-center font-bold">
          {question}
        </p>
        {children}
      </div>
    </article>
  );
};

export default FaqItem;
