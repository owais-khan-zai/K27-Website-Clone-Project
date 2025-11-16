import React, { useContext, useEffect, useRef, useState } from "react";
import HeroSection from "../components/AgencyComponents/HeroSection";
import MidSection from "../components/AgencyComponents/MidSection";
import Context from "../context/Context";
import BottomCards from "../components/AgencyComponents/BottomCards";

const Agency = () => {
  const { DarkTheme, setDarkTheme } = useContext(Context);

  const firstComponent = useRef();

  useEffect(() => {
    const scrollHandler = () => {

    // firstComponent.current.offsetTop => HeroSection top se kitni door hai page ke start se.
    // firstComponent.current.offsetHeight => HeroSection ki total height

    const height = firstComponent.current.offsetTop  + firstComponent.current.offsetHeight

      if (window.scrollY > height - 340) {
        setDarkTheme(true);
      } else {
        setDarkTheme(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div
      className={`w-full ${
        DarkTheme ? "bg-black" : " bg-white"
      } transition-all duration-400`}
    >
      <div ref={firstComponent} >
         <HeroSection changeTheme={DarkTheme} />
      </div>
      <MidSection />
      <BottomCards/>
    </div>
  );
};

export default Agency;
