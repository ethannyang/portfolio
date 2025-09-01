import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import WeatherStatus from "@/components/WeatherStatus";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.svg"
              alt="Ethan Yang Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-semibold text-lg">{siteConfig.name}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <Image
                src="/github.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-yellow-400/20"></div>
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ctext font-family='monospace' font-size='8'%3E01%3C/text%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <Image
                    src="/logo.svg"
                    alt="Ethan Yang Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                  <h1 className="text-4xl md:text-6xl font-bold">{siteConfig.name}</h1>
                </div>
                
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
                  {siteConfig.tagline}
                </p>
                
                <WeatherStatus />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="space-y-6 text-lg leading-relaxed">
            <p>
              Executive @{" "}
              <Link
                href={siteConfig.competitiveProgrammingInitiative}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline transition-colors"
              >
                Competitive Programming Initiative
              </Link>
              , promoting competitive programming through resources such as the{" "}
              <Link
                href={siteConfig.usacoGuide}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline transition-colors"
              >
                USACO Guide
              </Link>
              .
            </p>
            
            <p>
              {siteConfig.about} 
              If you want to learn more about me, check out my{" "}
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline transition-colors"
              >
                GitHub
              </Link>{" "}
              to see some cool projects that I&apos;ve worked on.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8">
        <div className="text-2xl mb-2">👆</div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Check out my GitHub for more projects
        </p>
      </footer>
    </div>
  );
}
