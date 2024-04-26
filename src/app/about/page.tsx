import * as Main from "@/components/Main";
import { Divider } from "@/components/Divider";

export default function About() {
  return (
    <Main.Container>
      <div className="ml-[--gutter-first] border-l border-teal-dark">
        <Main.OverCanvas className="pt-12 [font-stretch:130%] font-light">
          <div className="prose prose-base prose-xl max-w-[65rem]">
            We design solutions that work for you. Throughout the whole process 
            we make sure this is always at the forefront of all decision making. 
            We make sure our solutions are always best in class and adaptive, 
            ensuring we keep up to date with current trends and new technologies.
          </div>
        </Main.OverCanvas>
        <Divider />
        <Main.OverCanvas className="pt-12 font-light">
          <div className="prose prose-base prose-xl max-w-[65rem]">
            We fit our stack to the project not your project to the stack so 
            you can be sure that we are engineering the right solution for you.
          </div>
        </Main.OverCanvas>
        <Divider />
        <Main.OverCanvas className="pt-12 [font-stretch:130%] font-light">
          <div className="prose prose-base prose-xl max-w-[65rem]">
            We&apos;ve been designing and building bespoke platforms and
            handling custom integrations since 2010 so you&apos;re in safe
            hands. We pride ourselves in producing and maintaining high quality,
            user friendly, functional code with clear documentation and we
            always hit our deadlines. Our team is made up of exceptional
            developers, techincal project managers and digital experts all based
            in the UK who thrive on the challenge of bringing your digital visions
            to life.
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
