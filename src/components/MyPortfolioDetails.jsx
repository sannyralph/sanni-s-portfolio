import { Container} from 'react-bootstrap'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import img from '../images/profilePicture.jpeg';
import { faEnvelope, faFile, faHome } from '@fortawesome/fontawesome-free-solid';
import { faUser } from '@fortawesome/fontawesome-free-regular';
import { faServer } from '@fortawesome/free-solid-svg-icons';



const MyportfolioDetails = () => {
    return (
        <Container className='body'>
            <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
            <header id='header'>
            <div className='d-flex flex-column'>
                <div className='profile'>
                    <img src={img} alt="" id='nav-img' className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Sanni Abdul Rafiu</a></h1>
                    <div className="social-links mt-3 text-center">
                    <a href="https://twitter.com/_ralphsanny" className="twitter" target='_blank' rel="noreferrer"> <FontAwesomeIcon icon={faTwitter}/></a>
                    <a href="https://www.instagram.com/sanny.ralph/" className="instagram" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://github.com/sannyralph" className="github" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/abdul-rafiu-sanni-2626a8207/" className="linkedin" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                </div>
                <nav id="navbar" class="nav-menu navbar">
                    <ul>
                        <li><a href="#home" className="nav-link scrollto active"><FontAwesomeIcon icon={faHome} className="icon" /><span>Home</span></a></li>
                        <li><a href="#about" className="nav-link scrollto"><FontAwesomeIcon icon={faUser} className="icon" /> <span>About</span></a></li>
                        <li><a href="#resume" className="nav-link scrollto"><FontAwesomeIcon icon={faFile} className="icon" /><span>Resume</span></a></li>
                        {/* <li><a href="#portfolio" className="nav-link scrollto"><FontAwesomeIcon icon={faPager} className="icon" /><span>Portfolio</span></a></li> */}
                        <li><a href="#services" className="nav-link scrollto"><FontAwesomeIcon icon={faServer} className="icon" /><span>Services</span></a></li>
                        <li><a href="#contact" className="nav-link scrollto"><FontAwesomeIcon icon={faEnvelope} className="icon" /><span>Contact</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
        </Container>
    )
} 

export default MyportfolioDetails