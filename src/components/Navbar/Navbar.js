import React from 'react'
import { Link } from 'react-router-dom';
// CSS
import "./Navbar.css";
// components
import transition from '../../transition';
// assets
import githubIcon from "../../assets/images/Octicons-mark-github.svg";
import linkedinIcon from "../../assets/images/11-linkedin-512.webp";
import dribbbleIcon from "../../assets/images/dribbble.png";
const Navbar = () => {


    return (
    <nav className="navbar navbar-expand-lg navbar-default sticky-top">
        <div className="links">
            <Link to={"https://github.com/hassanmushtaq524"} target='_blank' className="navbar-icon">
                <img src={githubIcon}></img>
            </Link>
            <Link to={"https://www.linkedin.com/in/hassan-mushtaq-3a5143230/"} target='_blank' className="navbar-icon">
                <img src={linkedinIcon}></img>
            </Link>
            <Link to={"https://dribbble.com/HassanMushtak"} target='_blank' className="navbar-icon">
                <img src={dribbbleIcon}></img>
            </Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item ms-5">
                    <Link to={"/"} className="nav-link">Home</Link>
                </li>
                <li className="nav-item ms-5">
                    <Link to={"/about"} className="nav-link">About</Link>
                </li>
                <li className="nav-item ms-5">
                    <Link to={"/work"} className="nav-link">My Work</Link>
                </li>
                <li className="nav-item ms-5">
                    <Link to={"/contact"} className="nav-link">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>

  )
}

export default transition(Navbar);