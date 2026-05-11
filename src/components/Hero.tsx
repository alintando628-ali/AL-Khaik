import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Camera, Zap, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-8"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>Level 3 Certified Techs in London</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8"
            >
              Fast iPhone & Samsung <br/>Repair in <span className="text-blue-600">London</span>.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed"
            >
              Most repairs done in under 30 minutes with a lifetime warranty. We use genuine parts and offer a "No Fix, No Fee" policy.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <a 
                href="#quote" 
                className="px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all hover:-translate-y-1 block w-full sm:w-auto text-center"
              >
                Get a Free Quote
              </a>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <img 
                      key={i}
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} 
                      className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"
                      alt="Customer"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow-400 text-xs mb-0.5">★★★★★</div>
                  <div className="font-bold text-slate-800 tracking-tight">4.9/5 Google Rating</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:w-2/5 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-border-slate-200 bg-white">
              <img 
                src="https://picsum.photos/seed/tech/800/1000" 
                alt="Smartphone Repair" 
                className="w-full h-auto object-cover grayscale-[0.2]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/10" />
            </div>
            
            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 z-20 flex items-center gap-4">
               <div className="bg-blue-50 p-3 rounded-2xl">
                 <Shield className="w-6 h-6 text-blue-600" />
               </div>
               <div>
                  <div className="text-sm font-bold text-slate-900">Lifetime Warranty</div>
                  <div className="text-xs text-slate-500">On all screen & battery parts</div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
    </section>
  );
}
