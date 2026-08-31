import { cn } from "@/lib/utils/cn";
import type { ComponentProps } from "react";

export  function Footer({className, ...props }: ComponentProps<"footer">) {
  return (
    <footer  className={cn(``, className)} {...props} >Footer</footer>
  )
}
