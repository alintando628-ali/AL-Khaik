import { motion } from 'motion/react';
import { Phone, MessageSquare, Clock, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
             <div className="bg-white w-5 h-5 rounded-sm flex items-center justify-center">
                <div className="bg-blue-600 w-1.5 h-1.5 rounded-full" />
             </div>
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-800">FIXIT<span className="text-blue-600 underline decoration-2 underline-offset-4">PRO</span></span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {['Services', 'Quote', 'Location', 'Reviews'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors tracking-tight"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="tel:02012345678" 
            className="text-lg font-bold text-slate-800 hover:text-blue-600 transition-colors"
          >
            <span className="hidden sm:inline">020 1234 5678</span>
          </a>
          <a 
            href="#quote" 
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all hover:-translate-y-0.5"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
