import React from 'react'
import './Skills.css'
import HTML from './icons8-html-5-500.png'
import CSS from './icons8-css3-500.png'
import BS from './icons8-bootstrap-500.png'
import Reactjs from './icons8-react-500.png'
import Nodejs from './icons8-nodejs-500.png'
import Mongo from './icons8-mongodb-500.png'
import Git from './icons8-git-logo-500.png'
import GitHub from './icons8-github-logo-500.png'
import JavaScript from './icons8-javascript-500.png'
import Expressjs from './icons8-express-js-500.png'

const Skills = () => {
    return (
        <div className='container' id='skills'>
            <h1 className='project-title mt-5 mb-3'>Skills</h1>
            <div className='d-flex flex-column justify-content-center align-items-start'>
                <h3 className='project-title'>Frontend</h3>
                <div className='d-flex flex-wrap justify-content-center gap-2 mb-3'>
                    <div className='skill-card text-light'>
                        <img src={HTML} alt="HTML" style={{ width: '5rem' }} />
                        <h4 className='text-center mt-3'>HTML</h4> <br />
                    </div>
                    <div className='skill-card text-light'>
                        <img src={CSS} alt="CSS" style={{ width: '5rem' }} />
                        <h4 className='text-center mt-3'>CSS</h4> <br />
                    </div>
                    <div className='skill-card text-center text-light'>
                        <img src={BS} alt="BOOTSTRAP" style={{ width: '5rem' }} />
                        <h4 className='text-center mt-3'>Bootstrap</h4> <br />
                    </div>
                    <div className='skill-card text-center text-light'>
                        <img src={JavaScript} alt="JS" style={{ width: '5rem' }} />
                        <h4 className='text-center mt-3'>JavaScript</h4> <br />
                    </div>
                    <div className='skill-card text-light'>
                        <img src={Reactjs} alt="REACT" style={{ width: '5rem' }} />
                        <h4 className='text-center mt-3'>React.js</h4> <br />
                    </div>
                </div>
                <h3 className='project-title'>Backend</h3>
                <div className='d-flex flex-wrap justify-content-center gap-2 mb-3'>
                    <div className='skill-card text-light'>
                        <img src={Expressjs} alt="EXPRESS" style={{ width: '5rem' }} />
                        <h4 className='text-center mt-3'>Express.js</h4> <br />
                    </div>
                    <div className='skill-card text-light'>
                        <img src={Nodejs} alt="NODE" style={{ width: '5rem' }} />
                        <h4 className='text-center mt-3'>Node.js</h4> <br />
                    </div>
                    <div className='skill-card text-light'>
                        <img src={Mongo} alt="MONGO" style={{ width: '5rem' }} />
                        <h4 className='text-center mt-3 mb-0'>MongoDB</h4> <br />
                        <p className='badge bg-success mb-auto'>Database</p>
                    </div>
                </div>
                <h3 className='project-title'>Version Control</h3>
                <div className='d-flex gap-2'>
                    <div className='skill-card text-light'>
                        <img src={Git} alt="GIT" style={{ width: '5rem' }} />
                        <h4 className='text-center mt-3'>Git</h4> <br />
                    </div>
                    <div className='skill-card text-light'>
                        <img src={GitHub} alt="GITHUB" style={{ width: '5rem' }} />
                        <h4 className='text-center mt-3'>GitHub</h4> <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills