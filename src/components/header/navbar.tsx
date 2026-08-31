import { cn } from '@/lib/utils/cn'
import type {ComponentProps} from 'react';

export default function Navbar({className, ...props }: ComponentProps<"nav">) {
  return (
    <nav  className={cn(``, className)} {...props}>Navbar</nav>
  )
}
