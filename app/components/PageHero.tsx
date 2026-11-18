interface PageHeroProps {
  title: string;
  subtitle?: string;
  en?: string;
}

export default function PageHero({ title, subtitle, en }: PageHeroProps) {
  return (
    <section className="page-hero relative isolate overflow-hidden border-b border-[#e8ddf4] text-center">
      <div aria-hidden="true" className="page-hero-photo absolute inset-0 -z-10" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 bottom-5 top-[calc(var(--site-header-height)+1.25rem)] border-x border-[#c9a55a]/25 sm:inset-x-10" />
      <div className="relative mx-auto max-w-5xl px-8 sm:px-12">
        {en && <p className="mb-5 text-sm tracking-[0.24em] text-[#a8853f] animate-fade-in">{en}</p>}
        {/* The heading is readable in server HTML and never starts at opacity zero. */}
        <h1 className="page-hero-title text-3xl leading-relaxed tracking-[0.08em] text-[#312852] text-balance md:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mx-auto mt-5 max-w-3xl text-base leading-loose tracking-wide text-[#5c4a80] animate-fade-up">{subtitle}</p>}
        <div aria-hidden="true" className="mx-auto mt-8 flex items-center justify-center gap-3 animate-grow-x">
          <span className="h-px w-12 bg-[#c9a55a]/65" />
          <span className="size-1.5 rotate-45 border border-[#c9a55a]" />
          <span className="h-px w-12 bg-[#c9a55a]/65" />
        </div>
      </div>
    </section>
  );
}
