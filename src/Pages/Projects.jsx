import React from 'react';
import './Projects.css';
import carweb from './image.png';
import recipe from './Image-TastyTable 2.png';
import music from './musicPlayer.png';

const Projects = () => {
    return (
        <div className="projects-container  py-5" id='projects'>
            <h1 className="project-title text-center mb-4">Projects</h1>
            <div className="container ">
                <div className="row justify-content-center  ">
                    {/* First Card */}
                    <div className="col-12 col-md-4">
                        <a className='text-decoration-none' href="https://tastytable.onrender.com" target="_blank" rel="noopener noreferrer">

                            <div className="card mx-auto my-3" style={{ maxWidth: '300px' }}>
                                <img className="card-img-top" src={recipe} alt="Recipe Website" />
                                <div className="card-body">
                                    <p className="badge bg-warning">Food</p>
                                    <p className="card-text">
                                        <strong>Food Recipe Website</strong><br />
                                        A user-friendly platform to explore, search, and save a wide variety of delicious recipes with step-by-step cooking instructions.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* Second Card */}
                    <div className="col-12 col-md-4">
                        <a className='text-decoration-none' href="https://project-02-s1ym.onrender.com/" target="_blank" rel="noopener noreferrer">
                            <div className="card mx-auto my-3" style={{ maxWidth: '300px' }}>
                                <img className="card-img-top" src={carweb} alt="Car Service Website" />
                                <div className="card-body">
                                    <p className="badge bg-info">Automobile</p>
                                    <p className="card-text">
                                        <strong>Car Booking and Service Website</strong><br />
                                        An online portal for booking cars, scheduling maintenance services, and managing vehicle service records seamlessly.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* Third Card */}
                    <div className="col-12 col-md-4">
                        <a className='text-decoration-none' href="*" target="_blank" rel="noopener noreferrer">
                            <div className="card mx-auto my-3" style={{ maxWidth: '300px' }}>
                                <img className="card-img-top" src={music} alt="Music Website" />
                                <div className="card-body">
                                    <p className="badge bg-danger">Music</p>
                                    <p className="card-text">
                                        <strong>Music Player Website</strong><br />
                                        A simple and responsive music player web app featuring manually added songs and a favorites section for easy access to preferred tracks.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
