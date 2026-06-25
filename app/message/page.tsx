import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";
import { FadeInUp } from "../components/AnimatedSection";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "代表からのご挨拶｜稲垣屋葬儀店（葛飾区堀切）",
  description:
    "稲垣屋葬儀店代表からのご挨拶。創業明治11年頃より葛飾区堀切に根付き、地域の皆さまのご葬儀をお手伝いしてきた私どもの想いをお伝えします。",
  alternates: { canonical: "https://www.inagakiyasougiten.com/message" },
};

export default function MessagePage() {
  return (
    <>
      <PageHero title="代表からのご挨拶" subtitle="稲垣屋葬儀店の想いをお伝えします" en="MESSAGE FROM DIRECTOR" />
      <Breadcrumb items={[{ label: "代表からのご挨拶" }]} />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="mb-14">
            <p className="text-[#c9a55a] text-xs tracking-[0.4em] mb-3">MESSAGE</p>
            <h2 className="text-[#312852] text-3xl md:text-4xl tracking-[0.08em]" style={{ fontFamily: "var(--font-mincho)" }}>
              ご縁をいただいた皆さまへ
            </h2>
            <div className="w-8 h-px bg-[#c9a55a] mt-5" />
          </FadeInUp>

          <FadeInUp>
            <div className="space-y-6 text-[#4a4a4a] text-base md:text-lg leading-[2]">
              <p>
                稲垣屋葬儀店のホームページをご覧いただき、ありがとうございます。
              </p>
              <p>
                私どもは創業明治11年頃より、葛飾区堀切のこの地でご葬儀のお手伝いをさせていただいてまいりました。時代とともにご葬儀の形は変わりますが、大切な方を送るご家族の想いに寄り添いたいという私どもの気持ちは変わりません。
              </p>
              <p>
                「不易流行」——変わらぬ本質を大切にしながら、時代のニーズに応えていく。この言葉を私どもの指針としています。父から息子へ受け継がれた稲垣屋葬儀店は、伝統の技と現代の体制を融合させ、葛飾区の皆さまに寄り添い続けます。
              </p>
              <p>
                葬儀は、故人への最後の贈り物です。「こんな葬儀にしたかった」「もっと時間をかけてお別れしたかった」という後悔がないよう、私どもは事前相談から葬儀後のアフターフォローまで、誠実にお付き合いさせていただきます。
              </p>
              <p>
                どんな小さなことでも、お気軽にご相談ください。皆さまとのご縁を大切に、これからも葛飾区の地域に根付いた葬儀社として歩んでまいります。
              </p>
            </div>

            <div className="mt-14 border-t border-[#e8ddf4] pt-10">
              <p className="text-[#9278be] text-sm tracking-[0.3em] mb-2" style={{ fontFamily: "var(--font-mincho)" }}>代表</p>
              <p className="text-[#312852] text-2xl tracking-[0.1em]" style={{ fontFamily: "var(--font-mincho)" }}>稲垣屋葬儀店</p>
            </div>
          </FadeInUp>

          <FadeInUp className="mt-14">
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                稲垣屋葬儀店について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/history" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                創業の歴史<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/qualification" className="inline-flex items-center gap-2 text-[#5c4a80] hover:text-[#312852] text-sm tracking-wide transition-colors group">
                資格・認定について<ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
