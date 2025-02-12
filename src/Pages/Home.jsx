import React, { useEffect, useState } from 'react'
import './Home.css'

const Home = () => {
    const [isOne, setIsOne] = useState(true)
    useEffect(() => {
        const interval = setInterval(() => {
            setIsOne(!isOne)
        }, 2000);
        return () => clearInterval(interval);
    })
    return (
        <div className='home-div ' id='home'>

            <div className='container'>
                <div className='display-5 black-image text-light '>
                    <span className='text-name1'>Umar Farook F S</span>
                    <br />
                    <div className='d-flex h4 ms-1'>
                        <p >I am a </p>
                        <div className='text-change'>
                            {
                                !isOne
                                    ?
                                    <p className='text-name ms-3'>Frontend Developer</p>
                                    :
                                    <p className='text-name ms-3'>Web Developer</p>
                            }
                        </div>
                    </div>

                    <ul className='list-unstyled mt-2'>
                        <li className='home-text '>I specialize in the MERN stack and enjoy building full-stack web applications that are scalable and efficient.</li>
                        <li className='home-text'>I love solving real-world problems through code and continuously improving my skills to stay up to date.</li>
                        <li className='home-text'>Currently, I’m looking for opportunities to work on exciting projects and contribute to impactful teams.</li>
                    </ul>
                </div>
                            <div className='d-flex cv-ic  align-items-center gap-1 gap-md-4'>
                                <button className='btn btn-outline-success1'><a className='text-decoration-none text-success' href="https://drive.google.com/file/d/1L54nRSzGrLKilImKFawJeQlAYCYr87Za/view?usp=sharing" target='_blank'>Download CV</a></button>
                                <a className='text-decoration-none icon-link' href="https://github.com/Umarfarook17" >
                                    <i className="fab fa-github fa-2x"></i>
                                </a>
                                <a className='text-decoration-none icon-link' href="https://www.linkedin.com/in/umar-farook17/">
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </a>
                            </div>
            </div>


        </div>
    )
}

export default Home