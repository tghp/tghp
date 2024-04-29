import * as Main from "@/components/Main";
import { Divider } from "@/components/Divider";

export default function About() {
  return (
    <Main.Container>
      <Main.OverCanvas className="px-10 py-12 [font-stretch:130%] font-light">
        <div className="prose prose-base prose-xl max-w-[65rem]">
          If you&lsquo;ve got a project in mind please do not hesitate to get in
          touch - we&lsquo;d love to chat to you about it.
        </div>
      </Main.OverCanvas>
      <Main.OverCanvas className="px-10 py-12 [font-stretch:130%] font-light">
        <div className="prose prose-base prose-xl max-w-[65rem]">
          <p>glasshouse@tghp.co.uk</p>
          <p>020 3695 7465</p>
          <p>
            The Glasshouse Project, 20 Wenlock Road, London United Kingdom N1
            7GU
          </p>
        </div>
      </Main.OverCanvas>
      <Divider />
    </Main.Container>
  );
}
