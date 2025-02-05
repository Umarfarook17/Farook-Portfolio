import React from 'react';
import './About.css';
import image from '../PROFILE_IMAGE_edited.jpg';

const About = () => {
    return (
        <div className="container mt-5" id='about'>
            <div className="row align-items-start ">
                <div className="col-lg-4 text-center text-lg-start p-3 about-background">
                    <div className="image-wrapper">
                        <img className="img-fluid rounded-3 about-image" src={image} alt="Profile" />
                    </div>
                </div>

                <div className="col-lg-8">
                    <h2 className="section-title">About</h2>
                    <p className="description">
                        
I am a MERN stack developer with a B.E in ECE, passionate about building scalable web applications and solving real-world problems through code. As a fresher, I am eager to learn, collaborate, and contribute to impactful projects.
                    </p>
                    
                         <ul className='list-unstyled mt-2'>
                        <li className='home-text text-light '><strong>Name:</strong> Umarfarook F S</li>
                        <li className='home-text text-light'><strong>Education: </strong>B.E ECE</li>
                        <li className='home-text text-light'><strong>Experience: </strong>Fresher</li>
                        <li className='home-text text-light'><strong>Soft Skills: </strong>Communication, Problem-Solving, Teamwork, Adaptability</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
