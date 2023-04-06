import React, { useState } from 'react';

import { logo, sun } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="nft-alien" className="ml-[7rem] w-[196px] h-[42px]" />

      <ul className="list-none sm:flex hidden justify-start items-center flex-1 ml-[114.5px]">
        {navLinks.map((nav, i) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-[32px]'} 
            text-white`}>
            <a
              href={`#${nav.id}`}
              className={``}
            >
              {nav.title}
            </a>
          </li>
        ))}
        <div className="flex justify-between items-center ml-[116px] rounded-full">
          <img src={sun} alt="nft-alien" className="w-[24px] h-[24px]" />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;