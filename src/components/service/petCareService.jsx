"use client";
import React, { useState } from 'react';
import { 
  Heart, CalendarCheck, ClipboardList, X, Camera, 
  Scissors, Dog, CheckCircle2, Syringe, Bone, 
  ArrowRight, Sparkles, Phone, Trash2, Home
} from 'lucide-react';

const PetCareService = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setSelectedImage(null);
  };

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
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/5 -skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-widest mb-8">
              <Heart size={14} fill="currentColor" /> Premium Companion Care
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-slate-900">
              Happy Pets, <span className="text-indigo-700">Healthy Lives.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              From routine wellness exams to professional grooming and behavioral training, we offer specialized care tailored to your furry family members.
            </p>
            <div className="flex flex-wrap gap-5">
              <button 
                onClick={toggleModal}
                className="bg-indigo-700 text-white px-10 py-5 rounded-2xl font-bold hover:bg-indigo-800 transition-all shadow-xl shadow-indigo-700/30 flex items-center gap-3 active:scale-95"
              >
                <CalendarCheck size={20} /> Book Pet Wellness
              </button>
              <div className="flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-sm font-medium text-slate-600">Specialist Vets Available <span className="text-indigo-600 font-bold">24/7</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Syringe className="w-8 h-8" />, 
              title: "Vaccination", 
              desc: "Ensure your pet stays protected with our complete immunization and deworming programs." 
            },
            { 
              icon: <Scissors className="w-8 h-8" />, 
              title: "Professional Grooming", 
              desc: "Custom styling, bath, and skin care treatments to keep your pet looking and feeling great." 
            },
            { 
              icon: <Bone className="w-8 h-8" />, 
              title: "Nutritional Guide", 
              desc: "Breed-specific diet plans and weight management programs for optimal health." 
            }
          ].map((service, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-indigo-200 transition-all group">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-700 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-indigo-700 group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">{service.desc}</p>
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                Service Details <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STEP PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Care Journey</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Experience a hassle-free appointment for your beloved companions.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Pick Service", desc: "Choose between medical or grooming needs." },
              { step: "02", title: "Pet Profile", desc: "Tell us about your pet's age, breed, and history." },
              { step: "03", title: "Expert Care", desc: "Our specialists provide gentle care and attention." },
              { step: "04", title: "Follow-up", desc: "Receive a progress report and future care tips." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-slate-50 absolute -top-10 left-0 -z-10">{step.step}</div>
                <h4 className="text-xl font-bold mb-3 mt-4 text-slate-800">{step.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MODAL - PET CARE FORM */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="px-10 py-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 italic flex items-center gap-2">
                   <Sparkles className="text-indigo-700" /> Care Support Ticket
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Companion Care Division</p>
              </div>
              <button onClick={toggleModal} className="p-3 hover:bg-white rounded-full shadow-sm transition-all">
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>

            <form className="px-10 py-8 space-y-6 max-h-[75vh] overflow-y-auto custom-scrollbar" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase mb-2 block tracking-wider">Owner Name</label>
                  <input required type="text" placeholder="Full Name" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 font-medium transition-all" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase mb-2 block tracking-wider">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-4.5 w-4 h-4 text-slate-400" />
                    <input required type="tel" placeholder="01XXX XXXXXX" className="w-full pl-12 pr-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 font-medium transition-all" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase mb-2 block tracking-wider">Pet Type</label>
                  <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none appearance-none bg-white text-slate-900 font-medium">
                    <option>Cat </option>
                    <option>Dog </option>
                    <option>Bird </option>
                    <option>Others</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase mb-2 block tracking-wider">Pet's Breed & Age</label>
                  <input type="text" placeholder="e.g. Persian, 2 yrs" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 font-medium" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 uppercase mb-2 block tracking-wider">Reason for Visit</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none appearance-none bg-white text-slate-900 font-medium">
                  <option>Medical Checkup / Illness</option>
                  <option>Full Body Grooming</option>
                  <option>Vaccination & Deworming</option>
                  <option>Dietary Consultation</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 uppercase mb-2 block tracking-wider">Current Symptoms or Special Requests</label>
                <textarea required rows="3" placeholder="Explain your pet's behavior or specific issues..." className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none resize-none text-slate-900 font-medium" />
              </div>

              {/* Image Preview */}
              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-600 uppercase block tracking-wider">Pet Photo (Optional)</label>
                {!selectedImage ? (
                  <div className="border-2 border-dashed border-slate-200 rounded-3xl p-8 text-center hover:bg-slate-50 cursor-pointer group transition-all relative">
                    <input type="file" accept="image/*" id="pet-file" className="hidden" onChange={handleImageChange} />
                    <label htmlFor="pet-file" className="cursor-pointer flex flex-col items-center">
                      <Camera className="w-10 h-10 text-slate-300 group-hover:text-indigo-600 transition-colors mb-3" />
                      <p className="text-sm font-bold text-slate-500">Upload Your Pet's Photo</p>
                    </label>
                  </div>
                ) : (
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 p-2">
                    <img src={selectedImage} alt="Preview" className="w-full h-48 object-cover rounded-2xl" />
                    <button onClick={removeImage} className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition-all"><Trash2 size={18} /></button>
                  </div>
                )}
              </div>

              <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl active:scale-95 text-lg">
                Book Care Appointment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetCareService;