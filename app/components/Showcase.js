"use client";
import { motion } from "framer-motion";

const defaults = [
  {
    src: "/heroimg1.jpg",
    alt: "Team collaboration",
    label: "Innovation",
  },
  {
    src: "/heroimg2.jpg",
    alt: "Digital solutions",
    label: "Technology",
  },
  {
    src: "/heroimg3.png",
    alt: "Digital transformation",
    label: "Growth",
  },
  {
    src: "/codingimg.jpeg",
    alt: "Creative excellence",
    label: "Excellence",
  },
];

export default function Showcase({ items = defaults }) {
  const [a, b, c, d] = items;
  return (
    <section className="relative py-24 bg-[var(--vawe-beige)]/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold font-(--font-orbitron)"
              style={{ color: 'var(--vawe-navy)' }}
            >
              Transform Your Business with Digital Power
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.05, duration: 0.6 }}
              className="mt-4 text-neutral-700 font-(--font-raleway)"
            >
              Strategy, design, and engineering to launch faster. We blend AI, cloud,
              and modern UX to create products customers love.
            </motion.p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-neutral-700">
              <div className="glass rounded-xl px-3 py-2" style={{ borderTop: '3px solid var(--vawe-beige)' }}>Faster launches</div>
              <div className="glass rounded-xl px-3 py-2" style={{ borderTop: '3px solid var(--vawe-coral)' }}>Scalable cloud</div>
              <div className="glass rounded-xl px-3 py-2" style={{ borderTop: '3px solid var(--vawe-teal)' }}>Human‑centered UX</div>
              <div className="glass rounded-xl px-3 py-2" style={{ borderTop: '3px solid var(--vawe-navy)' }}>AI‑powered automations</div>
            </div>
            <div className="mt-8 flex gap-4">
              <a href="/services" className="glass gradient-border btn-ring px-5 py-3 rounded-full text-neutral-900 font-semibold hover:-translate-y-px transition-all" style={{ borderColor: 'var(--vawe-teal)' }}>
                See Case Studies
              </a>
              <a href="/contact" className="px-5 py-3 rounded-full text-neutral-900 font-semibold btn-ring hover:brightness-110 transition" style={{ backgroundColor: 'var(--vawe-coral)' }}>
                Start a Project
              </a>
            </div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <div className="grid grid-cols-12 auto-rows-[120px] md:auto-rows-[160px] gap-4">
              {a && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="group col-span-12 md:col-span-7 row-span-3 relative overflow-hidden rounded-2xl gradient-border"
                  style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.1)' }}
                >
                  <div className="glass rounded-2xl h-full">
                    <div className="relative h-full overflow-hidden rounded-2xl">
                      <img src={a.src} alt={a.alt} className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="inline-block glass rounded-full px-3 py-1 text-sm font-medium text-neutral-900 bg-white/70">{a.label}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {b && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.05, duration: 0.5 }}
                  className="group col-span-12 md:col-span-5 row-span-2 relative overflow-hidden rounded-2xl gradient-border"
                  style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.1)' }}
                >
                  <div className="glass rounded-2xl h-full">
                    <div className="relative h-full overflow-hidden rounded-2xl">
                      <img src={b.src} alt={b.alt} className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="inline-block glass rounded-full px-3 py-1 text-sm font-medium text-neutral-900 bg-white/70">{b.label}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {c && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="group col-span-12 md:col-span-5 row-span-1 relative overflow-hidden rounded-2xl gradient-border"
                  style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.1)' }}
                >
                  <div className="glass rounded-2xl h-full">
                    <div className="relative h-full overflow-hidden rounded-2xl">
                      <img src={c.src} alt={c.alt} className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="inline-block glass rounded-full px-3 py-1 text-sm font-medium text-neutral-900 bg-white/70">{c.label}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {d && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="group col-span-12 md:col-span-7 row-span-1 relative overflow-hidden rounded-2xl gradient-border"
                  style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.1)' }}
                >
                  <div className="glass rounded-2xl h-full">
                    <div className="relative h-full overflow-hidden rounded-2xl">
                      <img src={d.src} alt={d.alt} className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="inline-block glass rounded-full px-3 py-1 text-sm font-medium text-neutral-900 bg-white/70">{d.label}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


