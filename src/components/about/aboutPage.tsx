import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../notFound/notFoundPage";

// import './mainRouter.css'

interface Info {
    about: {
        title: string,
        skils: string,
        hobbies: string
    }
}

function AboutPage() {
    const [info, setInfo] = useState<Info | null>(null);

    useEffect(() => {
        fetch('./info.json')
            .then(response => response.json())
            .then(data => setInfo(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!info) {
        return <div>Loading...</div>;
    }

    return (
        <div className="main_about">
            <h1>
                {info.about.title}
            </h1>
            <span>
                {info.about.skils} <br />
                {info.about.hobbies}
            </span>
        </div>
    )
}


export default AboutPage;