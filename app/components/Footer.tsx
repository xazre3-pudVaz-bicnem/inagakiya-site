import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const footerLinkGroups = [
  {
    title: "葛飾区の葬儀",
    links: [
      { label: "葛飾区で葬儀をお考えの方へ", href: "/katsushika-funeral" },
      { label: "葬儀費用について", href: "/cost" },
      { label: "家族葬の費用", href: "/cost/family-funeral" },
      { label: "一日葬の費用", href: "/cost/oneday-funeral" },
      { label: "火葬式の費用", href: "/cost/cremation" },
      { label: "区民葬儀の費用", href: "/cost/kumin-funeral" },
    ],
  },
  {
    title: "葬儀プラン",
    links: [
      { label: "プラン一覧", href: "/plans" },
      { label: "家族葬", href: "/plans/family-funeral" },
      { label: "一日葬", href: "/plans/oneday-funeral" },
      { label: "火葬式", href: "/plans/cremation" },
      { label: "一般葬", href: "/plans/general-funeral" },
      { label: "区民葬儀", href: "/plans/kumin-funeral" },
    ],
  },
  {
    title: "葬儀の流れ・サポート",
    links: [
      { label: "葬儀の流れ", href: "/flow" },
      { label: "ご逝去直後にすること", href: "/flow/after-death" },
      { label: "搬送・安置", href: "/flow/transport" },
      { label: "打ち合わせ", href: "/flow/meeting" },
      { label: "葬儀後の手続き", href: "/flow/documents" },
      { label: "事前相談", href: "/consultation" },
      { label: "よくある質問", href: "/faq" },
    ],
  },
  {
    title: "サポート情報",
    links: [
      { label: "サポート一覧", href: "/support" },
      { label: "はじめての葬儀", href: "/support/first-time" },
      { label: "親の葬儀を考える方へ", href: "/support/parent-funeral" },
      { label: "小規模葬儀を希望の方へ", href: "/support/small-funeral" },
      { label: "葬儀後の手続き", href: "/support/after-funeral" },
      { label: "葬儀のマナー", href: "/support/manners" },
      { label: "生前準備について", href: "/support/preparing" },
    ],
  },
  {
    title: "対応エリア",
    links: [
      { label: "エリア一覧", href: "/area" },
      { label: "堀切", href: "/area/horikiri" },
      { label: "お花茶屋", href: "/area/ohanajaya" },
      { label: "青戸", href: "/area/aoto" },
      { label: "立石", href: "/area/tateishi" },
      { label: "亀有", href: "/area/kameari" },
      { label: "金町・柴又", href: "/area/kanamachi" },
    ],
  },
  {
    title: "稲垣屋について",
    links: [
      { label: "稲垣屋について", href: "/about" },
      { label: "選ばれる理由", href: "/reasons" },
      { label: "創業の歴史", href: "/history" },
      { label: "資格・認定", href: "/qualification" },
      { label: "代表からのご挨拶", href: "/message" },
      { label: "会社概要", href: "/company" },
      { label: "お問い合わせ", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#faf7fd] border-t border-[#e8ddf4]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="space-y-7">
            <div>
              <h3
                className="text-2xl tracking-[0.15em] text-[#312852] mb-1"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                稲垣屋葬儀店
              </h3>
              <p className="text-[#c9a55a] text-xs tracking-[0.2em]">INAGAKIYA FUNERAL HOME</p>
              <div className="w-8 h-px bg-[#c9a55a] mt-3" />
            </div>
            <p className="text-[#4a4a4a] text-sm leading-relaxed">
              葛飾区堀切に根付いた地域密着の葬儀社。
              <br />
              創業明治11年頃より、地域のご家族の
              <br />
              大切なお別れをお手伝いしてまいりました。
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-[#c9a55a] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#7560a0] text-xs mb-0.5">24時間受付</p>
                  <a
                    href="tel:0336900870"
                    className="text-[#312852] text-lg font-bold tracking-wider hover:text-[#5c4a80] transition-colors"
                  >
                    03-3690-0870
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#c9a55a] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#7560a0] text-xs mb-0.5">所在地</p>
                  <p className="text-[#1a1a1a] text-sm">東京都葛飾区堀切6-33-4</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={15} className="text-[#c9a55a] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#7560a0] text-xs mb-0.5">営業時間</p>
                  <p className="text-[#1a1a1a] text-sm">24時間365日対応</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={15} className="text-[#c9a55a] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#7560a0] text-xs mb-0.5">メール</p>
                  <Link
                    href="/contact"
                    className="text-[#1a1a1a] text-sm hover:text-[#5c4a80] transition-colors"
                  >
                    フォームよりご連絡ください
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <h4
                  className="text-[#7560a0] text-xs tracking-[0.25em] mb-4 pb-3 border-b border-[#e8ddf4]"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  {group.title}
                </h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[#4a4a4a] text-sm hover:text-[#5c4a80] transition-colors tracking-wide flex items-center gap-2 group"
                      >
                        <span className="w-3 h-px bg-[#c9a55a] opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Map */}
          <div>
            <h4
              className="text-[#7560a0] text-xs tracking-[0.25em] mb-6 pb-3 border-b border-[#e8ddf4]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              アクセスマップ
            </h4>
            <div className="overflow-hidden border border-[#e8ddf4]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.8!2d139.849!3d35.736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%91%9B%E9%A3%BE%E5%8C%BA%E5%A0%80%E5%88%876-33-4!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="稲垣屋葬儀店 地図"
              />
            </div>
            <p className="text-[#4a4a4a] text-xs mt-2">東京都葛飾区堀切6-33-4</p>
            <p className="text-[#4a4a4a] text-xs">京成本線「堀切菖蒲園」駅より徒歩約5分</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e8ddf4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#7560a0] text-xs tracking-wide">
            © 2024 稲垣屋葬儀店 All Rights Reserved.
          </p>
          <Link
            href="/privacy"
            className="text-[#7560a0] text-xs hover:text-[#5c4a80] transition-colors tracking-wide"
          >
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
