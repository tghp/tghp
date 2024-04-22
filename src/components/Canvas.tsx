"use client";

import { PropsWithChildren } from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/util";

type CanvasProps = PropsWithChildren<{}>;

export function Canvas({ children }: CanvasProps) {
  const pathname = usePathname();

  return (
    <motion.div
      animate={{ opacity: pathname === "/" ? 1 : 0.8 }}
      className={cn([
        "fixed top-0 left-0 w-full h-full z-10 max-xl:-z-20",
        "xl:after:hidden after:absolute after:inset-0 after:z-0 after:bg-green/20 after:mix-blend-darken",
        "xl:before:hidden before:absolute before:inset-0 before:z-10 before:bg-black/60",
      ])}
    >
      <ThreeCanvas shadows>{children}</ThreeCanvas>
    </motion.div>
  );
}
