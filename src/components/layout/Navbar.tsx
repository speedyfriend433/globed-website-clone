"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed main-navbar flex flex-col justify-stretch items-stretch w-full bg-[#051618]/90 border-b-2 border-b-[hsl(var(--globed-accent))] transition-all z-50">
      <div className="grid sm:grid-cols-3 max-sm:grid-cols-2 justify-center items-center px-4 py-3">
        <div className="flex flex-row justify-start items-center gap-3">
          <Link href="/" className="home-button flex items-center gap-2">
            <Image
              src="/images/logo.webp"
              alt="Flobed logo"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <span className="font-head text-xl">Flobed</span>
          </Link>
        </div>

        <div className="flex flex-row justify-center max-sm:hidden font-head text-lg space-x-6">
          <Link
            href="/"
            className="text-[hsl(var(--globed-foreground))] hover:text-[hsl(var(--globed-accent))] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/install"
            className="text-[hsl(var(--globed-foreground))] hover:text-[hsl(var(--globed-accent))] transition-colors"
          >
            Install
          </Link>
          <Link
            href="/about"
            className="text-[hsl(var(--globed-foreground))] hover:text-[hsl(var(--globed-accent))] transition-colors"
          >
            About
          </Link>
        </div>

        <div className="flex flex-row justify-end gap-4">
          <Link
            href="https://ko-fi.com/globed"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ko-fi"
          >
            <svg
              className="w-6 h-6 text-[hsl(var(--globed-foreground))] hover:text-[hsl(var(--globed-accent))] transition-colors"
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 8.3c0-1 .8-1.8 1.8-1.8h7.9c1 0 1.8.8 1.8 1.8v.9H6v-.9zm10.4-.4c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.2-.5.5-.5zm2.7.9v9.9c0 1-.8 1.8-1.8 1.8H6.7c-1 0-1.8-.8-1.8-1.8V8.8h14.2z"/>
              <path d="M7.2 10.9c-.3 0-.5.2-.5.5s.2.5.5.5h9.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H7.2zm0 3.1c-.3 0-.5.2-.5.5s.2.5.5.5h9.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H7.2zm0 3.1c-.3 0-.5.2-.5.5s.2.5.5.5h9.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H7.2z"/>
            </svg>
          </Link>
          <Link
            href="https://discord.gg/d56q5Dkdm3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <svg
              className="w-6 h-6 text-[hsl(var(--globed-foreground))] hover:text-[hsl(var(--globed-accent))] transition-colors"
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
            </svg>
          </Link>
          <Link
            href="https://github.com/dankmeme01/globed2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6 text-[hsl(var(--globed-foreground))] hover:text-[hsl(var(--globed-accent))] transition-colors"
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </Link>

          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="text-[hsl(var(--globed-foreground))] hover:text-[hsl(var(--globed-accent))] transition-colors"
                  aria-label="Menu"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent className="bg-[#051618]/95 border-[hsl(var(--globed-accent))]">
                <div className="flex flex-col px-4 font-head text-lg space-y-6 mt-8">
                  <Link
                    href="/"
                    className="text-[hsl(var(--globed-foreground))] hover:text-[hsl(var(--globed-accent))] transition-colors"
                  >
                    <span>Home</span>
                  </Link>
                  <Link
                    href="/install"
                    className="text-[hsl(var(--globed-foreground))] hover:text-[hsl(var(--globed-accent))] transition-colors"
                  >
                    <span>Install</span>
                  </Link>
                  <Link
                    href="/about"
                    className="text-[hsl(var(--globed-foreground))] hover:text-[hsl(var(--globed-accent))] transition-colors"
                  >
                    <span>About</span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
