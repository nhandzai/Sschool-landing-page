import Image from 'next/image'
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsSend } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="flex flex-row flex-wrap px-16 justify-between p-4 sm:py-30 py-20 text-3 bg-1">

            <section className='flex flex-col gap-4 '>
                <div className="border-b-4 border-transparent border-b my-border-image pb-4 h-15 text-2xl font-bold  flex items-center">
                    <Image
                        src="/images/logo-1.png"
                        height={50}
                        width={150}
                        alt="Logo of the website"
                        className='cursor-pointer'
                    />
                </div>

                <div>
                    <span >Phasellus ultricies aliquam volutpat ullamcorper laoreet neque.</span>

                </div>
                <div className="flex flex-row text-center h-10 items-center gap-6">
                    <FaTwitter color="black" className="cursor-pointer " />
                    <FaFacebook color="black" className="cursor-pointer" />
                    <FaInstagram color="black" className="cursor-pointer" />
                    <FaGithub color="black" className="cursor-pointer" />
                </div>
                <a className='bg-4 p-4 px-6 rounded-xl text-center text-white font-bold hover:bg-3 transition-all duration-300 ease-in-out cursor-pointer'>
                    Contact Us
                </a>

            </section>

            <section className='flex flex-col gap-4 '>
                <span className="border-b-4 border-transparent border-b my-border-image pb-4 h-15 text-2xl font-bold  flex items-center">
                    Quick Links
                </span>
                <div className='flex flex-col gap-4'>
                    <a
                        href="#"
                        className="flex items-center transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-orange-500">
                        <IoIosArrowForward className="mr-1" />
                        Our Services
                    </a>

                    <a
                        href="#"
                        className="flex items-center transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-orange-500">
                        <IoIosArrowForward className="mr-1" />
                        Our Blogs
                    </a>

                    <a
                        href="#"
                        className="flex items-center transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-orange-500">
                        <IoIosArrowForward className="mr-1" />
                        FAQ'S
                    </a>

                    <a
                        href="#"
                        className="flex items-center transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-orange-500">
                        <IoIosArrowForward className="mr-1" />
                        Contact Us
                    </a>
                </div>
            </section>

            <section className='flex flex-col gap-4 '>
                <span className="border-b-4 border-transparent border-b my-border-image pb-4 h-15 text-2xl font-bold  flex items-center">
                    Categories
                </span>
                <div className='flex flex-col gap-4'>
                    <a
                        href="#"
                        className="flex items-center transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-orange-500">
                        <IoIosArrowForward className="mr-1" />
                        Music Learning
                    </a>

                    <a
                        href="#"
                        className="flex items-center transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-orange-500">
                        <IoIosArrowForward className="mr-1" />
                        Sports, Games
                    </a>

                    <a
                        href="#"
                        className="flex items-center transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-orange-500">
                        <IoIosArrowForward className="mr-1" />
                        Science Class
                    </a>

                    <a
                        href="#"
                        className="flex items-center transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-orange-500">
                        <IoIosArrowForward className="mr-1" />
                        Drawing
                    </a>
                </div>
            </section>

            <section className='flex flex-col gap-4 '>
                <span className="border-b-4 border-transparent border-b my-border-image pb-4 h-15 text-2xl font-bold  flex items-center">
                    Categories
                </span>

                <div>
                    <span >Sign up to searing weekly newsletter to get the latest updates.</span>
                </div>

                <div className='flex flex-row items-center justify-between border-3 border-[1px] p-1 pl-3 rounded-lg  '>
                    <input type="text" placeholder="Enter Email Address" className='appearance-none outline-none border-none bg-transparent ' />
                    <button className='bg-4 p-4 px-6 rounded-xl text-center text-white font-bold hover:bg-3 transition-all duration-300 ease-in-out cursor-pointer'>
                        <BsSend className='text-2xl text-center' />
                    </button>
                </div>

            </section>


        </footer>
    )
}