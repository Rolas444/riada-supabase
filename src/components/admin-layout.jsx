import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useAppStore } from "../zustand/AppStore";
import { Outlet } from "react-router-dom";
import Header from "./header";
import InitAuth from "../tools/authentication";
import { ImSpinner2 } from 'react-icons/im'

const AdminLayout = ({ children }) => {
    // const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const toggle = useAppStore((state) => state.toggle);
    const smScreen = useAppStore((state) => state.smScreen);
    const setToggle = useAppStore((state) => state.setToggle);
    const setSmScreen = useAppStore((state) => state.setSmScreen);
    const currentUser = useAppStore((state) => state.currentUser)
    const setCurrentUser = useAppStore((state) => state.setCurrentUser);


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

    const getSession = async () => {
        setLoading(true)
        const data = await InitAuth()
        console.log(data)
        if (data.session !== null) {
            await setCurrentUser(data.user)
            setLoading(false)
        }
        else {
            setCurrentUser(null)
            navigate('/login')
        }

    }



    useEffect(() => {

        getSession()
        handleSize();
    }, [])

    return (

        <>
            {
                loading ? (
                    <div className="w-full h-screen flex justify-center items-center">
                        <ImSpinner2 className="w-8 h-8 animate-spin text-blue-600" />
                    </div>
                ) :
                    (
                        <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
                            <Sidebar />
                            <div className="xl:col-span-5">
                                <Header />
                                <div className="h-[90vh] overflow-y-scroll p-8">
                                    <Outlet />
                                </div>

                            </div>
                        </div>
                    )

            }
        </>
    )
}

export default AdminLayout;