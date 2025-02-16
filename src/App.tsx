import { useRef } from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Service from "./Service";

const App = () => {
  const navRef = useRef(null);
  const heroRef = useRef(null);
  const footerRef = useRef(null);
  const serviceRef = useRef(null);
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
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
