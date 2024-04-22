import * as Main from "@/components/Main";
import { Divider } from "@/components/Divider";

function WorkItem({
  name,
  categories,
}: {
  name: string;
  categories?: Array<string>;
}) {
  return (
    <div className="border border-black px-6 pt-4 pb-5 flex flex-col items-start grow">
      <div className="text-3xl font-bold">{name}</div>
      <div className="bg-teal-dark -mx-2 px-3 pb-1 pt-1 mt-1 rounded-full flex gap-2 text-xs font-extralight [font-stretch:110%] tracking-wider">
        {categories?.map((category) => <span key={category}>{category}</span>)}
      </div>
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
      <Main.OverCanvas className="px-10 py-12">
        <ul className="flex flex-wrap gap-8">
          <WorkItem
            name="the castings"
            categories={[
              categories.nextjs,
              categories.react,
              categories.headless,
              categories.payload,
            ]}
          />
          <WorkItem
            name="the blossoms"
            categories={[
              categories.nextjs,
              categories.react,
              categories.headless,
              categories.payload,
            ]}
          />
          <WorkItem
            name="park square"
            categories={[
              categories.nextjs,
              categories.react,
              categories.headless,
              categories.payload,
            ]}
          />
          <WorkItem
            name="unitary fund"
            categories={[categories.astro, categories.react]}
          />
          <WorkItem name="longview" categories={[categories.wordpress]} />
          <WorkItem name="law ai" categories={[categories.wordpress]} />
          <WorkItem name="kampus" categories={[categories.wordpress]} />
          <WorkItem name="poplin" categories={[categories.wordpress]} />
          <WorkItem name="the almere" categories={[categories.wordpress]} />
          <WorkItem name="corkfield" categories={[categories.wordpress]} />
          <WorkItem name="the marches" categories={[categories.wordpress]} />
          <WorkItem name="visa limbo" categories={[categories.nextjs]} />
          <WorkItem name="hear here" categories={[categories.nextjs]} />
          <WorkItem
            name="wychwood art"
            categories={[
              categories.nextjs,
              categories.headless,
              categories.craftcms,
              categories.ecommerce,
            ]}
          />
          <WorkItem
            name="books in progress"
            categories={[
              categories.nextjs,
              categories.react,
              categories.headless,
              categories.bespokeApplication,
            ]}
          />
          <WorkItem
            name="works in progress"
            categories={[
              categories.gatsby,
              categories.react,
              categories.headless,
              categories.wordpress,
            ]}
          />
          <WorkItem
            name="ifp"
            categories={[categories.wordpress, categories.react]}
          />
          <WorkItem
            name="health housing"
            categories={[categories.wordpress, categories.react]}
          />
          <WorkItem name="arcadia science" categories={[categories.pubpub]} />
          <WorkItem
            name="shutters and shades"
            categories={[
              categories.wordpress,
              categories.woocommerce,
              categories.ecommerce,
            ]}
          />
          <WorkItem
            name="fiona howard"
            categories={[
              categories.wordpress,
              categories.woocommerce,
              categories.ecommerce,
            ]}
          />
          <WorkItem
            name="condor straps"
            categories={[categories.magento, categories.ecommerce]}
          />
          <WorkItem
            name="gmt watches"
            categories={[categories.magento, categories.ecommerce]}
          />
          <WorkItem
            name="royal london"
            categories={[categories.magento, categories.ecommerce]}
          />
          <WorkItem
            name="WOLF1834"
            categories={[categories.magento, categories.ecommerce]}
          />
          <WorkItem name="pcb byrne" categories={[categories.wordpress]} />
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
      </Main.OverCanvas>
      <Divider />
    </Main.Container>
  );
}
