import linkedInIcon from '../images/linkedin.svg'
import instagramIcon from '../images/instagram.svg'
import githubIcon from '../images/github.svg'

export default function Footer() {

    return <>
        <footer className="container container_footer center">
            <ul className="footer_navbar navbar">
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
        </footer>
    </>

}