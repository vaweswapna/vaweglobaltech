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
        <div className="mt-4 bg-white/50 border border-white/40 backdrop-blur-lg gradient-border rounded-2xl px-4 sm:px-6 py-3 flex items-center">
          {/* Left: Logo and Title side by side - Unique Geometric Design */}
          <Link href="/" className="flex-1 min-w-0 flex items-center gap-3 sm:gap-4 group">
            {/* Hexagon Logo Container */}
            <div className="relative flex-shrink-0">
              <div 
                className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00448a] via-[#00448a]/80 to-[#26ebe5] opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src="/img1.jpg" 
                  alt="VAWE logo" 
                  className="relative h-10 w-10 sm:h-11 sm:w-11 object-cover z-10"
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                  }}
                />
              </div>
              {/* Corner accent */}
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-[#26ebe5] rounded-sm rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Text Container with Modern Design */}
            <div className="relative block">
              <div className="relative pl-1 pr-2 sm:pr-4 py-2 bg-white/40 backdrop-blur-md rounded-r-2xl border-l-4 border-[#00448a] shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:bg-white/60">
                <div className="flex flex-col leading-tight">
                  <div className="flex items-baseline gap-1 sm:gap-2">
                    <h1 
                      className="text-base sm:text-xl md:text-xl lg:text-2xl font-black leading-none whitespace-nowrap max-w-[45vw] sm:max-w-[60vw] truncate"
                      style={{ 
                        fontFamily: '"Times New Roman", serif',
                        letterSpacing: '0.05em',
                        color: '#00448a',
                        fontWeight: 900
                      }}
                    >
                      VAWE
                    </h1>
                    {/* Diagonal accent line */}
                    <div className="hidden sm:block h-6 w-0.5 bg-gradient-to-b from-[#00448a] to-[#26ebe5] rotate-12"></div>
                  </div>
                  <span 
                    className="inline text-[9px] sm:text-xs md:text-sm lg:text-base font-semibold leading-none whitespace-nowrap mt-0.5 tracking-wider"
                    style={{ 
                      fontFamily: '"Times New Roman", serif',
                      letterSpacing: '0.15em',
                      color: '#f56c53',
                      fontWeight: 600,
                      textShadow: '0 1px 2px rgba(245, 108, 83, 0.2)'
                    }}
                  >
                    GLOBAL TECH
                  </span>
                </div>
                {/* Bottom accent line that expands on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00448a] via-[#26ebe5] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Floating accent dot */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-[#26ebe5] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg shadow-[#26ebe5]"></div>
            </div>
          </Link>

          {/* Right: Call + Hamburger */}
          <div className="flex-1 min-w-0 flex justify-end items-center gap-2">
            <a
              href="tel:+918885103333"
              aria-label="Call VAWE Global Tech"
              className="px-3 py-2 rounded-lg text-white hover:brightness-110 transition"
              style={{ backgroundColor: 'var(--vawe-green)', color: 'white', fontFamily: 'Times New Roman, serif' }}
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="px-3 py-2 rounded-lg bg-white/50 border border-white/50 backdrop-blur-lg gradient-border flex items-center gap-2"
            >
              <Menu className="h-5 w-5" />
              <span className="text-sm">Menu</span>
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
                  <div className="flex items-center gap-2">
                    <div className="relative h-8 w-8 flex items-center justify-center"
                      style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00448a] via-[#00448a]/80 to-[#26ebe5]" />
                      <img src="/img1.jpg" alt="VAWE logo" className="relative h-6 w-6 object-cover z-10"
                        style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
                    </div>
                    <div className="leading-tight">
                      <div className="text-sm font-extrabold" style={{ color: '#00448a' }}>VAWE</div>
                      <div className="text-[10px] font-semibold tracking-wider" style={{ color: '#f56c53' }}>GLOBAL TECH</div>
                    </div>
                  </div>
                  <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-black/5">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <nav className="mt-2 flex-1">
                  <ul className="flex flex-col gap-3 py-3 text-base">
                    <li onClick={() => setOpen(false)}><NavLink href="/" label="Home" /></li>
                    <li onClick={() => setOpen(false)}><NavLink href="/about" label="About Us" /></li>
                    <li onClick={() => setOpen(false)}><NavLink href="/services" label="Services" /></li>
                    <li onClick={() => setOpen(false)}><NavLink href="/products" label="Products" /></li>
                    <li onClick={() => setOpen(false)}><NavLink href="/packages" label="Packages" /></li>
                    <li onClick={() => setOpen(false)}><NavLink href="/digital-marketing" label="Digital Marketing" /></li>
                    <li onClick={() => setOpen(false)}><NavLink href="/institutes" label="VAWE Institutes" /></li>
                    <li onClick={() => setOpen(false)}><NavLink href="/contact" label="Contact" /></li>
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


