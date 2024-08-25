import React, { useEffect, useState } from "react"
import loading_gif from '../../resources/Loading_gif.gif'

import linkeding_logo from '../../resources/linkedin_icon.png'
import Github_logo from '../../resources/Github_icon.png'
import Email_logo_logo from '../../resources/Email_icon.png'
import Whatsup_logo from '../../resources/Whatsup_icon.png'

import './header.css'
import axios from "axios"

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
            whatsup: string,
            email: string,
        };
    };
}



export default function Header() {
    const [info, setInfo] = useState<Info | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('./info.json')
                setInfo(response.data)
                console.log("Fetching data...");
            } catch (error) {
                console.log("Error fetching data");
            }

        }

        fetchData();
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
                {/* <img src={profile} className="profile_image" alt="logo" /> */}
            </span>
            <span className="summary">
                {info.homepage.header.summary}
            </span>


            <div className="under_summary">
                <div className="socials_container">
                    <a
                        href={info.homepage.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkeding_logo} className="socials_logo" alt="logo" />
                    </a>

                    <a href={info.homepage.socials.github} target="_blank"
                        rel="noopener noreferrer">
                        <img src={Github_logo} className="socials_logo" alt="logo" />
                    </a>

                    <a href={info.homepage.socials.email} target="_blank"
                        rel="noopener noreferrer">
                        <img src={Email_logo_logo} className="socials_logo" alt="logo" />
                    </a>

                    <a href={info.homepage.socials.whatsup} target="_blank"
                        rel="noopener noreferrer">
                        <img src={Whatsup_logo} className="socials_logo" alt="logo" />
                    </a>
                </div>

                <button className="download_button">
                    <a href={info.homepage.header.resume}
                        className="resume_a_tag"
                        target="_blank" rel="noopener noreferrer"
                        download="Michael Hohashvili - Resume.pdf">
                        Download Resume
                    </a>
                </button>
            </div>

        </div>
    )
}

