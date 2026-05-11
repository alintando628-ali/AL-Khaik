import { motion } from 'motion/react';
import { Star, ShieldCheck, Trophy, BadgeCheck } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Sarah Jenkins',
    text: 'Fixed my iPhone 15 screen in 20 minutes. Looks brand new! Super professional staff.',
    stars: 5,
    logo: 'Google'
  },
  {
    name: 'Mark Thompson',
    text: 'Best repair shop in London. Transparent pricing and helpful advice on battery care.',
    stars: 5,
    logo: 'Trustpilot'
  },
  {
    name: 'Elena Rodriguez',
    text: 'They recovered photos from my water-damaged phone when everyone else said it was impossible.',
    stars: 5,
    logo: 'Yelp'
  }
];

export default function TrustCenter() {
  return (
    <section id="reviews" className="py-24 bg-slate-50 text-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
           <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider mb-6">
                Trust Center
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
                Quality You Can <span className="text-blue-600 underline">Trust</span>.
              </h2>
           </div>
           <div className="flex items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200">
              <div className="text-center px-4 border-r border-slate-100">
                 <div className="text-3xl font-black text-slate-900">4.9</div>
                 <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Google</div>
              </div>
              <div className="text-center px-4">
                 <div className="text-3xl font-black text-slate-900">50K+</div>
                 <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Repairs</div>
              </div>
           </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           {[
             { icon: ShieldCheck, title: 'Lifetime Warranty', desc: 'On all screen & battery parts.' },
             { icon: Trophy, title: 'No Fix, No Fee', desc: 'Zero risk professional diagnostic.' },
             { icon: BadgeCheck, title: 'Master Certified', desc: 'Expert Level 3 technicians only.' }
           ].map((item, i) => (
             <div key={item.title} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                   <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-2 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
           {REVIEWS.map((r, i) => (
             <motion.div
               key={r.name}
               className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
             >
               <div className="flex gap-1 mb-3">
                 {[...Array(r.stars)].map((_, i) => (
                   <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                 ))}
               </div>
               <p className="text-slate-600 text-sm italic mb-4 leading-relaxed">"{r.text}"</p>
               <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                 <span className="font-bold text-slate-900 text-xs">— {r.name}</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{r.logo}</span>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
