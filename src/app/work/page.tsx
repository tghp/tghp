import * as Main from "@/components/Main";
import { Divider } from "@/components/Divider";
import { cn } from "@/util";

function WorkItem({
  name,
  href,
  categories,
}: {
  name: string;
  href?: string;
  categories?: Array<string>;
}) {
  return (
    <div
      className={cn(
        "relative border border-teal-dark px-8 pt-6 pb-7 -m-[1px] flex flex-col items-start grow",
        !!href && "hover:z-20 hover:bg-green/25 transition-all",
      )}
    >
      <Main.OverCanvas className="w-full">
        {!!href && (
          <a
            href={href}
            className="absolute -top-6 -bottom-7 -left-8 -right-8 mix-blend-darken"
          />
        )}
        <div
          className={cn(["text-3xl font-extralight", !!href && "font-normal"])}
        >
          {name}
        </div>
        <div className="mt-1 flex gap-2 flex-wrap text-xs font-extralight [font-stretch:110%] tracking-wider">
          {!!href && (
            <div className="bg-black px-3 py-1 rounded-full w-fit uppercase">
              Link
            </div>
          )}
          <div className="bg-teal-dark px-3 py-1 rounded-full flex gap-2 w-fit">
            {categories?.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        </div>
      </Main.OverCanvas>
    </div>
  );
}

const categories = {
  headless: "headless",
  wordpress: "wordpress",
  shopify: "shopify",
  react: "react",
  nextjs: "nextjs",
  gatsby: "gatsby",
  astro: "astro",
  payload: "payload",
  magento: "magento",
  craftcms: "craftcms",
  woocommerce: "woocommerce",
  pubpub: "pubpub",
  ecommerce: "ecommerce",
  bespokeApplication: "bespoke application",
};

export default function About() {
  return (
    <Main.Container>
      <div className="pt-[1px]">
        <ul className="flex flex-wrap">
          {/*<WorkItem*/}
          {/*  name="the castings"*/}
          {/*  categories={[*/}
          {/*    categories.nextjs,*/}
          {/*    categories.react,*/}
          {/*    categories.headless,*/}
          {/*    categories.payload,*/}
          {/*  ]}*/}
          {/*/>*/}
          {/*<WorkItem*/}
          {/*  name="the blossoms"*/}
          {/*  categories={[*/}
          {/*    categories.nextjs,*/}
          {/*    categories.react,*/}
          {/*    categories.headless,*/}
          {/*    categories.payload,*/}
          {/*  ]}*/}
          {/*/>*/}
          <WorkItem
            name="park square"
            href="https://parksqmk.co.uk/"
            categories={[
              categories.nextjs,
              categories.react,
              categories.headless,
              categories.payload,
            ]}
          />
          <WorkItem
            name="unitary fund"
            href="https://unitary.fund/"
            categories={[categories.astro, categories.react]}
          />
          <WorkItem
            name="longview"
            href="https://www.longview.org/"
            categories={[categories.wordpress]}
          />
          {/*<WorkItem name="law ai" categories={[categories.wordpress]} />*/}
          <WorkItem
            name="kampus"
            href="https://www.kampus-mcr.co.uk/"
            categories={[categories.wordpress]}
          />
          <WorkItem
            name="poplin"
            href="https://poplinmcr.co.uk/"
            categories={[categories.wordpress]}
          />
          <WorkItem
            name="the almere"
            href="https://www.thealmere.co.uk/"
            categories={[categories.wordpress]}
          />
          <WorkItem
            name="corkfield"
            href="https://www.corkfield.co.uk/"
            categories={[categories.wordpress]}
          />
          <WorkItem
            name="the marches"
            href="https://www.themarcheswoking.co.uk/"
            categories={[categories.wordpress]}
          />
          <WorkItem
            name="visa limbo"
            href="https://www.visalimbo.org/"
            categories={[categories.nextjs]}
          />
          <WorkItem name="hear here" categories={[categories.nextjs]} />
          <WorkItem
            name="wychwood art"
            href="https://wychwoodart.com/"
            categories={[
              categories.nextjs,
              categories.headless,
              categories.craftcms,
              categories.ecommerce,
            ]}
          />
          <WorkItem
            name="books in progress"
            href="https://books.worksinprogress.co/"
            categories={[
              categories.nextjs,
              categories.react,
              categories.headless,
              categories.bespokeApplication,
            ]}
          />
          <WorkItem
            name="works in progress"
            href="https://worksinprogress.co/"
            categories={[
              categories.gatsby,
              categories.react,
              categories.headless,
              categories.wordpress,
            ]}
          />
          <WorkItem
            name="ifp"
            href="https://ifp.org/"
            categories={[categories.wordpress, categories.react]}
          />
          <WorkItem
            name="health housing"
            categories={[categories.wordpress, categories.react]}
          />
          <WorkItem name="arcadia science" categories={[categories.pubpub]} />
          <WorkItem
            name="shutters and shades"
            href="https://www.shuttersandshades.co.uk/"
            categories={[
              categories.wordpress,
              categories.woocommerce,
              categories.ecommerce,
            ]}
          />
          <WorkItem
            name="fiona howard"
            href="https://fionahoward.com/"
            categories={[
              categories.wordpress,
              categories.woocommerce,
              categories.ecommerce,
            ]}
          />
          <WorkItem
            name="condor straps"
            href="https://www.condorstraps.com/"
            categories={[categories.magento, categories.ecommerce]}
          />
          <WorkItem
            name="gmt london"
            href="https://gmtlondon.com/"
            categories={[categories.magento, categories.ecommerce]}
          />
          <WorkItem
            name="royal london"
            href="https://royallondonwatches.com/"
            categories={[categories.magento, categories.ecommerce]}
          />
          <WorkItem
            name="WOLF1834"
            href="https://www.wolf1834.com/"
            categories={[categories.magento, categories.ecommerce]}
          />
          <WorkItem
            name="pcb byrne"
            href="https://www.pcb-byrne.com/"
            categories={[categories.wordpress]}
          />
          <WorkItem name="the shutter shop" categories={[categories.shopify]} />
          <WorkItem
            name="menkind"
            categories={[categories.magento, categories.ecommerce]}
          />
          <WorkItem
            name="red5"
            categories={[categories.magento, categories.ecommerce]}
          />
          <WorkItem name="lipton rogers" categories={[categories.wordpress]} />
          <WorkItem name="zoe jordan" categories={[categories.shopify]} />
        </ul>
      </div>
      <Divider />
    </Main.Container>
  );
}
