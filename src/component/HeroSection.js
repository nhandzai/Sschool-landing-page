export default function HeroSection() {
    return (
        <section className="flex gap-4 justify-center md:items-center flex-col">
            <span className="text-4 font-bold">Welcome To SSchool</span>

            <div className="text-5xl font-bold text-3 flex flex-col">
                <span>Trial Class For Free</span>
                <span>
                    On <span className="text-4">First Day.</span>
                </span>
            </div>

            <div className="">
                <span>Suspendisse eget lectus vitae elit malesuada lacinia Vestibulum</span>
            </div>

            <div className="flex gap-4">
                <a className='bg-4 p-4 px-6 rounded-xl text-center text-white font-bold hover:bg-3 transition-all duration-300 ease-in-out cursor-pointer'>
                    Explore More
                </a>
                <a className='border-[1px] border-4 p-4 px-6 rounded-xl text-center text-4 font-bold hover:bg-3 hover:border-transparent hover:text-1 transition-all duration-300 ease-in-out cursor-pointer'>
                    Get In Touch
                </a>
            </div>
        </section>
    )
}