import BackgroundSlider from "@/component/BackgroundSlider";
import AboutUs from "@/component/AboutUs";
import ClassCarousel from "@/component/OurClasses";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 ">
      <BackgroundSlider />
      <AboutUs />
      <ClassCarousel />
    </main>
  );
}
