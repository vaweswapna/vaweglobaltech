"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function ServiceBlock({ title, copy, bullets = [], image, reverse = false }) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <section className="relative py-8 md:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span className={`${reverse ? "-right-24" : "-left-24"} -top-16 absolute h-48 w-48 rounded-full bg-linear-to-br from-violet-400/25 to-fuchsia-400/25 blur-3xl`} />
        <span className={`${reverse ? "-left-24" : "-right-24"} -bottom-16 absolute h-40 w-40 rounded-full bg-linear-to-tr from-cyan-400/20 to-blue-400/20 blur-3xl`} />
      </div>
      <div className={`mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
        <motion.div 
          initial={false} 
          animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold gradient-text font-(--font-orbitron)">{title}</h3>
          <div className="mt-3 h-1 w-24 rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500" />
          <p className="mt-3 text-neutral-700">{copy}</p>
          {!!bullets.length && (
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-800 text-sm">
              {bullets.map((b) => (
                <li key={b} className="relative glass gradient-border rounded-xl px-3 py-2 flex items-center gap-2">
                  <span className="text-violet-600">◆</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
        <motion.div 
          initial={false} 
          animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
          className="group"
        >
          <div className="gradient-border rounded-3xl overflow-hidden">
            <div className="glass rounded-3xl">
              <div className="relative w-full h-64 md:h-80 overflow-hidden perspective-[1000px]">
                <img src={image.src} alt={image.alt || title} className="w-full h-full object-cover transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]" style={{ clipPath: "polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%)" }} loading="lazy" referrerPolicy="no-referrer" onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src = image.fallback || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop"; }} />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "12px 12px", opacity: 0.2, mixBlendMode: "overlay" }} />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full px-3 py-1 text-sm font-semibold text-neutral-900 bg-linear-to-r from-amber-300 to-yellow-200 ring-2 ring-white/70 shadow-md">
                    {title}
                  </span>
                </div>
                <span className="absolute right-4 top-4 h-10 w-10 rotate-12 rounded-lg bg-linear-to-br from-violet-400/60 to-fuchsia-400/60 backdrop-blur-md" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Services() {
  const videos = [
    { title: "Static Website", localSrc: "/staticwebsite.mp4" },
    { title: "Semi Dynamic", localSrc: "/semidynamic.mp4" },
    { title: "Dynamic Website", localSrc: "/dynamicwebsite.mp4" },
    { title: "Customized Website", localSrc: "/customised.mp4" },
    { title: "E‑commerce Websites", localSrc: "/Ecommerce.mp4" },
    { title: "Text Tiles Websites", localSrc: "/texttiles.mp4" },
  ];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [activeService, setActiveService] = useState(null);
  const playerRef = useRef(null);
  const html5VideoRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted (client-side only)
  useEffect(() => {
    setIsMounted(true);
  }, []);


  const currentVideo = videos[currentIdx];
  
  const services = [
    {
      title: "E‑Commerce Development",
      img: "/E-commerce.jfif",
    },
    {
      title: "Business & Corporate Websites",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "SEO (Search Engine Optimization)",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Digital Marketing",
      img: "/digitalmarketingimg.png",
    },
    {
      title: "Web Hosting & Maintenance",
      img: "/webhostingimg.jpg",
    },
    {
      title: "UI/UX Design & Branding",
      img: "/uiux img.png",
    },
  ];
  
  const themeColors = ['#f56c53', '#00448a', '#f56c53', '#00448a', '#f56c53', '#00448a'];

  function postToPlayer(func) {
    const iframe = playerRef.current;
    if (!iframe) return;
    iframe.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*"
    );
  }

  function handlePlay() {
    const v = videos[currentIdx];
    if (v.localSrc && html5VideoRef.current) {
      html5VideoRef.current.play();
      return;
    }
    postToPlayer("playVideo");
  }
  function handlePause() {
    const v = videos[currentIdx];
    if (v.localSrc && html5VideoRef.current) {
      html5VideoRef.current.pause();
      return;
    }
    postToPlayer("pauseVideo");
  }

  return (
    <div className="pt-28">
      

      {/* Intro / Overview */}
      <section className="w-full px-6 mt-[-10px] md:mt-4 pb-4 md:pb-6">
        <div className="container mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold font-(--font-orbitron)" style={{ background: 'var(--vawe-bg-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            Our Services
          </motion.h1>
          <div className="mt-2 md:mt-3 h-1 w-24 rounded-full" style={{ background: 'var(--vawe-bg-gradient)' }} />
          <p className="mt-3 md:mt-4 text-neutral-700 max-w-3xl">
            We're a full‑service digital agency helping businesses grow online — from website design and e‑commerce
            development to SEO, marketing, hosting, and branding. Whatever your digital need, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services - 3 column hover reveal */}
      <section className="w-full px-6 mt-4 md:mt-8 pb-4 md:pb-6">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 lg:gap-4 max-w-7xl">
          {services.map((s, idx) => {
            const isActive = activeService === idx;
            const borderColor = themeColors[idx];
            return (
              <motion.div
                key={s.title}
                initial={false}
                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: Math.max(idx * 0.1, 0.2), duration: 0.5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveService(isActive ? null : idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-lg cursor-pointer"
                style={{ border: `3px solid ${borderColor}` }}
              >
                {/* title layer - hidden on mobile when active, hidden on desktop hover */}
                <div className={`absolute inset-0 grid place-items-center p-4 md:p-6 transition-opacity duration-400 md:group-hover:opacity-0 z-10 ${isActive ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}>
                  <h3 className="text-sm md:text-xl lg:text-base font-semibold text-center" style={{ color: 'var(--vawe-navy)' }}>
                    {s.title}
                  </h3>
                </div>
                {/* image reveal - show on desktop hover, show on mobile click */}
                <img
                  src={s.img}
                  alt={s.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-400 md:opacity-0 md:group-hover:opacity-100 ${isActive ? 'opacity-100 md:opacity-0' : 'opacity-0'}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {/* overlay - show on desktop hover, show on mobile click */}
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${isActive ? 'opacity-100 md:opacity-0' : 'opacity-0'}`} />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Services Video Showcase */}
      <section className="w-full px-6 mt-6 md:mt-8 pb-4 md:pb-6">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold font-(--font-orbitron)" style={{ background: 'var(--vawe-bg-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Service Demos</h3>
          <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Left: player and heading */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-neutral-900">{currentVideo.title}</h4>
            <div className="mt-3 aspect-video rounded-2xl overflow-hidden ring-1 ring-white/30 bg-black">
              {currentVideo.localSrc ? (
                <video
                  key={currentVideo.localSrc}
                  ref={html5VideoRef}
                  className="w-full h-full"
                  src={currentVideo.localSrc}
                  controls={false}
                  playsInline
                />
              ) : (
                <iframe
                  key={currentVideo.id}
                  ref={playerRef}
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${currentVideo.id}?enablejsapi=1&rel=0`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            <div className="mt-3 flex gap-2">
              <button onClick={handlePlay} className="px-4 py-2 rounded-full text-sm border border-black text-neutral-900 hover:bg-black hover:text-white transition">Play</button>
              <button onClick={handlePause} className="px-4 py-2 rounded-full text-sm border border-black text-neutral-900 hover:bg-black hover:text-white transition">Pause</button>
            </div>
          </div>

          {/* Right: list */}
          <div>
            <div className="border border-black/10 rounded-lg overflow-hidden divide-y divide-black/10">
              {videos.map((v, idx) => (
                <button
                  key={v.title}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-full flex items-center gap-3 p-3 text-left hover:bg-black/5 ${idx === currentIdx ? "bg-black/10" : ""}`}
                  aria-current={idx === currentIdx}
                >
                  {v.localSrc ? (
                    <video
                      className="h-14 w-24 object-cover rounded"
                      src={v.localSrc}
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                      alt={`${v.title} thumbnail`}
                      className="h-14 w-24 object-cover rounded"
                      loading="lazy"
                    />
                  )}
                  <div className="flex-1">
                    <div className={`text-sm ${idx === currentIdx ? "font-semibold" : ""}`}>{v.title}</div>
                    <div className="text-xs text-neutral-600">{v.localSrc ? "Local • MP4" : "YouTube • Demo"}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 md:py-10">
        <div className="w-full px-6">
          <div className="container mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold font-(--font-orbitron)" style={{ background: 'var(--vawe-bg-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Why Choose VAWE GlobalTech</h3>
            <div className="mt-2 md:mt-3 h-1 w-24 rounded-full" style={{ background: 'var(--vawe-bg-gradient)' }} />
            <div className="relative mt-4 md:mt-6 overflow-hidden py-2">
            {/* single track with duplicated items for seamless loop (no gap) */}
            <div className="vawe-marquee flex whitespace-nowrap will-change-transform">
              {[...[
                "All‑in‑one digital solutions",
                "Expert team with years of experience",
                "Fast turnaround",
                "Dedicated support",
              ], ...[
                "All‑in‑one digital solutions",
                "Expert team with years of experience",
                "Fast turnaround",
                "Dedicated support",
              ], ...[
                "All‑in‑one digital solutions",
                "Expert team with years of experience",
                "Fast turnaround",
                "Dedicated support",
              ]].map((point, idx) => {
                const colors = ['var(--vawe-coral)', 'var(--vawe-teal)', 'var(--vawe-navy)', 'var(--vawe-beige)'];
                const colorIndex = idx % 4;
                return (
                  <div key={point+idx} className="relative glass gradient-border rounded-xl px-4 py-3 pl-6 text-sm text-neutral-800 shrink-0 mr-4" style={{ borderColor: colors[colorIndex] }}>
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full" style={{ backgroundColor: colors[colorIndex] }} />
                    {point}
                  </div>
                );
              })}
            </div>
          </div>
          <style jsx global>{`
            @keyframes vawe-marquee { 
              from { transform: translateX(0); } 
              to { transform: translateX(-50%); } 
            }
            .vawe-marquee { 
              animation: vawe-marquee 20s linear infinite;
              will-change: transform;
            }
            .vawe-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-10">
        <div className="w-full px-6">
          <div className="container mx-auto">
            <div className="rounded-2xl px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4" style={{ backgroundColor: 'rgba(8,123,123,0.1)', border: '2px solid var(--vawe-teal)' }}>
              <p className="text-neutral-800 font-semibold">Ready to grow your business online? Let's discuss your project today.</p>
              <div className="flex gap-2">
                <a href="/contact" className="px-5 py-2 rounded-full font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition" style={{ backgroundColor: 'var(--vawe-teal)' }}>Get Free Consultation</a>
                <a href="/contact" className="px-5 py-2 rounded-full font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition" style={{ backgroundColor: 'var(--vawe-coral)' }}>Request a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Development Process - moved above footer */}
      <section className="w-full px-6 mt-6 md:mt-8 pb-6 md:pb-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-(--font-orbitron)" style={{ color: 'var(--vawe-navy)' }}>Development Process</h1>
            <p className="mt-2 md:mt-3 text-neutral-700 text-lg">A clear, collaborative, and quality‑driven approach from planning to launch.</p>
            <div className="mt-3 md:mt-4 h-1 w-24 rounded-full" style={{ background: 'var(--vawe-bg-gradient)' }} />
            <ol className="mt-4 md:mt-6 space-y-2 md:space-y-3">
              {[
                { num: 1, title: "Discovery & Planning", desc: "Gather requirements, define scope, timelines, and success metrics.", color: 'var(--vawe-coral)' },
                { num: 2, title: "UX/UI Design", desc: "Wireframes, visual design system, and accessible component library.", color: 'var(--vawe-teal)' },
                { num: 3, title: "Development", desc: "Implement features with best practices, reviews, and CI checks.", color: 'var(--vawe-navy)' },
                { num: 4, title: "Testing & QA", desc: "Functional, performance, and security testing before sign‑off.", color: 'var(--vawe-beige)' },
                { num: 5, title: "Deployment & Support", desc: "Go‑live, monitoring, and ongoing enhancements.", color: 'var(--vawe-coral)' },
              ].map((item) => (
                <li key={item.num} className="flex gap-3">
                  <span className="shrink-0 h-7 w-7 grid place-items-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: item.color }}>{item.num}</span>
                  <div>
                    <div className="font-semibold text-neutral-900">{item.title}</div>
                    <p className="text-neutral-700 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden border-2" style={{ borderColor: 'var(--vawe-teal)' }}>
              <img
                src="/planningimg.png"
                alt="Development planning"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



