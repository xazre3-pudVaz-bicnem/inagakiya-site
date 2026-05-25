"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  en?: string;
}

export default function PageHero({ title, subtitle, en }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-white border-b border-[#e8ddf4] overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 48px,
            #9278be 48px, #9278be 49px
          ), repeating-linear-gradient(
            90deg, transparent, transparent 48px,
            #9278be 48px, #9278be 49px
          )`,
        }}
      />
      {/* Soft lavender gradient from top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a55a] to-transparent opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {en && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#c9a55a] text-xs tracking-[0.45em] mb-4"
          >
            {en}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[#312852] text-3xl md:text-5xl tracking-[0.12em]"
          style={{ fontFamily: "var(--font-mincho)" }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#7560a0] text-base md:text-lg tracking-wide mt-5"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="w-8 h-px bg-[#c9a55a] mx-auto mt-7"
        />
      </div>
    </section>
  );
}
