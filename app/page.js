


"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./components/ServiceCard";
import ScratchDeck from "./components/ScratchDeck";
import { Rocket, Sparkles, Shield, Code2, Megaphone } from "lucide-react";
import Showcase from "./components/Showcase";

export default function Home() {
  const heroRef = useRef(null);
  const words = [
    "Web Apps  ",
    "Mobile Apps  ",
    "Cloud Platforms  ",
    "AI Solutions  ",
    "E-Commerce  ",
  ];
  const [typed, setTyped] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const provides = [
    {
      title: "Software Development",
      subtitle:
        "Custom applications engineered for scale and performance. We architect robust backends, craft clean APIs, and deliver reliable frontends. Our process emphasizes code quality, reviews, and automated testing for long-term maintainability.",
      img: "/softwareimg.jpg",
    },
    {
      title: "Website Designing",
      subtitle:
        "Eye-catching designs tailored to your business needs. We design responsive layouts, readable typography, and clear information hierarchy. Every page is optimized for accessibility and conversion.",
      img: "/heroimg1.jpg",
    },
    {
      title: "Digital Marketing",
      subtitle:
        "Grow your reach with full-funnel campaigns and analytics. We combine SEO content, paid media, and email automation to acquire, engage, and retain customers across channels.",
      img: "/digitalmarketingimg.png",
    },
    {
      title: "SEO Optimization",
      subtitle:
        "Technical SEO and content strategies that rank. From site speed and schema to content clusters and internal links, we build sustainable organic growth.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "UI/UX Designing",
      subtitle:
        "Human-centered interfaces with elegant interactions. We prototype early, validate with users, and ship delightful micro-interactions that communicate state and reduce friction.",
      img: "/uiux img.png",
    },
    {
      title: "Website Hosting ",
      subtitle:
        "Reliable hosting, backups, security, and updates. We monitor uptime, patch vulnerabilities, and keep content fresh so your site stays fast and secure.",
      img: "/webhostingimg.jpg",
    },
  ];

  // Clone last and first cards for seamless loop
  const extendedProvides = [
    provides[provides.length - 1],
    ...provides,
    provides[0],
  ];

  const [provideIdx, setProvideIdx] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);

  // Ensure component is mounted and visible
  useEffect(() => {
    setIsMounted(true);
    // Small delay to ensure transforms are applied correctly
    const timer = setTimeout(() => {
      setIsTransitioning(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Looping transition fix
  useEffect(() => {
    if (!isMounted) return;
    
    const handleTransitionEnd = () => {
      if (provideIdx === extendedProvides.length - 1) {
        setIsTransitioning(false);
        // Use setTimeout to ensure smooth reset
        setTimeout(() => {
          setProvideIdx(1);
          setIsTransitioning(true);
        }, 10);
      } else if (provideIdx === 0) {
        setIsTransitioning(false);
        setTimeout(() => {
          setProvideIdx(extendedProvides.length - 2);
          setIsTransitioning(true);
        }, 10);
      }
    };

    const container = containerRef.current;
    if (!container) return;
    
    container.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      container.removeEventListener("transitionend", handleTransitionEnd);
  }, [provideIdx, isMounted]);

  // Ensure transitions are always enabled after initial mount
  useEffect(() => {
    if (!isMounted) return;
    if (!isTransitioning) {
      const t = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(t);
    }
  }, [isTransitioning, isMounted]);

  // Auto-play every 5s (only after mounted)
  useEffect(() => {
    if (!isMounted) return;
    const interval = setInterval(() => {
      setProvideIdx((prev) => {
        // Prevent going beyond bounds
        if (prev >= extendedProvides.length - 1) {
          return 1; // Reset to first real item
        }
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isMounted]);

  // Mouse hero effect
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x =
        (e.clientX || (e.touches && e.touches[0]?.clientX) || 0) - r.left;
      const y =
        (e.clientY || (e.touches && e.touches[0]?.clientY) || 0) - r.top;
      el.style.setProperty("--hx", `${x}px`);
      el.style.setProperty("--hy", `${y}px`);
    };

    const onLeave = () => {
      el.style.setProperty("--hx", `-1000px`);
      el.style.setProperty("--hy", `-1000px`);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  // Typing animation
  useEffect(() => {
    const current = words[wordIndex];
    let delay = isDeleting ? 70 : 110;
    if (!isDeleting && charIndex === current.length) delay = 1200;

    const t = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setTyped(current.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setTyped(current.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(t);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="container mx-auto px-6 py-28 relative z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-(--font-orbitron) text-5xl sm:text-6xl md:text-7xl leading-tight font-extrabold"
              style={{
                color: "#ffffff",
                textShadow:
                  "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)",
              }}
            >
              Building Digital Brilliance
            </motion.h1>

            <div className="mt-8 text-3xl md:text-4xl font-(--font-raleway) px-4 py-2 rounded-lg bg-black/8 backdrop-blur-lg border border-white/20 inline-block">
              <span className="font-bold text-white">We Build </span>
              <span
                className="font-bold"
                style={{
                  color: "var(--vawe-coral)",
                  textShadow:
                    "0 0 10px rgba(255,107,107,0.5), 2px 2px 8px rgba(0,0,0,0.5)",
                }}
              >
                {typed}
              </span>
              <span className="ml-1 inline-block w-[10px] h-[1.2em] align-middle bg-white animate-pulse" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-10 flex items-center justify-center gap-4"
            >
              <a
                href="#services"
                className="px-6 py-3 rounded-full font-semibold bg-white text-black hover:bg-transparent hover:text-white border-2 border-transparent hover:border-white transition"
              >
                Get Started
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-full font-semibold"
                style={{ backgroundColor: "var(--vawe-coral)", color: "#000" }}
              >
                Let's Talk
              </a>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-black/10 to-black/30 pointer-events-none"></div>
      </section>

      {/* Services Slider */}
      <section id="services" className="relative z-10 py-0">
        <div className="w-full">
          <div
            ref={containerRef}
            className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden bg-[#fef9f5] shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.1)]"
          >
            {extendedProvides.map((s, i) => {
              const isVisible = i === provideIdx;
              const translateX = (i - provideIdx) * 100;
              return (
              <div
                key={`${s.title}-${i}`}
                className={`absolute inset-0 ${
                  isMounted && isTransitioning
                    ? "transition-transform duration-700 ease-in-out"
                    : ""
                }`}
                style={{
                  transform: `translateX(${translateX}%)`,
                  willChange: isMounted ? 'transform' : 'auto',
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center py-20">
                  <h2 className="text-3xl md:text-5xl font-bold font-(--font-orbitron) text-[var(--vawe-navy)] mb-8 text-center">
                    What We Do
                  </h2>

                  <div className="container mx-auto px-6 grid md:grid-cols-5 gap-8 items-center flex-1">
                    {/* Left: content */}
                    <div className="text-neutral-900 md:col-span-2">
                      <div className="mt-6">
                        <span
                          className="inline-block px-6 py-3 text-xl md:text-2xl font-bold rounded-lg shadow-lg"
                          style={{
                            background:
                              "linear-gradient(135deg, #f56c53, #ff8c6e)",
                            color: "black",
                          }}
                        >
                          {s.title}
                        </span>
                      </div>
                      <p
                        className="mt-4 max-w-2xl text-lg md:text-xl leading-relaxed text-black"
                      >
                        {s.subtitle}
                      </p>

                      <div className="mt-6 flex gap-3">
                        <button
                          onClick={() => setProvideIdx((prev) => prev - 1)}
                          className="px-4 py-2 rounded-full border transition"
                          style={{
                            borderColor: "var(--vawe-coral)",
                            color: "var(--vawe-coral)",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "var(--vawe-coral)";
                            e.target.style.color = "white";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.color = "var(--vawe-coral)";
                          }}
                        >
                          Prev
                        </button>

                        <button
                          onClick={() => setProvideIdx((prev) => prev + 1)}
                          className="px-4 py-2 rounded-full border border-[var(--vawe-teal)] text-[var(--vawe-teal)] hover:bg-[var(--vawe-teal)] hover:text-white transition"
                        >
                          Next
                        </button>
                      </div>
                    </div>

                    {/* Right: image */}
                    <div className="hidden md:block md:col-span-3">
                      <div
                        className="relative w-full h-[50vh] md:h-[45vh] rounded-xl overflow-hidden border border-black/10 shadow-2xl"
                        style={{
                          boxShadow:
                            "0 20px 50px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.1)",
                        }}
                      >
                        <img
                          src={s.img}
                          alt={s.title}
                          className="absolute inset-0 w-full h-full object-cover hidden md:block"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}

            {/* Pagination dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {provides.map((_, i) => {
                const isActive =
                  i + 1 === provideIdx ||
                  (provideIdx === provides.length + 1 && i === 0);
                return (
                  <button
                    key={i}
                    onClick={() => setProvideIdx(i + 1)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      isActive
                        ? "bg-[var(--vawe-navy)]"
                        : "bg-[var(--vawe-navy)]/40"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <div
            className="rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white"
            style={{ background: "var(--vawe-bg-gradient)" }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-(--font-orbitron)">
                Ready to launch?
              </h3>
              <p className="text-white/90">
                Partner with VAWE GlobalTech to accelerate your digital future.
              </p>
            </div>
            <a
              href="/contact"
              className="px-6 py-3 rounded-full font-semibold border border-white text-white hover:bg-white hover:text-black transition"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <Showcase />
    </div>
  );
}
