"use client";

import { useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Page() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
