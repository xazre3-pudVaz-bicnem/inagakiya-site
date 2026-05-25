import type { Metadata } from "next";
import TopPageClient from "./components/TopPageClient";

export const metadata: Metadata = {
  title: "葛飾区で葬儀なら稲垣屋葬儀店｜家族葬・区民葬儀に対応",
  description:
    "葛飾区堀切の稲垣屋葬儀店は、葬祭ディレクター1級・区民葬儀取扱に対応した地域密着の葬儀社です。伝統を大切にしながら、ご家族の想いに寄り添う葬儀をご提案します。",
};

export default function HomePage() {
  return <TopPageClient />;
}
