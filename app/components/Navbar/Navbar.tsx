'use client';

import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="bg-[#112137] w-full fixed flex p-5 items-center justify-between">
        <Logo />
        <Search />
    </div>
  )
}

export default Navbar