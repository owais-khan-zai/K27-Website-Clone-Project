import {React,useContext} from "react";
import context from '../../context/Context'

const ProjectCard = ({item}) => {

    const {card1, card2} = item
    const {setCardData} = useContext(context)
    
      const mouseEnterHandler = (item) => { 
        console.log(item)
        setCardData({name: item.name, secondName: item.secondName, year: item.year}) 
      }

      const mouseLeaveHandler = () =>{
            setCardData({name: null, secondName: null, year: null})
        }


  return (
    <>
      <div
        id="first"
        onMouseEnter={()=> mouseEnterHandler(card1)}
        onMouseLeave={mouseLeaveHandler}
        className="relative w-full overflow-hidden hover:rounded-[2.8rem] transition-all duration-200 cursor-pointer group origin-center "
      >
        <img
          src={card1.img}
          alt="Card Image"
          className="w-full sm:h-full  object-cover  group-hover:brightness-80 transition-all duration-200"
        />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-200 border-3 px-6 sm:px-4 sm:pt-3 py-2 border-white rounded-full ">
          <h3 className="font-semibold text-[7vw] sm:text-[3.5vw] lg:text-[4.2vw] whitespace-nowrap leading-none text-white">
            View Projects
          </h3>
        </div>
      </div>

      <div
        id="second"
        onMouseEnter={()=>mouseEnterHandler(card2)}
        onMouseLeave={mouseLeaveHandler}
        className="relative w-full overflow-hidden hover:rounded-[2.8rem] transition-all duration-200 cursor-pointer group origin-center "
      >
        <img
          src={card2.img}
          alt="Card Image"
          className="w-full sm:h-full object-cover  group-hover:brightness-80 transition-all duration-200"
        />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-200 border-3 px-6 sm:px-4 sm:pt-3 py-2 border-white rounded-full ">
          <h3 className="font-semibold text-[7vw] sm:text-[3.5vw] lg:text-[4.2vw] whitespace-nowrap leading-none text-white">
            View Projects
          </h3>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
