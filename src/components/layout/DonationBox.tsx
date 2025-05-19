import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const DonationBox = () => {
  return (
    <div className="flex flex-col sm:p-8 max-sm:p-4 gradient rounded-xl max-sm:mx-8 max-sm:my-12 sm:gap-8 max-sm:gap-4">
      <p className="max-w-paragraph text-accent-lightest font-body sm:text-xl max-sm:text-base">
        Flobed is supported by your <em>donations</em>. If you enjoy the mod, please consider
        donating on the <em>Ko-fi</em>!
      </p>

      <div className="flex flex-row justify-center">
        <Link
          href="https://ko-fi.com/globed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="bg-transparent border border-[hsl(var(--globed-foreground))] text-[hsl(var(--globed-foreground))] hover:bg-[hsl(var(--globed-foreground))]/10 hover:text-[hsl(var(--globed-accent))] flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 8.3c0-1 .8-1.8 1.8-1.8h7.9c1 0 1.8.8 1.8 1.8v.9H6v-.9zm10.4-.4c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.2-.5.5-.5zm2.7.9v9.9c0 1-.8 1.8-1.8 1.8H6.7c-1 0-1.8-.8-1.8-1.8V8.8h14.2z"/>
              <path d="M7.2 10.9c-.3 0-.5.2-.5.5s.2.5.5.5h9.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H7.2zm0 3.1c-.3 0-.5.2-.5.5s.2.5.5.5h9.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H7.2zm0 3.1c-.3 0-.5.2-.5.5s.2.5.5.5h9.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H7.2z"/>
            </svg>
            <span className="content">Donate</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DonationBox;
