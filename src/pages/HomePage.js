import React, {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {TextPlugin} from "gsap/TextPlugin";
import NavBar from "../components/NavBar";
import "../styles/home.css";

const HomePage = () => {
    gsap.registerPlugin(TextPlugin);
//
    const ref = useRef(null);
    useEffect(() => {
        gsap.to(".home-section__h3-text", {
            duration: 2,
            text: "Photography portfolio",
            ease: "none"
        });
    });
return (

    <div className="home-page">
        <NavBar/>

            <section className="home-section">
                <div className="home-section__fullscreen">
                    <h2 className="home-section__h2-text">VasilKamalov</h2>
                    <h3 className="home-section__h3-text"></h3>
                </div>
            </section>

    </div>
)
}
export default HomePage;

