import type { PropsWithChildren } from "react";
import Navbar from "../header/navbar";

export default function Main({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      
      <main className="grow">
        {children}
      </main>
    </div>
  );
}