import Image from 'next/image';
import Link from 'next/link';
import { FileText, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { siteConfig } from '@/config/site';

const links = [
  { label: 'Resume', href: '/Ethan_Yang_resume.pdf', icon: FileText },
  { label: 'LinkedIn', href: siteConfig.social.linkedin, icon: Linkedin },
  { label: 'GitHub', href: siteConfig.github, icon: Github },
];

export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-gray-200/70 dark:border-gray-800/70">
      <div className="max-w-[880px] mx-auto px-5 sm:px-6 h-20 flex items-center justify-between gap-3">
        <Link href="/" aria-label="Ethan Yang home" className="flex items-center gap-3 rounded-md">
          <Image src="/logo.svg" alt="" width={36} height={36} className="w-9 h-9" style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(190deg) brightness(118%) contrast(96%)' }} />
          <span className="hidden sm:block text-sm font-semibold tracking-tight">Ethan Yang</span>
        </Link>
        <nav aria-label="Personal links" className="flex items-center gap-1 sm:gap-2">
          {links.map(({ label, href, icon: Icon }) => (
            <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in new tab)`} title={label} className="inline-flex h-10 items-center justify-center gap-2 px-3 rounded-full text-gray-600 dark:text-gray-300 hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800">
              <Icon size={18} strokeWidth={1.7} />
              <span className="hidden md:inline text-sm">{label}</span>
              <ArrowUpRight aria-hidden="true" size={12} className="hidden md:block text-gray-400" />
            </Link>
          ))}
          <span aria-hidden="true" className="mx-1 h-5 w-px bg-gray-200 dark:bg-gray-800" />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
