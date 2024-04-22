"use client";

import { PropsWithChildren, useState } from "react";
import Link, { LinkProps } from "next/link";
import { motion } from "framer-motion";

export function MenuLink({ children, ...props }: PropsWithChildren<LinkProps>) {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex border-r-teal-dark border-r">
      <Link
        {...props}
        className="relative py-8 px-12 z-20 text-white min-w-[10em] text-center font-bold tracking-wider text-[16px] leading-none"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <motion.div
          animate={hover ? "hover" : "rest"}
          className="absolute inset-0 bg-green point z-10 text-black flex items-center justify-center"
          initial={false}
          variants={{
            rest: { clipPath: "inset(0% 100% 0% 0%)" },
            hover: { clipPath: "inset(0% 0% 0% 0%)" },
          }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          {children}
        </motion.div>
        <span>{children}</span>
      </Link>
    </div>
  );
}
