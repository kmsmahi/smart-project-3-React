import React from 'react';
import { Users } from 'lucide-react';
const AllTickets = ({ticket,handleTickets}) => {
    const statusClass = 
        ticket.status === 'Open' ? 'bg-[#54CF68]/10 text-[#54CF68]' : 
        ticket.status === 'In-Progress' ? 'bg-[#3E16CF]/10 text-[#3E16CF]' : 
        'bg-[#54CF68]/10 text-[#54CF68]';
      const priorityClass = 
        ticket.priority === 'Critical' ? 'text-red-600' : 
        ticket.priority === 'High' ? 'text-orange-700' : 'bg-[#54CF68]/10 text-[#54CF68]';

        
    return (
        
        <div onClick={()=>handleTickets(ticket)}
                  className='group bg-base-100 border border-base-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-[#3E16CF]/30 transition-all duration-300 flex flex-col justify-between' 
                  key={ticket.id}
                >
                  <div className='flex justify-between items-start gap-4 mb-3'>
                    <h2 className='text-xl font-bold leading-tight group-hover:text-[#3E16CF] transition-colors'>
                      {ticket.title}
                    </h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap ${statusClass}`}>
                      {ticket.status}
                    </span>
                  </div>
                  <div className="mb-6">
                    <p className='text-base-content/70 text-sm leading-relaxed line-clamp-2'>
                      {ticket.description}
                    </p>
                  </div>
                  <div className='flex items-center gap-4 pb-4 mb-4 border-b border-base-100'>
                    <span className='text-xs font-mono font-bold px-2 py-1 bg-base-200 rounded text-base-content/50'>
                      #{ticket.id}
                    </span>
                    <div className='flex items-center gap-1'>
                      <div className={`w-2 h-2 rounded-full ${ticket.priority === 'High' || ticket.priority === 'Critical' ? 'animate-pulse bg-red-500' : 'bg-slate-400'}`}></div>
                      <p className={`text-xs font-bold uppercase tracking-wide ${priorityClass}`}>
                        {ticket.priority} Priority
                      </p>
                    </div>
                  </div>
                  <div className='flex justify-between items-center mt-auto'>
                    <div className='flex items-center gap-2'>
                      <div className="avatar placeholder">
                        {/* <div className="bg-[#3E16CF] text-white rounded-full w-8">
                          <span className="text-xs">{ticket.customer.charAt(0)}</span>
                        </div> */}
                        <Users></Users>
                      </div>
                      <p className='text-sm font-bold text-base-content'>{ticket.customer}</p>
                    </div>
                    <div className="flex items-center gap-1 text-base-content/50">
                       {/* <Users /> */}
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                       </svg>
                       
                       <p className='text-xs font-medium'>{ticket.createdAt}</p>
                    </div>
                  </div>
                </div>
    );
};

export default AllTickets;