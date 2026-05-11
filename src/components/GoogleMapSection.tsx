import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';

const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

export default function GoogleMapSection() {
  if (!hasValidKey) {
    return (
      <section id="location" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-slate-200">
            <h2 className="text-3xl font-extrabold mb-6 text-slate-900 tracking-tight">Our London Location</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              We're located in the heart of the city. To see the exact location and get directions, please configure the Google Maps API Key.
            </p>
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl text-left mb-8">
              <h3 className="text-blue-800 font-bold mb-2">Developer Notice</h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                To enable the map, add <code>GOOGLE_MAPS_PLATFORM_KEY</code> to your Secrets panel.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Visit Us</h4>
                <p className="text-slate-500 text-sm">123 Tech Lane<br />London, E1 6AN</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Hours</h4>
                <p className="text-slate-500 text-sm">Mon - Sat: 9am - 7pm<br />Sun: 10am - 4pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/3">
           <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-slate-900">Reach Out</h2>
           <p className="text-slate-500 mb-8 leading-relaxed">
              Visit our flagship studio in Central London. No appointment needed. Most screen repairs finished in 30 minutes.
           </p>
           <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                 <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900">Address</h4>
                    <p className="text-slate-500">123 Tech Lane, London, E1 6AN</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900">Hours</h4>
                    <p className="text-slate-500">Mon - Sat: 9am - 7pm</p>
                 </div>
              </div>
           </div>
           <div className="mt-10 flex gap-4">
              <button className="flex-1 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-lg shadow-slate-200">Directions</button>
              <button className="flex-1 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                WhatsApp
              </button>
           </div>
        </div>
        <div className="w-full md:w-2/3 h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 relative">
          <APIProvider apiKey={API_KEY} version="weekly">
            <Map
              defaultCenter={{lat: 51.5074, lng: -0.1278}}
              defaultZoom={15}
              mapId="FIXIT_PRO_LOCATION"
              internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              style={{width: '100%', height: '100%'}}
              gestureHandling={'greedy'}
              disableDefaultUI={false}
            >
              <AdvancedMarker position={{lat: 51.5074, lng: -0.1278}} title="FixIt Pro London">
                <Pin background="#2563eb" borderColor="#fff" glyphColor="#fff" />
              </AdvancedMarker>
            </Map>
          </APIProvider>
        </div>
      </div>
    </section>
  );
}
