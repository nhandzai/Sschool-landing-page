"use client"

import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import SideBar from './SideBar';
import { useState } from 'react';

const menuItems = [
    { name: "Home" },
    { name: "About us" },
    {
        name: "Pages",
        submenu: ["Page 1", "Page 2"],
    },
    {
        name: "Blog",
        submenu: ["Blog 1", "Blog 2"],
    },
    { name: "Contact Us" },
];

export default function HeaderStick() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    return (
        <header className="h-16 bg-white w-screen flex flex-row gap-4 items-center justify-between px-16 sticky top-0 z-40">
            <Image
                src="/images/logo-1.png"
                width={150}
                height={50}
                alt="Logo of the website"
            />
            <section className="lg:flex flex-row ml-4 items-center justify-between w-full hidden">
                <ul className="flex flex-row gap-10 text-black">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className="relative group flex flex-row items-center py-5"
                        >
                            <a className="cursor-pointer">{item.name}</a>
                            {item.submenu && <IoIosArrowDown className="ml-1" />}
                            {item.submenu && (
                                <ul className="absolute left-0 top-10 mt-2 w-40 bg-white shadow-lg transition-all duration-300 ease-in-out opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:block pointer-events-none group-hover:pointer-events-auto">
                                    {item.submenu.map((subItem, subIndex) => (
                                        <li
                                            key={subIndex}
                                            className="px-4 py-2 hover:bg-4 hover:text-white cursor-pointer"
                                        >
                                            {subItem}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                <section className='flex flex-row gap-10 items-center justify-between'>
                    <div>
                        <div>
                            Call us now:
                        </div>
                        <span className="text-4 font-bold">+84 123-456-789</span>
                    </div>

                    <a className='bg-4 p-4 px-6 rounded-xl text-center text-white font-bold hover:bg-3 transition-all duration-300 ease-in-out cursor-pointer'>
                        Book a visit
                    </a>


                </section>
            </section>
            <div className="lg:hidden block">
                <HiOutlineBars3 className="text-2xl" onClick={toggleSidebar} />

                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-gray-500 opacity-40 z-20 h-screen"
                        onClick={() => setIsSidebarOpen(false)}
                    ></div>
                )}

                <div
                    className={`fixed top-0 right-0 w-screen h-full transition-transform duration-500 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                </div>
            </div>
        </header>
    )
} 