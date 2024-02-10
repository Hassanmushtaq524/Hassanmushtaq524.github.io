import React from "react";
import transition from "../../transition";
// css
import "./Home.css";
// assets
import myImg from "../../assets/images/MyImg.png";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return (
        <>
        <section id="home container">
            <img src={myImg} className="my-img" alt="myimg"/>
            <div className="right-text">
                <h1 className="heading">HI, I AM</h1>
                <h1 className="heading">HASSAN</h1>
                <span className="tag">Coder. Designer.</span>
                <button type="button d-block" class="btn btn-contact" onClick={() => navigate("/contact")}>Contact Me</button>
            </div>
        </section>
        </>
    )
}

export default transition(Home);