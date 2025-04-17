
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Map } from "@/components/Map";
import { Footer } from "@/components/Footer";
import { Booking } from "@/components/Booking";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Map />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
