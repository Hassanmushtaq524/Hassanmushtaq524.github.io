import React from 'react';
import { Link } from 'react-router-dom';
// CSS
import "./Work.css";
// components
import transition from '../../transition';
import { AnimatePresence, motion } from 'framer-motion';
// assets
import virtualMuseumImg from "../../assets/images/virtualMuseum.png";

const Work = () => {

  
  return (
    <>
    <div id="work">
      <Link target="_blank" to={"https://dribbble.com/shots/23344270-VIRTUAL-MUSEUM-AN-ART-MUSEUM-VIRTUAL-TOUR-APPLICATION"}>
        <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}  className="box virtual-museum">
          <div className="text-box">
            <h4>UI/UX CASE STUDY: VIRTUAL MUSEUM</h4>
            <p>As a part of my Google UX Design Certificate, I worked on designing a centralised virtual tour application for art museums. Virtual Museum is an application that allows users to take virtual tours of museums quickly and browse art museums near them! This application concept took around 3 months to complete</p>
            <h6>Skills learned: Figma, Wireframing, UI/UX process (Usability Studies, Insight gathering)</h6>
          </div>
          <div className="arrow-wrapper">
            <svg className="arrow" style={{ transform: "rotate(225deg)", margin: "0px 40px"}} xmlns="http://www.w3.org/2000/svg" width="35" height="43" viewBox="0 0 35 43" fill="none">
              <path d="M16.1234 42.4273C16.3047 42.6084 16.5197 42.7518 16.7562 42.8495C16.9917 42.9488 17.2446 43 17.5 43C17.7554 43 18.0083 42.9488 18.2438 42.8495C18.4803 42.7518 18.6953 42.6084 18.8766 42.4273L34.4534 26.7909C34.8081 26.4223 35.0044 25.9286 34.9999 25.4161C34.9955 24.9036 34.7907 24.4134 34.4297 24.051C34.0687 23.6886 33.5803 23.4831 33.0698 23.4786C32.5593 23.4742 32.0674 23.6712 31.7002 24.0272L19.4471 36.3272V1.95454C19.4471 1.43617 19.242 0.939021 18.8768 0.572473C18.5117 0.205925 18.0164 0 17.5 0C16.9836 0 16.4883 0.205925 16.1232 0.572473C15.758 0.939021 15.5529 1.43617 15.5529 1.95454V36.3272L3.29978 24.0272C2.93255 23.6712 2.44071 23.4742 1.93018 23.4786C1.41966 23.4831 0.931302 23.6886 0.570293 24.051C0.209285 24.4134 0.00450992 24.9036 7.36056e-05 25.4161C-0.00436271 25.9286 0.191894 26.4223 0.546575 26.7909L16.1234 42.4273Z" fill="#9C1F2E"/>
            </svg>
          </div>
        </motion.div>
      </Link>
      <Link target="_blank" to={"https://dribbble.com/shots/23344270-VIRTUAL-MUSEUM-AN-ART-MUSEUM-VIRTUAL-TOUR-APPLICATION"}>
        <motion.div iinitial={{ scale: 1 }} whileHover={{ scale: 1.1 }}  className="box animeforum">
          <div className="text-box">
            <h4>ANIMEFORUM!: AN ANIME SOCIAL MEDIA APPLICATION</h4>
            <p>I am currently working on a personal project. AnimeForum! is a social media website that is centered for anime/manga enthusiasts. I am working on both the developing of the application through ReactJS and also designing its UI using Figma</p>
            <h6>Skills learned: ReactJS, Hooks (useContext, useEffect, etc.), Database design, RESTful API design, Adobe Illustrator, Figma</h6>
          </div>
          <div className="arrow-wrapper">
            <svg className="arrow" style={{ transform: "rotate(225deg)", margin: "0px 40px"}} xmlns="http://www.w3.org/2000/svg" width="35" height="43" viewBox="0 0 35 43" fill="none">
              <path d="M16.1234 42.4273C16.3047 42.6084 16.5197 42.7518 16.7562 42.8495C16.9917 42.9488 17.2446 43 17.5 43C17.7554 43 18.0083 42.9488 18.2438 42.8495C18.4803 42.7518 18.6953 42.6084 18.8766 42.4273L34.4534 26.7909C34.8081 26.4223 35.0044 25.9286 34.9999 25.4161C34.9955 24.9036 34.7907 24.4134 34.4297 24.051C34.0687 23.6886 33.5803 23.4831 33.0698 23.4786C32.5593 23.4742 32.0674 23.6712 31.7002 24.0272L19.4471 36.3272V1.95454C19.4471 1.43617 19.242 0.939021 18.8768 0.572473C18.5117 0.205925 18.0164 0 17.5 0C16.9836 0 16.4883 0.205925 16.1232 0.572473C15.758 0.939021 15.5529 1.43617 15.5529 1.95454V36.3272L3.29978 24.0272C2.93255 23.6712 2.44071 23.4742 1.93018 23.4786C1.41966 23.4831 0.931302 23.6886 0.570293 24.051C0.209285 24.4134 0.00450992 24.9036 7.36056e-05 25.4161C-0.00436271 25.9286 0.191894 26.4223 0.546575 26.7909L16.1234 42.4273Z" fill="#9C1F2E"/>
            </svg>
          </div>
        </motion.div>
      </Link>
      <Link target="_blank" to={"https://dribbble.com/shots/22997633-DELAWARE-POTTERY-STUDIOS-VISUAL-IDENTITY"}>
        <motion.div iinitial={{ scale: 1 }} whileHover={{ scale: 1.1 }}  className="box DPS">
          <div className="text-box">
            <h4>DELAWARE POTTERY STUDIOS: BRAND IDENTITY</h4>
            <p>I collaborated with a team of four members in a 10-week project to conceptualize and craft an engaging visual identity for a local pottery studio. Skills learned: Adobe Illustrator, Adobe Photoshop, Interviewing Client, Designing creative strategy</p>
            <h6>Skills learned: Adobe Illustrator, Adobe Photoshop, Adobe InDesign, Brand Designing, Creative Strategy, 
              Interviewing Clients, Team Collaboration, </h6>
          </div>
          <div className="arrow-wrapper">
            <svg className="arrow" style={{ transform: "rotate(225deg)", margin: "0px 40px"}} xmlns="http://www.w3.org/2000/svg" width="35" height="43" viewBox="0 0 35 43" fill="none">
              <path d="M16.1234 42.4273C16.3047 42.6084 16.5197 42.7518 16.7562 42.8495C16.9917 42.9488 17.2446 43 17.5 43C17.7554 43 18.0083 42.9488 18.2438 42.8495C18.4803 42.7518 18.6953 42.6084 18.8766 42.4273L34.4534 26.7909C34.8081 26.4223 35.0044 25.9286 34.9999 25.4161C34.9955 24.9036 34.7907 24.4134 34.4297 24.051C34.0687 23.6886 33.5803 23.4831 33.0698 23.4786C32.5593 23.4742 32.0674 23.6712 31.7002 24.0272L19.4471 36.3272V1.95454C19.4471 1.43617 19.242 0.939021 18.8768 0.572473C18.5117 0.205925 18.0164 0 17.5 0C16.9836 0 16.4883 0.205925 16.1232 0.572473C15.758 0.939021 15.5529 1.43617 15.5529 1.95454V36.3272L3.29978 24.0272C2.93255 23.6712 2.44071 23.4742 1.93018 23.4786C1.41966 23.4831 0.931302 23.6886 0.570293 24.051C0.209285 24.4134 0.00450992 24.9036 7.36056e-05 25.4161C-0.00436271 25.9286 0.191894 26.4223 0.546575 26.7909L16.1234 42.4273Z" fill="#9C1F2E"/>
            </svg>
          </div>
        </motion.div>
      </Link>
      <Link target="_blank" to={"https://github.com/Hassanmushtaq524/TrafficModeling"}>
        <motion.div iinitial={{ scale: 1 }} whileHover={{ scale: 1.1 }}  className="box trafficModeling">
          <div className="text-box">
            <h4>TRAFFIC MODELING: A COMPUTATIONAL MODEL FOR TRAFFIC JAMS</h4>
            <p>I collaborated with my Mathematics professor as a Research Assistant, accurately recreating unexpected traffic disruptions, lane-merging, and lane-changing behavior of cars using an object-oriented programming structure in Python</p>
            <h6>Skills learned: Python, Libraries (SymPy, NumPy, Matplotlib), Differential equations, Collaboration, Research</h6>
          </div>
          <div className="arrow-wrapper">
            <svg className="arrow" style={{ transform: "rotate(225deg)", margin: "0px 40px"}} xmlns="http://www.w3.org/2000/svg" width="35" height="43" viewBox="0 0 35 43" fill="none">
              <path d="M16.1234 42.4273C16.3047 42.6084 16.5197 42.7518 16.7562 42.8495C16.9917 42.9488 17.2446 43 17.5 43C17.7554 43 18.0083 42.9488 18.2438 42.8495C18.4803 42.7518 18.6953 42.6084 18.8766 42.4273L34.4534 26.7909C34.8081 26.4223 35.0044 25.9286 34.9999 25.4161C34.9955 24.9036 34.7907 24.4134 34.4297 24.051C34.0687 23.6886 33.5803 23.4831 33.0698 23.4786C32.5593 23.4742 32.0674 23.6712 31.7002 24.0272L19.4471 36.3272V1.95454C19.4471 1.43617 19.242 0.939021 18.8768 0.572473C18.5117 0.205925 18.0164 0 17.5 0C16.9836 0 16.4883 0.205925 16.1232 0.572473C15.758 0.939021 15.5529 1.43617 15.5529 1.95454V36.3272L3.29978 24.0272C2.93255 23.6712 2.44071 23.4742 1.93018 23.4786C1.41966 23.4831 0.931302 23.6886 0.570293 24.051C0.209285 24.4134 0.00450992 24.9036 7.36056e-05 25.4161C-0.00436271 25.9286 0.191894 26.4223 0.546575 26.7909L16.1234 42.4273Z" fill="#9C1F2E"/>
            </svg>
          </div>
        </motion.div>
      </Link>
      {/* <Link target="_blank" to={"https://dribbble.com/shots/23344270-VIRTUAL-MUSEUM-AN-ART-MUSEUM-VIRTUAL-TOUR-APPLICATION"}>
        <motion.div iinitial={{ scale: 1 }} whileHover={{ scale: 1.1 }}  className="box">
          <div className="text-box">
            <h4>NOTEIFY: A NOTE-TAKING APPLICATION</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, maxime voluptatem aut accusamus a deserunt nobis. Explicabo expedita reprehenderit beatae inventore non, doloremque quasi ea iure facilis vitae voluptas quis?</p>
          </div>
          <div className="arrow-wrapper">
            <svg className="arrow" style={{ transform: "rotate(225deg)", margin: "0px 40px"}} xmlns="http://www.w3.org/2000/svg" width="35" height="43" viewBox="0 0 35 43" fill="none">
              <path d="M16.1234 42.4273C16.3047 42.6084 16.5197 42.7518 16.7562 42.8495C16.9917 42.9488 17.2446 43 17.5 43C17.7554 43 18.0083 42.9488 18.2438 42.8495C18.4803 42.7518 18.6953 42.6084 18.8766 42.4273L34.4534 26.7909C34.8081 26.4223 35.0044 25.9286 34.9999 25.4161C34.9955 24.9036 34.7907 24.4134 34.4297 24.051C34.0687 23.6886 33.5803 23.4831 33.0698 23.4786C32.5593 23.4742 32.0674 23.6712 31.7002 24.0272L19.4471 36.3272V1.95454C19.4471 1.43617 19.242 0.939021 18.8768 0.572473C18.5117 0.205925 18.0164 0 17.5 0C16.9836 0 16.4883 0.205925 16.1232 0.572473C15.758 0.939021 15.5529 1.43617 15.5529 1.95454V36.3272L3.29978 24.0272C2.93255 23.6712 2.44071 23.4742 1.93018 23.4786C1.41966 23.4831 0.931302 23.6886 0.570293 24.051C0.209285 24.4134 0.00450992 24.9036 7.36056e-05 25.4161C-0.00436271 25.9286 0.191894 26.4223 0.546575 26.7909L16.1234 42.4273Z" fill="#9C1F2E"/>
            </svg>
          </div>
        </motion.div>
      </Link> */}
    </div>
    </>
  )
}

export default transition(Work);