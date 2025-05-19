import React from "react";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import DonationBox from "@/components/layout/DonationBox";
import InstallStep from "@/components/install/InstallStep";
import FlobedButton from "@/components/layout/FlobedButton";

export const metadata = {
  title: "Install Flobed",
  description: "Instructions on installing Flobed for Geometry Dash",
};

export default function InstallPage() {
  return (
    <PageLayout>
      <main id="content" className="flex flex-col items-center gap-8 sm:p-20 max-sm:p-6 max-sm:pt-20">
        <h1 className="text-accent-default font-head font-bold text-center sm:text-6xl max-sm:text-5xl sm:mb-12 max-sm:mb-6 sm:mt-12 max-sm:mt-6 mix-blend-screen">
          Install Flobed
        </h1>

        <p className="max-w-paragraph text-accent-lightest font-body sm:text-xl max-sm:text-base">
          Follow these <em>3 steps</em> to install <em>Flobed</em> for Geometry Dash.
          <br/><br/>
          Available on <em>Windows</em>, <em>Android</em> and <em>MacOS</em>!
        </p>

        <InstallStep number="1">
          <p className="max-w-paragraph text-accent-lightest font-body sm:text-xl max-sm:text-base">
            To install Flobed, you first need to <em>install Geode</em>.
            Click below to find instructions for installing it!
          </p>

          <div className="flex sm:flex-row max-sm:flex-col items-center justify-center sm:gap-8 max-sm:gap-4">
            <FlobedButton
              href="https://geode-sdk.org/install"
              external
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              }
            >
              Install Geode
            </FlobedButton>

            <FlobedButton
              href="https://geode-sdk.org"
              external
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              }
            >
              What's Geode?
            </FlobedButton>
          </div>
        </InstallStep>

        <InstallStep number="2">
          <p className="max-w-paragraph text-accent-lightest font-body sm:text-xl max-sm:text-base">
            Navigate to the <em>Downloads page in Geode</em> and search for Flobed, then click <em>View</em> and <em>Install</em>!
          </p>

          <Image
            src="/images/geode-search.webp"
            alt="Image showing a person searching for 'Flobed' on the Geode in-game Downloads page."
            width={576}
            height={324}
            className="sm:max-w-paragraph max-sm:w-full rounded-xl"
          />
        </InstallStep>

        <InstallStep number="3">
          <p className="max-w-paragraph text-accent-lightest font-body sm:text-xl max-sm:text-base">
            <em>Log in</em>, <em>Connect to a server</em>, <em>Join a room</em> and <em>Start playing</em>!
          </p>

          <Image
            src="/images/server-join.webp"
            alt="Image showing the server selection screen in Flobed."
            width={576}
            height={324}
            className="sm:max-w-paragraph max-sm:w-full rounded-xl"
          />
        </InstallStep>

        <InstallStep number="?">
          <p className="max-w-paragraph text-accent-lightest font-body sm:text-xl max-sm:text-base">
            Need help using Flobed? Hop in to our <em>Help</em> page, or <em>join our Discord</em>!
          </p>

          <div className="flex sm:flex-row max-sm:flex-col items-center justify-center sm:gap-8 max-sm:gap-4">
            <FlobedButton
              href="/about"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              }
            >
              Help
            </FlobedButton>

            <FlobedButton
              href="https://discord.gg/d56q5Dkdm3"
              external
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              }
            >
              Discord
            </FlobedButton>
          </div>
        </InstallStep>

      </main>

      <DonationBox />
    </PageLayout>
  );
}
