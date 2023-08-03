import { Link } from "react-router-dom"
import linkedInIcon from '../images/linkedin.svg'
import instagramIcon from '../images/instagram.svg'
import githubIcon from '../images/github.svg'

export default function Header() {

    return <>
    <div id="header">
        <header className="container container_header">
            <div className="portfolio">
                &lt;portfolio&gt;
            </div>
            <div>
                <ul className="header_navbar">
                    {/* <li> <a href=""></a> Home</li> */}
                    <li className="nav" > <a href="#introduction-container"> About</a></li>
                    <li className="nav"> <a href="#projects">Projects</a> </li>
                </ul>
            </div>
            <div>
                <ul className="header_socialMedia">
                    <li>
                        <a target="_blank" href="https://github.com/Karanbisht511">
                            <img className="icon" src={githubIcon} alt="github" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/karan-bisht-496900192">
                            <img className="icon" src={linkedInIcon} alt="linkedin" /></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://instagram.com/karanbisht1?utm_medium=copy_link">
                            <img className="icon" src={instagramIcon} alt="instagram" />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
        </div>
    </>
}


