import Image from 'next/image';
import BinaryGlow from '@/components/BinaryGlow';
import { siteConfig } from '@/config/site';

export default function HeroSection() {
  return (
    <section className="mb-14">
      <div className="relative">
        <div aria-hidden="true" className="absolute -top-3 -left-3 w-3 h-3 border-l border-t border-gray-400 dark:border-gray-500" />
        <div aria-hidden="true" className="absolute -top-3 -right-3 w-3 h-3 border-r border-t border-gray-400 dark:border-gray-500" />
        <div aria-hidden="true" className="absolute -bottom-3 -left-3 w-3 h-3 border-l border-b border-gray-400 dark:border-gray-500" />
        <div aria-hidden="true" className="absolute -bottom-3 -right-3 w-3 h-3 border-r border-b border-gray-400 dark:border-gray-500" />
        <div className="hero-canvas relative overflow-hidden isolate border border-gray-200 dark:border-gray-800 px-6 py-16 min-h-[280px] md:min-h-[350px] flex items-center justify-center">
          <BinaryGlow />
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5 sm:gap-7">
            <Image src="/logo.svg" alt="" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(190deg) brightness(118%) contrast(96%)' }} />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.055em] text-foreground">
              {siteConfig.name}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
