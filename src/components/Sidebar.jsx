import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo/AR.svg";
import { useState } from "react";
import { supabase } from "../supabase/client";
import { useAppStore } from "../zustand/AppStore";
import { RiBarChart2Line } from 'react-icons/ri';
import { IoIosPeople } from 'react-icons/io';
import { FaPeopleRoof, FaCashRegister } from 'react-icons/fa6';
import { BiLogOutCircle } from 'react-icons/bi'
import { BsChevronRight } from 'react-icons/bs';

const Sidebar = () => {
    // const [active, setPageActive] = useState(1);
    const navigate = useNavigate();
    const active = useAppStore((state) => state.active);
    const smScreen = useAppStore((state) => state.smScreen);
    const setPageActive = useAppStore((state) => state.setPageActive);
    const [showSubmenu, setShwoSubmenu] = useState(false);
    const logout = (e) => {
        e.preventDefault();
        supabase.auth.signOut()
        // navigate("/login")
    }

    return (
        <>
            <div className="bg-secondary-100 xl:h-[100vh] overflow-y-scroll fixed xl:static w-full h-full -left-full top-0 p-4
            flex flex-col justify-between">
                <div>
                    <h1 className="text-center text-2xl font-bold text-white title-app mb-10">
                        <span className="text-primary text-4xl">R</span>iada
                    </h1>
                    <ul >
                        <li>
                            <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                                <RiBarChart2Line className="text-soft" /> Dashboard
                            </Link>
                        </li>
                        <li>
                            <button onClick={()=>setShwoSubmenu(!showSubmenu)} className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                                <span className="flex items-center gap-4">
                                    <FaPeopleRoof className="text-soft" /> Membresia
                                </span>
                                <BsChevronRight className={`my-2 ${!showSubmenu && "rotate-90"} transition-all`} />
                            </button>
                            <ul className={`my-2 ${!showSubmenu && "hidden"}`}>
                                <li>
                                    <Link to="/ministries" className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3
                                    before:absolute before:bg-invert before:rounded-full before:-left-[7px] before:top-1/2 before:-translate-y-1/2 
                                    before:border-4 before:border-secondary-100 hover:text-white">
                                        Ministerios
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/persons" className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3
                                    before:absolute before:bg-menu before:rounded-full before:-left-[7px] before:top-1/2 before:-translate-y-1/2 
                                    before:border-4 before:border-secondary-100 hover:text-white">
                                        Personas
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/persons" className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3
                                    before:absolute before:bg-menu before:rounded-full before:-left-[7px] before:top-1/2 before:-translate-y-1/2 
                                    before:border-4 before:border-secondary-100 hover:text-white">
                                        Miembros
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/persons" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                                <IoIosPeople className="text-soft" /> Personas
                            </Link>
                        </li>
                        <li>
                            <Link to="/caja" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                                <FaCashRegister className="text-soft" /> Caja
                            </Link>
                        </li>
                    </ul>

                </div>
                <nav>
                    <Link to="/" onClick={logout} className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                        <BiLogOutCircle onClick={logout} className="text-soft" /> Salir
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default Sidebar