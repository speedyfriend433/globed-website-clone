import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sm:p-20 max-sm:p-4">
      <p className="max-w-paragraph text-[#8e9a97] font-body text-sm text-center">
        Site by{" "}
        <Link
          href="https://twitter.com/hjfod"
          className="text-[#a0bbb7] hover:text-[hsl(var(--globed-accent))] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          HJfod
        </Link>
        .
        <br />
        Icons from{" "}
        <Link
          href="https://feathericons.com/"
          className="text-[#a0bbb7] hover:text-[hsl(var(--globed-accent))] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feather
        </Link>
        .
        <br />
        Brand icons from{" "}
        <Link
          href="https://simpleicons.org/"
          className="text-[#a0bbb7] hover:text-[hsl(var(--globed-accent))] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Simple Icons
        </Link>
        .
        <br />
        Geode is owned by the Geode Team.
        <br />
        Geometry Dash is a trademark owned by{" "}
        <Link
          href="https://www.robtopgames.com/"
          className="text-[#a0bbb7] hover:text-[hsl(var(--globed-accent))] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          RobTop Games AB
        </Link>
        .{" "}
        This site nor the presented mod is not affiliated with RobTop Games or Geometry Dash.
        <br />
        Site source code available on{" "}
        <Link
          href="https://github.com/HJfod/globed-site"
          className="text-[#a0bbb7] hover:text-[hsl(var(--globed-accent))] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        .
        <br />
        Copyright (c) dank_meme 2024
      </p>
    </footer>
  );
};

export default Footer;
