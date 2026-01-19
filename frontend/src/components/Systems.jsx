export default function Systems() {
  return (
    <main className="bg-black text-white">

      {/* HEADER */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold">
              Business Systems We Build
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Custom internal software designed around real operational workflows,
              not generic ERP templates.
            </p>
          </div>
        </div>
      </section>

      {/* SYSTEM CATEGORIES */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Sales & Lead Management",
              desc: "Track enquiries, manage follow-ups, and gain visibility into your sales pipeline."
            },
            {
              title: "Inventory & Billing",
              desc: "Control stock movement, invoicing, and transaction records in one system."
            },
            {
              title: "Operations & Staff",
              desc: "Manage internal workflows, roles, and daily operations with clarity."
            },
            {
              title: "Analytics & Reporting",
              desc: "Dashboards and reports that show how your business actually performs."
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-white/10 rounded-md p-6"
            >
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="mt-4 text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOMIZATION MESSAGE */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold">
              Built Around Your Workflow
            </h2>
            <p className="mt-4 text-gray-400">
              Every system is designed after understanding how your business
              operates. We adapt the software to your process — not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold">
              Need a System That Actually Fits?
            </h2>
            <p className="mt-4 text-gray-400">
              Tell us how your operations work and we’ll design the system around it.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-100 transition-colors"
              >
                Discuss Your Requirements
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
