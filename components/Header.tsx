"use client";

import { useState, useEffect, Suspense } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import config from "@/config";

const links: {
  href: string;
  label: string;
}[] = [
  {
    href: "/work",
    label: "Work",
  },
  {
    href: "/photos",
    label: "Photos",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

// Inner component that uses useSearchParams
const HeaderContent = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="bg-base-100 border-b border-base-200">
      <nav
        className="max-w-6xl flex items-center justify-between px-8 py-6 mx-auto"
        aria-label="Global"
      >
        {/* Logo/name */}
        <div className="flex-1">
          <Link
            className="font-bold text-xl tracking-tight uppercase"
            href="/"
            title={`${config.appName} homepage`}
          >
            {config.appName}
          </Link>
        </div>

        {/* Burger button for mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-base-content"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Links on large screens */}
        <div className="hidden lg:flex lg:gap-8 lg:items-center">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="text-sm uppercase tracking-wide hover:text-primary transition-colors"
              title={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          className={`fixed inset-y-0 right-0 z-10 w-full px-8 py-6 overflow-y-auto bg-base-100 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
        >
          <div className="flex items-center justify-between">
            <Link
              className="font-bold text-xl tracking-tight uppercase"
              title={`${config.appName} homepage`}
              href="/"
            >
              {config.appName}
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flow-root mt-8">
            <div className="flex flex-col gap-y-6 items-start">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="text-lg uppercase tracking-wide hover:text-primary transition-colors"
                  title={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Wrapper component with Suspense
const Header = () => {
  return (
    <Suspense fallback={
      <header className="bg-base-100 border-b border-base-200">
        <nav className="max-w-6xl flex items-center justify-between px-8 py-6 mx-auto">
          <div className="flex-1">
            <span className="font-bold text-xl tracking-tight uppercase">
              {config.appName}
            </span>
          </div>
        </nav>
      </header>
    }>
      <HeaderContent />
    </Suspense>
  );
};

export default Header;
