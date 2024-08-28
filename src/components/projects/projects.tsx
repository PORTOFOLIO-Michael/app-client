import React from 'react';
import AWS_logo from '../../logosResources/AWSlogo.png'
import React_logo from '../../logosResources/Reactlogo.png'
import TS_logo from '../../logosResources/Typescriptlogo.png'
import Axios_logo from '../../logosResources/Axioslogo.png'

import './projects.css'

// interface Project {
//     name: string;
//     github: string;
//     linkToProject: string;
//     technologies: {
//         front: string;
//         back: string;
//         additional: string;
//     };
//     backgroundImages: string[];
// }

// interface ProjectData {
//     homepage: {
//         projects: Project[];
//     };
// }


export default function Projects() {

    return (
        <div className='projects_container'>
            <div className='project'>
                <div>

                    <img
                        src={AWS_logo}
                        alt={'AWS_logo'}
                        className="project-background"
                    />
                    <img
                        src={React_logo}
                        alt={'REACT_logo'}
                        className="project-background"
                    />
                </div>
                <span className='project_title'>Clip Cloud</span>
                <a href='https://github.com/clip-cloud'>Repository</a>
                <a href='http://34.255.196.211:3000/'>Try it youself</a>
            </div>

            <div className='project'>
                <div>

                    <img
                        src={TS_logo}
                        alt={'TS_logo'}
                        className="project-background"
                    />
                    <img
                        src={Axios_logo}
                        alt={'Axios_logo'}
                        className="project-background"
                    />
                </div>
                <span className='project_title'>Portfolio</span>
                <a href='https://github.com/clip-cloud'>Repository</a>
                <a href='http://34.255.196.211:3000/'>Try it youself</a>
            </div>

        </div>
    )
}


