import React from "react";
import Header from "./header";
import Body from "./homePageBody";
import Projects from "components/projects/projects";

import './homePage.css'

function HomePage() {

    return (
        <div className="home_page">
            <Header />

            <Projects />

            <Body />
        </div>
    )
}


export default HomePage;    