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

        <div>
            <h1>{projects?.name}</h1>
            <span>{projects?.website}</span>

        </div>
    )
}


