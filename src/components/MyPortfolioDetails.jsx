import {  } from 'react-bootstrap'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import img from '../images/profilePicture.jpeg';
import { faEnvelope, faFile, faHome } from '@fortawesome/fontawesome-free-solid';
import { faUser } from '@fortawesome/fontawesome-free-regular';
import { faPager, faServer } from '@fortawesome/free-solid-svg-icons';



const MyportfolioDetails = () => {
    return (
        <container className='body'>
            <header id='header'>
            <div className='d-flex flex-column'>
                <div className='profile'>
                    <img src={img} alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Sanni Abdul Rafiu</a></h1>
                    <div className="social-links mt-3 text-center">
                    <a href="https://twitter.com/_ralphsanny" className="twitter"> <FontAwesomeIcon icon={faTwitter}/></a>
                    <a href="https://www.instagram.com/sanny.ralph/" className="instagram"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://github.com/sannyralph" className="github"><FontAwesomeIcon icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/abdul-rafiu-sanni-2626a8207/" className="linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                </div>
                <nav id="navbar" class="nav-menu navbar">
                    <ul>
                        <li><a href="#hero" class="nav-link scrollto active"><FontAwesomeIcon icon={faHome}/><span>Home</span></a></li>
                        <li><a href="#about" class="nav-link scrollto"><FontAwesomeIcon icon={faUser}/> <span>About</span></a></li>
                        <li><a href="#resume" class="nav-link scrollto"><FontAwesomeIcon icon={faFile}/><span>Resume</span></a></li>
                        <li><a href="#portfolio" class="nav-link scrollto"><FontAwesomeIcon icon={faPager}/><span>Portfolio</span></a></li>
                        <li><a href="#services" class="nav-link scrollto"><FontAwesomeIcon icon={faServer}/><span>Services</span></a></li>
                        <li><a href="#contact" class="nav-link scrollto"><FontAwesomeIcon icon={faEnvelope}/><span>Contact</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
        </container>
    )
} 

export default MyportfolioDetails