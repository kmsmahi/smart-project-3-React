import React from 'react';

const Banner = ({inProgressTotal}) => {
    return (

        // banner section , here i am trying to maintain the design combination in a professsioanl dashboard looking design  with my navbar.....



        <div className="container mx-auto px-4 mt-8">
  <div className="bg-base-100/50 backdrop-blur-md border border-base-200 shadow-xl rounded-3xl p-8 lg:p-6 overflow-hidden relative">
    
    
    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3E16CF]/5 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#54CF68]/5 rounded-full blur-3xl"></div>
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10 mt-6">


        {/* banner left */}


      <div className="text-center lg:text-left space-y-2">
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
          System <span className="text-[#3E16CF]">Overview</span>
        </h2>
        <p className="text-base-content/60 font-medium">Real-time ticket tracking and support status.</p>
      </div>

      {/* banner right */}



      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-auto">

        {/* in progress part */}




        <div className="group flex items-center gap-6 bg-white dark:bg-base-200/50 p-6 rounded-2xl border border-base-200 shadow-sm hover:shadow-md transition-all duration-300 w-full lg:w-64">
          <div className="p-4 rounded-xl bg-[#3E16CF]/10 text-[#3E16CF] group-hover:bg-[#3E16CF] group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-base-content/50 uppercase tracking-wider">In-Progress</p>
            <h3 className="text-3xl font-black">{inProgressTotal}</h3>
          </div>
        </div>



        {/* resolved part */}



        <div className="group flex items-center gap-6 bg-white dark:bg-base-200/50 p-6 rounded-2xl border border-base-200 shadow-sm hover:shadow-md transition-all duration-300 w-full lg:w-64">
          <div className="p-4 rounded-xl bg-[#54CF68]/10 text-[#54CF68] group-hover:bg-[#54CF68] group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-base-content/50 uppercase tracking-wider">Resolved</p>
            <h3 className="text-3xl font-black">0</h3>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>


    );
};

export default Banner;