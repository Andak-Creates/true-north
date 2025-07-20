"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <TrustedBy />
      <Services />
      <About />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
}
