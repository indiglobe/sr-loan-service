import type { PropsWithChildren } from "react";
import Navbar from "../header/navbar";

export default function Main({ children }: PropsWithChildren) {
  return (
    <div className="bg-background text-foreground flex min-h-svh flex-col">
      <main className="grow">{children}</main>
    </div>
  );
}
