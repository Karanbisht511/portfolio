import "./style.css"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function Skeleton() {
    const navigate = useNavigate();

    useEffect(() => {
        const curentPage = window.location.pathname
        if (curentPage == '/') {
            navigate("/home")
        }
    }, [])

    return <>
        <Header />
        <Outlet />
        <Footer />
    </>
}
