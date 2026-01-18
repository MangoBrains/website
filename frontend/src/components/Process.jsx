export default function Process() {
  return (
    <main className="bg-black text-white">

      {/* HEADER */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold">
              How We Work
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              A clear, structured process focused on understanding your business
              before writing a single line of code.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Discovery",
              desc: "We understand your workflows, pain points, and operational goals."
            },
            {
              step: "02",
              title: "System Design",
              desc: "We design the system structure around your real-world processes."
            },
            {
              step: "03",
              title: "Build & Deploy",
              desc: "We build, test, and deploy the system in controlled stages."
            },
            {
              step: "04",
              title: "Iterate & Support",
              desc: "We refine, scale, and support the system as your business evolves."
            },
          ].map((item) => (
            <div
              key={item.step}
              className="border border-white/10 rounded-md p-6"
            >
              <span className="text-xs text-gray-500">
                Step {item.step}
              </span>
              <h3 className="mt-2 text-sm font-medium">
                {item.title}
              </h3>
              <p className="mt-4 text-sm text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT INVOLVEMENT */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold">
              Transparent Collaboration
            </h2>
            <p className="mt-4 text-gray-400">
              You’re involved at every critical stage — from defining workflows
              to validating system behavior — ensuring the final product matches
              real operational needs.
            </p>
          </div>
        </div>
      </section>

      {/* DELIVERY MODEL */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold">
              Structured Delivery
            </h2>
            <p className="mt-4 text-gray-400">
              Projects are delivered in phases with clear scope, milestones,
              and handover — no black-box development or surprises.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold">
              Ready to Start the Process?
            </h2>
            <p className="mt-4 text-gray-400">
              Let’s discuss your workflows and design a system that fits.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-100 transition-colors"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
