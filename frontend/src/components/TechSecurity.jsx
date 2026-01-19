export default function TechSecurity() {
  return (
    <main className="bg-black text-white">

      {/* HEADER */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold">
              Technology & Security
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Built with reliability, scalability, and data ownership
              at the core — not buzzwords.
            </p>
          </div>
        </div>
      </section>

      {/* TECH STACK OVERVIEW */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">
              Technology Approach
            </h2>
            <p className="mt-4 text-gray-400">
              Our systems are built using modern, proven web technologies
              that prioritize maintainability and long-term support.
            </p>
            <p className="mt-4 text-gray-400">
              We avoid unnecessary complexity and focus on architectures
              that are easy to extend as your business grows.
            </p>
          </div>

          <div className="border border-white/10 rounded-md p-6">
            <ul className="space-y-4 text-sm text-gray-400">
              <li>• Web-based, modular system architecture</li>
              <li>• Secure authentication and role-based access</li>
              <li>• Centralized data storage</li>
              <li>• Scalable backend design</li>
              <li>• Optional mobile-friendly interfaces</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">
              Security & Data Protection
            </h2>
            <p className="mt-4 text-gray-400">
              Security is designed into the system from the beginning,
              not added as an afterthought.
            </p>
            <p className="mt-4 text-gray-400">
              We follow best practices to ensure your data remains
              protected, auditable, and under your control.
            </p>
          </div>

          <div className="border border-white/10 rounded-md p-6">
            <ul className="space-y-4 text-sm text-gray-400">
              <li>• Role-based permissions and access control</li>
              <li>• Secure authentication workflows</li>
              <li>• Data ownership remains with the client</li>
              <li>• Regular backups and recovery planning</li>
              <li>• Secure deployment environments</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DEPLOYMENT */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold">
              Deployment & Control
            </h2>
            <p className="mt-4 text-gray-400">
              Systems can be deployed based on your operational needs —
              cloud-based, internal infrastructure, or hybrid setups.
            </p>
            <p className="mt-4 text-gray-400">
              You retain full visibility and control over how and where
              your system operates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold">
              Need Clarity on Architecture or Security?
            </h2>
            <p className="mt-4 text-gray-400">
              We’re happy to walk you through how your system would be
              designed and secured.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-100 transition-colors"
              >
                Discuss Technical Details
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
