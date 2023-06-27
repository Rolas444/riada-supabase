import { Link } from "react-router-dom"
import logo from "../assets/logo/AR.svg";
import { useState } from "react";
import { supabase } from "../supabase/client";
import { useAppStore } from "../zustand/AppStore";

const Sidebar = () => {
    // const [active, setPageActive] = useState(1);
    const active = useAppStore((state)=>state.active);
    const smScreen = useAppStore((state)=> state.smScreen);
    const setPageActive = useAppStore((state)=> state.setPageActive);
    const logout = (e) => {
        e.preventDefault();
        supabase.auth.signOut()
    }

    return (
        <>
            <div className="sidebar d-flex justify-content-between flex-column bg-dark text-white py-3 ps-3  pe-3 ">
                <div>
                    <Link to={"/"} className={smScreen? "d-none": "navbar-brand"} >
                        <img src={logo} className="bi" width={30} height={30}/>
                        <span className="fs-4 p-2"> IEP Calle Arequipa</span>
                    </Link>
                    <hr className="text-white mt-2" />
                    <ul className="nav nav-pills flex-column mt-3">
                        <div className="fw-bold">Inicio</div>
                        <li className="nav-item">
                            <Link to={"/"} className={active === 1 ? "nav-link disabled" : "nav-link"} onClick={() => setPageActive(1)}>
                                <i className="bi bi-house me-3"></i>
                                <span><strong>home</strong></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/settings"} className={active === 2 ? "nav-link disabled" : "nav-link"} onClick={() => setPageActive(2)}>
                            <i className="bi bi-gear-wide-connected me-3"></i>
                                <span><strong>Ajustes</strong></span>
                            </Link>
                        </li>
                        <div className="fw-bold">Miembros</div>
                        <li className="nav-item">
                            <Link to={"/ministries"} className={active === 3 ? "nav-link disabled" : "nav-link"} onClick={() => setPageActive(3)}>
                                <i className="bi bi-people me-3" ></i>
                                <span><strong>Ministerios</strong></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"} className={active === 4 ? "nav-link disabled" : "nav-link"} onClick={() => setPageActive(4)}>
                                <i className="bi bi-person me-3"></i>
                                <span><strong>personas</strong></span>
                            </Link>
                        </li>
                        <div className="fw-bold">Caja</div>
                        <li className="nav-item">
                            <Link to={"/"} className={active === 5 ? "nav-link disabled" : "nav-link"} onClick={() => setPageActive(5)}>
                                <i className="bi bi-arrow-right-circle me-3"></i>
                                <span><strong>Ingresos</strong></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"} className={active === 6 ? "nav-link disabled" : "nav-link"} onClick={() => setPageActive(6)}>
                                <i className="bi bi-arrow-left-circle me-3"></i>
                                <span><strong>Egresos</strong></span>
                            </Link>
                        </li>
                        <div className="fw-bold">Usuario</div>
                        <li className="nav-item">
                            <Link to={"/"} className={active === 7 ? "nav-link disabled" : "nav-link"} onClick={() => setPageActive(7)}>
                                <i className="bi bi-person-fill-gear me-3"></i>
                                <span><strong>Perfil</strong></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link" onClick={logout}>
                                <i className="bi bi-box-arrow-left me-3"></i>
                                <span><strong>Logout</strong></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar