import { PropsWithChildren } from "react";
import { cn } from "@/util";

type MainProps = PropsWithChildren<{
  className?: string;
}>;

function Container({ className, children }: MainProps) {
  return <main className={cn([className])}>{children}</main>;
}

function OverCanvas({ className, children }: MainProps) {
  return <div className={cn(["relative z-20", className])}>{children}</div>;
}

export { Container, OverCanvas };
