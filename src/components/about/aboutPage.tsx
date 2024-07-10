import React, { useEffect, useState } from "react"
import loading_gif from '../../resources/Loading_gif.gif'

import './aboutPage.css'

interface Info {
    about: {
        header: {
            title: string,
            summary: string,
            skils: string,
            education: string,
            hobbies: string,
        }
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
        return (
            <div className="loading_div">
                <img src={loading_gif} alt="" />
            </div >
        )
    }

    return (
        <div className="main_about">
            <div className="about_header">
                <span>
                    {info.about.header.title}
                </span>
            </div>

            <div className="about_body">
                <p className="about_summary_p">About Me</p> <br />
                <span className="about_summary">
                    {info.about.header.summary}
                </span>
                
                    <ul>
                        <li> {info.about.header.skils}</li>
                        <li> {info.about.header.education}</li>
                        <li> {info.about.header.hobbies}</li>
                    </ul>
                
            </div>
        </div>
    )
}


export default AboutPage;