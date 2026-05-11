import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Smartphone, Battery, Laptop, Monitor, AlertTriangle, CheckCircle2 } from 'lucide-react';

type Step = 'device' | 'brand' | 'model' | 'issue' | 'contact' | 'result';

const DEVICES = [
  { id: 'phone', label: 'Smartphone', icon: Smartphone },
  { id: 'tablet', label: 'Tablet', icon: Monitor },
  { id: 'laptop', label: 'Laptop', icon: Laptop },
];

const BRANDS = {
  phone: ['iPhone', 'Samsung', 'Google Pixel', 'Huawei', 'OnePlus'],
  tablet: ['iPad', 'Samsung Tab', 'Microsoft Surface'],
  laptop: ['MacBook', 'Dell', 'HP', 'Lenovo'],
};

const ISSUES = [
  { id: 'screen', label: 'Cracked Screen', price: '£89 - £249' },
  { id: 'battery', label: 'Battery Replacement', price: '£39 - £79' },
  { id: 'water', label: 'Water Damage', price: 'Diagnostic Required' },
  { id: 'charging', label: 'Charging Port', price: '£45 - £65' },
  { id: 'other', label: 'Other Issue', price: 'Free Inspection' },
];

export default function QuoteEngine() {
  const [step, setStep] = useState<Step>('device');
  const [selections, setSelections] = useState({
    device: '',
    brand: '',
    model: '',
    issue: '',
    contact: { name: '', email: '', phone: '' }
  });

  const nextStep = (next: Step, value?: any) => {
    if (value) {
       if (typeof value === 'object') {
           setSelections(prev => ({ ...prev, ...value }));
       } else {
           setSelections(prev => ({ ...prev, [step]: value }));
       }
    }
    setStep(next);
  };

  const renderStep = () => {
    switch (step) {
      case 'device':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {DEVICES.map((d) => (
              <button
                key={d.id}
                onClick={() => nextStep('brand', d.id)}
                className="flex flex-col items-center p-6 bg-white border border-slate-200 rounded-3xl hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <d.icon className="w-10 h-10 mb-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                <span className="font-bold text-slate-800">{d.label}</span>
              </button>
            ))}
          </div>
        );
      case 'brand':
        const brands = BRANDS[selections.device as keyof typeof BRANDS] || [];
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => nextStep('issue', b)}
                className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 text-slate-800 font-bold text-sm transition-colors"
              >
                {b}
              </button>
            ))}
            <button onClick={() => setStep('device')} className="col-span-full text-xs font-bold text-slate-400 hover:text-slate-900 mt-4 uppercase tracking-widest">← Back</button>
          </div>
        );
      case 'issue':
        return (
          <div className="space-y-3">
            {ISSUES.map((i) => (
              <button
                key={i.id}
                onClick={() => nextStep('contact', i.id)}
                className="w-full p-4 flex justify-between items-center bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-md text-left transition-all"
              >
                <span className="font-bold text-slate-800 text-sm">{i.label}</span>
                <span className="text-blue-600 font-bold">{i.price}</span>
              </button>
            ))}
            <button onClick={() => setStep('brand')} className="text-xs font-bold text-slate-400 hover:text-slate-900 mt-4 uppercase tracking-widest">← Back</button>
          </div>
        );
      case 'contact':
        return (
          <form onSubmit={(e) => { e.preventDefault(); nextStep('result'); }} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              onChange={e => setSelections(p => ({ ...p, contact: { ...p.contact, name: e.target.value } }))}
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              onChange={e => setSelections(p => ({ ...p, contact: { ...p.contact, email: e.target.value } }))}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              onChange={e => setSelections(p => ({ ...p, contact: { ...p.contact, phone: e.target.value } }))}
            />
            <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
              Get Repair Price
            </button>
            <button type="button" onClick={() => setStep('issue')} className="w-full text-xs font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest">Back</button>
          </form>
        );
      case 'result':
        const selectedIssue = ISSUES.find(i => i.id === selections.issue);
        return (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-2 text-slate-900">Quote Sent!</h3>
            <p className="text-slate-600 mb-8">
              Based on your selection for <strong>{selections.brand}</strong>, the estimated cost is 
              <span className="text-blue-600 font-bold ml-1">{selectedIssue?.price}</span>.
            </p>
            <div className="bg-slate-100 p-6 rounded-2xl text-left mb-8 border border-slate-200">
                <p className="text-slate-700 text-sm">
                    <strong>Next Steps:</strong> We just sent a detailed breakdown to {selections.contact.email}. You can walk in today or book 10% discount.
                </p>
            </div>
            <button onClick={() => setStep('device')} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold">
              Start New Quote
            </button>
          </div>
        );
    }
  };

  return (
    <section id="quote" className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Instant Pricing
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
              Instant Quote <span className="text-blue-600">Engine</span>
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed max-w-md">
              Transparency is our policy. Select your device and issue to see our fair, hidden-fee-free pricing in seconds.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Free Diagnostic', icon: CheckCircle2 },
                { label: 'Data Secure', icon: Shield },
                { label: 'Same Day', icon: Zap },
                { label: 'Warranty', icon: Award }
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700 font-bold text-sm uppercase tracking-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 w-full">
            <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
               {/* Progress bar */}
               <div className="absolute top-0 left-0 h-1 bg-blue-600 transition-all duration-500" style={{
                 width: `${(Object.keys(selections).filter((k, i) => i < ['device', 'brand', 'model', 'issue', 'contact', 'result'].indexOf(step)).length / 5) * 100}%`
               }} />
               
               <AnimatePresence mode="wait">
                 <motion.div
                   key={step}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.3 }}
                 >
                   <div className="mb-8">
                      <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 mb-2 block">Step {['device', 'brand', 'issue', 'contact', 'result'].indexOf(step) + 1} of 5</span>
                      <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        {step === 'device' && '1. Select Device'}
                        {step === 'brand' && '2. Select Brand'}
                        {step === 'issue' && '3. What is the problem?'}
                        {step === 'contact' && '4. Your Details'}
                      </h4>
                   </div>
                   {renderStep()}
                 </motion.div>
               </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
