import type { Metadata } from "next";
import { Anybody } from "next/font/google";
import "./globals.css";
import { Scene } from "@/components/Scene";
import { Canvas } from "@/components/Canvas";
import { Suspense } from "react";
import { cn } from "@/util";
import Link from "next/link";
import { AnimationManager } from "@/components/AnimationManager";
import { Divider } from "@/components/Divider";
import { MenuLink } from "@/components/MenuLink";
import { ConsoleHello } from "@/components/ConsoleHello";

const anybody = Anybody({
  subsets: ["latin"],
  axes: ["wdth"],
  // adjustFontFallback: false,
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "TGHP",
  description: "Solving Digital Problems since 2010",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn([
          "h-full flex flex-col select-none text-white font-sans [font-stretch:150%] overscroll-none",
          "before:bg-background before:fixed before:inset-0 before:-z-30",
          "[--gutter-first:20px]",
          anybody.variable,
        ])}
      >
        <AnimationManager />
        <ConsoleHello />
        <Canvas>
          <Suspense>
            <Scene />
          </Suspense>
        </Canvas>
        <div
          className={cn([
            "text-green px-4 py-4 z-20 text-xs",
            "sm:px-10 sm:text-base",
          ])}
        >
          solving digital problems since 2010
        </div>
        <Divider />
        <div>
          <Link
            href="/"
            className={cn([
              "z-20 relative block text-[calc(27.2vw-var(--gutter-first))] font-[850] text-green px-4",
              "sm:text-[108px] sm:px-10",
            ])}
          >
            tghp
          </Link>
        </div>
        <Divider />
        <div
          className={cn([
            "relative flex ml-[--gutter-first] border-l border-teal-dark",
            "max-sm:flex-col",
          ])}
        >
          <MenuLink href="/about">about us</MenuLink>
          <MenuLink href="/work">projects</MenuLink>
          <MenuLink href="/contact" last>
            connect
          </MenuLink>
        </div>
        <Divider />
        {children}
      </body>
    </html>
  );
}
