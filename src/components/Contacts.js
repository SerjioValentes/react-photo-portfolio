import React from "react";
import insta from "../png-logos/insta-logo.png"
import vk from "../png-logos/vk-logo.png"
import telegram from "../png-logos/telegram-logo.png"
import "../styles/home.css"

const Contacts = () => {
    return (
        <div className="icons-flex-container">
            <a href="https://instagram.com/vasilkamalov" target="_blank"><img src={insta} alt=""/></a>
            <a href="https://vk.com/vasilkamalov" target="_blank"><img src={vk} alt=" "/></a>
            <a href="https://t.me/Vasilkamalov" target="_blank"><img src={telegram} alt=" "/></a>
        </div>
    )
}
export default Contacts;
