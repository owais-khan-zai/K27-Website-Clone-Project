import React, { useContext, useEffect, useRef, useState } from "react";
import PeopleContext from "../../context/Context";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MidSection = () => {
  const { people } = useContext(PeopleContext);

  const imageDiv = useRef();

  const imgRef = useRef();

  const [ImgSrc, setImgSrc] = useState();

  useEffect(() => {
    if (ImgSrc && imgRef.current) {
      // purani animation ko kill kar do
      gsap.killTweensOf(imgRef.current);

      // gsap.killtweenof ye jo function hy is lie use kra hy takay jo phelay animation jitni bhi chal rhi hain onhy stop krdo takay agar mouse jaldi move bhi kry to images animate sahi sy ho sakay

      // reset position (closed)
      gsap.set(imgRef.current, { clipPath: "inset(0 100% 0 0)" });

      // image left sy right ki taraf khulay aysa effect banany ky lie clip path use kra phelay takay image ko cut kr sakay top bottom or left sy 0 rakha or right sy 100% cut krdia to image invisible hogye or gsap sy animate krdia clippath ko 0% krky

      // animate open (left to right)
      gsap.to(imgRef.current, {
        clipPath: "inset(0 0% 0 0)",
        duration: 0.4,
        ease: "power3.out",
        overwrite: "auto", // nayi animation purani ko replace karegi
      });
    }
  }, [ImgSrc]);

  const enterHandler = (e) => {
    setImgSrc(e.currentTarget.querySelector("img").src);
    console.log(ImgSrc);
  };

  const leaveHandler = () => {
    setImgSrc(null);
    console.log(ImgSrc);
  };


  const peoplePortion = useRef();

  useEffect(()=>{
    let width = "-35%"
    if(window.innerWidth > 1024){
      width = "-25%"
    }
    gsap.fromTo(peoplePortion.current,
      {
        opacity: 0,
        y: "20%",
      },
      {
        y: "0%",
        opacity: 1,
        scrollTrigger:{
          trigger: peoplePortion.current,
          start: `${width} top`,
          toggleActions: "play reverse play reverse",
        }
      }
    )
  },[])
  return (
    <div className="pt-75 ">
      <div className="flex items-center  text-center flex-col   relative min-h-[80rem] h-fit ">

      <div className="text-div uppercase   relative top-40 md:top-75 lg:top-80 text-[var(--green-color)] text-[3rem] font-semibold z-2 w-full max-w-[100%]">

          {/* Left scrolling text with duplicates */}
          <div className="w-full overflow-hidden">
            <div className="scroll-container-left">
              <div className="scroll-text-left">
                <h2 className="whitespace-nowrap text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[9rem] ">Meggie</h2>
              </div>
              <div className="scroll-text-left">
                <h2 className="whitespace-nowrap text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[9rem]">Meggie</h2>
              </div>
            </div>
          </div>
          
          {/* Right scrolling text with duplicates */}
          <div className="w-full overflow-hidden">
            <div className="scroll-container-right">
              {/* First copy */}
              <div className="scroll-text-right">
                  <h4 className="text-[var(--white-color)] whitespace-nowrap text-[5.2vw] md:text-[4vw] lg:text-[3.5vw] xl:text-[2.7vw] 2xl:text-[2.7rem]  font-medium">
                    Consulting director
                  </h4>      
              </div>
              <div className="scroll-text-right">
                  <h4 className="text-[var(--white-color)] whitespace-nowrap text-[5.2vw] md:text-[4vw] lg:text-[3.5vw] xl:text-[2.7vw] 2xl:text-[2.7rem] font-medium">
                    Consulting director
                  </h4>
              </div>
            </div>
          </div>
        
      </div>


        <img
          src={people[4].img}
          alt="People Image"
          className="h-[85vw] sm:h-[80vh] md:h-[90vh] rounded-xl sticky top-[20%] sm:top-[10%] md:top-[5%] "
        />

        <div className="text-div uppercase  relative top-40 md:top-75 lg:top-80 text-[var(--green-color)] text-[3rem] font-semibold z-2 w-full  max-w-[100%]">
            {/* Left scrolling text with duplicates */}
            <div className="w-full overflow-hidden">
              <div className="scroll-container-left">
                <div className="scroll-text-left">
                  <h2 className="whitespace-nowrap text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[9rem]">Michele</h2>
                </div>
                <div className="scroll-text-left">
                  <h2 className="whitespace-nowrap text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[9rem]">Michele</h2>
                </div>
              </div>
            </div>
            
            {/* Right scrolling text with duplicates */}
            <div className="w-full overflow-hidden ">
              <div className="scroll-container-right">
                <div className="scroll-text-right">
                    <h4 className="text-[var(--white-color)] whitespace-nowrap text-[5.2vw] md:text-[4vw] lg:text-[3.5vw] xl:text-[2.7vw] 2xl:text-[2.7rem] font-medium">
                      Director of strategy
                    </h4>      
                </div>
                <div className="scroll-text-right">
                    <h4 className="text-[var(--white-color)] whitespace-nowrap text-[5.2vw] md:text-[4vw] lg:text-[3.5vw] xl:text-[2.7vw] 2xl:text-[2.7rem] font-medium">
                      Director of strategy
                    </h4>
                </div>
              </div>
            </div>

          </div>

        <img
          src={people[11].img}
          alt="People Image"
          className="h-[85vw] sm:h-[80vh] md:h-[90vh] rounded-xl sticky top-[20%] sm:top-[10%] md:top-[5%] "
        />

        {/*  upper ka kam tha 2 images wala  */}

        {/* yaha nichy people data wala portion hy */}

        <div className="bg-black w-full h-full relative z-99">
          <div ref={peoplePortion} className="relative ">
            <div
              ref={imageDiv}
              className=" w-25 h-35 sm:w-30 sm:h-40 md:w-[19vw] md:h-[24vw] lg:h-[24rem] lg:w-[19rem] 2xl:w-[19rem] 2xl:h-[25rem]  sticky z-99 top-[50%] translate-y-[-60%] left-[35%] pointer-events-none"
            >
              {ImgSrc && (
                <img
                  ref={imgRef}
                  src={ImgSrc}
                  className="w-full h-full object-cover rounded-lg relative top-20"
                />
              )}
            </div>
            {people.map((people, index) => {
              return (
                <div
                  onMouseEnter={(e) => {
                    enterHandler(e);
                  }}
                  onMouseLeave={leaveHandler}
                  key={index}
                  className={`relative w-full h-12 md:h-16 lg:h-20 border-t-2 border-zinc-400 group flex justify-between items-center overflow-hidden px-2 cursor-pointer ${
                    people.id == 14 ? "border-b" : " "
                  }`}
                >
                  <img type="hidden" src={people.img} className=" hidden" />
                  <div className="w-full h-full absolute top-[-100%] left-0 bg-[var(--green-color)] group-hover:top-0 transition-all duration-200"></div>
                  <h5 className="text-[var(--green-color)] text-md group-hover:text-[var(--black-color)] transition-all duration-200 z-2 sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem]">
                    {people.role}
                  </h5>
                  <h3 className="text-[var(--white-color)] text-lg font-semibold group-hover:text-[var(--black-color)] transition-all duration-200 z-2 sm:text-[1.4rem] md:text-[1.7rem] lg:text-[2.5rem]">
                    {people.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
