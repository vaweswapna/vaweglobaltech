"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Target, Eye, BookOpen, Lightbulb, ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

const team = [
  {
    name: "Ava Nguyen",
    role: "CEO & Strategy",
    color: "grad-mc",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&auto=format&fit=crop&crop=faces&w=400&h=400",
  },
  {
    name: "Liam Patel",
    role: "Engineering Lead",
    color: "grad-co",
    photo:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&auto=format&fit=crop&crop=faces&w=400&h=400",
  },
  {
    name: "Maya Chen",
    role: "Design Director",
    color: "grad-mo",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&auto=format&fit=crop&crop=faces&w=400&h=400",
  },
  {
    name: "Ethan Silva",
    role: "Marketing Lead",
    color: "grad-mc",
    photo:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&auto=format&fit=crop&crop=faces&w=400&h=400",
  },
];

const ValueCard3D = ({ title, desc, icon: Icon, image }) => {
  const cardRef = useRef(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMouseX(e.pageX - rect.left - rect.width / 2);
    setMouseY(e.pageY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
  };

  const mousePX = mouseX / (cardRef.current?.offsetWidth || 1);
  const mousePY = mouseY / (cardRef.current?.offsetHeight || 1);
  const tX = mousePX * -40;
  const tY = mousePY * -40;

  return (
    <div
      ref={cardRef}
      className="card-wrap cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card">
        <div
          className="card-bg"
          style={{
            transform: `translateX(${tX}px) translateY(${tY}px)`,
            backgroundImage: `url(${image})`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div className="card-info">
          <div className="flex items-center gap-3 mb-2">
            {Icon && <Icon size={24} />}
            <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
          </div>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div className="pt-28 bg-gradient-to-b from-white to-neutral-50">
      {/* Hero */}
      <section className="relative w-full px-6 py-12 md:py-16 text-center" style={{ background: 'var(--vawe-bg-gradient)' }}>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative text-3xl md:text-4xl font-semibold text-white font-[var(--font-orbitron)]"
        >
          About Us
        </motion.h1>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="mt-2"
        >
          <span
            className="block text-5xl md:text-7xl font-extrabold leading-[0.95] font-[var(--font-orbitron)] text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #f56c53, #fdc377, #26ebe5)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            VAWE GlobalTech
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed"
          style={{ color: '#ffffff' }}
        >
          We are a next-gen IT company blending creativity and engineering to
          deliver futuristic, glassy interfaces and powerful scalable products.
        </motion.p>
      </section>

      {/* Certifications and Clients */}
      <section className="w-full px-6 mt-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-2xl border-2 p-6 shadow-lg backdrop-blur-sm" style={{ borderColor: 'var(--vawe-teal)', backgroundColor: 'var(--vawe-beige)/10' }}>
            <h3 className="text-xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>Certifications</h3>
            <p className="mt-2 text-neutral-700">Certified by <span className="font-semibold" style={{ color: 'var(--vawe-coral)' }}>ISO</span>, <span className="font-semibold" style={{ color: 'var(--vawe-coral)' }}>MSME</span>, <span className="font-semibold" style={{ color: 'var(--vawe-coral)' }}>APSCHE</span>, and <span className="font-semibold" style={{ color: 'var(--vawe-coral)' }}>AICTE</span> as <span className="font-semibold" style={{ color: 'var(--vawe-coral)' }}>VAWE</span>.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: 'var(--vawe-teal)' }}>ISO Certified</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: 'var(--vawe-navy)' }}>MSME Registered</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: 'var(--vawe-coral)' }}>APSCHE</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: 'var(--vawe-beige)' }}>AICTE</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border-2 p-6 shadow-lg backdrop-blur-sm" style={{ borderColor: 'var(--vawe-coral)', backgroundColor: 'var(--vawe-beige)/10' }}>
            <h3 className="text-xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>Clients</h3>
            <ul className="mt-3 space-y-2 text-neutral-700">
              <li className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--vawe-teal)' }} />
                <span>VAWE clients include <span className="font-semibold" style={{ color: 'var(--vawe-navy)' }}>Laila neuticals</span>.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Story - redesigned */}
      <section className="w-full px-6 mt-20">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {[
          { title: "Our Mission", text: "Empower brands with beautiful, performant software and design.", icon: Target, ring: "from-[var(--vawe-coral)] to-[var(--vawe-beige)]" },
          { title: "Our Vision", text: "A world where digital interactions feel fluid, elegant, and human.", icon: Eye, ring: "from-[var(--vawe-teal)] to-[var(--vawe-navy)]" },
          { title: "Our Story", text: "Born in 2025, VAWE GlobalTech unites design excellence with engineering rigor.", icon: BookOpen, ring: "from-[var(--vawe-beige)] to-[var(--vawe-coral)]" },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="relative rounded-3xl p-7 bg-white/80 border border-white/50 shadow-lg backdrop-blur-sm overflow-hidden"
          >
            <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${card.ring} blur-3xl opacity-40`} />
            <div className="relative flex items-start gap-4">
              <div className={`shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br ${card.ring} p-[2px]`}> 
                <div className="h-full w-full rounded-[10px] bg-white grid place-items-center">
                  {card.icon && <card.icon size={22} className="text-neutral-900" />}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">{card.title}</h3>
                <p className="mt-2 text-neutral-700 leading-relaxed">{card.text}</p>
              </div>
            </div>
        </motion.div>
          ))}
        </div>
      </section>

      {/* Overview */}
      {/* Company Overview - split card */}
      <section className="w-full px-6 mt-20">
        <div className="container mx-auto">
          <div className="relative rounded-3xl overflow-hidden border-2 shadow-xl backdrop-blur-sm grid md:grid-cols-2" style={{ borderColor: 'var(--vawe-teal)', backgroundColor: 'rgba(254,203,157,0.15)' }}>
          <div className="p-8 md:p-10">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold font-[var(--font-orbitron)]"
              style={{ color: 'var(--vawe-navy)' }}
            >
              Company Overview
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              className="mt-4 leading-relaxed"
              style={{ color: 'var(--vawe-navy)' }}
            >
              VAWE Technologies is a global IT company driven by technology pioneers committed to business transformation through excellence, people, and values.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.35}
              className="mt-4 leading-relaxed"
              style={{ color: 'var(--vawe-navy)' }}
            >
              Our technology center, powered by My Tutorings, is a premium training hub that nurtures talent and fuels our innovation engine.
            </motion.p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Excellence", "People", "Values", "Innovation"].map((t, i) => {
                const colors = ['var(--vawe-teal)', 'var(--vawe-coral)', 'var(--vawe-navy)', 'var(--vawe-beige)'];
                return (
                  <span key={t} className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: colors[i] }}>{t}</span>
                );
              })}
            </div>
          </div>
          <div className="relative min-h-[260px] md:min-h-full overflow-hidden">
            <img src="/img1.jpg" alt="Company" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full px-6 mt-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-[var(--font-orbitron)] text-center mb-4" style={{ color: '#00448a' }}>Core Values</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-6 px-4">
          {[
            { title: "Innovation", desc: "Our innovations aim to create transformations that give businesses a competitive edge.", icon: Lightbulb, image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=600&fit=crop" },
            { title: "Insight", desc: "We foresee trends and meet needs through vision, skill, and collective intelligence.", icon: Eye, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop" },
            { title: "Integrity", desc: "We foster trust and uphold integrity in all our customer and partner relationships.", icon: ShieldCheck, image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=600&fit=crop" },
          ].map((v, i) => (
            <ValueCard3D key={v.title} title={v.title} desc={v.desc} icon={v.icon} image={v.image} />
          ))}
          </div>
        </div>
        <style jsx global>{`
          .card-wrap {
            margin: 10px;
            transform-style: preserve-3d;
          }
          .card-wrap:hover .card-info {
            transform: translateY(0);
          }
          .card-wrap:hover .card-info p {
            opacity: 1;
          }
          .card-wrap:hover .card-info,
          .card-wrap:hover .card-info p {
            transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          }
          .card-wrap:hover .card-bg {
            transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
            opacity: 0.8;
          }
          .card-wrap:hover .card {
            transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
            box-shadow:
              rgba(255, 255, 255, 0.2) 0 0 40px 5px,
              rgba(255, 255, 255, 1) 0 0 0 1px,
              rgba(0, 0, 0, 0.66) 0 30px 60px 0,
              inset #333 0 0 0 5px,
              inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
          }
          .card {
            position: relative;
            flex: 0 0 240px;
            width: 240px;
            height: 320px;
            background-color: #333;
            overflow: hidden;
            border-radius: 10px;
            box-shadow:
              rgba(0, 0, 0, 0.66) 0 30px 60px 0,
              inset #333 0 0 0 5px,
              inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
            transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
          }
          .card-bg {
            opacity: 0.5;
            position: absolute;
            top: -20px;
            left: -20px;
            width: 100%;
            height: 100%;
            padding: 20px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
            pointer-events: none;
          }
          .card-info {
            padding: 20px;
            position: absolute;
            bottom: 0;
            color: #fff;
            transform: translateY(40%);
            transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          .card-info p {
            opacity: 0;
            text-shadow: rgba(0, 0, 0, 1) 0 2px 3px;
            transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          .card-info * {
            position: relative;
            z-index: 1;
          }
          .card-info::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
            background-blend-mode: overlay;
            opacity: 0;
            transform: translateY(100%);
            transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
          }
          .card-info h3 {
            font-family: 'Playfair Display', serif;
            font-size: 24px;
            font-weight: 700;
            text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
            color: white;
          }
        `}</style>
      </section>

      {/* Milestones - Timeline Design */}
      <section className="w-full px-6 mt-20" style={{ backgroundColor: 'rgba(254,203,157,0.1)' }}>
        <div className="container mx-auto py-16">
          <h2 className="text-3xl font-bold font-[var(--font-orbitron)] text-center mb-16" style={{ color: '#00448a' }}>Milestones</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden md:block" style={{ background: 'linear-gradient(to bottom, var(--vawe-teal), var(--vawe-coral), var(--vawe-navy), var(--vawe-beige), var(--vawe-teal))', height: '100%' }}></div>
            
            <div className="space-y-12">
              {[
                { year: "2016", title: "Founded", desc: "VAWE starts with a mission to unite design and engineering.", color: 'var(--vawe-coral)' },
                { year: "2018", title: "50+ Projects", desc: "First wave of production apps across multiple industries.", color: 'var(--vawe-teal)' },
                { year: "2021", title: "Cloud‑Native", desc: "Platform blueprint for secure, scalable deployments.", color: 'var(--vawe-navy)' },
                { year: "2023", title: "AI Practice", desc: "Expanded into ML solutions and intelligent automation.", color: 'var(--vawe-beige)' },
                { year: "2025", title: "Global Delivery", desc: "Serving clients across regions with a partner ecosystem.", color: 'var(--vawe-coral)' },
              ].map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative rounded-2xl p-6 shadow-xl backdrop-blur-sm border-2" 
                      style={{ 
                        borderColor: m.color,
                        backgroundColor: 'rgba(255,255,255,0.9)'
                      }}
                    >
                      <div className={`absolute -top-3 ${i % 2 === 0 ? 'right-6' : 'left-6'} px-4 py-1 rounded-full text-white font-bold text-sm`} style={{ backgroundColor: m.color }}>
                        {m.year}
                      </div>
                      <h3 className="text-2xl font-bold mt-2" style={{ color: 'var(--vawe-navy)' }}>{m.title}</h3>
                      <p className="mt-3 text-neutral-700 leading-relaxed">{m.desc}</p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div 
                      className="w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center font-bold text-white"
                      style={{ backgroundColor: m.color }}
                    >
                      {m.year.slice(-2)}
                    </div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full px-6 mt-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 font-[var(--font-orbitron)]" style={{ background: 'var(--vawe-bg-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, rotate: 0.5, scale: 1.02 }}
              className="group relative rounded-3xl bg-white/70 p-6 text-center shadow-lg backdrop-blur-xl ring-1 ring-white/50 hover:shadow-2xl transition will-change-transform"
            >
              <div className="relative mx-auto h-24 w-24">
                <div className="absolute inset-0 rounded-full blur-md opacity-50 group-hover:opacity-70 transition" style={{ background: 'linear-gradient(to top right, var(--vawe-coral), var(--vawe-teal), var(--vawe-navy))' }} />
                <img
                  src={m.photo}
                  alt={`${m.name} photo`}
                  className="relative h-24 w-24 rounded-full object-cover bg-white"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.parentElement?.querySelector(
                      "[data-fallback]"
                    );
                    if (fallback) fallback.removeAttribute("hidden");
                  }}
                />
                <div
                  data-fallback
                  hidden
                  className="relative grid place-items-center h-24 w-24 rounded-full bg-white text-neutral-900 font-semibold text-3xl"
                >
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="pointer-events-none absolute -inset-1 rounded-full border-2 border-white/60" />
              </div>
                <h4 className="mt-4 font-semibold text-neutral-900">{m.name}</h4>
                <p className="text-neutral-700 text-sm">{m.role}</p>
              <div className="mt-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                <a href="#" aria-label="LinkedIn" className="h-8 w-8 grid place-items-center rounded-full bg-neutral-900/5 hover:bg-neutral-900/10">
                  <span className="text-xs">in</span>
                </a>
                <a href="#" aria-label="Mail" className="h-8 w-8 grid place-items-center rounded-full bg-neutral-900/5 hover:bg-neutral-900/10">
                  <span className="text-xs">@</span>
                </a>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

    </div>
  );
}



