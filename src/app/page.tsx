import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import ScreenshotCarousel from "@/components/home/ScreenshotCarousel";
import DonationBox from "@/components/layout/DonationBox";
import FlobedButton from "@/components/layout/FlobedButton";

export default function HomePage() {
  return (
    <PageLayout>
      <header className="flex flex-col justify-center items-center sm:mt-20 max-sm:mt-32 sm:p-20 max-sm:p-4 mb-16">
        <Image
          src="/images/logo.webp"
          alt="Flobed logo"
          width={192}
          height={192}
          className="sm:w-48 max-sm:w-28"
          priority
        />

        <h1 className="text-accent-default font-head font-bold text-center sm:text-6xl max-sm:text-5xl sm:mb-12 max-sm:mb-6 sm:mt-12 max-sm:mt-6 mix-blend-screen">
          Flobed
        </h1>

        <div className="max-w-subtitle">
          <p className="max-w-paragraph text-accent-lightest font-head sm:text-2xl max-sm:text-xl text-center font-bold">
            An{" "}
            <Link
              href="https://github.com/dankmeme01/globed2"
              className="text-[hsl(var(--globed-accent))] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-Source
            </Link>
            , Highly Customizable Multiplayer Mod for{" "}
            <Link
              href="https://www.robtopgames.com/"
              className="text-[hsl(var(--globed-accent))] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Geometry Dash
            </Link>
          </p>
        </div>

        <div className="h-8"></div>

        <div className="flex sm:flex-row max-sm:flex-col-reverse items-center justify-center sm:gap-8 max-sm:gap-4">
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
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            }
          >
            About
          </FlobedButton>

          <FlobedButton
            href="/install"
            variant="alt"
            postIcon={true}
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
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            }
          >
            Install
          </FlobedButton>
        </div>
      </header>

      <main id="content" className="flex flex-col items-center gap-8 sm:p-20 max-sm:p-6 max-sm:pt-20">
        <p className="max-w-paragraph text-accent-lightest font-body sm:text-xl max-sm:text-base">
          Flobed is a <em>Multiplayer Mod</em> for Geometry Dash that lets you easily play
          together with your friends across the world. Just install the mod via Geode, and{" "}
          <em>hop on Flobed</em>!
        </p>

        <ScreenshotCarousel />

        <p className="max-w-paragraph text-accent-lightest font-body sm:text-xl max-sm:text-base">
          Flobed is available for <em>Geode</em>, the most popular third-party mod loader for
          Geometry Dash. You can read more about Geode on{" "}
          <Link
            href="https://geode-sdk.org"
            className="text-[hsl(var(--globed-accent))] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            its website
          </Link>!
        </p>

        <div className="flex flex-col sm:gap-8 max-sm:gap-4 mt-8">
          <p className="max-w-paragraph text-accent-lightest font-body sm:text-xl max-sm:text-base">
            Interested? Go to the <em>Installation Page</em> for instructions on how to get Flobed,
            or <em>About page</em> if you want to learn more!
          </p>

          <div className="flex sm:flex-row max-sm:flex-col items-center justify-center sm:gap-8 max-sm:gap-4">
            <FlobedButton
              href="/install"
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              }
            >
              Install Flobed
            </FlobedButton>

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
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              }
            >
              Read More
            </FlobedButton>
          </div>
        </div>
      </main>

      <div className="flex flex-col items-center gap-4 mb-12">
        <p className="max-w-paragraph text-accent-lightest font-head sm:text-2xl max-sm:text-xl text-center font-bold">
          Online Players
        </p>
      </div>

      <DonationBox />
    </PageLayout>
  );
}
