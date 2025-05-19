import React from "react";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import FaqItem from "@/components/about/FaqItem";

export const metadata = {
  title: "About Flobed",
  description: "About & FAQ for Flobed - an open-source, highly customizable multiplayer mod for Geometry Dash",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <main id="content" className="flex flex-col items-center gap-8 sm:p-20 max-sm:p-6 max-sm:pt-20">
        <h1 className="text-accent-default font-head font-bold text-center sm:text-6xl max-sm:text-5xl sm:mb-12 max-sm:mb-6 sm:mt-12 max-sm:mt-6 mix-blend-screen">
          About Flobed
        </h1>

        <p className="max-w-paragraph text-accent-lightest font-body sm:text-xl max-sm:text-base">
          Flobed is an <em>unofficial third-party modification</em> for Geometry Dash that adds <em>multiplayer</em>
          {" "}capabilities to the game, allowing you to see other players and play levels with them.
        </p>

        <p className="max-w-paragraph text-accent-lightest font-body sm:text-xl max-sm:text-base">
          Flobed has <em>built-in voice chat support</em> (along with <em>Promixity Chat</em>),
          which can be disabled from the Flobed settings menu.
        </p>

        <h1 className="text-accent-default font-head font-bold text-center sm:text-6xl max-sm:text-5xl sm:mb-12 max-sm:mb-6 sm:mt-12 max-sm:mt-6 mix-blend-screen">
          FAQ
        </h1>

        <FaqItem question="Is Flobed free?">
          <p className="max-w-paragraph text-accent-lightest font-body sm:text-xl max-sm:text-base">
            Yes, Flobed is <em>100% free</em>. However,{" "}
            <Link
              href="https://ko-fi.com/globed"
              className="text-[hsl(var(--globed-accent))] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              donations
            </Link>{" "}
            are much appreciated, as they allow us to continue development!
          </p>
        </FaqItem>

        <FaqItem question="Is this official?">
          <p className="max-w-paragraph text-accent-lightest font-body sm:text-xl max-sm:text-base">
            No, Flobed is not an official part of Geometry Dash nor affiliated with RobTop Games.
            The mod is fully fan-made by other passionate GD players.
          </p>
        </FaqItem>

        <FaqItem question="Can I get Flobed on iOS?">
          <p className="max-w-paragraph text-accent-lightest font-body sm:text-xl max-sm:text-base">
            <em>Flobed is not available on iOS</em>, as Geode can't support it. There are no plans
            to port the mod to iOS at this time.
          </p>
        </FaqItem>

        <FaqItem question="The game crashes a lot!">
          <p className="max-w-paragraph text-accent-lightest font-body sm:text-xl max-sm:text-base">
            This can be due to Flobed, or due to some other mod. Please report the bug on{" "}
            <Link
              href="https://discord.gg/d56q5Dkdm3"
              className="text-[hsl(var(--globed-accent))] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              the Flobed Discord server
            </Link>.
          </p>
        </FaqItem>
      </main>
    </PageLayout>
  );
}
