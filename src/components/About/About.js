import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
// CSS
import "./About.css";
// assets
import reactImg from "../../assets/images/react-logo-programming-svgrepo-com.svg";
import nodejsImg from "../../assets/images/nodejs-svgrepo-com.svg";
import figmaImg from "../../assets/images/figma-svgrepo-com.svg";
import cssImg from "../../assets/images/css3-02-svgrepo-com.svg";
import mongodbImg from "../../assets/images/mongodb-icon.svg";
import illustratorImg from "../../assets/images/adobe-illustrator.svg";
import photoshopImg from "../../assets/images/brand-adobe-photoshop-svgrepo-com.svg";
// components
import transition from '../../transition';

const About = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className="about-page">  
      <div className="left-container">
        <div className="about-section">
          <h1 className="about-heading">About Me</h1>
          <h6>I am a current junior at Ohio Wesleyan University, majoring in <span>Computer Science ϟ</span> and minoring in <span> ☆ Fine Arts Studio ☆</span>
          and <span>Mathematics %</span></h6>
          <br />
          <h6>I am a self-motivated learner with a passion for all things design. I have experience in Web Development, Graphic Design and UI/UX Design. I love to work on personal projects and am open to all possibilities.</h6>
          <hr/>
          <h5>My Hobbies:</h5> 
          <p>Graphite Art ☆ Manga Pen Art ☆ Creating Posters ☆ Learning Piano ☆ Going for long walks</p>
        </div>
        <motion.div layout initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} className="portfolio-link" onClick={() => navigate("/work")}>
          <h1 style={{ margin: "0px 40px"}}>My works</h1>
          <svg style={{ transform: "rotate(225deg)", margin: "0px 40px"}} xmlns="http://www.w3.org/2000/svg" width="35" height="43" viewBox="0 0 35 43" fill="none">
            <path d="M16.1234 42.4273C16.3047 42.6084 16.5197 42.7518 16.7562 42.8495C16.9917 42.9488 17.2446 43 17.5 43C17.7554 43 18.0083 42.9488 18.2438 42.8495C18.4803 42.7518 18.6953 42.6084 18.8766 42.4273L34.4534 26.7909C34.8081 26.4223 35.0044 25.9286 34.9999 25.4161C34.9955 24.9036 34.7907 24.4134 34.4297 24.051C34.0687 23.6886 33.5803 23.4831 33.0698 23.4786C32.5593 23.4742 32.0674 23.6712 31.7002 24.0272L19.4471 36.3272V1.95454C19.4471 1.43617 19.242 0.939021 18.8768 0.572473C18.5117 0.205925 18.0164 0 17.5 0C16.9836 0 16.4883 0.205925 16.1232 0.572473C15.758 0.939021 15.5529 1.43617 15.5529 1.95454V36.3272L3.29978 24.0272C2.93255 23.6712 2.44071 23.4742 1.93018 23.4786C1.41966 23.4831 0.931302 23.6886 0.570293 24.051C0.209285 24.4134 0.00450992 24.9036 7.36056e-05 25.4161C-0.00436271 25.9286 0.191894 26.4223 0.546575 26.7909L16.1234 42.4273Z" fill="#9C1F2E"/>
          </svg>
        </motion.div>
      </div>
      <div className="right-container">
        <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="nodejs-box skill-box">
          <img src={nodejsImg} className="nodejs-img" alt="nodejs-img" />
          <h5>Node.js</h5>
          <h3>1.5yr</h3>
        </motion.div> 
        <motion.div layout initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="react-box skill-box">
          <img src={reactImg} style={{ filter: "invert(1)"}} className="react-img" alt="react-img" />
          <h5>React.js</h5>
          <h3>1.5yr</h3>
        </motion.div> 
        <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="css-box skill-box">
          <img src={cssImg} className="css-img" alt="css-img" />
          <h5>HTML/CSS</h5>
          <h3>1.5yr</h3>
        </motion.div> 
        <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="mongodb-box skill-box">
          <img src={mongodbImg} style={{ filter: "brightness(0.4)" }} className="mongodb-img" alt="mongodb-img" />
          <h5>MongoDB</h5>
          <h3>1yr</h3>
        </motion.div> 
        <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="figma-box skill-box">
          <img src={figmaImg} style={{ filter: "invert(1)"}} className="figma-img" alt="figma-img" />
          <h5>Figma</h5>
          <h3>6mo</h3>
        </motion.div> 
        <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="illustrator-box skill-box">
          <img src={illustratorImg} className="illustrator-img" alt="illustrator-img" />
          <h5>Adobe Illustrator</h5>
          <h3>6mo</h3>
        </motion.div> 
        <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="photoshop-box skill-box">
          <img src={photoshopImg} className="photoshop-img" alt="photoshop-img" />
          <h5>Adobe Photoshop</h5>
          <h3>6mo</h3>
        </motion.div> 
      </div>
    </div>
    </>
  )
}

export default transition(About);
