import React from 'react';

const Navbar = () => {
    return (
        <div className="container mx-auto px-4 mt-6">
  <div className="navbar bg-base-100/80 backdrop-blur-md shadow-lg border border-base-200 px-4 lg:px-6 py-3 rounded-2xl">
    
    {/* --- LEFT SECTION: Mobile Menu + Logo --- */}
    <div className="navbar-start w-auto">
      {/* Mobile Dropdown (Visible only on small screens) */}
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-xl w-52 border border-base-200">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
          
        </ul>
      </div>
      
      {/* Brand Logo */}
      <a className="text-xl lg:text-2xl font-black tracking-tight cursor-pointer">
        CS<span className="text-[#3E16CF]">-</span>TICKET
      </a>
    </div>

    {/* --- RIGHT SECTION: Menu & Button --- */}
    <div className="navbar-end flex-1 justify-end gap-2">
      {/* Desktop Menu */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li><a className="hover:text-[#3E16CF] transition-colors font-semibold">Home</a></li>
          <li><a className="hover:text-[#3E16CF] transition-colors font-semibold">FAQ</a></li>
          <li><a className="hover:text-[#3E16CF] transition-colors font-semibold">Changelog</a></li>
          <li><a className="hover:text-[#3E16CF] transition-colors font-semibold">Blog</a></li>
          <li><a className="hover:text-[#3E16CF] transition-colors font-semibold">Download</a></li>
          <li><a className="hover:text-[#3E16CF] transition-colors font-semibold">Contact</a></li>
        </ul>
      </div>

      {/* Action Button (Stays visible on mobile) */}
      <a className="btn btn-sm md:btn-md bg-[#3E16CF] hover:bg-[#2d109b] text-white border-none px-4 lg:px-6 shadow-md shadow-indigo-100 normal-case rounded-xl transition-all active:scale-95">
        + New Ticket
      </a>
    </div>

  </div>
</div>
    );
};

export default Navbar;