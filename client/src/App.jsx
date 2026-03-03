import React from 'react';
import { Camera, Search, ShoppingCart, User, CheckCircle, Award, Settings, Calendar } from 'lucide-react';

const App = () => {
  return (
    <div className="bg-dark-bg min-h-screen text-white">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="bg-snap-yellow p-1 rounded"><Camera size={20} color="black" /></div>
          <h1 className="font-bold text-xl">KL SnapSwap</h1>
        </div>
        <div className="hidden md:flex gap-8 text-xs uppercase font-semibold">
          <a href="#" className="hover:text-snap-yellow">Rent Gear</a>
          <a href="#" className="hover:text-snap-yellow">Book Shoots</a>
          <a href="#" className="hover:text-snap-yellow">Edit Photos</a>
          <a href="#" className="hover:text-snap-yellow">About Us</a>
        </div>
        <div className="flex gap-4 items-center">
          <Search size={18} />
          <User size={18} />
          <ShoppingCart size={18} />
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative flex flex-col md:flex-row items-center justify-between px-10 py-20">
        <div className="z-10 max-w-xl">
          <h2 className="text-5xl font-extrabold leading-tight mb-4 uppercase">
            Capture. Create. Conquer.
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            KL SnapSwap: Your Vision, Our Gear, Professional Finish.
          </p>
          <div className="flex gap-4">
            <button className="bg-snap-yellow text-black px-6 py-3 font-bold rounded">RENT GEAR</button>
            <button className="border border-snap-yellow text-snap-yellow px-6 py-3 font-bold rounded">BOOK A SHOOT</button>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000" 
             className="w-full md:w-1/2 rounded-lg object-cover" alt="Photographer" />
      </header>

      {/* TRIPLE THREAT SERVICES */}
      <section className="px-10 py-16 bg-card-bg/30">
        <h3 className="text-center text-2xl font-bold mb-10">Triple Threat Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <ServiceCard title="Equipment Rentals" desc="Cameras, Lenses, Lighting" btn="Browse Inventory" />
          <ServiceCard title="Professional Shoots" desc="Wedding, Portraits, Commercial" btn="View Portfolios" />
          <ServiceCard title="Photo Editing" desc="Color Grading, Retouching" btn="Upload Files" />
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, desc, btn }) => (
  <div className="bg-card-bg p-8 rounded-xl border border-gray-800">
    <div className="mb-4 flex justify-center"><Camera className="text-snap-yellow" size={40} /></div>
    <h4 className="font-bold text-lg">{title}</h4>
    <p className="text-gray-400 text-sm mb-6">{desc}</p>
    <button className="bg-snap-yellow text-black px-4 py-2 text-sm font-bold rounded w-full">{btn}</button>
  </div>
);

export default App;