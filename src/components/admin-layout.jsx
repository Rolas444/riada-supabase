import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useAppStore } from "../zustand/AppStore";
import { Outlet } from "react-router-dom";
import Header from "./header";

const AdminLayout = ({ children }) => {
    // const [toggle, setToggle] = useState(false);
    const toggle = useAppStore((state) => state.toggle);
    const smScreen = useAppStore((state) => state.smScreen);
    const setToggle = useAppStore((state) => state.setToggle);
    const setSmScreen = useAppStore((state) => state.setSmScreen);


    const handleSize = () => {
        // alert("me voy a ejecutar")
        // console.log(window.innerWidth)
        if (window.innerWidth > 768) {

            setToggle(false);
            setSmScreen(false);
        } else {
            // alert("me hice chiquito")
            setToggle(true);
            setSmScreen(true);
        }
        window.addEventListener('resize', handleSize);

        return () => {
            window.removeEventListener('resize', handleSize);
        }
    }

    useEffect(() => {
        handleSize();
    }, [])

    return (
        <>
            <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
                <Sidebar />
                <div className="xl:col-span-5">
                    <Header />
                    <div className="h-[90vh] overflow-y-scroll p-8">
                    <Outlet />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default AdminLayout;