"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";


export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const NavLink = ({ href, label }) => {
    const active = pathname === href || (href === "/#services" && pathname === "/");
    return (
      <Link
        href={href}
        className={`relative px-3 py-2 rounded-md transition group ${active ? "text-neutral-900" : "text-neutral-700 hover:text-neutral-900"}`}
      >
        <span className="relative z-10">{label}</span>
        <span className="absolute left-0 right-0 -bottom-1 h-[2px] grad-ring rounded-full opacity-0 group-hover:opacity-100 transition" />
        <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition neon-shadow"></span>
      </Link>
    );
  };

  const MenuButton = ({ href, label }) => {
    const active = pathname === href || (href === "/#services" && pathname === "/");
    return (
      <Link
        href={href}
        className="group relative block w-full"
        style={{ fontFamily: 'Times New Roman, serif' }}
      >
        <button
          type="button"
          className={`relative w-full px-6 py-4 text-left font-semibold text-base rounded-lg transition-all duration-200 ease-in-out ${
            active
              ? "bg-[#00448a] text-white shadow-lg shadow-[#00448a]/30 border-2 border-[#00448a] transform scale-[0.98]"
              : "bg-white text-neutral-700 border-2 border-neutral-300 shadow-md hover:bg-[#00448a] hover:text-white hover:border-[#00448a] hover:shadow-xl hover:shadow-[#00448a]/20 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]"
          }`}
        >
          {/* Button pressed effect for active state */}
          {active && (
            <div className="absolute inset-0 rounded-lg bg-black/10 pointer-events-none" />
          )}
          
          {/* Hover glow effect */}
          <div
            className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
              active ? "hidden" : "bg-gradient-to-r from-[#00448a]/10 via-[#26ebe5]/10 to-[#00448a]/10"
            }`}
          />
          
          {/* Content wrapper */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="relative z-10">{label}</span>
            
            {/* Icon indicator */}
            <div className="relative z-10 flex items-center">
              {active ? (
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </div>
          </div>
          
          {/* Top highlight for 3D effect */}
          <div
            className={`absolute top-0 left-0 right-0 h-1/2 rounded-t-lg pointer-events-none ${
              active
                ? "bg-white/10"
                : "bg-gradient-to-b from-white/50 to-transparent group-hover:from-white/20 group-hover:to-transparent"
            }`}
          />
        </button>
      </Link>
    );
  };

  // Close on escape key
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (!open) return;
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ fontFamily: 'Times New Roman, serif' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-4 bg-white/50 border border-white/40 backdrop-blur-lg gradient-border rounded-2xl px-2 sm:px-6 py-2 sm:py-3 flex items-center">
          {/* Left: Logo and Title side by side - Unique Geometric Design */}
          <Link href="/" className="flex-1 min-w-0 flex items-center gap-2 sm:gap-4 group">
            {/* Round Logo */}
            <div className="relative flex-shrink-0">
              <div className="h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center">
                <img
                  src="/img1.jpg"
                  alt="VAWE logo"
                  className="h-10 w-10 sm:h-14 sm:w-14 object-cover rounded-full border-2 border-[#00448a]"
                />
              </div>
            </div>
            
            {/* Plain Text Title */}
            <div className="relative block">
              <h1
                className="flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-2"
                style={{ fontFamily: 'Times New Roman, serif', color: '#00448a' }}
              >
                <span
                  className="text-xl sm:text-3xl md:text-4xl font-bold tracking-wide sm:tracking-[0.10em] md:tracking-[0.05em] leading-tight"
                  style={{ color: '#00448a', textShadow: '0 1px 1px rgba(255,255,255,0.6), 0 0 8px rgba(0,68,138,0.35)', filter: 'brightness(1.08)' }}
                >
                  VAWE
                </span>
                <span
                  className="text-sm sm:text-xl md:text-2xl font-semibold leading-tight"
                  style={{ color: '#00448a', textShadow: '0 1px 1px rgba(255,255,255,0.35), 0 0 4px rgba(0,68,138,0.2)' }}
                >
                  Global Tech
                </span>
              </h1>
            </div>
          </Link>

          {/* Right: Call + Hamburger */}
          <div className="flex-1 min-w-0 flex justify-end items-center gap-1.5 sm:gap-2">
            <a
              href="tel:+918885103333"
              aria-label="Call VAWE Global Tech"
              className="p-1.5 sm:px-3 sm:py-2 rounded-lg text-white hover:brightness-110 transition"
              style={{ backgroundColor: 'var(--vawe-green)', color: 'white', fontFamily: 'Times New Roman, serif' }}
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="p-1.5 sm:px-3 sm:py-2 rounded-lg bg-white/50 border border-white/50 backdrop-blur-lg gradient-border flex items-center gap-1.5 sm:gap-2"
            >
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm hidden sm:inline">Menu</span>
            </button>
          </div>
        </div>

        {/* Overlay Menu - Right Drawer */}
        {open && (
          <div className="fixed inset-0 z-40" role="dialog" aria-modal="true">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
            <div className="absolute top-[84px] right-0 w-80 sm:w-[28rem] pr-4" ref={menuRef}>
              <div className="max-h-[calc(100vh-120px)] h-auto bg-white/95 backdrop-blur-md gradient-border rounded-l-2xl px-4 py-3 flex flex-col overflow-auto">
                {/* Drawer header with logo + title and close */}
                <div className="flex items-center justify-between pb-2 border-b border-black/10">
                  <Link href="/" className="flex items-center gap-2 sm:gap-3 group" onClick={() => setOpen(false)}>
                    {/* Round Logo */}
                    <div className="relative flex-shrink-0">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center">
                        <img
                          src="/img1.jpg"
                          alt="VAWE logo"
                          className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full border-2 border-[#00448a]"
                        />
                      </div>
                    </div>
                    
                    {/* Plain Text Title */}
                    <div className="relative block">
                      <h1
                        className="flex flex-col items-start gap-0"
                        style={{ fontFamily: 'Times New Roman, serif', color: '#00448a' }}
                      >
                        <span
                          className="text-xl sm:text-2xl font-bold tracking-wide leading-tight"
                          style={{ color: '#00448a', textShadow: '0 1px 1px rgba(255,255,255,0.6), 0 0 8px rgba(0,68,138,0.35)', filter: 'brightness(1.08)' }}
                        >
                          VAWE
                        </span>
                        <span
                          className="text-sm sm:text-base font-semibold leading-tight"
                          style={{ color: '#00448a', textShadow: '0 1px 1px rgba(255,255,255,0.35), 0 0 4px rgba(0,68,138,0.2)' }}
                        >
                          Global Tech
                        </span>
                      </h1>
                    </div>
                  </Link>
                  <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-black/5">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <nav className="mt-2 flex-1">
                  <ul className="flex flex-col gap-2.5 py-3">
                    <li onClick={() => setOpen(false)}><MenuButton href="/" label="Home" /></li>
                    <li onClick={() => setOpen(false)}><MenuButton href="/about" label="About Us" /></li>
                    <li onClick={() => setOpen(false)}><MenuButton href="/services" label="Services" /></li>
                    <li onClick={() => setOpen(false)}><MenuButton href="/products" label="Products" /></li>
                    <li onClick={() => setOpen(false)}><MenuButton href="/packages" label="Packages" /></li>
                    <li onClick={() => setOpen(false)}><MenuButton href="/digital-marketing" label="Digital Marketing" /></li>
                    <li onClick={() => setOpen(false)}><MenuButton href="/institutes" label="VAWE Institutes" /></li>
                    <li onClick={() => setOpen(false)}><MenuButton href="/contact" label="Contact" /></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


