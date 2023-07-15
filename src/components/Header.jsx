import {Link} from "react-router-dom"

export default function Header() {

    return <>
        <header className="container container_header center">
           <Link to="/"> <div className="name header_content"><a>Karan Bisht</a></div></Link> 
            <ul className="header_navbar header_content navbar">
               <Link to='home' >Home</Link>
               <Link to='projects' >Projects</Link>
               <Link to='blogs' >Blogs</Link>
               <Link to='admin' >Admin</Link>
            </ul>
        </header>
    </>
}
