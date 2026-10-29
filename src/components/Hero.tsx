import Image from "next/image";

const SEARCH_FIELDS = [
  { label: "Location", placeholder: "Address, City Or Zip" },
  { label: "Date/Duration", placeholder: "Anytime/ 3 Days" },
  { label: "Budget", placeholder: "$0-$3000" },
  { label: "People", placeholder: "5-10" },
] as const;

function SearchBar() {
  return (
    <div className="absolute inset-x-0 bottom-0 flex h-24 w-full">
      {SEARCH_FIELDS.map(({ label, placeholder }, i) => (
        <div
          key={label}
          className={`flex flex-1 flex-col justify-center gap-1 bg-white/20 px-7 backdrop-blur-[2px] ${
            i > 0 ? "border-l border-white/30" : ""
          }`}
        >
          <label
            htmlFor={`hero-search-${label}`}
            className="text-lg font-bold text-white"
          >
            {label}
          </label>
          <input
            id={`hero-search-${label}`}
            type="text"
            placeholder={placeholder}
            className="w-full bg-transparent text-[15px] text-white placeholder-white/90 outline-none"
          />
        </div>
      ))}
      <button
        type="button"
        className="w-64 bg-[#0aa2c0] text-lg font-semibold text-white hover:bg-[#0891ae]"
      >
        Search
      </button>
    </div>
  );
}

export default function Hero({
  imageSrc = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2400&auto=format&fit=crop",
}: {
  imageSrc?: string;
}) {
  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[620px] w-full overflow-hidden">
      <Image
        src={imageSrc}
        alt="Aerial view of a coastal travel destination"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Gray overlay for text legibility */}
      <div className="absolute inset-0 bg-gray-700/50" />

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-24">
        <h1 className="text-center font-serif text-[72px] leading-[1.15] text-white md:text-[88px]">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-9 max-w-[880px] text-center text-xl leading-relaxed text-white/95">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>
        <div className="mt-16 flex items-center gap-4">
          <a
            href="#destinations"
            className="flex items-center gap-9 bg-[#0aa2c0] px-7 py-4 text-[15px] font-semibold uppercase tracking-wide text-white hover:bg-[#0891ae]"
          >
            Explore Now
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
          <a
            href="#destinations"
            className="bg-gray-400/70 px-8 py-4 text-[15px] font-semibold uppercase tracking-wide text-white hover:bg-gray-400/85"
          >
            View Destination
          </a>
        </div>
      </div>

      <SearchBar />
    </section>
  );
}
