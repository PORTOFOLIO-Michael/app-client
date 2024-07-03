import React, { useEffect, useState } from "react"
import loading_gif from '../../resources/Loading_gif.gif'

// import './mainRouter.css'

interface Info {
    about: {
        header: {
            title: string,
            skils: string,
            hobbies: string
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
            <div>
                <img src={loading_gif} alt="" />
            </div >
        )
    }

    return (
        <div className="main_about">
            <div>
                <h1>
                    {info.about.header.title}
                </h1>
            </div>
            <body>
                <span>
                    {info.about.header.skils} <br />
                    {info.about.header.hobbies}
                </span>
            </body>
        </div>
    )
}


export default AboutPage;