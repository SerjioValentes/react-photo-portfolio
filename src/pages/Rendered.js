import React, { useState } from "react";
import RenderData from "../dataImg/renderData";
import "../styles/home.css";
import NavBar from "../components/NavBar";


function Rendered(){
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
                    RenderData.map((item) => (
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

export default Rendered;


