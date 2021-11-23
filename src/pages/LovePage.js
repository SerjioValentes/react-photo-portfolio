import React, { useState } from "react";
import LoveData from "../dataImg/LoveData";
import "../styles/home.css";
import NavBar from "../components/NavBar";


function LovePage(){
    const [status, setStatus] = useState(true);
    const [imgId, setImgId] = useState("");

    const handleClick = (id) => {
        setStatus(!status);
        setImgId(id);
    }

    return (
        <div className="wrapper-container">
            <NavBar/>
            <h1>Love</h1>
            <ul className="images">
                {
                    LoveData.map((item) => (
                        <li key={item.id}>
                            <img
                                src={item.src}
                                onClick={() => {
                                    handleClick(item.id)
                                }}
                                className={imgId !== item.id || status === false ? "images__item" : "images__item-click"}
                                alt=" "/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default LovePage;
