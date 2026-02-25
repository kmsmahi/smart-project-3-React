import React, { use, useState } from 'react';
import Banner from '../banner/banner';
import AllTickets from '../cards/AllTickets';
import InProgress from '../cards/InProgress';
import Resolved from '../cards/Resolved';
const MainSection = ({fetchPromise}) => {
    const allTickets=use(fetchPromise);
    const [tickets,setTickets]=useState(allTickets);
    const [ticketStatus,setTicketStatus]=useState([]);
    const [resolvedStatus,setResolvedStatus]=useState([]);
    const handleTickets=(ticket)=>{
            console.log(ticket);
            const isExist=ticketStatus.find(item=>item.id===ticket.id);
            if(isExist){
                alert('already clicked');
                return;
            }
            const taskStatusDiv=[...ticketStatus,ticket];
            setTicketStatus(taskStatusDiv);
        };
        console.log(ticketStatus);

        const completeBtnHandler=(ticket)=>{
        const newResolved=[...resolvedStatus,ticket];
            setResolvedStatus(newResolved);
            const progressRemaining=ticketStatus.filter(item=>item.id!==ticket.id);
            setTicketStatus(progressRemaining);
            const ticketsRemaining=tickets.filter(item=>item.id!==ticket.id);
            setTickets(ticketsRemaining);

        
    }
    // console.log(resolvedStatus);

        
        
    return (
        
        <div>
            <Banner inProgressTotal={ticketStatus.length} resolvedTotal={resolvedStatus.length}></Banner>
            <section className='container bg-[#E0E7FF] grid grid-cols-12 gap-6 mt-8 p-10 rounded-3xl border border-base-200 shadow-xl'>

            <div className='col-span-9'>
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-black tracking-tight text-base-content">
      Customer <span className="text-[#3E16CF]">Tickets</span>
    </h1>
    <span className="badge badge-ghost font-bold">{allTickets.length} Total</span>
  </div>
  <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
    {tickets.map(ticket => {

      return (
        <AllTickets key={ticket.id} handleTickets={handleTickets} ticket={ticket}></AllTickets>
      )
    })}
  </div>
</div>


            <div className='col-span-3'>
                <div>
                    {/* <h1 className="text-2xl font-bold text-base-content">Task Status</h1> */}
                    <h1 className="text-2xl font-black tracking-tight text-base-content">
      Task <span className="text-[#3E16CF]">Status</span></h1>
                    <div className='p-2 rounded-2xl mt-6 mb-8 space-y-5'>
                        {
                           ticketStatus.map(ticket=>
                            <InProgress key={ticket.id} ticket={ticket} completeBtnHandler={completeBtnHandler}></InProgress>
                           ) 
                        }
                        
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-black tracking-tight text-base-content">
      Resolved <span className="text-[#3E16CF]">Tasks</span></h1>
                    <div className='p-2 rounded-2xl mt-6 mb-8 space-y-5'>
                        {
                            resolvedStatus.map(ticket=>
                                <Resolved key={ticket.id} ticket={ticket} ></Resolved>
                            )
                        }
                        
                    </div>
                </div>
            </div>
            
        </section>
        </div>
    );
};

export default MainSection;
