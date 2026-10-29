"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/bookings", label: "My Bookings" },
  { href: "/admin", label: "Admin" },
] as const;

function ProfileIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="relative z-40 flex h-20 w-full items-center bg-white px-9 ">
      {/* Left: primary nav */}
      <nav aria-label="Primary" className="flex items-center gap-10">
        {NAV_LINKS.map(({ href, label }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`relative flex h-full items-center text-base ${
                isActive
                  ? "text-[#0aa2c0] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-[#0aa2c0]"
                  : "text-gray-800 hover:text-[#0aa2c0]"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Center: wordmark */}
      <Link
        href="/"
        className="absolute left-1/2 -translate-x-1/2 font-serif text-3xl font-bold tracking-tight text-[#0aa2c0] hover:opacity-80"
      >
        Wanderlast
      </Link>

      {/* Right: account links */}
      <div className="ml-auto flex items-center gap-9 text-base text-gray-800">
        <Link
          href="/profile"
          className="flex items-center gap-2 hover:text-[#0aa2c0]"
        >
          <ProfileIcon className="h-5 w-5" />
          Profile
        </Link>
        <Link href="/login" className="hover:text-[#0aa2c0]">
          Login
        </Link>
        <Link href="/signup" className="hover:text-[#0aa2c0]">
          Sign Up
        </Link>
      </div>
    </header>
  );
}
