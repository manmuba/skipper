'use client';

import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className='hidden md:flex '>
        <form action="" className='flex flex-row'>
            <input type="text" className='p-2 rounded-l-full pl-8' placeholder='Search products...'/>
            <select name="" id="" className='bg-white p-[9px] border-x-[1px] flex items-center justify-center px-4'>
                <option value="">All Products</option>
                <option value="Mobile">Mobile</option>
            </select>
            <button type="submit" className='flex items-center justify-center bg-[#f5c34b] px-3 rounded-r-full'>
            <BiSearch 
              size='20'
              className="text-neutral-600"
            />
            </button>
        </form>
    </div>
  )
}

export default Search