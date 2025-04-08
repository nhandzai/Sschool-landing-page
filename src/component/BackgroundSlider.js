import HeroSection from "./HeroSection";

export default function BackgroundSlider() {
    return (
        <div className="relative w-full h-screen overflow-hidden">

            <div
                className="absolute inset-0 bg-cover bg-center opacity-0 fade delay-0"
                style={{ backgroundImage: "url('/images/slider-2.png')" }}
            ></div>
            <div
                className="absolute inset-0 bg-cover bg-center opacity-0 fade delay-4"
                style={{ backgroundImage: "url('/images/slider-2.png')" }}
            ></div>
            <div
                className="absolute inset-0 bg-cover bg-center opacity-0 fade delay-8"
                style={{ backgroundImage: "url('/images/slider-3.png')" }}
            ></div>


            <div className="absolute inset-0 flex items-center sm:left-20 left-10  z-10">
                <HeroSection/>
            </div>
        </div>
    );
}
