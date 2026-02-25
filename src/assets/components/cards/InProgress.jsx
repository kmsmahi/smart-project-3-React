import React from 'react';
import { CheckCircle } from 'lucide-react';

const InProgress = ({ticket, completeBtnHandler}) => {
    return (
        <div className="group relative bg-base-100 border border-base-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:border-[#3E16CF]/30 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-1 bg-[#3E16CF] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

            <div className="flex flex-col gap-4">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-tighter text-[#3E16CF] bg-[#3E16CF]/10 px-2 py-0.5 rounded">
                            Active
                        </span>
                        <span className="text-[10px] font-medium text-base-content/40 font-mono">
                            #{ticket.id}
                        </span>
                    </div>
                    <h1 className="text-sm font-bold text-base-content leading-tight group-hover:text-[#3E16CF] transition-colors">
                        {ticket.title}
                    </h1>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-dashed border-base-200 gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#3E16CF] text-white flex items-center justify-center text-[10px] font-bold">
                        {ticket.customer.charAt(0)}
                    </div>
                    <button 
                        onClick={() => completeBtnHandler(ticket)} 
                        className="btn btn-xs sm:btn-sm bg-[#3E16CF] hover:bg-[#2d109b] text-white border-none rounded-lg px-3 normal-case active:scale-95 transition-all flex-1 sm:flex-none"
                    >
                        <CheckCircle size={14} className="mr-1" />
                        Complete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InProgress;