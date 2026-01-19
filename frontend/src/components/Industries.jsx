export default function Industries() {
  return (
    <main className="bg-black text-white">

      {/* HEADER */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold">
              Industries We Work With
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              We build internal systems for businesses that need clarity,
              control, and software tailored to how they operate.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRY GRID */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Clinics & Healthcare",
              desc: "Patient records, appointments, billing, and operational dashboards."
            },
            {
              title: "Distributors & Traders",
              desc: "Inventory tracking, invoicing, order flow, and reporting."
            },
            {
              title: "Agencies",
              desc: "Client management, project tracking, and internal operations."
            },
            {
              title: "Educational Institutes",
              desc: "Student data, admissions, payments, and staff coordination."
            },
            {
              title: "Real Estate",
              desc: "Lead tracking, property listings, follow-ups, and performance visibility."
            },
            {
              title: "Service Businesses",
              desc: "Operations tracking, scheduling, billing, and analytics."
            },
          ].map((industry) => (
            <div
              key={industry.title}
              className="border border-white/10 rounded-md p-6"
            >
              <h3 className="text-sm font-medium">
                {industry.title}
              </h3>
              <p className="mt-4 text-sm text-gray-400">
                {industry.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FLEXIBILITY MESSAGE */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold">
              Adaptable by Design
            </h2>
            <p className="mt-4 text-gray-400">
              While industries differ, the core challenges remain similar.
              Our systems are designed to adapt to different workflows,
              regulations, and operational structures.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold">
              Not Sure If You’re a Fit?
            </h2>
            <p className="mt-4 text-gray-400">
              If your business relies on manual processes or disconnected tools,
              we can likely help.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-100 transition-colors"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
