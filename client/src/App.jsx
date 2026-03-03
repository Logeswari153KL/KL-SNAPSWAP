import React from 'react';
import { Camera, Search, ShoppingCart, User, ShieldCheck, Zap, Calendar, Heart } from 'lucide-react';

const App = () => {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white font-sans">
      {/* NAVBAR: Alignment - Space Between */}
      <nav className="flex justify-between items-center px-10 py-5 bg-[#1e293b] border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="bg-yellow-400 p-1.5 rounded-lg shadow-lg shadow-yellow-500/20">
            <Camera color="black" size={24} strokeWidth={3} />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase">KL SnapSwap</span>
        </div>
        
        <div className="hidden lg:flex gap-10 text-sm font-bold uppercase tracking-widest text-gray-300">
          <a href="#" className="hover:text-yellow-400 transition-colors">Rent Gear</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Book Shoots</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Edit Photos</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">About Us</a>
        </div>

        <div className="flex items-center gap-6">
          <Search size={20} className="cursor-pointer hover:text-yellow-400" />
          <User size={20} className="cursor-pointer hover:text-yellow-400" />
          <div className="relative">
            <ShoppingCart size={20} className="cursor-pointer hover:text-yellow-400" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] font-bold px-1.5 rounded-full">0</span>
          </div>
        </div>
      </nav>

      {/* HERO SECTION: Flex Alignment */}
      <header className="container mx-auto flex flex-col md:flex-row items-center justify-between py-24 px-8 gap-16">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-7xl font-black leading-[0.9] tracking-tighter uppercase">
            Capture.<br/>Create.<br/><span className="text-yellow-400">Conquer.</span>
          </h1>
          <p className="text-2xl text-gray-400 border-l-4 border-yellow-400 pl-6 max-w-md font-medium">
            KL SnapSwap: Your Vision, Our Gear, Professional Finish.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-yellow-400 text-black px-8 py-4 font-black rounded-sm hover:bg-yellow-300 transition-all uppercase tracking-tighter text-lg shadow-xl shadow-yellow-400/10">Rent Gear</button>
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 font-black rounded-sm hover:bg-yellow-400 hover:text-black transition-all uppercase tracking-tighter text-lg">Book a Shoot</button>
          </div>
        </div>
        <div className="md:w-1/2 relative group">
          <div className="absolute -inset-1 bg-yellow-400/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img 
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000" 
            className="rounded-2xl shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-700 border border-white/10" 
            alt="Photographer" 
          />
        </div>
      </header>

      {/* TRIPLE THREAT SERVICES: Grid Alignment */}
      <section className="bg-[#1e293b] py-24 px-8">
        <div className="container mx-auto">
          <h2 className="text-center text-4xl font-black mb-16 uppercase tracking-tighter">Triple Threat Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCard title="Equipment Rentals" desc="High-end cameras, lenses, and lighting inventory." icon={<Camera className="text-yellow-400" size={40}/>} />
            <ServiceCard title="Professional Shoots" desc="Wedding, Portraits, and Commercial photography." icon={<User className="text-yellow-400" size={40}/>} />
            <ServiceCard title="Photo Editing" desc="Color grading, retouching, and creative effects." icon={<Zap className="text-yellow-400" size={40}/>} />
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Component for Cards
const ServiceCard = ({ title, desc, icon }) => (
  <div className="bg-[#0f172a] p-10 rounded-3xl border border-white/5 hover:border-yellow-400/50 transition-all group hover:-translate-y-2">
    <div className="mb-6 bg-white/5 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-yellow-400/10 transition-colors">
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{title}</h3>
    <p className="text-gray-400 leading-relaxed mb-8 font-medium">{desc}</p>
    <button className="bg-yellow-400 text-black w-full py-3 font-bold rounded-lg uppercase tracking-widest text-sm hover:bg-yellow-300">Browse Inventory</button>
  </div>
);

export default App;