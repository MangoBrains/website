export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <h3 className="text-white font-semibold tracking-wide">
              MangoBrains
            </h3>
            <p className="mt-4 text-sm text-gray-400 max-w-sm">
              We build custom internal business systems designed
              around how companies actually operate.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-sm font-medium text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Systems</a></li>
              <li><a href="#" className="hover:text-white">Process</a></li>
              <li><a href="#" className="hover:text-white">Industries</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-medium text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>Email: <span className="text-gray-300">contact@mangobrains.com</span></li>
              <li>Location: <span className="text-gray-300">India</span></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} MangoBrains. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
