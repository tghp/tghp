import * as Main from "@/components/Main";
import { Divider } from "@/components/Divider";

export default function About() {
  return (
    <Main.Container>
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
