import * as Main from "@/components/Main";
import { Divider } from "@/components/Divider";

export default function About() {
  return (
    <Main.Container>
      <div className="ml-[--gutter-first] border-l border-teal-dark">
        <Main.OverCanvas className="pt-12 [font-stretch:130%] font-light">
          <div className="prose prose-base prose-xl max-w-[65rem]">
            <p>
              We start every project by really getting to grips with what it is
              you need. We make sure we fully understand your business and goals
              so we can offer the right solution for you. There is no one size
              fits all website and we understand every business has different
              needs and requirements. We will work with you to ensure any
              digital solution we provide be that web design, development or
              digital marketing is going to make a big difference to your bottom
              line.
            </p>
            <p>
              We don’t have fancy expensive offices in central London and a
              massive team of creatives and developers. We work on a per project
              basis with exceptional developers, designers and other digital
              experts in the UK, allowing us to build the perfect team tailored
              to solving your digital problems.
            </p>
          </div>
        </Main.OverCanvas>
        <Divider />
        <Main.OverCanvas className="pt-12 [font-stretch:130%] font-light">
          <div className="prose prose-base prose-xl max-w-[65rem]">
            We have a small core team but we work with a select group of the
            most talented Designers and Developers all based in the UK on a
            project by project basis. This means that whatever your digital
            problem we can always create the best team to solve it for you. We
            pride ourselves in producing quality, functional websites with clean
            SEO friendly code and we always hit our deadlines.
          </div>
        </Main.OverCanvas>
        <Divider />
        <Main.OverCanvas className="py-12 [font-stretch:130%] font-light">
          <div className="prose prose-base prose-sm max-w-[65rem] italic">
            Company Registration: 07378807
            <br />
            VAT number: GB111850842
          </div>
        </Main.OverCanvas>
        <Divider />
      </div>
    </Main.Container>
  );
}
