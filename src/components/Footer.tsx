import Link from "next/link";

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
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
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

const COLUMNS = [
  {
    heading: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Destinations", href: "/destinations" },
      { label: "My Bookings", href: "/bookings" },
      { label: "My Profile", href: "/profile" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 pb-8 pt-20">
        {/* Brand block */}
        <p className="font-serif text-6xl font-bold leading-none tracking-tight md:text-7xl">
          Wanderlast
        </p>
        <p className="mt-4 text-sm text-gray-400">
          Your gateway to extraordinary travel experiences around the world.
        </p>

        {/* Columns */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:gap-8">
          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-medium tracking-wider text-white uppercase">
              Newsletter
            </h3>
            <p className="mt-2 text-xs text-gray-400">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <form className="mt-4 flex h-11 w-60 items-center bg-neutral-800 pl-4 pr-3">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-transparent text-sm text-white placeholder-gray-400 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="text-white hover:text-[#0aa2c0]"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </button>
            </form>
          </div>

          {/* Link columns */}
          {COLUMNS.map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="text-sm font-medium tracking-wider text-white uppercase">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[15px] text-gray-300 hover:text-[#0aa2c0]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium tracking-wider text-white uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-[15px] text-gray-300">
              <li>
                <a href="tel:+17869011622" className="hover:text-[#0aa2c0]">
                  786 901 1622
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wanderland.com"
                  className="hover:text-[#0aa2c0]"
                >
                  info@wanderland.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex items-center justify-between border-t border-neutral-700 pt-6">
          <p className="text-xs text-gray-400">
            © 2026 Wanderlust. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="https://x.com" aria-label="X (Twitter)" className="text-white hover:text-[#0aa2c0]">
              <XIcon className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-white hover:text-[#0aa2c0]"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-white hover:text-[#0aa2c0]"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
