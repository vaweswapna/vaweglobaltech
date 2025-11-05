import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
export default function Footer() {
  
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 w-full">
      <div className="w-full px-4 sm:px-6">
        <div className="h-[2px] w-full grad-ring rounded-full opacity-50 mb-6" />
        <div className="container mx-auto glass gradient-border rounded-2xl px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full" style={{ backgroundColor: 'var(--vawe-beige)' }}></div>
                <h4 className="font-(--font-orbitron) text-xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>VAWE GlobalTech</h4>
              </div>
              <p className="mt-3 text-neutral-700">
                Building digital brilliance with a glassy, futuristic touch. We specialize in custom web and mobile applications, cloud-native platforms, and AI-powered solutions that transform businesses.
              </p>
              <p className="mt-2 text-neutral-600 text-sm">
                From strategy and design to development and deployment, we deliver cutting-edge technology solutions that drive innovation and growth.
              </p>
            </div>
            <div>
                <h5 className="font-semibold mb-2" style={{ color: 'var(--vawe-navy)' }}>Quick Links</h5>
              <ul className="space-y-2 text-neutral-700">
                <li><Link href="/about" className="hover:text-neutral-900 transition">About Us</Link></li>
                <li><Link href="/products" className="hover:text-neutral-900 transition">Products</Link></li>
                <li><Link href="/contact" className="hover:text-neutral-900 transition">Contact</Link></li>
                <li><Link href="/#services" className="hover:text-neutral-900 transition">Services</Link></li>
              </ul>
            </div>
            <div>
                <h5 className="font-semibold mb-2" style={{ color: 'var(--vawe-navy)' }}>Follow</h5>
              <div className="flex items-center gap-3">
                <Link href="#" aria-label="Facebook" className="p-2 rounded-full text-[#1877F2] ring-1 ring-[#1877F2]/40 hover:bg-[#1877F2]/10 transition">
                  <Facebook size={18} />
                </Link>
                <Link href="#" aria-label="Twitter" className="p-2 rounded-full text-[#1DA1F2] ring-1 ring-[#1DA1F2]/40 hover:bg-[#1DA1F2]/10 transition">
                  <Twitter size={18} />
                </Link>
                <Link href="#" aria-label="Instagram" className="p-2 rounded-full text-white bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:brightness-110 transition">
                  <Instagram size={18} />
                </Link>
                <Link href="#" aria-label="LinkedIn" className="p-2 rounded-full text-[#0A66C2] ring-1 ring-[#0A66C2]/40 hover:bg-[#0A66C2]/10 transition">
                  <Linkedin size={18} />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-neutral-700 text-sm">
            <p>© {year} VAWE GlobalTech. All rights reserved.</p>
            <p>Powered by VAWE GlobalTech</p>
          </div>
          <div className="mt-8 pb-2 text-center">
            <span
              className="text-4xl"
              style={{
                fontFamily: '"Brush Script MT", "Segoe Script", "Lucida Handwriting", cursive',
                letterSpacing: '0.04em',
                color: '#00448a'
              }}
            >
              VAWE GlobaTech
            </span>
          </div>
        </div>
      </div>
    </footer>
  );

}


