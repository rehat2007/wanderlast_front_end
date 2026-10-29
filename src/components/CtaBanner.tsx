import Image from "next/image";

export default function CtaBanner({
  imageSrc = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2400&auto=format&fit=crop",
}: {
  imageSrc?: string;
}) {
  return (
    <section className="relative h-[420px] min-h-[360px] w-full overflow-hidden">
      <Image
        src={imageSrc}
        alt="Aerial view of a tropical island with turquoise water"
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <h2 className="text-center font-serif text-4xl text-white md:text-5xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-4 text-center text-sm text-white/85 md:text-base">
          Join thousands of travelers who have discovered the world with us
        </p>
        <a
          href="#book"
          className="mt-8 flex items-center gap-9 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-gray-900 hover:bg-gray-100"
        >
          Book Your Trip Today
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
      </div>
    </section>
  );
}
