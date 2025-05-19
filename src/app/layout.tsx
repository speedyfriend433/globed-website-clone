import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { figtree } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Flobed - Open-Source Multiplayer Mod for Geometry Dash",
  description: "The official website for Flobed - an open-source, highly customizable multiplayer mod for Geometry Dash.",
  icons: {
    icon: "/images/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} dark`}>
      <body suppressHydrationWarning className="antialiased min-h-screen bg-wallpaper-darkest font-figtree">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
