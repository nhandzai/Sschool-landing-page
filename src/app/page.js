import BackgroundSlider from "@/component/BackgroundSlider";
import AboutUs from "@/component/AboutUs";
import ClassCarousel from "@/component/OurClasses";
import ScrollToTop from "@/component/ScrollToTop";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 overflow-x-hidden">
      <ScrollToTop />
      <BackgroundSlider />
      <AboutUs />
      <ClassCarousel />
    </main>
  );
}
