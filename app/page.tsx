import Contact from "@/components/Contact";
import Detail from "@/components/Detail";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden pt-5 md:px-10 lg:px-20">
      <Navbar />
      <Hero />
      <Service />
      <Detail />
      <Testimonial />
      <Contact />
    </main>
  );
}
