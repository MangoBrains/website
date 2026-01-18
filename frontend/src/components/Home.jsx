import IntegratedCyberTree from "./IntegratedCyberTree";
import MasterSystemTree from "./MasterSystemTree";
import SystemMangoTree from "./SystemMangoTree";

export default function Home() {
  return (
    <main className="bg-black text-white">
{/* 
      BLOCK 1: HERO */}
      {/* <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Custom Business Systems
              <br />
              Designed to Fit Your Business Workflows
            </h1>

            <p className="mt-6 text-lg text-gray-400">
              We design internal software that centralizes operations and replaces fragmented tools and manual workflows.
            </p> */}

            {/* CORE POSITIONING (MERGED BLOCK 3) */}
            {/* <p className="mt-4 text-gray-400">
              We don’t provide off-the-shelf products. Every system is designed
              around how your business actually operates, ensuring the software
              adapts to the business — not the other way around.
            </p>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-100 transition-colors"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </section>  */}

      {/* <MasterSystemTree /> */}

      <IntegratedCyberTree />
      
      {/* BLOCK 2: PROBLEM SNAPSHOT
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Data scattered across Excel and WhatsApp",
              "No real visibility into operations",
              "Manual follow-ups and reporting",
              "Systems that don’t match your workflow",
              "Bloated software with unused features",
            ].map((problem) => (
              <div
                key={problem}
                className="rounded-md border border-white/10 p-6 text-gray-300"
              >
                {problem}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* BLOCK 3: CORE SOLUTION OVERVIEW
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold">
              Systems Designed Around Real Operational Workflows
            </h2>

            <p className="mt-4 text-gray-400">
              We don’t provide off-the-shelf products. Every system is designed around your real operational workflows, ensuring the software fits the business—not the other way around.
            </p>
          </div>
        </div>
      </section> */}

      {/* BLOCK 4: SYSTEM CATEGORIES */}

      {/* <SystemMangoTree /> */}

      {/* <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Sales & Customer Tracking",
              "Payments, Invoices & Records",
              "Operations & Team Workflow",
              "Performance & Business Insights",
            ].map((system) => (
              <div
                key={system}
                className="rounded-md border border-white/10 p-6"
              >
                <h3 className="text-sm font-medium">{system}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* BLOCK 5: HOW IT WORKS (PREVIEW) */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-semibold">
              How We Work With You
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Understand how you work today",
              "Design the right system",
              "Build and launch",
              "Improve as you grow",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-md border border-white/10 p-6 text-gray-300"
              >
                <span className="block text-xs text-gray-500">
                  Step {index + 1}
                </span>
                <span className="block mt-2">{step}</span>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* BLOCK 6: WHO IT’S FOR */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-semibold">
              Designed for Growing Businesses
            </h2>
            <p className="mt-3 text-gray-400">
              For organizations formalizing internal workflows and operations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Founders & Owners",
              "Operations Managers",
              "Sales & Admin Teams",
              "Finance & Reporting Teams",
              "Businesses building internal systems",
              "Teams replacing manual workflows",
            ].map((item) => (
              <div
                key={item}
                className="rounded-md border border-white/10 p-6 text-gray-300"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* BLOCK 7: TRUST BUILDER */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold">
              Production-First System Design
            </h2>

            <p className="mt-4 text-gray-400">
              We prioritize maintainable architectures and long-term usability over quick implementations or superficial features.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 8: FINAL CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold">
              Build a System That Fits
            </h2>

            <p className="mt-4 text-gray-400">
              Designed around how you work.
            </p>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-100 transition-colors"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
