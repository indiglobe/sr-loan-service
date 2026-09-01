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
      <div className="bg-background text-foreground min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Decorative background */}
          <div className="bg-primary-200/30 dark:bg-primary-900/20 absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl" />

          <div className="bg-secondary-200/30 dark:bg-secondary-900/20 absolute -bottom-40 -left-40 h-96 w-96 rounded-full blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            {/* Hero Left */}
            <div>
              <div className="border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300 mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold">
                <span className="bg-accent-500 h-2 w-2 rounded-full" />
                Simple loans. Faster approvals.
              </div>

              <h1 className="font-brand-secondary max-w-2xl text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
                Money when you need it,
                <span className="text-primary-600 dark:text-primary-400">
                  {" "}
                  without the stress.
                </span>
              </h1>

              <p className="text-foreground/60 mt-6 max-w-xl text-base leading-7 sm:text-lg">
                Find flexible personal, home, education and business loans with
                transparent rates, easy documentation and a completely digital
                application process.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="bg-primary-600 shadow-primary-600/20 hover:bg-primary-700 rounded-2xl px-7 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
                  Check Eligibility
                </button>

                <button className="border-primary-200 bg-background text-primary-700 hover:bg-primary-50 dark:border-primary-800 dark:text-primary-300 dark:hover:bg-primary-950 rounded-2xl border px-7 py-3.5 font-semibold transition">
                  Calculate EMI
                </button>
              </div>

              {/* Statistics */}
              <div className="border-primary-100 dark:border-primary-900 mt-10 grid max-w-xl grid-cols-3 gap-4 border-t pt-6 sm:gap-8">
                <div>
                  <p className="font-brand-secondary text-primary-700 dark:text-primary-300 text-xl font-bold sm:text-2xl">
                    5 Min
                  </p>

                  <p className="text-foreground/50 mt-1 text-xs sm:text-sm">
                    Application
                  </p>
                </div>

                <div>
                  <p className="font-brand-secondary text-primary-700 dark:text-primary-300 text-xl font-bold sm:text-2xl">
                    24 Hrs
                  </p>

                  <p className="text-foreground/50 mt-1 text-xs sm:text-sm">
                    Approval
                  </p>
                </div>

                <div>
                  <p className="font-brand-secondary text-primary-700 dark:text-primary-300 text-xl font-bold sm:text-2xl">
                    100%
                  </p>

                  <p className="text-foreground/50 mt-1 text-xs sm:text-sm">
                    Digital
                  </p>
                </div>
              </div>
            </div>

            {/* Loan Calculator Card */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="from-primary-200/40 to-secondary-200/40 dark:from-primary-900/30 dark:to-secondary-900/30 absolute -inset-5 rounded-4xl bg-linear-to-br via-transparent blur-2xl" />

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
                  {/* Amount */}
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <label className="text-foreground/60 text-sm font-medium">
                        Loan amount
                      </label>

                      <span className="font-brand-secondary text-primary-700 dark:text-primary-300 text-lg font-bold">
                        ₹5,00,000
                      </span>
                    </div>

                    <input
                      type="range"
                      min="50000"
                      max="2000000"
                      defaultValue="500000"
                      className="accent-primary-600 w-full"
                    />

                    <div className="text-foreground/40 mt-2 flex justify-between text-xs">
                      <span>₹50K</span>
                      <span>₹20L</span>
                    </div>
                  </div>

                  {/* Tenure */}
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <label className="text-foreground/60 text-sm font-medium">
                        Loan tenure
                      </label>

                      <span className="text-primary-700 dark:text-primary-300 font-semibold">
                        36 Months
                      </span>
                    </div>

                    <input
                      type="range"
                      min="6"
                      max="60"
                      defaultValue="36"
                      className="accent-primary-600 w-full"
                    />

                    <div className="text-foreground/40 mt-2 flex justify-between text-xs">
                      <span>6 months</span>
                      <span>60 months</span>
                    </div>
                  </div>

                  {/* EMI */}
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
          </div>
        </section>

        {/* Loan Categories */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-primary-600 text-sm font-bold tracking-widest uppercase">
                Loan Solutions
              </p>

              <h2 className="font-brand-secondary mt-3 text-3xl font-bold sm:text-4xl">
                Funding for every milestone
              </h2>

              <p className="text-foreground/55 mt-4">
                Whatever your financial goal, find a loan designed around your
                needs.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {loanTypes.map((loan) => (
                <div
                  key={loan.title}
                  className="group border-primary-100 bg-background hover:border-primary-300 dark:border-primary-900 rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="bg-primary-100 text-primary-700 group-hover:bg-primary-600 dark:bg-primary-900 dark:text-primary-300 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-bold transition group-hover:text-white">
                    {loan.icon}
                  </div>

                  <h3 className="font-brand-secondary text-lg font-bold">
                    {loan.title}
                  </h3>

                  <p className="text-foreground/55 mt-2 text-sm leading-6">
                    {loan.description}
                  </p>

                  <button className="text-primary-600 mt-5 font-semibold transition group-hover:translate-x-1">
                    Learn more →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-primary-100 bg-primary-50/60 dark:border-primary-900 dark:bg-primary-950/20 border-y py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="text-primary-600 text-sm font-bold tracking-widest uppercase">
                How it works
              </p>

              <h2 className="font-brand-secondary mt-3 text-3xl font-bold sm:text-4xl">
                Your loan in 3 simple steps
              </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="bg-primary-600 font-brand-secondary shadow-primary-600/20 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-lg">
                    {step.number}
                  </div>

                  <h3 className="font-brand-secondary text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="text-foreground/55 mx-auto mt-3 max-w-sm text-sm leading-6">
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
              <p className="text-primary-600 text-sm font-bold tracking-widest uppercase">
                Why choose us
              </p>

              <h2 className="font-brand-secondary mt-3 max-w-xl text-3xl leading-tight font-bold sm:text-4xl">
                Borrow with confidence and clarity.
              </h2>

              <p className="text-foreground/55 mt-5 max-w-xl leading-7">
                Our digital lending experience removes complicated paperwork and
                gives you transparent information before you make a financial
                decision.
              </p>

              <button className="bg-primary-600 hover:bg-primary-700 mt-8 rounded-2xl px-6 py-3 font-semibold text-white transition">
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
                  className="border-primary-100 bg-background dark:border-primary-900 rounded-2xl border p-5"
                >
                  <div className="bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 mb-4 flex h-10 w-10 items-center justify-center rounded-xl font-bold">
                    {benefit.icon}
                  </div>

                  <h3 className="font-brand-secondary font-bold">
                    {benefit.title}
                  </h3>

                  <p className="text-foreground/50 mt-2 text-sm leading-6">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="bg-primary-700 mx-auto max-w-7xl overflow-hidden rounded-4xl px-6 py-12 text-center text-white sm:px-10 md:py-16">
            <p className="text-primary-200 text-sm font-bold tracking-widest uppercase">
              Get started today
            </p>

            <h2 className="font-brand-secondary mx-auto mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
              Your financial goals are closer than you think.
            </h2>

            <p className="text-primary-100 mx-auto mt-4 max-w-xl text-sm leading-6 sm:text-base">
              Check your eligibility today and discover the right loan plan for
              your needs.
            </p>

            <button className="bg-background text-primary-700 mt-8 rounded-2xl px-7 py-3.5 font-semibold transition hover:scale-[1.02]">
              Apply Now
            </button>
          </div>
        </section>
      </div>
    </Main>
  );
}
