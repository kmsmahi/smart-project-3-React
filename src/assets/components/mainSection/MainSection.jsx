import React, { use } from 'react';
import Banner from '../banner/banner';
import { Users } from 'lucide-react';
const MainSection = ({fetchPromise}) => {
    const allTickets=use(fetchPromise);
    console.log(allTickets);
    return (
        
        <div>
            <Banner></Banner>
            <section className='container bg-[#E0E7FF] grid grid-cols-12 gap-6 mt-8 p-8 rounded-3xl border border-base-200 shadow-xl'>
            {/* <div className='col-span-9'>
                 <h1 className="text-2xl font-bold text-base-content mb-4">Customer Tickets</h1>

                 <div className='space-y-5 grid grid-cols-2 gap-6'>
                    {
                        allTickets.map(ticket=>(
                            <div className='border-2 bg-[#FFFFFF] rounded-lg p-4 border-base-200 shadow-sm hover:shadow-md transition-all duration-300 space-y-4' key={ticket.id}>
                                <div className='flex justify-between'>
                                    <h1 className='text-2xl font-semibold'>{ticket.title}</h1>
                                <button className={`btn btn-sm 
                                ${
                                ticket.status==='Open'?'btn-success':
                                ticket.status==='In-Progress'?
                                'btn-warning':
                                'btn-primary'
                                }`}>{ticket.status}</button>
                                </div>
                                <div>
                                    <p className='text-lg font-sm'>{ticket.description}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='flex gap-4'>
                                    <h1 className='text-lg text-gray-300'>#{ticket.id}</h1>
                                    <p className='text-lg text-red-500 font-semibold'>{ticket.priority} Priority</p>
                                </div>
                                <div className='flex gap-4'>
                                    <h1 className='text-lg text-gray-400 font-semibold'>{ticket.customer}</h1>
                                    <p className='text-lg text-gray-700 font-semibold'>{ticket.createdAt}</p>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                 </div>
            </div> */}

            <div className='col-span-9'>
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-black tracking-tight text-base-content">
      Customer <span className="text-[#3E16CF]">Tickets</span>
    </h1>
    <span className="badge badge-ghost font-bold">{allTickets.length} Total</span>
  </div>
  <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
    {allTickets.map(ticket => {
      const statusClass = 
        ticket.status === 'Open' ? 'bg-blue-100 text-blue-700' : 
        ticket.status === 'In-Progress' ? 'bg-[#3E16CF]/10 text-[#3E16CF]' : 
        'bg-[#54CF68]/10 text-[#54CF68]';
      const priorityClass = 
        ticket.priority === 'Critical' ? 'text-red-600' : 
        ticket.priority === 'High' ? 'text-orange-600' : 'text-slate-500';

      return (
        <div 
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
      )
    })}
  </div>
</div>


            <div className='col-span-3'>
                <div>
                    <h1 className="text-2xl font-bold text-base-content">Task Status</h1>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-base-content">Resolved Tasks</h1>
                </div>
            </div>
            
        </section>
        </div>
    );
};

export default MainSection;