import React, { useEffect, useState } from 'react'

const Footer = () => {

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

  return (
    <div className='h-[90vh] md:h-[65vh]  text-white w-full bg-black relative z-99 px-2 pt-5 overflow-hidden flex justify-between flex-col'>

        <div className='flex h-full flex-col justify-between md:flex-row md:h-fit '>
          <ul className='flex gap-1 items-center'>
              <li className='border-3 border-white rounded-full px-3 pt-1 w-fit cursor-pointer hover:border-[var(--green-color)] transition-all duration-200 group'><h4 className='font-semibold text-3xl lg:text-[2.7rem] uppercase group-hover:text-[var(--green-color)] transition-all duration-200'>fb</h4></li>
              <li className='border-3 border-white rounded-full px-3 pt-1 w-fit cursor-pointer hover:border-[var(--green-color)] transition-all duration-200 group'><h4 className='font-semibold text-3xl lg:text-[2.7rem] uppercase group-hover:text-[var(--green-color)] transition-all duration-200'>ig</h4></li>
              <li className='border-3 border-white rounded-full px-3 pt-1 w-fit cursor-pointer hover:border-[var(--green-color)] transition-all duration-200 group'><h4 className='font-semibold text-3xl lg:text-[2.7rem] uppercase group-hover:text-[var(--green-color)] transition-all duration-200'>in</h4></li>
              <li className='border-3 border-white rounded-full px-3 pt-1 w-fit cursor-pointer hover:border-[var(--green-color)] transition-all duration-200 group'><h4 className='font-semibold text-3xl lg:text-[2.7rem] uppercase group-hover:text-[var(--green-color)] transition-all duration-200'>be</h4></li>
          </ul>
          <div >
              <h2 className='uppercase border-3 border-white w-fit text-[11.5vw] rounded-full px-7 sm:px-[8vw] sm:text-[8vw] md:px-[40px] md:text-[2rem] lg:text-[2.5rem] hover:bg-[var(--green-color)] hover:text-[var(--black-color)] hover:border-[var(--green-color)] cursor-pointer transition-all duration-200'>Contact<i className="ri-phone-fill ml-3"></i></h2>
          </div>
        </div>

        <div className='flex flex-col gap-3 w-full py-3 lg:flex-row lg:px-1 lg:items-center'>

          <div className='flex gap-2 items-center w-full lg:w-fit justify-center '>
              <i className="ri-global-line text-2xl lg:text-[2rem]"></i>
              <h5 className='text-base lg:text-lg uppercase font-semibold '>montreal_{time}</h5>
          </div>
          <ul className='uppercase text-xs lg:text-base font-semibold lg:flex lg:w-full lg:justify-center lg:gap-10 '>
              <li className='cursor-pointer hover:text-[var(--green-color)] transition-all duration-200'>politique de confidentialite</li>
              <li className='cursor-pointer hover:text-[var(--green-color)] transition-all duration-200'>avis de confidentialite</li>
              <li className='cursor-pointer hover:text-[var(--green-color)] transition-all duration-200'>rapport etthque</li>
              <li className='cursor-pointer hover:text-[var(--green-color)] transition-all duration-200'>options de consentement</li>
          </ul>
          <div className='w-full  justify-center flex lg:w-fit'>
              <h5 className='uppercase text-base lg:text-lg font-semibold whitespace-nowrap cursor-pointer hover:text-[var(--green-color)] transition-all duration-200'>Retour En haut</h5>
          </div>
        </div> 

    </div>    
  )
}

export default Footer
