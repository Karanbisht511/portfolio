import "./style.css"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { Navigate,Outlet } from "react-router-dom";

export default function Home() {

    return <>
        <Header />
        <Navigate to="/home" replace={true} />
        <Outlet />
        <Footer />
    </>
}
