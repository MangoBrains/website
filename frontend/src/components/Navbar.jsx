import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoweb1.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Systems", href: "/systems" },
  { name: "Process", href: "/process" },
  { name: "Industries", href: "/industries" },
  { name: "Tech & Security", href: "/tech" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-14 items-center justify-between">

          {/* LOGO + BRAND */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="h-8 w-8 flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="MangoBrains logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <span className="text-white font-semibold tracking-wide whitespace-nowrap">
              MangoBrains
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="ml-2 rounded-md bg-white px-4 py-1.5 text-sm font-medium text-black hover:bg-gray-100 transition-colors"
            >
              Contact / Demo
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 text-xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black text-center hover:bg-gray-100 transition-colors"
            >
              Contact / Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
