import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import WeatherStatus from "@/components/WeatherStatus";
import { siteConfig } from "@/config/site";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Main Content */}
      <main className="pt-32 pb-12">
        <div className="max-w-[880px] mx-auto px-6">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Tagline and Weather */}
          <div className="text-center mb-12 space-y-3">
            <p className="text-xl md:text-2xl text-foreground">
              {siteConfig.tagline}
            </p>
            <WeatherStatus />
          </div>

          {/* About Section */}
          <section className="space-y-4 text-lg leading-relaxed">
            <p>
              My latest experience was as a Software Engineer Intern @{" "}
              {siteConfig.harvey ? (
                <Link
                  href={siteConfig.harvey}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                >
                  Harvey
                </Link>
              ) : (
                "Harvey"
              )}
              , implementing an auto-context management system for Harvey&apos;s flagship AI conversation product.
            </p>
            
            <p>
              {siteConfig.about} 
              If you want to learn more about me, check out my{" "}
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
              >
                GitHub
              </Link>{" "}
              to see some cool projects that I&apos;ve worked on!
            </p>
          </section>
        </div>
      </main>

    </div>
  );
}
