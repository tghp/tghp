"use client";

import { usePathname } from "next/navigation";
import { useSetAtom } from "jotai";
import { housePlaceAtom } from "@/util/jotai";
import { useEffect } from "react";

export function AnimationManager() {
  const pathname = usePathname();
  const setHousePlace = useSetAtom(housePlaceAtom);

  useEffect(() => {
    switch (pathname) {
      case "/": {
        setHousePlace("initial");
        break;
      }
      case "/about": {
        setHousePlace("zoom");
        break;
      }
      case "/work": {
        setHousePlace("zoom2");
        break;
      }
      case "/contact": {
        setHousePlace("zoom3");
        break;
      }
    }
  }, [pathname]);

  return <></>;
}
