import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { FadeInUp } from "../components/AnimatedSection";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜稲垣屋葬儀店",
  description: "稲垣屋葬儀店のプライバシーポリシーをご覧ください。",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="プライバシーポリシー"
        subtitle="個人情報の取り扱いについて"
        en="PRIVACY POLICY"
      />

      <section className="py-20 md:py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="divide-y divide-[#e8ddf4]">
              {[
                {
                  title: "個人情報の収集について",
                  content:
                    "稲垣屋葬儀店（以下、「当社」）は、お問い合わせフォーム・事前相談・葬儀サービスのご提供の際に、お客様の個人情報（氏名・連絡先等）をご提供いただく場合があります。",
                },
                {
                  title: "個人情報の利用目的",
                  content:
                    "ご提供いただいた個人情報は、以下の目的のみに使用いたします。\n・お問い合わせへの返答・ご連絡\n・葬儀サービスのご提供\n・事前相談・打ち合わせ",
                },
                {
                  title: "個人情報の第三者提供",
                  content:
                    "当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。",
                },
                {
                  title: "個人情報の安全管理",
                  content:
                    "当社は、個人情報の漏洩・滅失・毀損を防止するため、適切な安全管理措置を講じます。",
                },
                {
                  title: "個人情報の開示・訂正・削除",
                  content:
                    "お客様は、ご自身の個人情報について開示・訂正・削除を求めることができます。ご希望の場合は、お問い合わせページよりご連絡ください。",
                },
                {
                  title: "プライバシーポリシーの変更",
                  content:
                    "当社は、本ポリシーを適宜見直し、改善する場合があります。変更の際は当サイトに掲載いたします。",
                },
                {
                  title: "お問い合わせ",
                  content:
                    "個人情報の取り扱いに関するお問い合わせは、お問い合わせページよりご連絡ください。\n\n稲垣屋葬儀店\n東京都葛飾区堀切6-33-4\n電話：03-3690-0870",
                },
              ].map((section) => (
                <div key={section.title} className="py-8">
                  <h3
                    className="text-[#312852] text-xl tracking-wide mb-3"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {section.title}
                  </h3>
                  <div className="w-6 h-px bg-[#c9a55a] mb-4" />
                  <p className="text-[#4a4a4a] text-base leading-loose whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
