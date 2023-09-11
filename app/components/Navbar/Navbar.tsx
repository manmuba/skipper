'use client';

import { RiMenu4Line } from 'react-icons/ri';

import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed flex flex-col w-full">
      <div className="bg-[#112137] w-full flex p-5 items-center justify-between">
        <Logo />
        <Search />
        <UserMenu />
      </div>
      <div className="bg-[#172e4e] w-full flex p-2 items-center justify-between px-14">
        <div className='flex flex-row font-semibold text-white gap-3 '>
          <RiMenu4Line
            className="text-white font-extrabold"
            size='25'
          />
          <h3 className='border-r-[1px] pr-4 border-neutral-500 cursor-pointer'>Browse Categories</h3>

          <ul className='pl-8 flex flex-row gap-8 font-medium text-neutral-300'>
            <li>Home</li>
            <li>Shop</li>
            <li>Pages</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex">
          <ul className='pl-8 flex flex-row gap-8 text-neutral-300 font-medium'>
            <li>Home</li>
            <li>Shop</li>
            <li>Pages</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar