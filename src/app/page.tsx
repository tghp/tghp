import { Divider } from "@/components/Divider";
import * as Main from "@/components/Main";
import Image from "next/image";
import { cn } from "@/util";

export default function Home() {
  return (
    <>
      <Main.Container>
        <Main.OverCanvas className="px-10 py-12">
          <ul className="flex flex-wrap gap-4">
            <li className="font-bold">latest work</li>
            <li>park square</li>
            <li>books in progress</li>
            <li>works in progress</li>
            <li>ifp</li>
          </ul>
        </Main.OverCanvas>
        <Divider />
        <Main.OverCanvas className="px-10 py-12 flex flex-col gap-10">
          <div
            className={cn([
              "flex flex-wrap gap-10 relative z-10",
              "relative [&_img]:size-[75px] [&_img]:object-contain",
            ])}
          >
            <Image
              src="/icons/nextjs.svg"
              alt="Shopify"
              width={50}
              height={50}
              unoptimized
            />
            <Image
              src="/icons/wordpress.svg"
              alt="Shopify"
              width={50}
              height={50}
              unoptimized
            />
            <Image
              src="/icons/payload.svg"
              alt="Shopify"
              width={50}
              height={50}
              unoptimized
            />
            <Image
              src="/icons/magento.svg"
              alt="Magento"
              width={50}
              height={50}
              unoptimized
            />
            <Image
              src="/icons/shopify.svg"
              alt="Shopify"
              width={50}
              height={50}
              unoptimized
            />
            <Image
              src="/icons/react.svg"
              alt="Shopify"
              width={50}
              height={50}
              unoptimized
            />
            <Image
              src="/icons/astro.svg"
              alt="Astro"
              width={50}
              height={50}
              unoptimized
            />
          </div>
          <div
            className={cn([
              "flex flex-wrap gap-11 relative z-10",
              "relative [&_img]:size-[45px] [&_img]:object-contain",
            ])}
          >
            <Image
              src="/icons/git.svg"
              alt="Shopify"
              width={50}
              height={50}
              unoptimized
            />
            <Image
              src="/icons/node.svg"
              alt="Shopify"
              width={50}
              height={50}
              unoptimized
            />
            <Image
              src="/icons/php.svg"
              alt="Shopify"
              width={50}
              height={50}
              unoptimized
            />
            <Image
              src="/icons/vue.svg"
              alt="Shopify"
              width={50}
              height={50}
              unoptimized
            />
            <Image
              src="/icons/vite.svg"
              alt="Shopify"
              width={50}
              height={50}
              unoptimized
            />
            <Image
              src="/icons/figma.svg"
              alt="Shopify"
              width={50}
              height={50}
              unoptimized
            />
            <Image
              src="/icons/gatsby.svg"
              alt="Shopify"
              width={50}
              height={50}
              unoptimized
            />
            <Image
              src="/icons/three.svg"
              alt="Shopify"
              width={50}
              height={50}
              unoptimized
            />
            <Image
              src="/icons/remix.svg"
              alt="Shopify"
              width={50}
              height={50}
              unoptimized
            />
          </div>
        </Main.OverCanvas>
        <Divider />
      </Main.Container>
    </>
  );
}