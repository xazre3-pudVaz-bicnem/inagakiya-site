import Link from "next/link";

interface KuminLinkProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * 「区民葬儀」の文言から区民葬儀の説明ページ（/plans/kumin-funeral）へ移動するためのリンク。
 */
export default function KuminLink({ children = "区民葬儀", className = "" }: KuminLinkProps) {
  return (
    <Link
      href="/plans/kumin-funeral"
      className={`text-[#5c4a80] rounded-sm underline decoration-[#a8853f] decoration-1 underline-offset-[5px] hover:bg-[#f4eef9] hover:text-[#312852] hover:decoration-[#5c4a80] transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
