import React, { useContext, useEffect, useState } from 'react'
import video from '../assets/video/main-video.mp4'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const Home = () => {


  return (
    <div className='w-full min-h-full   relative '>
        <video src={video} className='w-full h-full object-cover absolute top-0 left-0' loop autoPlay muted playsInline/>

      <div className='w-full h-full relative z-10 flex  items-end md:items-start '>

        
        <div className=' w-full min-h-screen md:justify-between  flex flex-col justify-end gap-8'>


            <div className=' w-full flex justify-center text-[12vw] sm:text-[10.5vw] md:text-[10vw] lg:text-[8vw] xl:text-[7rem] text-white '>
                <div className='flex flex-col items-center '>
                    <div className=' overflow-hidden '>
                        <motion.h1 
                        initial={
                            {
                                y:"-100%",
                            }
                        }
                        animate={
                            {
                                y: "0%",
                            }
                        }
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                        className=' relative  leading-none origin-bottom'>THE SPARK </motion.h1>
                    </div>
                    <div className='overflow-hidden'>
                        <motion.div initial={
                            {
                                y:"-100%",
                            }
                        }
                        animate={
                            {
                                y: "0%",
                            }
                        }
                        transition={{
                            duration: 0.3,
                            delay:0.1,
                            ease: "easeInOut"
                        }}
                        className=' relative flex gap-2 justify-center items-center  leading-none'>
                            <h1 className='leading-none '>WHO</h1><div className='bg-white w-[25vw]  sm:w-[9rem] md:w-[10rem] md:h-20 lg:w-[12rem] xl:w-[13rem] xl:h-24  lg:h-24 h-15 rounded-full overflow-hidden'><video src={video} className='h-full w-full object-cover ' autoPlay muted loop/></div>
                        </motion.div>
                    </div>
                    <div className='overflow-hidden'>
                        <motion.h1 
                        initial={
                            {
                                y:"-100%",
                            }
                        }
                        animate={
                            {
                                y: "0%",
                            }
                        }
                        transition={{
                            duration: 0.3,
                            delay:0.2,
                            ease: "easeInOut"
                        }}
                        className=' relative leading-none '>GENERATES</motion.h1>
                    </div>
                    <div className='overflow-hidden'>
                        <motion.h1 
                        initial={
                            {
                                y:"-100%",
                            }
                        }
                        animate={
                            {
                                y: "0%",
                            }
                        }
                        transition={{
                            duration: 0.3,
                            delay:0.3,
                            ease: "easeInOut"
                        }}
                        className=' relative leading-none '>THERE</motion.h1>
                    </div>
                    <div className='overflow-hidden'>
                        <motion.h1 
                        initial={
                            {
                                y:"-100%",
                            }
                        }
                        animate={
                            {
                                y: "0%",
                            }
                        }
                        transition={{
                            duration: 0.3,
                            delay:0.4,
                            ease: "easeInOut"
                        }}
                        className=' relative leading-none '>CREATIVITY</motion.h1>
                    </div>
                </div>

            </div>

        
            <div className='w-full gap-8 flex flex-col '>
                <div className='self-end flex flex-wrap overflow-hidden'>
                    <motion.p 
                    initial={
                        {
                            x:"100%",
                        }
                    }
                    animate={
                        {
                            x:"0%",
                        }
                    }
                    transition={{
                        duration:0.2,
                        delay: 0.6,
                        ease: "easeInOut"
                    }}
                    className='aniPara relative text-white text-xs lg:text-sm lg:w-78 w-68 leading-4'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 is an agency that thinks through every action to nurture the brand. Tomorrow, in 5 months, and in 5 years. We seek the friction that creates the spark to generate emotion. To ensure an honest relationship, we are unfiltered, we say what needs to be said, we do what needs to be done.</motion.p>
                </div>

                <motion.div 
                initial={{
                    opacity:0,
                }}
                animate={{
                    opacity:1,
                }}
                transition={{
                    duration: 0.2,
                    delay: 0.8,
                    ease: "easeInOut"
                }}
                className='aniBtn text-white flex gap-4 lg:gap-10 justify-center pb-3'>
                    <Link to='/projects'><div className='border-3 rounded-full p-2 px-4 pt-3 lg:px-5 lg:py-0 cursor-pointer hover:text-[#D3FD50] transition-all duration-100'>
                        <h3 className='text-[7.3vw] sm:text-[6.5vw]  md:text-[5.8vw] lg:text-[4.5vw] xl:text-[3.5rem] font-bold'>PROJECTS</h3>
                    </div></Link>
                    <Link to='/agency'> <div className='border-3 rounded-full p-2 px-4 pt-3 lg:px-5 lg:py-0 cursor-pointer hover:text-[#D3FD50] transition-all duration-100'>
                        <h3 className='text-[7.5vw] sm:text-[6.5vw] md:text-[5.8vw] lg:text-[4.5vw] xl:text-[3.5rem] font-bold'>AGENCY</h3>
                    </div></Link>
                </motion.div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Home
