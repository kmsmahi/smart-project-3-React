import React from 'react';
import { Check } from 'lucide-react';

const Resolved = ({ticket}) => {
    return (
        <div className="bg-base-200/50 border border-base-200 rounded-2xl p-5 transition-all duration-300 opacity-80">
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#54CF68] text-white flex items-center justify-center">
                        <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-base-content/40">
                        #{ticket.id}
                    </span>
                </div>
                <h1 className="text-sm font-semibold text-base-content/60 line-through decoration-base-content/30">
                    {ticket.title}
                </h1>
            </div>
        </div>
    );
};

export default Resolved;