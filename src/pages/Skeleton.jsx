import "./style.css"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Skeleton() {

    const curentPage = window.location.pathname
    const { origin } = window.location
    if (curentPage == '/') {
        window.location.replace(origin + "/home")
    }
    return <>
        <Header />
        <Outlet />
        <Footer />
    </>
}
