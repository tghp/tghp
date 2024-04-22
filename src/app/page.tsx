import { Divider } from "@/components/Divider";
import * as Main from "@/components/Main";
import Image from "next/image";
import { cn } from "@/util";

export default function Home() {
  return (
    <>
      <Main.Container className="grow flex flex-col">
        <Main.OverCanvas className="w-[27.7rem] ml-[--gutter-first] py-12 grow flex items-center border-l border-teal-dark">
          <div className="font-light">
            Quis qui proident eu aute anim occaecat minim eiusmod incididunt. In
            anim et ut eu dolore culpa quis ad cillum laborum. Labore nulla ex
            aute dolor velit irure proident eiusmod fugiat duis.
          </div>
        </Main.OverCanvas>
        <Divider />
        <Main.OverCanvas className="ml-[--gutter-first] w-[40.6rem] flex flex-col border-l border-teal-dark *:grid *:grid-cols-[repeat(63,1fr)] *:relative *:z-10">
          <div
            className={cn([
              "[&_img]:size-[70%] [&_img]:object-contain *:flex *:items-center *:justify-center *:col-span-9 *:border-r *:border-b *:border-teal-dark",
            ])}
          >
            <div>
              <Image
                src="/icons/nextjs.svg"
                alt="Next.js"
                width={50}
                height={50}
                unoptimized
              />
            </div>
            <div>
              <Image
                src="/icons/wordpress.svg"
                alt="WordPress"
                width={50}
                height={50}
                unoptimized
              />
            </div>
            <div>
              <Image
                src="/icons/payload.svg"
                alt="Payload"
                width={50}
                height={50}
                unoptimized
              />
            </div>
            <div>
              <Image
                src="/icons/magento.svg"
                alt="Magento"
                width={50}
                height={50}
                unoptimized
              />
            </div>
            <div>
              <Image
                src="/icons/shopify.svg"
                alt="Shopify"
                width={50}
                height={50}
                unoptimized
              />
            </div>
            <div>
              <Image
                src="/icons/react.svg"
                alt="React"
                width={50}
                height={50}
                unoptimized
              />
            </div>
            <div>
              <Image
                src="/icons/astro.svg"
                alt="Astro"
                width={50}
                height={50}
                unoptimized
              />
            </div>
          </div>
          <div
            className={cn([
              "[&_img]:size-[60%] [&_img]:object-contain *:col-span-7 *:flex *:items-center *:justify-center *:border-r *:border-teal-dark",
            ])}
          >
            <div>
              <Image
                src="/icons/git.svg"
                alt="Git"
                width={50}
                height={50}
                unoptimized
              />
            </div>
            <div>
              <Image
                src="/icons/node.svg"
                alt="Node.js"
                width={50}
                height={50}
                unoptimized
              />
            </div>
            <div>
              <Image
                src="/icons/php.svg"
                alt="PHP"
                width={50}
                height={50}
                unoptimized
              />
            </div>
            <div>
              <Image
                src="/icons/vue.svg"
                alt="Vue"
                width={50}
                height={50}
                unoptimized
              />
            </div>
            <div>
              <Image
                src="/icons/vite.svg"
                alt="Vite"
                width={50}
                height={50}
                unoptimized
              />
            </div>
            <div>
              <Image
                src="/icons/figma.svg"
                alt="Figma"
                width={50}
                height={50}
                unoptimized
              />
            </div>
            <div>
              <Image
                src="/icons/gatsby.svg"
                alt="Gatsby"
                width={50}
                height={50}
                unoptimized
              />
            </div>
            <div>
              <Image
                src="/icons/three.svg"
                alt="Three.js"
                width={50}
                height={50}
                unoptimized
              />
            </div>
            <div>
              <Image
                src="/icons/remix.svg"
                alt="Remix"
                width={50}
                height={50}
                unoptimized
              />
            </div>
          </div>
        </Main.OverCanvas>
        <Divider />
      </Main.Container>
    </>
  );
}
