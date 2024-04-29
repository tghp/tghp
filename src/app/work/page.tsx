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
  bespokeApplication: "bespoke CMS",
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
            name="Park Square"
            href="https://parksqmk.co.uk/"
            categories={[
              categories.nextjs,
              categories.react,
              categories.headless,
              categories.payload,
            ]}
          />
          <WorkItem
            name="Unitary Fund"
            href="https://unitary.fund/"
            categories={[categories.astro, categories.react]}
          />
          <WorkItem
            name="Wychwood Art"
            href="https://wychwoodart.com/"
            categories={[
              categories.nextjs,
              categories.headless,
              categories.craftcms,
              categories.magento,
              categories.ecommerce,
            ]}
          />
           <WorkItem
            name="Books in Progress"
            href="https://books.worksinprogress.co/"
            categories={[
              categories.nextjs,
              categories.react,
              categories.headless,
              categories.bespokeApplication,
            ]}
          />
            <WorkItem
            name="World's Fair"
            href="https://worldsfair.co/"
            categories={[categories.gatsby,
              categories.react,
              categories.headless,
              categories.wordpress,]}
          />
          https://worldsfair.co/
          <WorkItem
            name="Longview Philanthropy"
            href="https://www.longview.org/"
            categories={[categories.wordpress]}
          />
           <WorkItem
            name="Joe Carlsmith"
            href="https://joecarlsmith.com/"
            categories={[categories.gatsby,
              categories.react,
              categories.headless,
              categories.wordpress,}
          />
          <WorkItem
            name="WOLF1834"
            href="https://www.wolf1834.com/"
            categories={[categories.magento, categories.ecommerce]}
          />
          <WorkItem name="Law AI" href="https://www.law-ai.org/" categories={[categories.wordpress]} />
          <WorkItem
            name="Institute for Progress"
            href="https://ifp.org/"
            categories={[categories.wordpress, categories.react]}
          />
          <WorkItem
            name="Emigrnat Bank Fine Art"
            href="https://emigrantbankfineart.com/"
            categories={[categories.wordpress]}
          />
          <WorkItem 
            name="The Shutter Shop" 
            href="https://www.shuttershop.co.uk/"
            categories={[categories.shopify, categories.ecommerce]} 
          />
          <WorkItem
            name="Kampus"
            href="https://www.kampus-mcr.co.uk/"
            categories={[categories.wordpress]}
          />
          <WorkItem
            name="Visa Limbo"
            href="https://www.visalimbo.org/"
            categories={[categories.nextjs]}
          />
          <WorkItem
            name="Works in Progress"
            href="https://worksinprogress.co/"
            categories={[
              categories.gatsby,
              categories.react,
              categories.headless,
              categories.wordpress,
            ]}
          />
          <WorkItem
            name="Federation of American Scientists"
            href="https://ifp.org/"
            categories={[categories.wordpress]}
          />
          <WorkItem
            name="Corkfield"
            href="https://www.corkfield.co.uk/"
            categories={[categories.wordpress]}
          />
          <WorkItem
            name="Medirite"
            href="https://www.medirite.co.uk//"
            categories={[categories.magento, categories.ecommerce]}
          />
          <WorkItem
            name="Shutters and Shades"
            href="https://www.shuttersandshades.co.uk/"
            categories={[
              categories.wordpress,
              categories.woocommerce,
              categories.ecommerce,
            ]}
          />
          <WorkItem
            name="Fiona Howard"
            href="https://fionahoward.com/"
            categories={[
              categories.wordpress,
              categories.woocommerce,
              categories.ecommerce,
            ]}
          />
          <WorkItem
            name="Fine Art Group"
            href="https://www.fineartgroup.com/"
            categories={[categories.wordpress]}
          />
          <WorkItem
            name="Condor Straps"
            href="https://www.condorstraps.com/"
            categories={[categories.magento, categories.ecommerce]}
          />
          <WorkItem
            name="GMT London"
            href="https://gmtlondon.com/"
            categories={[categories.magento, categories.ecommerce]}
          />
          <WorkItem
            name="Royal London"
            href="https://royallondonwatches.com/"
            categories={[categories.magento, categories.ecommerce]}
          />
          <WorkItem
            name="PCB Byrne"
            href="https://www.pcb-byrne.com/"
            categories={[categories.wordpress]}
          />
          <WorkItem
            name="The Marches"
            href="https://www.themarcheswoking.co.uk/"
            categories={[categories.wordpress]}
          />
        </ul>
      </div>
      <Divider />
    </Main.Container>
  );
}
