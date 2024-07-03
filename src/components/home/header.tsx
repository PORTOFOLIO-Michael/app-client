import React, { useEffect, useState } from "react"
import profile from '../../resources/Frontend-developer-logo.png'
import loading_gif from '../../resources/Loading_gif.gif'


import './header.css'

interface Info {
    homepage: {
        header: {
            title: string,
            name: string,
            summary: string,
            resume: string,
        };
        socials: {
            github: string,
            linkedin: string,
            email: string,
        };
    };
}

function Header() {
    const [info, setInfo] = useState<Info | null>(null);

    useEffect(() => {
        fetch('./info.json')
            .then(response => response.json())
            .then(data => setInfo(data))
            .catch(error => console.error("There was error fetching the DATA: ", error));
    }, []);

    console.log(info);

    if (!info) {
        return (
            <div>
                <img src={loading_gif} alt="" />
            </div >
        )
    }

    return (
        <div className="header">
            <span className="header_line"  >
                {info.homepage.header.title} <br />
                {info.homepage.header.name}
            </span>
            <p>
                {info.homepage.header.summary}
            </p>

            <img src={profile} className="profile_image" alt="logo" />

            <button className="download_button">
                <a href={info.homepage.header.resume}
                    target="_blank" rel="noopener noreferrer"
                    download="Michael-Hohashvili-Resume.pdf">
                    Download Resume
                </a>
            </button>

            <h1>
                <div className="socials_container">
                    <a href={info.homepage.socials.linkedin} target="_blank"
                        rel="noopener noreferrer">Linkedin</a>
                    <br />
                    <a href={info.homepage.socials.github} target="_blank"
                        rel="noopener noreferrer">Github</a>
                </div>
            </h1>
        </div>

    )
}

export default Header;