import { useRef } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";

const App = () => {
  const navRef = useRef(null);
  const heroRef = useRef(null);
  const footerRef = useRef(null);
  const serviceRef = useRef(null);
  const testimonialRef = useRef(null);
  return (
    <>
      <div className="relative">
        <div ref={navRef}>
          <Navbar />
        </div>
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={serviceRef}>
          <Service />
        </div>
        <div ref={testimonialRef}>
          <Testimonial />
        </div>
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
