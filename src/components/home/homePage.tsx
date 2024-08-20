import React from "react";
import Header from "./header";
import Body from "./homePageBody";

import './homePage.css'
import Projects from "components/projects/projects";

function HomePage() {

    return (
        <div className="home_page">
            <Header />

            <Body />

            <Projects />

        </div>
    )
}


export default HomePage;    