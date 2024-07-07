import React from "react"
import HomePage from "../home/homePage";
import AboutPage from "../about/aboutPage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../notFound/notFoundPage";

import './mainRouter.css'

function MainRouter() {


    return (
        <div className="main_router">
            <div className="content_wrapper">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/Soon" element={<NotFoundPage />} />
                </Routes>
            </div>
        </div>
    )
}


export default MainRouter;