export default function About() {
  return (
    <main className="bg-black text-white">

      {/* HEADER */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold">
              About MangoBrains
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              MangoBrains is a technology studio focused on building
              custom internal business systems that solve real
              operational problems.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold">
              Our Philosophy
            </h2>
            <p className="mt-4 text-gray-400">
              We believe software should adapt to businesses — not the
              other way around. Our approach is grounded in understanding
              workflows, constraints, and long-term goals before writing
              code.
            </p>
          </div>
        </div>
      </section>

      {/* WHY MANGOBRAINS */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">
              Why MangoBrains
            </h2>
            <p className="mt-4 text-gray-400">
              We don’t sell templates or licenses. Every system is built
              from the ground up to match how your business actually runs.
            </p>
            <p className="mt-4 text-gray-400">
              This results in software that is simpler, more efficient,
              and easier to maintain over time.
            </p>
          </div>

          <div className="border border-white/10 rounded-md p-6">
            <ul className="space-y-4 text-sm text-gray-400">
              <li>• Process-first system design</li>
              <li>• Custom-built, not configured</li>
              <li>• Long-term maintainability</li>
              <li>• Direct collaboration</li>
              <li>• No unnecessary features</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TEAM NOTE */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold">
              Small Team, Focused Work
            </h2>
            <p className="mt-4 text-gray-400">
              We operate as a small, focused team to ensure clarity,
              accountability, and direct involvement throughout the
              project lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold">
              Let’s Build Something Useful
            </h2>
            <p className="mt-4 text-gray-400">
              If you value clarity, simplicity, and systems that evolve
              with your business, we should talk.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
