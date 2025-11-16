import React, { useContext, useEffect, useRef } from 'react'
import Footer from '../layouts/Footer'
import img1 from '../assets/images/project-page-images/img1.jpg'
import img2 from '../assets/images/project-page-images/img2.jpg'
import img3 from '../assets/images/project-page-images/img3.jpg'
import img4 from '../assets/images/project-page-images/img4.jpg'
import img5 from '../assets/images/project-page-images/img5.jpg'
import img6 from '../assets/images/project-page-images/img6.jpg'
import img7 from '../assets/images/project-page-images/img7.jpg'
import img8 from '../assets/images/project-page-images/img8.jpg'
import img9 from '../assets/images/project-page-images/img9.jpg'
import img10 from '../assets/images/project-page-images/img10.jpg'
import img11 from '../assets/images/project-page-images/img11.jpg'
import img12 from '../assets/images/project-page-images/img12.jpg'
import img13 from '../assets/images/project-page-images/img13.jpg'
import img14 from '../assets/images/project-page-images/img14.jpg'
import img15 from '../assets/images/project-page-images/img15.jpg'
import img16 from '../assets/images/project-page-images/img16.jpg'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'
import context from '../context/Context'
import ProjectCard from '../components/ProjectsComponents/ProjectCard'

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  const projectData = [
    {
      card1: { name: "Jean Couto", secondName: "Bag", year: 2021, img: img1 },
      card2: { name: "Black Man", secondName: "WideScape", year: 2022, img: img2 }
    },
    {
      card1: { name: "Cake", secondName: "Oka", year: 2020, img: img3 },
      card2: { name: "Man", secondName: "Eye", year: 2023, img: img4 }
    },
    {
      card1: { name: "Choco", secondName: "Sweets", year: 2021, img: img5 },
      card2: { name: "Brand", secondName: "Cold Drink", year: 2019, img: img6 }
    },
    {
      card1: { name: "Black", secondName: "Man", year: 2022, img: img7 },
      card2: { name: "Horizon", secondName: "Tech", year: 2020, img: img8 }
    },
    {
      card1: { name: "Eclipse", secondName: "Drink", year: 2023, img: img9 },
      card2: { name: "Radiant", secondName: "Designs", year: 2021, img: img10 }
    },
    {
      card1: { name: "Flux", secondName: "Solutions", year: 2022, img: img11 },
      card2: { name: "Prism", secondName: "Collective", year: 2019, img: img12 }
    },
    {
      card1: { name: "Atlas", secondName: "Studio", year: 2020, img: img13 },
      card2: { name: "Nova", secondName: "Works", year: 2023, img: img14 }
    },
    {
      card1: { name: "Ignite", secondName: "Media", year: 2021, img: img15 },
      card2: { name: "Aether", secondName: "Agency", year: 2022, img: img16 }
    }
  ];

  useGSAP(() => {
    if (window.innerWidth > 1024) {
      // Animate each project box individually with its own ScrollTrigger
      gsap.utils.toArray(".project-box").forEach((box) => {
        gsap.from(box, {
          height: "100px",
          scrollTrigger: {
            trigger: box, // Each box triggers its own animation
            start: "top 80%", // Start when top of box hits 80% of viewport
            end: "top 20%", // End when top of box hits 20% of viewport
            scrub: true,
            markers: false // Set to true for debugging
          }
        });
      });
    }
  });

  return (
    <div className='mt-[50vh] w-full'>
      <div className='flex gap-2'>
        <h1 className='text-[15.5vw] sm:text-[13vw] lg:text-[12vw] xl:text-[11.2vw] 2xl:text-[11rem] font-semibold uppercase px-2 leading-none'>projects</h1>
        <p className='text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] sm:font-semibold'>16</p>
      </div>
      
      <div className='flex-container w-full pb-2 flex flex-col gap-2'>
        {projectData.map((item, index) => {
          return (
            <div key={index} className="project-box w-full lg:h-[500px] flex flex-col sm:flex-row gap-2">
              <ProjectCard item={item} />
            </div>
          )
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default Projects