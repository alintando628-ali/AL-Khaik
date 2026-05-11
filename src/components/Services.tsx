import { motion } from 'motion/react';
import { ShieldCheck, Zap, Award, CheckCircle, Smartphone, Battery, Droplets, Camera, Wifi, Settings } from 'lucide-react';

const SERVICES = [
  {
    title: 'Screen Repair',
    desc: 'OLED & LCD replacement for all major brands. 30-min turnaround.',
    icon: Smartphone,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Battery Swap',
    desc: 'Breathe new life into your device with high-capacity batteries.',
    icon: Battery,
    color: 'bg-slate-50 text-slate-600'
  },
  {
    title: 'Water Damage',
    desc: 'Liquid recovery and component cleaning for submerged devices.',
    icon: Droplets,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Camera Issues',
    desc: 'Lens cleaning and full module replacements for crisp photos.',
    icon: Camera,
    color: 'bg-slate-50 text-slate-600'
  },
  {
    title: 'Connectivity',
    desc: 'Fixing Wi-Fi, Bluetooth, and cellular signal problems.',
    icon: Wifi,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Back Glass',
    desc: 'Laser-cutting back glass repair for iPhone and Samsung.',
    icon: Settings,
    color: 'bg-slate-50 text-slate-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold uppercase tracking-widest text-xs"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 tracking-tight text-slate-900"
          >
            Precision Repair Services
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
            We use precision tools and original-spec parts to ensure your device performs like new. 
            All repairs are carried out by Master Certified technicians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-soft transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${s.color}`}>
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-between gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 border-t border-slate-200 pt-12">
           {['Apple', 'Samsung', 'Google Pixel', 'Huawei', 'OnePlus', 'Microsoft'].map(brand => (
             <span key={brand} className="text-xl font-extrabold tracking-tighter text-slate-400">{brand}</span>
           ))}
        </div>
      </div>
    </section>
  );
}
