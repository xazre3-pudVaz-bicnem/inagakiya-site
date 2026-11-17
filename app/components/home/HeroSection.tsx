import Link from "next/link";

const credentials: { label: string; node?: React.ReactNode; href?: string }[] = [
  {
    label: "葬祭ディレクター1級",
    // 狭い画面で「1」と「級」の間で改行されないよう、「1級」をひとまとまりにする
    // ※リンクが flex 表示のため、全体を 1 つの span で包んで 1 つのテキストとして折り返させる
    node: (
      <span>
        葬祭ディレクター<span className="whitespace-nowrap">1級</span>
      </span>
    ),
    href: "/qualification",
  },
  { label: "区民葬儀取扱", href: "/plans/kumin-funeral" },
  { label: "葬儀組合加盟" },
  { label: "24時間対応" },
];

/**
 * トップページのファーストビュー。
 * アニメーションは CSS のみ（JS の読み込みを待たずに表示されるため LCP に有利）。
 * ※ファーストビューに電話 CTA は置かない方針。
 */
export default function HeroSection() {
  return (
    <section
      data-home-hero
      className="home-hero relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("/hero-bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* White/lavender overlay — keeps text readable, maintains quiet elegance */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-[#f4eef9]/95" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 72px, #9278be 72px, #9278be 73px),
            repeating-linear-gradient(90deg, transparent, transparent 72px, #9278be 72px, #9278be 73px)`,
        }}
      />
      <div className="pointer-events-none absolute bottom-0 right-0 h-2/3 w-2/3 bg-[#f4eef9] opacity-30 blur-3xl" />

      {/* Vertical gold lines */}
      <div className="pointer-events-none absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-transparent via-[#c9a55a]/25 to-transparent md:left-20" />
      <div className="pointer-events-none absolute bottom-0 right-6 top-0 w-px bg-gradient-to-b from-transparent via-[#c9a55a]/25 to-transparent md:right-20" />

      <div className="relative mx-auto max-w-5xl px-4 py-14 md:py-12 text-center sm:px-6">
        {/* Small ornament */}
        <div className="mb-7 flex origin-top flex-col items-center gap-1.5 animate-grow-y">
          <div className="h-12 w-px bg-gradient-to-b from-transparent to-[#c9a55a] md:h-14" />
          <div className="h-2 w-2 rotate-45 border border-[#c9a55a]" />
        </div>

        <p className="mb-7 text-lg tracking-[0.35em] text-[#a8853f] animate-fade-in [animation-delay:200ms] md:text-xl">
          創業明治11年
        </p>

        <h1
          className="mb-7 text-[#312852]"
          style={{ fontFamily: "var(--font-mincho)" }}
        >
          <span className="mb-3 block text-[1.9rem] leading-snug tracking-[0.1em] sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            葛飾区で選ばれ続ける
          </span>
          <span className="block text-[1.9rem] leading-snug tracking-[0.1em] sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            地域密着の葬儀社
          </span>
        </h1>

        <div className="mx-auto my-8 h-px w-16 origin-center bg-[#c9a55a] animate-grow-x [animation-delay:600ms]" />

        <p className="mx-auto max-w-xl text-lg leading-loose tracking-wide text-[#3f3f3f] animate-fade-up [animation-delay:700ms] md:text-xl">
          伝統を守り、現代に寄り添うお葬式。
          <br />
          葛飾区堀切の稲垣屋葬儀店です。
        </p>

        {/* Credentials strip — no phone CTA in the first view */}
        <ul className="hero-credentials mx-auto mt-10 grid max-w-md grid-cols-2 gap-2.5 text-base tracking-[0.12em] text-[#5c4a80] animate-fade-in [animation-delay:1000ms] sm:max-w-none sm:text-lg md:mt-16 md:flex md:flex-wrap md:items-center md:justify-center md:gap-0 md:tracking-[0.22em]">
          {credentials.map((item, i) => (
            <li
              key={item.label}
              className="flex items-center justify-center border border-[#d5c6eb]/80 bg-white/80 px-2 py-2.5 md:border-0 md:bg-transparent md:px-0 md:py-0"
            >
              {i > 0 && (
                <span className="mx-5 hidden text-[#c9a55a] md:inline" aria-hidden="true">
                  ｜
                </span>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="underline decoration-[#c9a55a]/60 decoration-1 underline-offset-[6px] transition-colors hover:text-[#312852] hover:decoration-[#c9a55a]"
                >
                  {item.node ?? item.label}
                </Link>
              ) : (
                <span>{item.node ?? item.label}</span>
              )}
            </li>
          ))}
        </ul>

        {/* Scroll indicator */}
        <div className="mt-8 hidden flex-col items-center gap-1.5 animate-fade-in [animation-delay:1400ms] sm:flex">
          <span className="text-xs tracking-[0.25em] text-[#7560a0]">SCROLL</span>
          <div className="h-9 w-px bg-gradient-to-b from-[#c9a55a] to-transparent animate-scroll-cue" />
        </div>
      </div>
    </section>
  );
}
