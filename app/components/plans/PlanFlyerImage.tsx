"use client";

import { useRef } from "react";
import Image from "next/image";
import { Expand, X } from "lucide-react";

interface PlanFlyerImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  sizes?: string;
  className?: string;
}

/**
 * プラン画像（チラシ）を表示し、タップ／クリックで拡大表示するコンポーネント。
 */
export default function PlanFlyerImage({
  src,
  width,
  height,
  alt,
  sizes = "(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw",
  className = "",
}: PlanFlyerImageProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className={`group relative block w-full overflow-hidden rounded-sm border border-[#e8ddf4] bg-white shadow-[0_18px_40px_-28px_rgba(49,40,82,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9278be] ${className}`}
        aria-label={`${alt}を拡大して見る`}
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          sizes={sizes}
          className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.015]"
        />
        <span className="relative flex min-h-12 items-center justify-center gap-2 border-t border-[#e8ddf4] bg-[#faf7fd] px-3 py-3 text-xs tracking-wider text-[#5c4a80] shadow-sm">
          <Expand size={13} aria-hidden="true" />
          拡大して見る
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={alt}
        className="m-auto max-h-[94dvh] w-[min(94vw,640px)] overflow-y-auto bg-white p-0 backdrop:bg-[#1f1934]/70"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="sticky top-0 z-10 flex justify-end bg-white/95 p-2">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="inline-flex min-h-12 items-center gap-2 px-4 py-3 text-sm text-[#5c4a80] hover:text-[#312852]"
          >
            <X size={18} aria-hidden="true" />
            閉じる
          </button>
        </div>
        <Image src={src} width={width} height={height} alt={alt} sizes="640px" className="h-auto w-full" />
      </dialog>
    </>
  );
}
