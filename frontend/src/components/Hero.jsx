export default function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Custom Business Systems
            <br />
            Built Around How You Work
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            We design and build internal business software that replaces
            spreadsheets, manual workflows, and disconnected tools.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-100 transition-colors"
            >
              Request a Demo
            </a>

            <a
              href="#"
              className="inline-flex items-center rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
