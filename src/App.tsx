import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import QuoteEngine from './components/QuoteEngine';
import TrustCenter from './components/TrustCenter';
import GoogleMapSection from './components/GoogleMapSection';
import { Phone, MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-100 selection:text-orange-900">
      <Header />
      
      <main>
        <Hero />
        
        {/* Quick Trust Bar */}
        <div className="bg-gray-900 py-6 border-y border-gray-800">
          <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 text-white/60 text-sm font-bold uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span>Available Today</span>
            </div>
            <span>No Appointment Needed</span>
            <span>Walk-In Service</span>
            <span>Genuine Parts Used</span>
          </div>
        </div>

        <Services />
        <QuoteEngine />
        <TrustCenter />
        <GoogleMapSection />
      </main>

      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                   <div className="bg-white w-5 h-5 rounded-sm flex items-center justify-center">
                      <div className="bg-blue-600 w-1.5 h-1.5 rounded-full" />
                   </div>
                </div>
                <span className="text-2xl font-black tracking-tight text-slate-900">FIXIT<span className="text-blue-600 underline decoration-2 underline-offset-4">PRO</span></span>
              </div>
              <p className="text-slate-500 max-w-sm text-lg leading-relaxed mb-8">
                London's premier device repair studio. We combine precision engineering with a lifetime of support.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors border border-slate-200">FB</a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors border border-slate-200">IG</a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors border border-slate-200">TW</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-slate-900 uppercase tracking-widest text-[10px]">Services</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-semibold">
                <li><a href="#" className="hover:text-blue-600 transition-colors">iPhone Repair</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Samsung Repair</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Google Pixel Repair</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">iPad & Tablet</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-slate-900 uppercase tracking-widest text-[10px]">Support</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-semibold">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Warranty Policy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Mail-in Repairs</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Business T&C</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-xs font-medium tracking-tight">© 2026 FixIt Pro Services Ltd. London, UK.</p>
            <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
              <span>ISO 9001 Certified</span>
              <span>EST. 2014</span>
              <span>Data Protected</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
         <motion.a
           whileHover={{ scale: 1.1, y: -2 }}
           whileTap={{ scale: 0.9 }}
           href="https://wa.me/1234567890"
           className="w-14 h-14 bg-white border border-slate-200 text-green-500 rounded-2xl shadow-xl flex items-center justify-center hover:bg-slate-50 transition-colors"
         >
           <MessageCircle className="w-7 h-7" />
         </motion.a>
         <motion.a
           whileHover={{ scale: 1.1, y: -2 }}
           whileTap={{ scale: 0.9 }}
           href="tel:02012345678"
           className="w-14 h-14 bg-blue-600 text-white rounded-2xl shadow-xl flex items-center justify-center hover:bg-blue-700 transition-colors lg:hidden"
         >
           <Phone className="w-7 h-7" />
         </motion.a>
      </div>
    </div>
  );
}

