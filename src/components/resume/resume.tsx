import React, { useEffect, useState } from "react"
import loading_gif from '../../resources/Loading_gif.gif'


import axios from "axios"
import './resume.css'

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

function Resume() {
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
    <div className='resume_container'>
      <div className="botton_div">
        <button className="download_button">
          <a href={info.homepage.header.resume}
            className="resume_a_tag"
            target="_blank" rel="noopener noreferrer"
            download="Michael Hohashvili - Resume.pdf">
            Download Resume
          </a>
        </button>
      </div>

      <div className='resume_header'>

        <h1 className='resume_title'>Michael Hohashvili</h1>
        <span className='software_title'>Software Developer</span>

        <div className='personal_info'>
          <a href='https://www.linkedin.com/in/michael-hohashvili/'>Linkedin</a>
          <span className='separator'>/</span>
          <a href='https://github.com/MichaelHoha'>GitHub</a>
          <span className='separator'>/</span>
          <span>052-381-1258</span>
          <span className='separator'>/</span>
          <span>michael1hoha@gmail.com</span>
        </div>

      </div>
      <div className='resume_body'>

        <h2>SUMMARY</h2>
        <span>Highly motivated Computer Science graduate with two years of Full-stack development experience, specializing in React.js, <br />
          Hooks, and Redux. Developed a comprehensive AI application for detecting intestinal inflammation, creating a Python <br />
          algorithm for enhanced functionality. Actively seeking opportunities in Front-end, Full-stack, and other development roles. <br />
          Strong communication skills and a team-oriented approach.
        </span>

        <h2>WORK EXPERIENCE</h2>
        <h4>Full-Stack Developer: AML - Application Medical Learning</h4> 2024
        <ul>
          <li> This project was a final project for my BSc in Computer Science, showcasing practical application of my academic <br />
            knowledge.</li>
          <li>
            Developed a comprehensive application for doctors in detecting intestinal inflammation using ultrasound <br />
            images, implemented an AI model based on YOLO.
          </li>
          <li>
            Utilized React.js including Typescript for the client-side interface, Node.js for the backend, and MongoDB for the <br />
            database. Integrated a Python (with Flask) algorithm to enhance the functionality of the application
          </li>
          <li>
            Utilized Docker for containerization to ensure consistent and efficient deployment across different environments.
          </li>
          <li> Employed GraphQL for efficient data querying and implemented a microservices architecture to ensure scalability and <br />
            modularity of the system.
          </li>
        </ul>

        <h2>QA & Customer support - Student Position</h2>
        <h4>Moveo Group, Tel Aviv</h4> 2022 - 2024

        <ul>
          <li>CMS - Customizing and maintaining websites using Drupal and WordPress</li>
          <li> Conducted comprehensive testing, including functional, regression and user acceptance testing (UAT) next to the <br />
            developer's team, to unsure the highest quality of web application</li>
          <li> Bug tracking and reposting: Utilized tools like Jira and Monday to identify, document and track defects, insuring timely <br />
            resolution and continuous improvement of web projects</li>
          <li> Testing new features thoroughly in both staging and production environments.
          </li>
        </ul>

        <h2>FRONT-END DEVELOPER</h2>
        <h4>360PIX, Netanya </h4> 2019 - 2021
        <ul>
          <li>Developed new features and maintained existing codebase.Utilized Redux for efficient state management.</li>
          <li>  Designed and developed UI/UX components using React Native and TypeScript. Implemented hooks, Axios <br />
            for API requests, and route management.
          </li>
          <li>  Managed tasks and communication efficiently with JIRA and Monday.
          </li>
        </ul>
        <h2>EDUCATION</h2>
        <h4>Afeka Academic College of Engineer </h4> 2021 - 2024
        <ul> <li>B.Sc. in Computer science</li></ul>

        <h2>SVCollege, Tel Aviv</h2> 2019
        <ul><li> Completed an immersive 700-hour Front-end Bootcamp focused on the newest technologies such as: React.js, Redux, <br />
          Hooks and more.</li></ul>

        <h2>MILITARY SERVICE</h2> 2013 - 2016
        <ul>
          <li> Three years of service in a special unit in the Givati Brigade.</li>
          <li>Being part of a Tzuke Eitan military operation and special activities.</li>
        </ul>
      </div>


      <div className="botton_div">
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
  );
}

export default Resume;
