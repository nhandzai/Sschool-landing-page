import { TbTargetArrow, TbBook  } from "react-icons/tb";

export default function AboutUs() {
    return (
        <section className="flex lg:flex-row flex-col sm:px-16 px-4 justify-between items-center ">
            <div className="relative w-120 ">
                <img
                    src="/images/01.jpg"
                    alt="Masked Image"
                    className="w-full object-cover mask-border-shape"
                />
            </div>

            <section className="flex gap-4 justify-center flex-col lg:w-1/2 items-center lg:items-start">
                <span className="text-4">About Us</span>

                <div className="sm:text-5xl text-2xl  font-bold text-3 flex flex-col sm:items-start items-center">
                    <span className="flex flex-col sm:items-start items-center">
                        Welcome To Best  
                        <span className="text-4">SSchool</span>
                    </span>
                    <span className="sm:text-center">For Your Child</span>
                </div>

                <div className="text-6 flex mx-10 lg:mx-0">
                    <span>Luctus. Curabitur nibh justo imperdiet non ex non tempus faucibus urna Aliquam at elit vitae dui sagittis maximus eget vitae diam In fermentum</span>
                </div>

                <div className="flex gap-4 flex-wrap justify-center lg:justify-start items-center">
                    <div className="flex gap-4">
                        <div className="h-20 w-20 bg-4 rounded-xl items-center justify-center flex">
                            <TbTargetArrow className="text-white text-5xl" />
                        </div>
                        <div className="flex flex-col w-45 ">
                            <span className=" font-bold">
                                Our Mission
                            </span>

                            <span className="text-6">
                                Aliquam erat volutpat
                                nullam imperdiet
                            </span>
                        </div>

                    </div>

                    <div className="flex gap-4">
                        <div className="h-20 w-20 bg-4 rounded-xl items-center justify-center flex">
                            <TbBook className="text-white text-5xl" />
                        </div>
                        <div className="flex flex-col w-45 ">
                            <span className=" font-bold">
                                Our Vision
                            </span>

                            <span className="text-6">
                                Ut vehiculadictumst
                                maecenas ante.
                            </span>
                        </div>
                    </div>


                </div>
            </section>
        </section>
    )
}