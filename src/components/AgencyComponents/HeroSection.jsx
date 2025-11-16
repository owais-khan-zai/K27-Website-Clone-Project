import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../../context/Context";
import { easeIn, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);



const HeroSection = ({ changeTheme }) => {
  const { people } = useContext(Context);

  const [Index, setIndex] = useState(0);

  const mainImage = useRef();

  const parentOfImage = useRef();



  const [desktopImage, setDesktopImage] = useState(0);

  const [autoImageChange, setAutoImageChange] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setAutoImageChange(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(()=>{
    gsap.from(mainImage, {
      scrollTrigger:{
        trigger: parentOfImage.current,
        start: "top ",
        end:"56%",
        scrub:true,
        // markers:true,
        onUpdate:(e)=>{
          setDesktopImage(Math.round(e.progress * (people.length - 1) ))
        },
      }  
    })
  },[])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev + 1 === people.length) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [people]);



  return (
    <div
      className={`w-full pt-50 px-2 ${
        changeTheme ? " text-white" : "text-black"
      } transition-all duration-400`}
      ref={parentOfImage}
    >
      {/* main area */}
      <div className="w-full" >
        <motion.div 
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1          
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="origin-left sticky top-[12rem] left-[7.5rem] sm:left-[25%] lg:left-[20%] 2xl:left-[30vw]  w-[33vw] h-[40vw] sm:w-[29vw] sm:h-[35vw] md:w-[28vw] md:h-[34vw] lg:w-[23vw] lg:h-[29vw] xl:w-[22vw] xl:h-[27vw] 2xl:w-[20rem] 2xl:h-[27rem]  rounded-3xl overflow-hidden ">
          {
            autoImageChange ? <img
              className="w-full h-full object-cover absolute top-0 left-0"
              src={people[Index].img}
              alt="People Image"
            /> : 
            <img
              ref={mainImage}
              className="w-full h-full object-cover absolute top-0 left-0"
              src={people[desktopImage].img}
              alt="People Image"
            />
          }
        </motion.div>

        <div className="mx-auto w-full text-center  md:mt-[-15%] mt-[-30px] relative z-2 ">
          <div className="overflow-hidden">
            <motion.h1 
            initial={{
              y: "-100%"
            }}
            animate={{
              y:"0%"         
            }}
            transition={{
              duration: 0.2,
              delay: 0.2,
              ease: "easeInOut",
            }}
            className="text-[18vw] xl:text-[16vw] 2xl:text-[16rem] font-bold leading-none">SIXTY-</motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
            initial={{
              y: "-100%"
            }}
            animate={{
              y:"0%"         
            }}
            transition={{
              duration: 0.2,
              delay: 0.3,
              ease: "easeInOut",
            }}
            className="text-[18vw] xl:text-[16vw] 2xl:text-[16rem] font-bold leading-none">SEVENTH</motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
            initial={{
              y: "-100%"
            }}
            animate={{
              y:"0%"         
            }}
            transition={{
              duration: 0.2,
              delay: 0.4,
              ease: "easeInOut",
            }}
            className="text-[18vw] xl:text-[16vw] 2xl:text-[16rem] font-bold leading-none">TWELVE</motion.h1>
          </div>

          <div className="w-full flex justify-end">
            <div className="pt-23 lg:w-[58vw] 2xl:w-[50rem]">
              <motion.p 
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.55,
                duration: 0.2,
              }}
              className="text-[1.4rem] sm:text-[2rem] md:text-[2.6rem] md:leading-12 2xl:text-[3rem] 2xl:leading-12 sm:leading-10  text-left leading-7">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Our curiosity fuels our creativity. We remain humble and say no to
                big egos, even yours. A brand is alive. It has values, a
                personality, a story. If we forget that, we may make good numbers
                in the short term, but we'll kill it in the long term. That's why
                we're committed to providing perspective, to building influential
                brands.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom area */}
      <motion.div 
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.65,
                duration: 0.2,
              }}
      className="pt-22 md:px-5 text-lg sm:font-semibold lg:text-xl">
        <div className="grid grid-cols-2 md:grid-cols-3">
          <div>
            <h5>Expertise</h5>
          </div>
          <div>
            <h5>Strategy</h5>
            <h5>Advertisement</h5>
            <h5>Branding</h5>
            <h5>Design</h5>
            <h5>Content</h5>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4 pt-10">
          <div>
            <p>
              Our projects are born in humility, grow in curiosity and live
              thanks to creativity in all its forms.
            </p>
          </div>
          <div>
            <p>
              Our creativity thrives in an environment where talent thrives.
              where we feel free to be the best version of ourselves.
            </p>
          </div>
          <div>
            <p>
              Our culter is openness to others. Periods. The entire crew
              contributes to building an agency w're proud of.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
