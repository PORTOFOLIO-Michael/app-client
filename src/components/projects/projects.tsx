import React, { useEffect, useState } from 'react';



export default function Projects() {

    interface Project {
        name: string;
        website: string;
    }

    const [projects, setProjects] = useState<Project | null>(null);

    useEffect(() => {
        setProjects({
            name: 'Clip Cloud',
            website: 'http://34.255.196.211:3000/'
        });
    }, []);

    return (
        <div className='projects_container'>

            <h1 className='projects_title'>Projects</h1>
            <span>{projects?.name}</span>
            <span>{projects?.website}</span>

        </div>
    )
}


