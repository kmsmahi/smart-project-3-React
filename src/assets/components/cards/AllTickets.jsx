import React from 'react';
import { Users, Calendar } from 'lucide-react';

const AllTickets = ({ticket, handleTickets}) => {
    const statusClass = 
        ticket.status === 'Open' ? 'bg-[#54CF68]/10 text-[#54CF68]' : 
        ticket.status === 'In-Progress' ? 'bg-[#3E16CF]/10 text-[#3E16CF]' : 
        'bg-slate-100 text-slate-600';

    const priorityClass = 
        ticket.priority === 'Critical' ? 'text-red-600' : 
        ticket.priority === 'High' ? 'text-orange-700' : 'text-[#3E16CF]';

    return (
        <div 
            onClick={() => handleTickets(ticket)}
            className='group cursor-pointer bg-base-100 border border-base-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-[#3E16CF]/30 transition-all duration-300 flex flex-col justify-between h-full' 
        >
            <div>
                <div className='flex justify-between items-start gap-4 mb-3'>
                    <h2 className='text-xl font-bold leading-tight group-hover:text-[#3E16CF] transition-colors'>
                        {ticket.title}
                    </h2>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${statusClass}`}>
                        {ticket.status}
                    </span>
                </div>
                <p className='text-base-content/70 text-sm leading-relaxed line-clamp-2 mb-6'>
                    {ticket.description}
                </p>
            </div>

            <div>
                <div className='flex items-center gap-4 pb-4 mb-4 border-b border-base-100'>
                    <span className='text-xs font-mono font-bold px-2 py-1 bg-base-200 rounded text-base-content/50'>
                        #{ticket.id}
                    </span>
                    <div className='flex items-center gap-1.5'>
                        <div className={`w-2 h-2 rounded-full ${ticket.priority === 'High' || ticket.priority === 'Critical' ? 'animate-pulse bg-red-500' : 'bg-[#3E16CF]'}`}></div>
                        <p className={`text-xs font-bold uppercase tracking-wide ${priorityClass}`}>
                            {ticket.priority} Priority
                        </p>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <div className="w-8 h-8 rounded-full bg-[#3E16CF]/10 text-[#3E16CF] flex items-center justify-center">
                            <Users size={14} />
                        </div>
                        <p className='text-sm font-bold text-base-content'>{ticket.customer}</p>
                    </div>
                    <div className="flex items-center gap-1 text-base-content/40">
                        <Calendar size={12} />
                        <p className='text-xs font-medium'>{ticket.createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTickets;