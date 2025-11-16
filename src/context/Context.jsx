import React, { createContext, useState } from 'react'
import people1 from "../assets/images/agency-page-images/people-img-1.jpg";
import people2 from "../assets/images/agency-page-images/people-img-2.jpg";
import people3 from "../assets/images/agency-page-images/people-img-3.jpg";
import people4 from "../assets/images/agency-page-images/people-img-4.jpg";
import people5 from "../assets/images/agency-page-images/people-img-5.jpg";
import people6 from "../assets/images/agency-page-images/people-img-6.jpg";
import people7 from "../assets/images/agency-page-images/people-img-7.jpg";
import people8 from "../assets/images/agency-page-images/people-img-8.jpg";
import people9 from "../assets/images/agency-page-images/people-img-9.jpg";
import people10 from "../assets/images/agency-page-images/people-img-10.jpg";
import people11 from "../assets/images/agency-page-images/people-img-11.jpg";
import people12 from "../assets/images/agency-page-images/people-img-12.jpg";
import people13 from "../assets/images/agency-page-images/people-img-13.jpg";
import people14 from "../assets/images/agency-page-images/people-img-14.jpg";

export const PeopleContext = createContext();

export const PeopleProvider = ({children}) => {
    const peopleData = [
      { id: 1, name: "John Smith", role: "Creative Director", img: people1 },
      { id: 2, name: "Sarah Johnson", role: "Art Director", img: people2 },
      { id: 3, name: "Alex Brown", role: "Lead Designer", img: people3 },
      { id: 4, name: "Emma Davis", role: "Producer", img: people12 },
      { id: 5, name: "David Wilson", role: "Project Manager", img: people5 },
      { id: 6, name: "Sophia Taylor", role: "Marketing Manager", img: people6 },
      { id: 7, name: "James Miller", role: "Senior Engineer", img: people7 },
      { id: 8, name: "Emily White", role: "UX Researcher", img: people8 },
      { id: 9, name: "Daniel Harris", role: "Software Engineer", img: people9 },
      { id: 10, name: "Olivia Martin", role: "Content Strategist", img: people10 },
      { id: 11, name: "Michael Clark", role: "Technical Director", img: people11 },
      { id: 12, name: "Isabella Lewis", role: "UI Designer", img: people4 },
      { id: 13, name: "Ethan Walker", role: "Animator", img: people13 },
      { id: 14, name: "Charlotte Hall", role: "Brand Manager", img: people14 },
    ];


    const [people, setPeople] = useState(peopleData)

    const [DarkTheme, setDarkTheme] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //ye dark theme ky lie rakhaa hy takay iski value ko access krky color wagira change kr sakay

    const [cardData, setCardData] = useState({name: null, secondName: null, year: null})


  return (
    <PeopleContext.Provider value={{ people, setPeople, DarkTheme, setDarkTheme, isMenuOpen, setIsMenuOpen, cardData, setCardData}}>
        {children}
    </PeopleContext.Provider>
  )
}

export default PeopleContext
