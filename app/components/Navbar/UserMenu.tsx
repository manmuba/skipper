'use client';

import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BiMoon, BiSun } from 'react-icons/bi';
import { useState } from 'react';

const UserMenu = () => {
    const [isDark, setIsDark] = useState(true)

    return (
        <div className="flex flex-row gap-3 md:gap-6">
            <div className="flex flex-row items-center p-2 border-[1px] border-neutral-500 rounded-full cursor-pointer">
                <AiOutlineHeart
                    className="text-white"
                    size="22"
                />
                <span className='bg-[#f5c34b] rounded-full text-[12px] px-[5px] absolute top-4 right-[210px]'>2</span>
            </div>
            <div className="flex flex-row items-center p-2 border-[1px] border-neutral-500 rounded-full cursor-pointer">
                <AiOutlineUser
                    className="text-white"
                    size="22"
                />
            </div>
            <div className="flex flex-row items-center p-2 border-[1px] border-neutral-500 rounded-full cursor-pointer">
                <FiShoppingCart
                    className="text-white"
                    size="22"
                />
                <span className='bg-[#f5c34b] rounded-full text-[12px] px-[5px] absolute top-4 right-[80px]'>2</span>
            </div>
            <div
                onClick={() => { setIsDark(!isDark) }}
                className="flex flex-row items-center p-2 border-[1px] border-neutral-500 rounded-full cursor-pointer"
            >
                {isDark ? (
                    <BiSun
                        className="text-white"
                        size="22"
                    />
                ) : (
                    <BiMoon
                        className="text-white"
                        size="22"
                    />
                )}
            </div>
        </div>
    )
}

export default UserMenu