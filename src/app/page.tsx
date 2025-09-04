import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import WeatherStatus from "@/components/WeatherStatus";
import { siteConfig } from "@/config/site";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                src="/logo.svg"
                alt="Ethan Yang Logo"
                width={48}
                height={48}
                className="w-12 h-12 transition-transform duration-200 hover:scale-110 focus:scale-110"
                style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(190deg) brightness(118%) contrast(96%)' }}
              />
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              href="/Ethan_Yang_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110 focus:scale-110 group"
              aria-label="Resume"
            >
              <div className="relative">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-sky-400"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10,9 9,9 8,9" />
                </svg>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-30 group-focus:opacity-30 transition-opacity duration-200 blur-sm scale-150"></div>
              </div>
            </Link>
            <ThemeToggle />
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110 focus:scale-110 group"
              aria-label="GitHub"
            >
              <div className="relative">
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(190deg) brightness(118%) contrast(96%)' }}
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-30 group-focus:opacity-30 transition-opacity duration-200 blur-sm scale-150"></div>
              </div>
            </Link>
          </div>
        </div>
      </header>

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
              My latest experience was as a Machine Learning Intern @{" "}
              {siteConfig.claythis ? (
                <Link
                  href={siteConfig.claythis}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                >
                  Claythis
                </Link>
              ) : (
                "Claythis"
              )}
              , engineering a pipeline for 2D character animation to automate character posing, which cut manual animation time significantly.
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
