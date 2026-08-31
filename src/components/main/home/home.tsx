import Main from "../main";

export function Home() {
  const loanTypes = [
    {
      icon: "₹",
      title: "Personal Loan",
      description:
        "Get quick funds for travel, medical expenses, weddings, or personal needs.",
    },
    {
      icon: "⌂",
      title: "Home Loan",
      description:
        "Flexible financing options to help you purchase your dream home.",
    },
    {
      icon: "🎓",
      title: "Education Loan",
      description:
        "Invest in your education with convenient and flexible repayment plans.",
    },
    {
      icon: "↗",
      title: "Business Loan",
      description:
        "Get the capital you need to start, manage, or grow your business.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Apply Online",
      description:
        "Enter your basic information and select your preferred loan amount.",
    },
    {
      number: "02",
      title: "Quick Verification",
      description:
        "Submit your documents securely and complete a quick eligibility check.",
    },
    {
      number: "03",
      title: "Receive Funds",
      description:
        "Once approved, the loan amount is transferred directly to your account.",
    },
  ];

  return (
    <Main>
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl dark:bg-primary-900/20" />

          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary-200/30 blur-3xl dark:bg-secondary-900/20" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            {/* Hero Left */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-xs font-semibold text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300">
                <span className="h-2 w-2 rounded-full bg-accent-500" />
                Simple loans. Faster approvals.
              </div>

              <h1 className="max-w-2xl font-brand-secondary text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Money when you need it,
                <span className="text-primary-600 dark:text-primary-400">
                  {" "}
                  without the stress.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-foreground/60 sm:text-lg">
                Find flexible personal, home, education and business loans with
                transparent rates, easy documentation and a completely digital
                application process.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-2xl bg-primary-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-primary-600/20 transition hover:-translate-y-0.5 hover:bg-primary-700">
                  Check Eligibility
                </button>

                <button className="rounded-2xl border border-primary-200 bg-background px-7 py-3.5 font-semibold text-primary-700 transition hover:bg-primary-50 dark:border-primary-800 dark:text-primary-300 dark:hover:bg-primary-950">
                  Calculate EMI
                </button>
              </div>

              {/* Statistics */}
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-primary-100 pt-6 dark:border-primary-900 sm:gap-8">
                <div>
                  <p className="font-brand-secondary text-xl font-bold text-primary-700 dark:text-primary-300 sm:text-2xl">
                    5 Min
                  </p>

                  <p className="mt-1 text-xs text-foreground/50 sm:text-sm">
                    Application
                  </p>
                </div>

                <div>
                  <p className="font-brand-secondary text-xl font-bold text-primary-700 dark:text-primary-300 sm:text-2xl">
                    24 Hrs
                  </p>

                  <p className="mt-1 text-xs text-foreground/50 sm:text-sm">
                    Approval
                  </p>
                </div>

                <div>
                  <p className="font-brand-secondary text-xl font-bold text-primary-700 dark:text-primary-300 sm:text-2xl">
                    100%
                  </p>

                  <p className="mt-1 text-xs text-foreground/50 sm:text-sm">
                    Digital
                  </p>
                </div>
              </div>
            </div>

            {/* Loan Calculator Card */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-primary-200/40 via-transparent to-secondary-200/40 blur-2xl dark:from-primary-900/30 dark:to-secondary-900/30" />

              <div className="relative rounded-[2rem] border border-primary-100 bg-background p-6 shadow-2xl shadow-primary-950/10 dark:border-primary-900 sm:p-8">
                <div>
                  <p className="text-sm font-semibold text-primary-600">
                    Loan Calculator
                  </p>

                  <h2 className="mt-1 font-brand-secondary text-2xl font-bold">
                    How much do you need?
                  </h2>

                  <p className="mt-2 text-sm text-foreground/50">
                    Adjust the amount and tenure to estimate your monthly EMI.
                  </p>
                </div>

                <div className="mt-8 space-y-7">
                  {/* Amount */}
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <label className="text-sm font-medium text-foreground/60">
                        Loan amount
                      </label>

                      <span className="font-brand-secondary text-lg font-bold text-primary-700 dark:text-primary-300">
                        ₹5,00,000
                      </span>
                    </div>

                    <input
                      type="range"
                      min="50000"
                      max="2000000"
                      defaultValue="500000"
                      className="w-full accent-primary-600"
                    />

                    <div className="mt-2 flex justify-between text-xs text-foreground/40">
                      <span>₹50K</span>
                      <span>₹20L</span>
                    </div>
                  </div>

                  {/* Tenure */}
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <label className="text-sm font-medium text-foreground/60">
                        Loan tenure
                      </label>

                      <span className="font-semibold text-primary-700 dark:text-primary-300">
                        36 Months
                      </span>
                    </div>

                    <input
                      type="range"
                      min="6"
                      max="60"
                      defaultValue="36"
                      className="w-full accent-primary-600"
                    />

                    <div className="mt-2 flex justify-between text-xs text-foreground/40">
                      <span>6 months</span>
                      <span>60 months</span>
                    </div>
                  </div>

                  {/* EMI */}
                  <div className="rounded-2xl bg-primary-50 p-5 dark:bg-primary-950/70">
                    <div className="flex flex-col gap-4 3xs:flex-row 3xs:items-center 3xs:justify-between">
                      <div>
                        <p className="text-xs text-foreground/50">
                          Estimated monthly EMI
                        </p>

                        <p className="mt-1 font-brand-secondary text-3xl font-bold text-primary-700 dark:text-primary-300">
                          ₹16,607
                        </p>
                      </div>

                      <div className="w-fit rounded-xl bg-secondary-100 px-3 py-2 text-xs font-semibold text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200">
                        11.5% p.a.
                      </div>
                    </div>
                  </div>

                  <button className="w-full rounded-2xl bg-primary-600 py-3.5 font-semibold text-white shadow-md transition hover:bg-primary-700">
                    Get My Loan Offer
                  </button>

                  <p className="text-center text-xs text-foreground/40">
                    Checking eligibility will not affect your credit score.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Categories */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-primary-600">
                Loan Solutions
              </p>

              <h2 className="mt-3 font-brand-secondary text-3xl font-bold sm:text-4xl">
                Funding for every milestone
              </h2>

              <p className="mt-4 text-foreground/55">
                Whatever your financial goal, find a loan designed around your
                needs.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {loanTypes.map((loan) => (
                <div
                  key={loan.title}
                  className="group rounded-3xl border border-primary-100 bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl dark:border-primary-900"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-xl font-bold text-primary-700 transition group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-900 dark:text-primary-300">
                    {loan.icon}
                  </div>

                  <h3 className="font-brand-secondary text-lg font-bold">
                    {loan.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-foreground/55">
                    {loan.description}
                  </p>

                  <button className="mt-5 font-semibold text-primary-600 transition group-hover:translate-x-1">
                    Learn more →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-y border-primary-100 bg-primary-50/60 py-20 dark:border-primary-900 dark:bg-primary-950/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-primary-600">
                How it works
              </p>

              <h2 className="mt-3 font-brand-secondary text-3xl font-bold sm:text-4xl">
                Your loan in 3 simple steps
              </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600 font-brand-secondary text-lg font-bold text-white shadow-lg shadow-primary-600/20">
                    {step.number}
                  </div>

                  <h3 className="font-brand-secondary text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-foreground/55">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary-600">
                Why choose us
              </p>

              <h2 className="mt-3 max-w-xl font-brand-secondary text-3xl font-bold leading-tight sm:text-4xl">
                Borrow with confidence and clarity.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-foreground/55">
                Our digital lending experience removes complicated paperwork
                and gives you transparent information before you make a
                financial decision.
              </p>

              <button className="mt-8 rounded-2xl bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700">
                Discover Our Benefits
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: "✓",
                  title: "Transparent Rates",
                  text: "Clear rates and charges with no surprises.",
                },
                {
                  icon: "⚡",
                  title: "Quick Approval",
                  text: "Fast eligibility and application processing.",
                },
                {
                  icon: "🔒",
                  title: "Secure & Private",
                  text: "Your personal information remains protected.",
                },
                {
                  icon: "↻",
                  title: "Flexible Tenure",
                  text: "Choose repayment plans that suit your budget.",
                },
              ].map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-primary-100 bg-background p-5 dark:border-primary-900"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-100 font-bold text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200">
                    {benefit.icon}
                  </div>

                  <h3 className="font-brand-secondary font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-foreground/50">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary-700 px-6 py-12 text-center text-white sm:px-10 md:py-16">
            <p className="text-sm font-bold uppercase tracking-widest text-primary-200">
              Get started today
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl font-brand-secondary text-3xl font-bold sm:text-4xl">
              Your financial goals are closer than you think.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-primary-100 sm:text-base">
              Check your eligibility today and discover the right loan plan for
              your needs.
            </p>

            <button className="mt-8 rounded-2xl bg-background px-7 py-3.5 font-semibold text-primary-700 transition hover:scale-[1.02]">
              Apply Now
            </button>
          </div>
        </section>
      </div>
    </Main>
  );
}