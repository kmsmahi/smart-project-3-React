import React from 'react';

const InProgress = ({ticket}) => {
    return (
        <div className="group relative bg-base-100 border border-base-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-50/50 hover:border-[#3E16CF]/30 overflow-hidden space-y-4">
  
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

    {/* Action Section */}
    <div className="flex items-center justify-between pt-2 border-t border-dashed border-base-200">
      <div className="flex -space-x-2">
        {/* Placeholder for a tiny user avatar to make it look "assigned" */}
        <div className="w-6 h-6 rounded-full bg-base-200 border-2 border-base-100 flex items-center justify-center text-[10px] font-bold">
          {ticket.customer.charAt(0)}
        </div>
      </div>

      <button className="btn btn-sm bg-[#3E16CF] hover:bg-[#2d109b] text-white border-none rounded-lg px-4 normal-case shadow-md shadow-indigo-100 active:scale-95 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
        Complete
      </button>
    </div>
  </div>
</div>
        
  
  
   
    

        
    );
};

export default InProgress;