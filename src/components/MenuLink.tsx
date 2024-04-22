"use client";

import { PropsWithChildren, useState } from "react";
import Link, { LinkProps } from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/util";

type MenuLinkProps = PropsWithChildren<
  LinkProps & {
    last?: boolean;
  }
>;

export function MenuLink({ children, last, ...props }: MenuLinkProps) {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex border-teal-dark sm:border-r">
      <Link
        {...props}
        className={cn([
          "relative py-6 px-8 z-20 text-white min-w-[10em] w-full border-b font-bold tracking-wider text-[14px] leading-none border-teal-dark",
          "lg:text-[16px] lg:py-8 lg:px-12",
          "sm:text-center sm:border-b-0 sm:w-auto",
          last && "max-sm:last:border-b-0",
        ])}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <motion.div
          animate={hover ? "hover" : "rest"}
          className={cn([
            "absolute inset-0 bg-green point z-10 text-black flex items-center justify-start pl-8",
            "sm:justify-center sm:pl-0",
          ])}
          initial={false}
          variants={{
            rest: { clipPath: "inset(0% 100% 0% 0%)" },
            hover: { clipPath: "inset(0% 0% 0% 0%)" },
          }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <motion.div
            animate={hover ? "hover" : "rest"}
            initial={false}
            variants={{
              rest: { x: "0em", opacity: 1 },
              hover: {
                x: ["-1em", "0em"],
                opacity: [0, 1],
              },
            }}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            {children}
          </motion.div>
        </motion.div>
        <span>{children}</span>
      </Link>
    </div>
  );
}
