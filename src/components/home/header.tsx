import React, { useEffect, useState } from "react"
import profile from '../../resources/Frontend-developer-logo.png'
import loading_gif from '../../resources/Loading_gif.gif'


import './header.css'

interface Info {
    header: {
        title: string,
        name: string,
    };

    socials: {
        github: string,
        linkedin: string,
    }
}

function Header() {
    const [info, setInfo] = useState<Info | null>(null);

    useEffect(() => {
        fetch('./info.json')
            .then(response => response.json())
            .then(data => setInfo(data))
            .catch(error => console.error("There was error fetching the DATA: ", error));
    }, []);

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
                {info.header.title} <br />
                {info.header.name}
            </span>
            <img src={profile} className="profile_image" alt="logo" />
            <h1>
                <div className="socials_container">
                    <a href={info.socials.linkedin} target="_blank"
                        rel="noopener noreferrer">Linkedin</a>
                    <br />
                    <a href={info.socials.github} target="_blank"
                        rel="noopener noreferrer">Github</a>
                </div>

            </h1>
        </div>

    )
}

export default Header;