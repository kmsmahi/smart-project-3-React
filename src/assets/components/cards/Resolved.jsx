import React from 'react';

const Resolved = ({ticket}) => {
    return (
        <div className="group relative bg-base-100 border border-base-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-50/50 hover:border-[#3E16CF]/30 overflow-hidden space-y-5">
  
  {/* Left Accent Bar - Invisible by default, slides in/brightens on hover */}
  <div className="absolute left-0 top-0 h-full w-1 bg-[#3E16CF] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

  <div className="flex flex-col gap-4">
    
    {/* Content Section */}
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-black uppercase tracking-tighter text-[#3E16CF] bg-[#3E16CF]/10 px-2 py-0.5 rounded">
          Task
        </span>
        <span className="text-[10px] font-medium text-base-content/40 font-mono">
          #{ticket.id}
        </span>
      </div>
      
      <h1 className="text-sm md:text-base font-bold text-base-content leading-tight group-hover:text-[#3E16CF] transition-colors">
        {ticket.title}
      </h1>
    </div>

    
    
  </div>
</div>
    );
};

export default Resolved;