import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AWS_logo from '../../logosResources/AWSlogo.png'
import React_logo from '../../logosResources/Reactlogo.png'
import TS_logo from '../../logosResources/Typescriptlogo.png'

import './projects.css'

interface Project {
    name: string;
    github: string;
    linkToProject: string;
    technologies: {
        front: string;
        back: string;
        additional: string;
    };
    backgroundImages: string[];
}

interface ProjectData {
    homepage: {
        projects: Project[];
    };
}


export default function Projects() {

    // const [projectData, setProjectData] = useState<ProjectData | null>(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('./info.json');
    //             setProjectData(response.data);
    //             console.log("data:", response.data);
    //             console.log("Fetching data...");
    //         } catch (error) {
    //             console.log("Erro on fetching data");
    //         }
    //     }

    //     fetchData();
    // }, []);

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
                <span>Clip Cloud</span>
                <a href='https://github.com/clip-cloud'>repository</a>
                <a href='http://34.255.196.211:3000/'>try it youself</a>
            </div>

            <div className='project'>
                <img
                    src={TS_logo}
                    alt={'TS_logo'}
                    className="project-background"
                />
                <span>Portfolio</span>
                <a href='https://github.com/clip-cloud'>repository</a>
                <a href='http://34.255.196.211:3000/'>try it youself</a>
            </div>

        </div>
    )
}


