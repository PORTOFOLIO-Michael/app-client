import React from "react";

import './homePageBody.css'

export default function HomePageBody() {

    return (
        <div className="body_container">
            <span className="timeline_title">Career path</span>

            <div className="time_line">
                Full-stack: AML - a final project for my BSc in Computer Science, showcasing practical application of my academic 
                knowledge. Afeka, Tel Aviv: 2024
            </div>

            <div className="time_line">
                QA & Customer support - Student position at Moveo Group, Tel Aviv: 2022 - 2024
            </div>

            <div className="time_line">
                B.Sc. in Computer science at Afeka Academic College of Engineering: 2021 - 2024
            </div>
            
            <div className="time_line">Front-end developer course at SVCollege , Tel - Aviv: 2019 - 2020</div>

            <div className="time_line">
                MILITARY SERVICE - Three years of service in a special unit in the Givati Brigade: 2013 - 2016
            </div>
        </div>
    )
}

