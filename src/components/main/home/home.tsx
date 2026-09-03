import {
  ArrowRight,
  BadgeIndianRupee,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  FileCheck2,
  GraduationCap,
  House,
  RefreshCw,
  ShieldCheck,
  Zap,
} from "lucide-react";
import type { ComponentProps, ElementType } from "react";
import Main from "@/components/main/main";
import { cn } from "@/lib/utils/cn";

function Home() {
  return (
    <Main>
      <HeroSection />

      <LoanCategories />

      <ProcessSection />

      <WhyChooseUs />

      <CTASection />
    </Main>
  );
}

const loanTypes = [
  {
    icon: BadgeIndianRupee,
    title: "Personal Loan",
    description:
      "Get quick funds for travel, medical expenses, weddings, or personal needs.",
  },
  {
    icon: House,
    title: "Home Loan",
    description:
      "Flexible financing options to help you purchase your dream home.",
  },
  {
    icon: GraduationCap,
    title: "Education Loan",
    description:
      "Invest in your education with convenient and flexible repayment plans.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Loan",
    description:
      "Get the capital you need to start, manage, or grow your business.",
  },
];

const steps = [
  {
    number: "01",
    icon: FileCheck2,
    title: "Apply Online",
    description:
      "Enter your basic information and select your preferred loan amount.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Quick Verification",
    description:
      "Submit your documents securely and complete a quick eligibility check.",
  },
  {
    number: "03",
    icon: BadgeIndianRupee,
    title: "Receive Funds",
    description:
      "Once approved, the loan amount is transferred directly to your account.",
  },
];

const benefits = [
  {
    icon: Check,
    title: "Transparent Rates",
    description: "Clear rates and charges with no surprises.",
  },
  {
    icon: Zap,
    title: "Quick Approval",
    description: "Fast eligibility and application processing.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description: "Your personal information remains protected.",
  },
  {
    icon: RefreshCw,
    title: "Flexible Tenure",
    description: "Choose repayment plans that suit your budget.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                HERO SECTION                                */
/* -------------------------------------------------------------------------- */

function HeroSection({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("relative overflow-hidden", className)} {...props}>
      {/* Decorative Background */}
      <div className="bg-primary-200/30 dark:bg-primary-900/20 absolute -top-40 -right-40 -z-10 size-96 rounded-full blur-3xl" />
      <div className="bg-secondary-200/30 dark:bg-secondary-900/20 absolute -bottom-40 -left-40 -z-10 size-96 rounded-full blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 pt-10 md:pt-12 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24 lg:pt-16">
        {/* Hero Content */}
        <div>
          <div className="border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold">
            <span className="bg-accent-500 size-2 rounded-full" />
            Simple loans. Faster approvals.
          </div>

          <h1 className="font-brand-secondary mt-6 max-w-2xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Money when you need it,
            <span className="text-primary-600 dark:text-primary-400 block">
              without the stress.
            </span>
          </h1>

          <p className="text-foreground/60 mt-6 max-w-xl text-base leading-7 sm:text-lg">
            Find flexible personal, home, education and business loans with
            transparent rates, easy documentation and a completely digital
            application process.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="group bg-primary-600 hover:bg-primary-700 shadow-primary-600/20 flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5">
              Check Eligibility
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </button>

            <button className="border-primary-200 bg-background text-primary-700 hover:bg-primary-50 dark:border-primary-800 dark:text-primary-300 dark:hover:bg-primary-950 flex items-center justify-center gap-2 rounded-2xl border px-7 py-3.5 text-sm font-bold transition">
              Calculate EMI
              <ChevronRight className="size-4" />
            </button>
          </div>

          <div className="border-primary-100 dark:border-primary-900 mt-10 grid max-w-xl grid-cols-3 gap-4 border-t pt-6 sm:gap-8">
            <HeroStat value="5 Min" label="Application" />

            <HeroStat value="24 Hrs" label="Approval" />

            <HeroStat value="100%" label="Digital" />
          </div>
        </div>

        {/* Loan Calculator */}
        <LoanCalculator />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               LOAN CALCULATOR                              */
/* -------------------------------------------------------------------------- */

function LoanCalculator({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("relative mx-auto w-full max-w-lg", className)}
      {...props}
    >
      <div className="from-primary-200/40 to-secondary-200/40 dark:from-primary-900/30 dark:to-secondary-900/30 absolute -inset-5 -z-10 rounded-4xl bg-linear-to-br via-transparent blur-2xl" />

      <div className="border-primary-100 bg-background shadow-primary-950/10 dark:border-primary-900 relative rounded-4xl border p-6 shadow-2xl sm:p-8">
        <div>
          <p className="text-primary-600 text-sm font-semibold">
            Loan Calculator
          </p>

          <h2 className="font-brand-secondary mt-1 text-2xl font-bold">
            How much do you need?
          </h2>

          <p className="text-foreground/50 mt-2 text-sm">
            Adjust the amount and tenure to estimate your monthly EMI.
          </p>
        </div>

        <div className="mt-8 space-y-7">
          <RangeField
            label="Loan amount"
            value="₹5,00,000"
            min="50000"
            max="2000000"
            defaultValue="500000"
            minLabel="₹50K"
            maxLabel="₹20L"
          />

          <RangeField
            label="Loan tenure"
            value="36 Months"
            min="6"
            max="60"
            defaultValue="36"
            minLabel="6 months"
            maxLabel="60 months"
          />

          {/* EMI Result */}
          <div className="bg-primary-50 dark:bg-primary-950/70 rounded-2xl p-5">
            <div className="3xs:flex-row 3xs:items-center 3xs:justify-between flex flex-col gap-4">
              <div>
                <p className="text-foreground/50 text-xs">
                  Estimated monthly EMI
                </p>

                <p className="font-brand-secondary text-primary-700 dark:text-primary-300 mt-1 text-3xl font-bold">
                  ₹16,607
                </p>
              </div>

              <div className="bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 w-fit rounded-xl px-3 py-2 text-xs font-semibold">
                11.5% p.a.
              </div>
            </div>
          </div>

          <button className="bg-primary-600 hover:bg-primary-700 w-full rounded-2xl py-3.5 font-semibold text-white shadow-md transition">
            Get My Loan Offer
          </button>

          <p className="text-foreground/40 text-center text-xs">
            Checking eligibility will not affect your credit score.
          </p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               LOAN CATEGORIES                              */
/* -------------------------------------------------------------------------- */

function LoanCategories({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("py-20 sm:py-24", className)} {...props}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Loan Solutions"
          title="Funding for every milestone"
          description="Whatever your financial goal, find a loan designed around your needs."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {loanTypes.map((loan, index) => (
            <LoanCard key={loan.title} {...loan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               PROCESS SECTION                              */
/* -------------------------------------------------------------------------- */

function ProcessSection({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "border-primary-100 bg-primary-50/60 dark:border-primary-900 dark:bg-primary-950/20 border-y py-20 sm:py-24",
        className,
      )}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="How It Works"
          title="Your loan in 3 simple steps"
          description="A fast and straightforward process designed to make borrowing easier."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <ProcessCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              WHY CHOOSE US                                 */
/* -------------------------------------------------------------------------- */

function WhyChooseUs({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("py-20 sm:py-24", className)} {...props}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-primary-600 text-xs font-bold tracking-[0.2em] uppercase">
            Why Choose Us
          </p>

          <h2 className="font-brand-secondary mt-4 max-w-xl text-3xl leading-tight font-bold tracking-tight sm:text-5xl">
            Borrow with confidence and clarity.
          </h2>

          <p className="text-foreground/55 mt-5 max-w-xl leading-7">
            Our digital lending experience removes complicated paperwork and
            gives you transparent information before you make a financial
            decision.
          </p>

          <button className="group bg-primary-600 hover:bg-primary-700 mt-8 flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold text-white transition">
            Discover Our Benefits
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} {...benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 CTA SECTION                                */
/* -------------------------------------------------------------------------- */

function CTASection({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("px-4 pb-20 sm:px-6 lg:px-8", className)} {...props}>
      <div className="bg-primary-700 relative mx-auto max-w-7xl overflow-hidden rounded-4xl px-6 py-12 text-center text-white sm:px-10 md:py-16">
        <div className="bg-secondary-400/20 absolute -top-24 -left-24 size-64 rounded-full blur-3xl" />

        <div className="bg-accent-400/15 absolute -right-24 -bottom-24 size-64 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <p className="text-primary-200 text-xs font-bold tracking-[0.2em] uppercase">
            Get Started Today
          </p>

          <h2 className="font-brand-secondary mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Your financial goals are closer than you think.
          </h2>

          <p className="text-primary-100 mx-auto mt-5 max-w-xl text-sm leading-7 sm:text-base">
            Check your eligibility today and discover the right loan plan for
            your needs.
          </p>

          <button className="bg-background text-primary-700 group mx-auto mt-8 flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-bold transition hover:scale-[1.02]">
            Apply Now
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                            SMALL UI COMPONENTS                             */
/* -------------------------------------------------------------------------- */

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-brand-secondary text-primary-700 dark:text-primary-300 text-xl font-bold sm:text-2xl">
        {value}
      </p>

      <p className="text-foreground/50 mt-1 text-xs sm:text-sm">{label}</p>
    </div>
  );
}

function RangeField({
  label,
  value,
  min,
  max,
  defaultValue,
  minLabel,
  maxLabel,
}: {
  label: string;
  value: string;
  min: string;
  max: string;
  defaultValue: string;
  minLabel: string;
  maxLabel: string;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-4">
        <label className="text-foreground/60 text-sm font-medium">
          {label}
        </label>

        <span className="font-brand-secondary text-primary-700 dark:text-primary-300 text-lg font-bold">
          {value}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        className="accent-primary-600 w-full"
      />

      <div className="text-foreground/40 mt-2 flex justify-between text-xs">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-primary-600 text-xs font-bold tracking-[0.2em] uppercase">
        {label}
      </p>

      <h2 className="font-brand-secondary mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>

      <p className="text-foreground/55 mx-auto mt-5 max-w-2xl text-base leading-7">
        {description}
      </p>
    </div>
  );
}

function LoanCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: ElementType;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <article className="group border-foreground/5 bg-background hover:border-primary-200 shadow-primary-950/5 dark:bg-foreground/3 rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className={cn(
          "grid size-12 place-items-center rounded-2xl",
          index % 3 === 0 &&
            "bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200",

          index % 3 === 1 &&
            "bg-secondary-100 text-secondary-700 dark:bg-secondary-900/40 dark:text-secondary-200",

          index % 3 === 2 &&
            "bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-200",
        )}
      >
        <Icon className="size-5" />
      </div>

      <h3 className="font-brand-secondary mt-6 text-lg font-bold">{title}</h3>

      <p className="text-foreground/55 mt-3 text-sm leading-6">{description}</p>

      <button className="text-primary-600 mt-5 flex items-center gap-1.5 text-sm font-bold">
        Learn more
        <ChevronRight className="size-4 transition group-hover:translate-x-1" />
      </button>
    </article>
  );
}

function ProcessCard({
  number,
  icon: Icon,
  title,
  description,
}: {
  number: string;
  icon: ElementType;
  title: string;
  description: string;
}) {
  return (
    <article className="text-center">
      <div className="relative mx-auto w-fit">
        <div className="bg-primary-600 shadow-primary-600/20 grid size-16 place-items-center rounded-2xl text-white shadow-lg">
          <Icon className="size-6" />
        </div>

        <span className="bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 absolute -top-2 -right-3 grid size-7 place-items-center rounded-full text-[10px] font-bold">
          {number}
        </span>
      </div>

      <h3 className="font-brand-secondary mt-6 text-xl font-bold">{title}</h3>

      <p className="text-foreground/55 mx-auto mt-3 max-w-sm text-sm leading-6">
        {description}
      </p>
    </article>
  );
}

function BenefitCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: ElementType;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <article className="border-primary-100 bg-background dark:border-primary-900 rounded-2xl border p-5">
      <div
        className={cn(
          "grid size-11 place-items-center rounded-xl",
          index % 2 === 0
            ? "bg-secondary-100 text-secondary-700 dark:bg-secondary-900/40 dark:text-secondary-200"
            : "bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-200",
        )}
      >
        <Icon className="size-5" />
      </div>

      <h3 className="font-brand-secondary mt-4 font-bold">{title}</h3>

      <p className="text-foreground/50 mt-2 text-sm leading-6">{description}</p>
    </article>
  );
}

export { Home };
