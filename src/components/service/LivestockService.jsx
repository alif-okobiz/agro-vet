"use client";
import React, { useState } from 'react';
import { 
  ShieldCheck, CalendarCheck, ClipboardList, X, Camera, 
  Stethoscope, Users, HeartPulse, Microscope, 
  ArrowRight, Activity, Phone, Trash2
} from 'lucide-react';

const LivestockService = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setSelectedImage(null); // Reset image when closing
  };

  // Handle Image Preview
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (x) => setSelectedImage(x.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const removeImage = () => setSelectedImage(null);

  return (
    <div className="bg-white min-h-screen text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/5 -skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-8">
              <Activity size={14} /> Expert Livestock Consultation
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-slate-900">
              Professional Care for Your <span className="text-emerald-700">Valuable Assets.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              We provide science-backed solutions for farm management, nutrition, and disease control. Our goal is to transform your livestock venture into a sustainable success.
            </p>
            <div className="flex flex-wrap gap-5">
              <button 
                onClick={toggleModal}
                className="bg-emerald-700 text-white px-10 py-5 rounded-2xl font-bold hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-700/30 flex items-center gap-3 active:scale-95"
              >
                <CalendarCheck size={20} /> Open Support Ticket
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Microscope className="w-8 h-8" />, title: "Health Analysis", desc: "In-depth disease diagnostics and customized treatment protocols." },
            { icon: <HeartPulse className="w-8 h-8" />, title: "Nutritional Diet", desc: "Balanced feed formulation based on the specific age and growth stage." },
            { icon: <Users className="w-8 h-8" />, title: "Management Support", desc: "Complete farm automation and structural planning for biosecurity." }
          ].map((service, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-emerald-200 transition-all group">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-emerald-700 group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">{service.desc}</p>
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                Learn Policy <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MODAL - TICKET FORM */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 border border-white/20">
            <div className="px-10 py-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 italic flex items-center gap-2">
                   <ClipboardList className="text-emerald-700" /> New Support Ticket
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Livestock Division</p>
              </div>
              <button onClick={toggleModal} className="p-3 hover:bg-white rounded-full shadow-sm transition-all">
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>

            <form className="px-10 py-8 space-y-6 max-h-[75vh] overflow-y-auto custom-scrollbar" onSubmit={(e) => e.preventDefault()}>
              
              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase mb-2 block tracking-wider">Owner Name</label>
                  <input required type="text" placeholder="Full Name" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 font-medium placeholder:text-slate-400 transition-all" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase mb-2 block tracking-wider">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-4.5 w-4 h-4 text-slate-400" />
                    <input required type="tel" placeholder="017XX XXXXXX" className="w-full pl-12 pr-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 font-medium transition-all" />
                  </div>
                </div>
              </div>

              {/* Livestock Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase mb-2 block tracking-wider">Animal Species</label>
                  <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none appearance-none bg-white text-slate-900 font-medium">
                    <option>Cattle / Cow</option>
                    <option>Poultry / Chicken</option>
                    <option>Goat / Sheep</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-600 uppercase mb-2 block tracking-wider">Age</label>
                    <input type="text" placeholder="e.g. 2 yrs" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 font-medium" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-600 uppercase mb-2 block tracking-wider">Breed</label>
                    <input type="text" placeholder="Holstein" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 font-medium" />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 uppercase mb-2 block tracking-wider">Problem Details</label>
                <textarea required rows="3" placeholder="Describe symptoms or current situation in detail..." className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none resize-none text-slate-900 font-medium" />
              </div>

              {/* Image Preview System */}
              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-600 uppercase block tracking-wider">Visual Evidence (Optional)</label>
                
                {!selectedImage ? (
                  <div className="border-2 border-dashed border-slate-200 rounded-3xl p-8 text-center hover:bg-slate-50 cursor-pointer group transition-all relative">
                    <input type="file" accept="image/*" id="file-up" className="hidden" onChange={handleImageChange} />
                    <label htmlFor="file-up" className="cursor-pointer flex flex-col items-center">
                      <Camera className="w-10 h-10 text-slate-300 group-hover:text-emerald-600 transition-colors mb-3" />
                      <p className="text-sm font-bold text-slate-500">Select Image from PC</p>
                      <p className="text-xs text-slate-400 mt-1">High quality photos help our experts</p>
                    </label>
                  </div>
                ) : (
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 p-2 group">
                    <img src={selectedImage} alt="Preview" className="w-full h-48 object-cover rounded-2xl" />
                    <button 
                      onClick={removeImage}
                      className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition-all transform hover:scale-110"
                    >
                      <Trash2 size={18} />
                    </button>
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg">
                      Selected Photo Preview
                    </div>
                  </div>
                )}
              </div>

              <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-xl active:scale-95 text-lg">
                Submit Consultation Ticket
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LivestockService;