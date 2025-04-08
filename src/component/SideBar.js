import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";

import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaPhoneAlt } from "react-icons/fa";

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

export default function SideBar({ isSidebarOpen, setIsSidebarOpen }) {
    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    return (
        <aside className=" fixed flex top-0 left-0 w-screen h-screen z-20">
            <section className="w-full h-screen opacity-50 " onClick={toggleSidebar}>

            </section>

            <section className="sm:w-170 w-300 h-screen bg-5 sm:p-8 p-1 flex flex-col gap-5 overflow-auto">
                <section className="flex items-center justify-between">

                    <Image
                        src="/images/logo-2.png"
                        width={150}
                        height={50}
                        alt="Logo of the website"
                    />

                    <HiXMark className='text-2xl' onClick={toggleSidebar} />

                </section>


                <ul className="flex flex-col gap-4 text-black">
                    {menuItems.map((item, index) => (
                        item.submenu ? (
                            <li key={index} className="relative group cursor-pointer">
                                <div className="flex items-center gap-1 hover:text-4 border-b border-gray-300">
                                    {item.name}
                                    <IoIosArrowDown />
                                </div>
                                <ul className="mt-1 hidden w-full flex-col gap-1 bg-5 group-hover:block">
                                    {item.submenu.map((subItem, subIndex) => (
                                        <li key={subIndex} className="mx-4 py-2 hover:text-4 border-b border-gray-300">
                                            {subItem}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ) : (
                            <li key={index} className="cursor-pointer hover:text-4 border-b border-gray-300">
                                {item.name}
                            </li>
                        )
                    ))}
                </ul>


                <section className='flex flex-col gap-4'>
                    <span className='text-4 font-bold'>
                        Contact Info
                    </span>
                    <div className="flex flex-row text-center text-xs items-center gap-2 ml-4">
                        <CiLocationOn color='orange' className='text-2xl' />
                        227 Nguyễn Văn Cừ Q.5, TP.HCM
                    </div>
                    <div className="flex flex-row text-center text-xs items-center gap-2 ml-4">
                        <CiMail color='orange' className='text-2xl' />

                        <a href="mailto:examble@example.com" >examble@example.com</a>
                    </div>

                    <div className="flex flex-row text-center text-xs items-center gap-2 ml-4">
                        <CiPhone color='orange' className='text-2xl' />

                        <span className="text-4 font-bold">+84 123-456-789</span>
                    </div>

                </section>
                <a className='bg-4 p-2 mx-6 rounded-xl text-center text-white font-bold hover:bg-3 transition-all duration-300 ease-in-out' href="#">
                    Book a visit
                </a>
                <section>
                    <div className="flex flex-row flex-wrap text-center h-10 items-center gap-6">
                        <span className='text-4 font-bold'>
                            Follow Us On:
                        </span>
                        <FaTwitter color="black" className="cursor-pointer text-2xl" />
                        <FaFacebook color="black" className="cursor-pointer text-2xl" />
                        <FaInstagram color="black" className="cursor-pointer text-2xl" />
                        <FaGithub color="black" className="cursor-pointer text-2xl" />
                    </div>
                </section>


            </section>
        </aside>
    )
}