import React from "react";
import profile from '../../resources/Profile.jpg'


function HomePage() {
    return (
        <div>
            <h1>
                Welcom to Michael's Portofolio
            </h1>

            <img src={profile} className="App-logo" alt="logo" />
        </div>
    )
}


export default HomePage;    