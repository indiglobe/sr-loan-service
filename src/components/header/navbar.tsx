import { cn } from "@/lib/utils/cn";
import { Link } from "@tanstack/react-router";
import {
  useState,
  type ComponentProps,
} from "react";

export default function Navbar({
  className,
  ...props
}: ComponentProps<"nav">) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn(
        `
        sticky top-0 z-50
        w-full
        border-b border-primary-100
        bg-background/95
        backdrop-blur-md
        dark:border-primary-900
        `,
        className
      )}
      {...props}
    >
      <div
        className="
        mx-auto
        flex
        h-16
        w-full
        max-w-7xl
        items-center
        justify-between
        px-4
        2xs:px-5
        sm:px-6
        lg:px-8
      "
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="
            flex
            items-center
            gap-2.5
          "
        >
          <div
            className="
              flex
              size-10
              items-center
              justify-center
              rounded-xl
              bg-primary-600
              font-brand-secondary
              text-lg
              font-bold
              text-white
              shadow-sm
            "
          >
            L
          </div>

          <div>
            <h1
              className="
                font-brand-secondary
                text-lg
                font-bold
                leading-none
                text-primary-700
                dark:text-primary-300
                sm:text-xl
              "
            >
              LoanEase
            </h1>

            <p
              className="
                mt-1
                hidden
                text-[10px]
                font-medium
                text-foreground/45
                2xs:block
              "
            >
              Finance made simple
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div
          className="
            hidden
            items-center
            gap-2
            md:flex
          "
        >
          <Link
            to="/"
            activeOptions={{
              exact: true,
            }}
            className="
              rounded-xl
              px-4
              py-2
              text-sm
              font-semibold
              text-foreground/60
              transition-colors
              hover:bg-primary-50
              hover:text-primary-600
              dark:hover:bg-primary-950
            "
            activeProps={{
              className:
                "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300",
            }}
          >
            Home
          </Link>

          <Link
            to="/contact-us"
            className="
              rounded-xl
              px-4
              py-2
              text-sm
              font-semibold
              text-foreground/60
              transition-colors
              hover:bg-primary-50
              hover:text-primary-600
              dark:hover:bg-primary-950
            "
            activeProps={{
              className:
                "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300",
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div
          className="
            hidden
            items-center
            gap-3
            md:flex
          "
        >
          <button
            type="button"
            className="
              rounded-xl
              px-4
              py-2.5
              text-sm
              font-semibold
              text-primary-700
              transition
              hover:bg-primary-50
              dark:text-primary-300
              dark:hover:bg-primary-950
            "
          >
            Sign In
          </button>

          <button
            type="button"
            className="
              rounded-xl
              bg-primary-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-md
              shadow-primary-600/15
              transition
              hover:bg-primary-700
              active:scale-95
            "
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="
            flex
            size-10
            items-center
            justify-center
            rounded-xl
            border
            border-primary-100
            text-foreground
            transition
            hover:bg-primary-50
            dark:border-primary-900
            dark:hover:bg-primary-950
            md:hidden
          "
        >
          {isOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="size-5"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="size-5"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          `
          overflow-hidden
          transition-all
          duration-300
          md:hidden
          `,
          isOpen
            ? "max-h-96 border-t border-primary-100 opacity-100 dark:border-primary-900"
            : "max-h-0 opacity-0"
        )}
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-1
            px-4
            py-4
            2xs:px-5
            sm:px-6
          "
        >
          <Link
            to="/"
            activeOptions={{
              exact: true,
            }}
            onClick={() => setIsOpen(false)}
            className="
              rounded-xl
              px-4
              py-3
              text-sm
              font-semibold
              text-foreground/60
              transition
              hover:bg-primary-50
              hover:text-primary-600
              dark:hover:bg-primary-950
            "
            activeProps={{
              className:
                "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300",
            }}
          >
            Home
          </Link>

          <Link
            to="/contact-us"
            onClick={() => setIsOpen(false)}
            className="
              rounded-xl
              px-4
              py-3
              text-sm
              font-semibold
              text-foreground/60
              transition
              hover:bg-primary-50
              hover:text-primary-600
              dark:hover:bg-primary-950
            "
            activeProps={{
              className:
                "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300",
            }}
          >
            Contact Us
          </Link>

          <div className="my-2 h-px bg-primary-100 dark:bg-primary-900" />

          <button
            type="button"
            className="
              rounded-xl
              px-4
              py-3
              text-left
              text-sm
              font-semibold
              text-primary-700
              transition
              hover:bg-primary-50
              dark:text-primary-300
              dark:hover:bg-primary-950
            "
          >
            Sign In
          </button>

          <button
            type="button"
            className="
              mt-1
              w-full
              rounded-xl
              bg-primary-600
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-primary-700
            "
          >
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  );
}