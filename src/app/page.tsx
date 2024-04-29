import { Divider } from "@/components/Divider";
import * as Main from "@/components/Main";
import Image from "next/image";
import { cn } from "@/util";

type TechLogoProps = {
  image: string;
  alt: string;
};

function TechLogo({ image, alt }: TechLogoProps) {
  return (
    <div className="[grid-column:span_var(--col-span)] border-r border-b border-teal-dark">
      <Main.OverCanvas className="flex items-center justify-center h-full">
        <Image
          src={`/icons/${image}.svg`}
          alt={alt}
          width={50}
          height={50}
          unoptimized
          className="size-[--logo-size] object-contain"
        />
      </Main.OverCanvas>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Main.Container className="grow flex flex-col">
        <div className="ml-[--gutter-first] py-12 grow flex items-center border-l border-teal-dark">
          <div className="border-t border-b border-teal-dark w-full my-10">
            <Main.OverCanvas className="w-[calc(min(43rem,100%))] prose-xl font-light pr-8">
              The Glasshouse Project are a successful Digital Agency with a
              passion for UX based in London. We fit our stack to the project
              not your project to the stack so you can be sure that we are
              engineering the right solution for you.
            </Main.OverCanvas>
          </div>
        </div>
        <Divider />
        <div
          className={cn([
            "ml-[--gutter-first]  border-l border-teal-dark *:grid *:grid-cols-[repeat(40,1fr)]",
            "w-[calc(min(40.6rem,100%-(var(--gutter-first)*2)))]",
          ])}
        >
          <div className="[--logo-size:70%] [--col-span:10] sm:[--col-span:5]">
            {(
              [
                { image: "nextjs", alt: "Next.js" },
                { image: "payload", alt: "Payload" },
                { image: "wordpress", alt: "WordPress" },
                { image: "magento", alt: "Magento" },
                { image: "shopify", alt: "Shopify" },
                { image: "react", alt: "React" },
                { image: "astro", alt: "Astro" },
                { image: "tailwind", alt: "Tailwind" },
              ] satisfies Array<TechLogoProps>
            ).map((logo) => (
              <TechLogo {...logo} key={logo.image} />
            ))}
          </div>
          <div className="[--logo-size:60%] [--col-span:8] sm:[--col-span:4]">
            {(
              [
                { image: "git", alt: "Git" },
                { image: "node", alt: "Node.js" },
                { image: "php", alt: "PHP" },
                { image: "sass", alt: "Sass" },
                { image: "vite", alt: "Vite" },
                { image: "figma", alt: "Figma" },
                { image: "vue", alt: "Vue" },
                { image: "three", alt: "Three.js" },
                { image: "gatsby", alt: "Gatsby" },
                { image: "remix", alt: "Remix" },
              ] satisfies Array<TechLogoProps>
            ).map((logo) => (
              <TechLogo {...logo} key={logo.image} />
            ))}
          </div>
        </div>
        <Divider />
      </Main.Container>
    </>
  );
}
