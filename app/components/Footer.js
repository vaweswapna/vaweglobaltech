import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react";
export default function Footer() {
  
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 md:mt-12 w-full">
    
      <div className="w-full px-4 sm:px-6">
        <div className="h-[2px] w-full grad-ring rounded-full opacity-50 mb-4 md:mb-6" />
        <div className="container mx-auto glass gradient-border rounded-2xl px-4 sm:px-6 py-6 md:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
                <div className="relative flex-shrink-0">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex items-center justify-center">
                    <img
                      src="/img1.jpg"
                      alt="VAWE logo"
                      className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-cover rounded-full border-2 border-[#00448a]"
                    />
                  </div>
                </div>
                <h4 className="font-(--font-orbitron) text-lg sm:text-xl font-semibold" style={{ color: 'var(--vawe-navy)' }}>
                  <span 
                    className="font-extrabold"
                    style={{ 
                      fontWeight: '900',
                      textShadow: '0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,68,138,0.3), 0 2px 4px rgba(0,68,138,0.2)'
                    }}
                  >
                    VAWE
                  </span>{' '}GlobalTech
                </h4>
              </Link>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-neutral-700">
                Building digital brilliance with a glassy, futuristic touch. We specialize in custom web and mobile applications, cloud-native platforms, and AI-powered solutions that transform businesses.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600">
                From strategy and design to development and deployment, we deliver cutting-edge technology solutions that drive innovation and growth.
              </p>
            </div>
            <div>
                <h5 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg" style={{ color: 'var(--vawe-navy)' }}>Quick Links</h5>
              <ul className="space-y-1.5 sm:space-y-2 text-neutral-700">
                <li>
                  <Link href="/about" className="relative inline-block text-sm sm:text-base text-neutral-700 hover:text-[#00448a] transition-colors duration-200 group/link">
                    <span className="relative z-10">About Us</span>
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#00448a] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-200 origin-left" />
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="relative inline-block text-sm sm:text-base text-neutral-700 hover:text-[#00448a] transition-colors duration-200 group/link">
                    <span className="relative z-10">Products</span>
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#00448a] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-200 origin-left" />
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="relative inline-block text-sm sm:text-base text-neutral-700 hover:text-[#00448a] transition-colors duration-200 group/link">
                    <span className="relative z-10">Contact</span>
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#00448a] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-200 origin-left" />
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="relative inline-block text-sm sm:text-base text-neutral-700 hover:text-[#00448a] transition-colors duration-200 group/link">
                    <span className="relative z-10">Services</span>
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#00448a] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-200 origin-left" />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
                <h5 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg" style={{ color: 'var(--vawe-navy)' }}>Follow</h5>
              <div className="flex items-center gap-2 sm:gap-3">
                <Link href="#" aria-label="Facebook" className="p-1.5 sm:p-2 rounded-full text-[#1877F2] ring-1 ring-[#1877F2]/40 hover:bg-[#1877F2]/10 transition">
                  <Facebook className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </Link>
                <Link href="#" aria-label="Twitter" className="p-1.5 sm:p-2 rounded-full text-[#1DA1F2] ring-1 ring-[#1DA1F2]/40 hover:bg-[#1DA1F2]/10 transition">
                  <Twitter className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </Link>
                <Link href="#" aria-label="Instagram" className="p-1.5 sm:p-2 rounded-full text-white bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:brightness-110 transition">
                  <Instagram className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </Link>
                <Link href="#" aria-label="LinkedIn" className="p-1.5 sm:p-2 rounded-full text-[#0A66C2] ring-1 ring-[#0A66C2]/40 hover:bg-[#0A66C2]/10 transition">
                  <Linkedin className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </Link>
                <Link href="https://wa.me/918885103333" aria-label="WhatsApp" className="p-1.5 sm:p-2 rounded-full text-white bg-[#25D366] hover:bg-[#20BA5A] hover:brightness-110 transition shadow-md">
                  <MessageCircle className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-neutral-700 text-xs sm:text-sm">
            <p>© {year} VAWE GlobalTech. All rights reserved.</p>
            <p>Powered by VAWE GlobalTech</p>
          </div>
          <div className="mt-6 md:mt-8 pb-2 text-center">
            <span
              className="text-2xl sm:text-3xl md:text-4xl"
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


