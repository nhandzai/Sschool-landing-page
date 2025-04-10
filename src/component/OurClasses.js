'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export const classData = [
    {
        title: "English Class",
        description: "Nulla a auctor leo. Vestibulum viverra mattis arcu",
        age: "3-5 years",
        weekly: "5 days",
        time: "4.5 hours",
        image: "/images/class-01.png",
    },
    {
        title: "Math Class",
        description: "Nulla a auctor leo. Vestibulum viverra mattis arcu",
        age: "3-5 years",
        weekly: "5 days",
        time: "4.5 hours",
        image: "/images/class-02.png",
    },
    {
        title: "Drawing Class",
        description: "Nulla a auctor leo. Vestibulum viverra mattis arcu",
        age: "3-5 years",
        weekly: "5 days",
        time: "4.5 hours",
        image: "/images/class-03.png",
    },
    {
        title: "Science Class",
        description: "Nulla a auctor leo. Vestibulum viverra mattis arcu",
        age: "3-5 years",
        weekly: "5 days",
        time: "4.5 hours",
        image: "/images/class-04.png",
    },
    {
        title: "Music Class",
        description: "Nulla a auctor leo. Vestibulum viverra mattis arcu",
        age: "3-5 years",
        weekly: "5 days",
        time: "4.5 hours",
        image: "/images/class-05.png",
    },
];


export default function OurClasses() {

    return (
        <section className="bg-4 text-white px-16 py-6">
            <div className="flex flex-col items-center gap-4">
                <span className="sm:text-lg text-sm uppercase tracking-wider font-bold">Our Classes</span>

                <div className="sm:text-5xl text-2xl text-center leading-tight font-bold">
                    <span>We Meet Kids At Their Level</span><br />
                    <span>Regardless Of Their Age</span>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                      }}
                
                    loop={true}
                    className="w-full pt-8 "
                >
                    {classData.map((cls, index) => (
                        <SwiperSlide key={index} className="flex flex-col p-4 bg-white rounded-xl w-80">
                            <div className='items-center justify-center flex'>
                                <img src={cls.image} alt={`Class ${index + 1}`} />
                            </div>

                            <div className="flex border-b-[1px] border-4 flex-col gap-2 text-black p-4">
                                <span className="text-lg font-bold">{cls.title}</span>
                                <span>{cls.description}</span>
                            </div>

                            <div className="flex sm:flex-row flex-col justify-between items-center p-4 text-black">
                                <div className="flex sm:flex-col flex-row  gap-1">
                                    <span className="font-bold text-4">age</span>
                                    <span>{cls.age}</span>
                                </div>
                                <div className="flex sm:flex-col flex-row  gap-1">
                                    <span className="font-bold text-4">weekly</span>
                                    <span>{cls.weekly}</span>
                                </div>
                                <div className="flex sm:flex-col flex-row  gap-1">
                                    <span className="font-bold text-4">time</span>
                                    <span>{cls.time}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
