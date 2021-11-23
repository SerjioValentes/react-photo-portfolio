import React from "react";
import Contacts from "../components/Contacts"
import "../styles/home.css"
import NavBar from "../components/NavBar";


function ContactPage() {
    return (
        <div className="home-page">
            <NavBar/>
            <form>
            </form>
            <section className="home-section">
                <div className="home-section__fullscreen">
                    <div className="home-section__icons">
                        <h2>Contacts:</h2>
                        <Contacts/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage;
