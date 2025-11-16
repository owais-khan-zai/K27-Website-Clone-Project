import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Context from '../context/Context'

const Navbar = () => {
    const [ChangeColor, setChangeColor] = useState(false);
    const location = useLocation()

    const {DarkTheme, isMenuOpen, setIsMenuOpen, cardData} = useContext(Context)
    

    useEffect(() => {
        if(location.pathname === '/agency' || location.pathname === '/projects'){
            setChangeColor(true);
        } 
        else {
            setChangeColor(false);
        }
        
        
    }, [location.pathname]);
    
    const logoFill = DarkTheme ? "white" : (ChangeColor ? "black" : "white");
    // ye line check krygi agar darktheme hoga to white krdygi logo warna change color ky hisaab sy color rakh dygi
    
    const menuButton = useRef();

    const menuHandler = () =>{
        setIsMenuOpen(true);
        console.log(isMenuOpen)
    }


  return (
    <div className={`fixed top-0 left-[50%] -translate-x-[50%] flex justify-between w-full max-w-[1550px] ${cardData.name != null && "bg-white"} `}>
        <div className='p-2'>
            <Link to='/'><h2 className=''><svg xmlns="http://www.w3.org/2000/svg" fill={logoFill}  className="w-[103px] h-[44px] lg:w-[120px] lg:h-[52px]"   viewBox="0 0 103 44">
                      <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg></h2></Link>
        </div>

        <div className=' h-fit ' onClick={menuHandler}>
            <div ref={menuButton} className='menuButton bg-black  h-[3.3rem] max-w-[220px] w-[35vw] relative md:w-[180px] lg:w-[230px] lg:h-[3.75rem] overflow-hidden group cursor-pointer'>
                <div className='bg-[#D3FD50] w-full h-full absolute top-[-100%] left-0 group-hover:top-[0%] transition-all duration-200'>

                </div>
                <div className='absolute top-[50%] right-4 translate-y-[-50%] flex flex-col gap-2 items-end'>
                    <div className='bg-white h-[1px] w-12 group-hover:bg-black transition-all duration-200'></div>
                    <div className='bg-white h-[1px] w-6 group-hover:bg-black transition-all duration-200'></div>
                </div>
            </div>
        </div>
        {cardData.name != null && <div className='absolute top-[90%] border-t-2 border-b-2 bg-white  w-full h-14 flex justify-between items-center px-2'>
            <h4 className='font-semibold text-[1.2rem] lg:text-[1.5rem]'>{cardData.name}</h4>
            <h4 className='font-semibold text-[1.2rem] lg:text-[1.5rem]'>{cardData.secondName}</h4>
            <h4 className='font-semibold text-[1.2rem] lg:text-[1.5rem] '>{cardData.year}</h4>
        </div>}
    </div>
  )
}

export default Navbar
