import React from 'react';
import "./Services.css";
import Cards from '../Cards/Cards';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from './resume.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Services = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className='services' id='Services'>
    {/* left side */}
      <div className='awesome'>
      <span style={{color : darkMode? "white": ""}}>My Awesome</span>
      <span>Services</span>
      <span>Lorem ipsum dolor, sit amet consectetur 
      adipisicing elit. Perspiciatis  ex<br/> at molestias
       expedita voluptatum illum!
       </span>
      <a href={Resume} download>
      <button className='button s-button'>Download CV</button>
      </a>

      <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div> 



      </div>
    {/* right side */}
    <div className='cards'>
    
    <div style={{left: "14rem"}}>
      <Cards
        emoji = {HeartEmoji}
        heading= {"Disign"}
        details = {"Figma, Sketch, Abobe, PhotoShop"}
      />
    </div>
    {/* 2nd card */}
    <div style={{top : "12rem", left : "-4rem"}}>
    <Cards
        emoji = {Glasses}
        heading= {"Developer"}
        details = {"Html, Css, JavaScript, ReactJs"}
      />
    </div>
    {/* 3rd card */}

    <div style={{top:"19rem", left :"12rem"}}>
    <Cards
        emoji = {Humble}
        heading= {"UI?UX"}
        details = {"UI Designs, UX Design of an App"}
      />
    </div>

    <div className='blur s-blur2' style={{background : "var(--purple )"}}></div>

    </div>


    </div>
  )
}

export default Services