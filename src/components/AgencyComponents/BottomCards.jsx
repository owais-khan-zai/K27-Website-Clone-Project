import React from 'react'
import cardImg1 from '../../assets/images/agency-page-images/bottom-img-1.jpg'
import cardImg2 from '../../assets/images/agency-page-images/bottom-img-2.jpg'
import cardImg3 from '../../assets/images/agency-page-images/bottom-img-3.jpg'
import Footer from '../../layouts/Footer'

const BottomCards = () => {

    const card = [
        { id: 1, miniHead: 'Lamajeure', head: 'Lamajeure', img: cardImg1},
        { id: 2, miniHead: 'GardaWorld', head: 'Crisis24', img: cardImg2},
        { id: 3, miniHead: 'Lassonde', head: 'Fruit', img: cardImg3}
    ]

  return (
    <>
        <div className=' w-full bg-black pt-65 '>
            {card.map((ele, index)=>{
                return <div key={index} className='h-[102vh] w-full rounded-2xl overflow-hidden bg-blue-500 mt-[-40px] group cursor-pointer sticky top-[-13px] left-0'>
                    <div className='relative w-full h-full '>
                        <img src={ele.img} alt='Card Image' className='h-full w-full object-cover object-left md:object-top transition-all duration-300 group-hover:brightness-75 group-hover:scale-[1.05]'/>
                        <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center text-white'>
                            <h6 className='text-xl md:text-[1.8rem] lg:text-[2rem] font-semibold leading-none'>{ele.miniHead}</h6>
                            <h3 className='font-semibld text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] font-semibold group-hover:underline transition-all duration-200'>{ele.head}</h3>
                        </div>
                    </div>
                </div>
            })}
        <Footer/>
        </div>
    </>
  )
}

export default BottomCards
