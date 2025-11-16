import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import menu1 from '../assets/images/menu-images/menu1.gif'
import menu2 from '../assets/images/menu-images/menu2.png'
import menu3 from '../assets/images/menu-images/menu3.jpg'
import menu4 from '../assets/images/menu-images/menu4.jpg'
import menu5 from '../assets/images/menu-images/menu5.jpg'
import menu6 from '../assets/images/menu-images/menu6.jpg'
import context from '../context/Context'
import gsap from 'gsap'
import { link } from 'framer-motion/client'
 
const Menu = () => {

  const logo = useRef();
  const closeBtn = useRef();
  const items = useRef();
  const menuBottom = useRef();
  const parentDiv = useRef();
  const tl = useRef(null);

  const {isMenuOpen, setIsMenuOpen} = useContext(context)

  const [time, setTime] = useState("");

    useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      // Montreal ka time zone offset use karna hoga
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "America/Toronto" 
      };
      setTime(now.toLocaleTimeString("en-GB", options));
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  // Close menu function
  const handleCloseMenu = () => {
    if (tl.current && parentDiv.current) {
      const closeTl = gsap.timeline({
        onComplete: () => {
          setIsMenuOpen(false);
        }
      });

      const stairs = parentDiv.current.querySelectorAll('.stairs');
      
      closeTl
        .to([menuBottom.current, items.current, logo.current, closeBtn.current], {
          opacity: 0,
          duration: 0.3,
          ease: "power3.in"
        })
        .to(stairs, {
          top: "-100%",
          duration: 0.5,
          stagger: 0.08,
          ease: "power4.in"
        });
    } else {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Set parent div visible immediately
      gsap.set(parentDiv.current, { display: 'grid' });
      
      // Kill any existing timeline
      if (tl.current) {
        tl.current.kill();
      }

      // Create fresh timeline
      tl.current = gsap.timeline({
        ease: "power4.out"
      });

      const stairs = parentDiv.current.querySelectorAll('.stairs');
      
      // Reset all elements to initial positions immediately
      gsap.set(stairs, { top: "-100%" });
      gsap.set(logo.current, { opacity: 1, x: 0 });
      gsap.set(closeBtn.current, { opacity: 1, x: 0 });
      gsap.set(items.current, { opacity: 1, scale: 1, rotationX: 0, transformPerspective: 800 });
      gsap.set(menuBottom.current, { opacity: 1, y: 0 });
      
      // Start animation immediately
      tl.current
        // Animate stairs down with stagger
        .to(stairs, {
          top: "0%",
          duration: 0.6,
          stagger: -0.12,
          ease: "power4.out"
        })
        // Animate content in
        .from(logo.current, {
          x: -30,
          opacity: 0,
          duration: 0.4,
          ease: "power3.out"
        }, "-=0.3")
        .from(closeBtn.current, {
          x: 30,
          opacity: 0,
          duration: 0.4,
          ease: "power3.out"
        }, "-=0.3")
        .from(items.current, {
          scale: 0.8,   
          rotationX: 90, 
          opacity: 0,
          duration: 0.5,
          ease: "power3.out"
        }, "-=0.3")
        .from(menuBottom.current, {
          opacity: 0,
          y: 20,
          duration: 0.4,
          ease: "power3.out"
        }, "-=0.4");

    } else {
      // Reset everything when closed
      if (parentDiv.current) {
        // Kill timeline
        if (tl.current) {
          tl.current.kill();
        }
        
        gsap.set(parentDiv.current, { display: 'none' });
        
        // Reset all elements
        const stairs = parentDiv.current.querySelectorAll('.stairs');
        gsap.set(stairs, { top: "-100%" });
        gsap.set([logo.current, closeBtn.current, items.current, menuBottom.current], { 
          clearProps: "all" 
        });
      }
    }
  }, [isMenuOpen]);

  const menuData = [
    {
      head: "projects", firstImg: menu1 , secondImg: menu2 ,miniHead: "See Everything" , link: "/projects"
    },
    {
      head: "agency", firstImg: menu3 , secondImg: menu4, miniHead: "know us", link: '/agency'
    },
    
    {
      head: "contact", firstImg: menu1 , secondImg: menu2, miniHead: "Send us a fax", link: "/"
    },
    {
      head: "blog", firstImg: menu5 , secondImg: menu6, miniHead: "Read articles", link: "/"
    }
  ]

  const [isTimeVisible, setIsTimeVisible] = useState(false);
  useEffect(()=>{
    if(window.innerWidth > 1024){
      setIsTimeVisible(true);
    } else{
      setIsTimeVisible(false)
    }
  },[window.innerWidth])

  return (
    <div 
      ref={parentDiv} 
      className='w-screen h-screen fixed top-0 left-0 z-[500] hidden '
      style={{ display: 'none' }}
    >

      {/* Stairs divs - each with different left positioning for better stagger effect */}
      <div className='stairs w-[20%] h-full bg-black absolute top-[-100%] left-0 z-6' ></div>
      <div className='stairs w-[20%] h-full bg-black absolute top-[-100%] left-[20%] z-5'></div>
      <div className='stairs w-[20%] h-full bg-black absolute top-[-100%] left-[40%] z-4'></div>
      <div className='stairs w-[20%] h-full bg-black absolute top-[-100%] left-[60%] z-3'></div>
      <div className='stairs w-[20%] h-full bg-black absolute top-[-100%] left-[80%] z-2'></div>

      <div className='absolute top-0 left-0 w-full h-full text-white z-[700] flex flex-col justify-between overflow-y-scroll overflow-x-hidden '>
        <div className='w-full text-end px-2 flex items-center justify-between'>
            <Link to='/'><h2 ref={logo}><svg xmlns="http://www.w3.org/2000/svg" fill="white"  className="w-[103px] h-[44px] lg:w-[120px] lg:h-[52px]"   viewBox="0 0 103 44">
                      <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg></h2></Link>
            <i 
              ref={closeBtn} 
              className="ri-close-large-line text-[4.5rem] leading-none cursor-pointer hover:rotate-90 transition-transform duration-300"
              onClick={handleCloseMenu}
            ></i>
        </div>

         <div ref={items} className='items'>
            {menuData.map((item, index)=>{
              return  <Link to={`${item.link}`}>
              <div onClick={handleCloseMenu} key={index} className={`w-full pt-2 sm:py-[2vw] md:py-[8px] md:pt-[14px] xl:py-[20px] lg:py-[17px] lg:pt-[28px] xl:pt-[30px] sm:pt-[2.4vw] relative border-t-2 border-zinc-500 text-center ${index == 3 && "border-b-2"} overflow-hidden group cursor-pointer`}>
                        <div className="menuItems w-full h-full bg-[var(--green-color)] absolute top-[-100%] left-0 overflow-hidden group-hover:top-[0%] transition-all duration-200 flex items-center">
                            <div className="marquee-container flex whitespace-nowrap">
                              <div className="marquee-content flex items-center gap-10 animate-marquee">
                                {/* 1st copy of items */}
                                <div className="flex items-center gap-10">
                                  <div className="h-[65px] md:h-[85px] lg:w-[180px] xl:h-[100px] xl:w-[200px] w-[150px] rounded-full overflow-hidden shrink-0">
                                    <img src={item.firstImg} alt="Menu Image" className="w-full h-full object-cover" />
                                  </div>
                                  <h1 className="text-[var(--black-color)] uppercase  font-bold text-[13vw] xl:text-[6rem] sm:text-[11vw] md:text-[5rem] leading-none">
                                    {item.miniHead}
                                  </h1>
                                  <div className="h-[65px] md:h-[85px] lg:w-[180px] xl:h-[100px] xl:w-[200px] w-[150px] rounded-full overflow-hidden shrink-0">
                                    <img src={item.secondImg} alt="Menu Image" className="w-full h-full object-cover" />
                                  </div>
                                </div>

                                {/* 2nd copy of same items (duplicate for loop) */}
                                <div className="flex items-center gap-10">
                                  <div className="h-[65px] md:h-[85px] lg:w-[180px] xl:h-[100px] xl:w-[200px] w-[150px] rounded-full overflow-hidden shrink-0">
                                    <img src={item.firstImg} alt="Menu Image" className="w-full h-full object-cover" />
                                  </div>
                                  <h1 className="text-[var(--black-color)] sm:text-[11vw] md:text-[5rem] uppercase  font-bold text-[13vw] xl:text-[6rem]  leading-none">
                                    {item.miniHead}
                                  </h1>
                                  <div className="h-[65px] md:h-[85px] lg:w-[180px] xl:h-[100px] xl:w-[200px] w-[150px] rounded-full overflow-hidden shrink-0">
                                    <img src={item.secondImg} alt="Menu Image" className="w-full h-full object-cover" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                      <h1 className="text-[14vw] sm:text-[12vw] md:text-[5.4rem] lg:text-[7rem] xl:text-[7.5rem] uppercase font-bold leading-16">{item.head}</h1>
                </div></Link>
            })}
        </div>

          <div ref={menuBottom} className='flex flex-col gap-5 px-2  w-full py-3 lg:flex lg:flex-row lg:justify-between lg:px-2 lg:items-center'>
                

              <ul className='flex gap-1 items-center  w-fit'>
                <li className='border-3 border-white rounded-full px-3 pt-1 w-fit cursor-pointer hover:border-[var(--green-color)] transition-all duration-200 group'><h4 className='font-semibold text-2xl lg:text-[1.2rem] uppercase group-hover:text-[var(--green-color)] transition-all duration-200'>fb</h4></li>
                <li className='border-3 border-white rounded-full px-3 pt-1 w-fit cursor-pointer hover:border-[var(--green-color)] transition-all duration-200 group'><h4 className='font-semibold text-2xl lg:text-[1.2rem] uppercase group-hover:text-[var(--green-color)] transition-all duration-200'>ig</h4></li>
                <li className='border-3 border-white rounded-full px-3 pt-1 w-fit cursor-pointer hover:border-[var(--green-color)] transition-all duration-200 group'><h4 className='font-semibold text-2xl lg:text-[1.2rem] uppercase group-hover:text-[var(--green-color)] transition-all duration-200'>in</h4></li>
                <li className='border-3 border-white rounded-full px-3 pt-1 w-fit cursor-pointer hover:border-[var(--green-color)] transition-all duration-200 group'><h4 className='font-semibold text-2xl lg:text-[1.2rem] uppercase group-hover:text-[var(--green-color)] transition-all duration-200'>be</h4></li>
            </ul>

                <ul className='uppercase text-xs lg:text-sm font-semibold  lg:w-fit md:flex  md:gap-10 lg:gap-10  lg:justify-center  '>
                    <li className='cursor-pointer hover:text-[var(--green-color)] transition-all duration-200'>politique de confidentialite</li>
                    <li className='cursor-pointer hover:text-[var(--green-color)] transition-all duration-200'>avis de confidentialite</li>
                    <li className='cursor-pointer hover:text-[var(--green-color)] transition-all duration-200'>rapport etthque</li>
                    <li className='cursor-pointer hover:text-[var(--green-color)] transition-all duration-200'>options de consentement</li>
                </ul>

                {isTimeVisible && <div className='flex gap-2 items-center w-full lg:w-fit justify-center '>
                    <i className="ri-global-line text-2xl lg:text-[1.5rem]"></i>
                    <h5 className='text-base lg:text-base uppercase font-semibold '>montreal_{time}</h5>
                </div>}

        </div> 

      </div> 

    </div>
  )
}

export default Menu