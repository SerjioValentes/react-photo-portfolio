import React from "react";
import HomePage from "../src/pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortraitPage from "../src/pages/PortraitPage";
import NaturePage from "../src/pages/NaturePage";
import LovePage from "../src/pages/LovePage";
import ContactPage from "../src/pages/ContactPage";
import Rendered from "../src/pages/Rendered";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/PortraitPage" element={<PortraitPage />}/>
                    <Route path="/NaturePage" element={<NaturePage />}/>
                    <Route path="/LovePage" element={<LovePage />}/>
                    <Route path="/ContactPage" element={<ContactPage />}/>
                    <Route path="/Rendered" element={<Rendered />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
