import React, { use, useState, useEffect } from 'react';
import Banner from '../banner/banner';
import AllTickets from '../cards/AllTickets';
import InProgress from '../cards/InProgress';
import Resolved from '../cards/Resolved';
import { toast } from 'react-toastify';

const MainSection = ({fetchPromise}) => {
    const allTickets = use(fetchPromise);
    const [tickets, setTickets] = useState(allTickets);
    const [ticketStatus, setTicketStatus] = useState([]);
    const [resolvedStatus, setResolvedStatus] = useState([]);

    
    useEffect(() => {
        setTickets(allTickets);
    }, [allTickets]);

    const handleTickets = (ticket) => {
        toast('card clicked');
        const isExist = ticketStatus.find(item => item.id === ticket.id);
        const isResolved = resolvedStatus.find(item => item.id === ticket.id);
        
        if (isExist || isResolved) {
            toast('Ticket is already in progress or resolved.');
            return;
        }
        
        setTicketStatus([...ticketStatus, ticket]);
    };

    const completeBtnHandler = (ticket) => {
        toast('complete btn clicked');
        setResolvedStatus([...resolvedStatus, ticket]);
        setTicketStatus(ticketStatus.filter(item => item.id !== ticket.id));
        setTickets(tickets.filter(item => item.id !== ticket.id));
    };

    return (
        <div className="pb-20">
            <Banner inProgressTotal={ticketStatus.length} resolvedTotal={resolvedStatus.length} />
            
            <section className='container mx-auto bg-[#E0E7FF]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 p-4 md:p-10 rounded-3xl border border-base-200 shadow-xl'>
                
                <div className='col-span-1 lg:col-span-9'>
                    <div className="flex justify-between items-center mb-6 px-4">
                        <h1 className="text-2xl font-black tracking-tight text-base-content">
                            Customer <span className="text-[#3E16CF]">Tickets</span>
                        </h1>
                        <span className="badge badge-ghost border-base-300 font-bold px-4 py-3">{tickets.length} Available</span>
                    </div>

                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                        {tickets.map(ticket => (
                            <AllTickets key={ticket.id} handleTickets={handleTickets} ticket={ticket} />
                        ))}
                    </div>
                </div>

                <div className='col-span-1 lg:col-span-3 flex flex-col gap-10'>
                    
                    <div>
                        <h1 className="text-2xl font-black tracking-tight text-base-content flex items-center gap-2">
                            Task <span className="text-[#3E16CF]">Status</span>
                            {ticketStatus.length > 0 && <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>}
                        </h1>
                        <div className='mt-6 space-y-5'>
                            {ticketStatus.map(ticket => (
                                <InProgress key={ticket.id} ticket={ticket} completeBtnHandler={completeBtnHandler} />
                            ))}
                        </div>
                    </div>

                    
                    <div>
                        <h1 className="text-2xl font-black tracking-tight text-base-content">
                            Resolved <span className="text-[#54CF68]">Tasks</span>
                        </h1>
                        <div className='mt-6 space-y-5'>
                            {resolvedStatus.map(ticket => (
                                <Resolved key={ticket.id} ticket={ticket} />
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default MainSection;