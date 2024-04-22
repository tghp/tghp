"use client";

import { PropsWithChildren } from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type CanvasProps = PropsWithChildren<{}>;

export function Canvas({ children }: CanvasProps) {
  const pathname = usePathname();

  return (
    <motion.div
      animate={{ opacity: pathname === "/" ? 1 : 0.8 }}
      className="fixed top-0 left-0 w-full h-full z-10"
    >
      <ThreeCanvas shadows>{children}</ThreeCanvas>
    </motion.div>
  );
}
