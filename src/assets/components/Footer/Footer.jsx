import React from 'react';

const Footer = () => {
    return (
<footer className="bg-slate-900 text-slate-300 py-16">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
      
      
      <div className="lg:col-span-4 space-y-6">
        <h1 className="text-2xl font-black tracking-tight text-white italic">
          CS<span className="text-[#3E16CF]">-</span>TICKETS
        </h1>
        <p className="text-sm leading-relaxed max-w-sm text-slate-400">
          A streamlined support dashboard built for rapid task resolution. 
          Organize customer inquiries into professional, real-time workflows.
        </p>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#3E16CF] transition-colors cursor-pointer">
            <span className="text-xs">f</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#3E16CF] transition-colors cursor-pointer">
            <span className="text-xs">𝕏</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#3E16CF] transition-colors cursor-pointer">
            <span className="text-xs">in</span>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 grid gap-4">
        <h6 className="text-white font-bold uppercase tracking-widest text-xs">Company</h6>
        <nav className="flex flex-col gap-3 text-sm">
          <a className="hover:text-[#3E16CF] transition-colors">About us</a>
          <a className="hover:text-[#3E16CF] transition-colors">Contact</a>
          <a className="hover:text-[#3E16CF] transition-colors">Our mission</a>
        </nav>
      </div>

      <div className="lg:col-span-2 grid gap-4">
        <h6 className="text-white font-bold uppercase tracking-widest text-xs">Services</h6>
        <nav className="flex flex-col gap-3 text-sm">
          <a className="hover:text-[#3E16CF] transition-colors">Branding</a>
          <a className="hover:text-[#3E16CF] transition-colors">Design</a>
          <a className="hover:text-[#3E16CF] transition-colors">Marketing</a>
        </nav>
      </div>

      <div className="lg:col-span-2 grid gap-4">
        <h6 className="text-white font-bold uppercase tracking-widest text-xs">Information</h6>
        <nav className="flex flex-col gap-3 text-sm">
          <a className="hover:text-[#3E16CF] transition-colors">Privacy Policy</a>
          <a className="hover:text-[#3E16CF] transition-colors">Terms & Conditions</a>
          <a className="hover:text-[#3E16CF] transition-colors">Join Us</a>
        </nav>
      </div>

      <div className="lg:col-span-2 grid gap-4">
        <h6 className="text-white font-bold uppercase tracking-widest text-xs">Social Links</h6>
        <nav className="flex flex-col gap-3 text-sm">
          <a className="hover:text-[#3E16CF] transition-colors">Facebook</a>
          <a className="hover:text-[#3E16CF] transition-colors">WhatsApp</a>
          <a className="hover:text-[#3E16CF] transition-colors">Telegram</a>
        </nav>
      </div>
    </div>

    
    <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
      <p>© 2026 CS-TICKETS. All rights reserved.</p>
      <div className="flex gap-6">
        <a className="hover:text-white cursor-pointer">Cookie Settings</a>
        <a className="hover:text-white cursor-pointer">Security</a>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;