import React from "react"
import HomePage from "../home/homePage";
import AboutPage from "../about/aboutPage";
import Resume from "components/resume/resume";
import { Route, Routes } from "react-router-dom";

import './mainRouter.css'

function MainRouter() {


    return (
        <div className="main_router">
            <div className="content_wrapper">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </div>
        </div>
    )
}


export default MainRouter;