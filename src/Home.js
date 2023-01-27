import React from 'react'
import Navbar from './Components/Navbar.js'
import icon from "../src/Icons/glvIcon.svg"
import Header from './Components/Header.js'
import img from "../src/Images/right_Img.svg"
import Section from './Components/Section.js'
import img2 from "../src/Images/img2.svg"
import Aside from './Components/Aside.js'
import Footer from './Components/Footer.js'

const Home = () => {
  return (
    <div>
        <Navbar icon={icon}/>
        <Header img={img}/>
        <Section img2={img2}/>
        <Aside/>
        <Footer icon={icon}/>
    </div>
  )
}

export default Home