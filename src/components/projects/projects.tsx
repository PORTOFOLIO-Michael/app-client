import axios from 'axios';
import React, { useEffect, useState } from 'react';


interface Project {
    name: string;
    github: string;
    linkToProject: string,
    technologies: {
        front: string,
        back: string,
        additional: string,
    }
}

export default function Projects() {

    const [projects, setProjects] = useState<Project | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('./info.json');
                setProjects(response.data);
                console.log("Fetching data...");
            } catch (error) {
                console.log("Erro on fetching data");
            }
        }

        fetchData();
    }, []);

    return (
        <div className='projects_container'>

            <h1 className='projects_title'>{projects?.name}</h1>
            {/* <span>{projects?.name}</span>
            <span>{projects?.github}</span>
            <span>{projects?.linkToProject}</span>
            <span>{projects?.technologies.front}</span>
            <span>{projects?.technologies.back}</span>
            <span>{projects?.technologies.additional}</span> */}

        </div>
    )
}


