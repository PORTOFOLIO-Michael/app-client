import React from 'react';
import AWS_logo from '../../logosResources/AWSlogo.png'
import React_logo from '../../logosResources/Reactlogo.png'
import TS_logo from '../../logosResources/Typescriptlogo.png'
import Axios_logo from '../../logosResources/Axioslogo.png'
import Node_logo from '../../logosResources/Nodelogo.png'
import MongoDB_logo from '../../logosResources/Mongologo.png'
import Express_logo from '../../logosResources/Expresslogo.png'
import Portfolio_logo from '../../logosResources/Portfoliologo.png'
import Clipcloud_logo from '../../logosResources/Clipcloudlogo.png'

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
        <div className='Projects_section'>
            <h1>Projects</h1>
            <div className='projects_container'>

                <div className='project'>
                    <div className='technologies_image_sections'>
                        <img
                            src={React_logo}
                            alt={'REACT_logo'}
                            className="project-background"
                        />

                        <img
                            src={Node_logo}
                            alt={'Node_logo'}
                            className="project-background"
                        />
                        <img
                            src={MongoDB_logo}
                            alt={'MongoDB_logo'}
                            className="project-background"
                        />
                        <img
                            src={Axios_logo}
                            alt={'Axios_logo'}
                            className="project-background"
                        />
                        <img
                            src={Express_logo}
                            alt={'Express_logo'}
                            className="project-background"
                        />
                        <img
                            src={AWS_logo}
                            alt={'AWS_logo'}
                            className="project-background"
                        />
                    </div>
                    <div className='project_title_icon_link'>
                        <img
                            src={Clipcloud_logo}
                            alt={'Clipcloud_logo'}
                            className="project-background"
                        />
                        <span className='project_title'>Clip Cloud</span>
                    </div>
                    <span className='project_links'>
                        Clip Cloud is a user-friendly platform where you can upload videos, trim them to your liking, and explore your personal gallery to view all your uploads.                    </span>
                    <a className='project_links' href='http://34.255.196.211:3000/'>Try it youself</a>
                    <a className='project_links' href='https://github.com/clip-cloud'>Repository</a>
                </div>

                <div className='project'>
                    <div className='technologies_image_sections'>
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
                    <div className='project_title_icon_link'>
                        <img
                            style={{ backgroundColor: 'transparent' }}
                            src={Portfolio_logo}
                            alt={'Portfolio_logo'}
                            className="project-background"
                        />
                        <span className='project_title'>Portfolio</span>
                    </div>
                    <a className='project_links' href='https://michaelhoha.netlify.app/'>Try it youself</a>
                    <a className='project_links' href='https://github.com/PORTOFOLIO-Michael'>Repository</a>
                </div>

            </div>
        </div>
    )
}


