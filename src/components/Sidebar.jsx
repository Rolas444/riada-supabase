import { Link } from "react-router-dom"
import logo from "../assets/logo/AR.svg";
import { useState } from "react";
import { supabase } from "../supabase/client";

const Sidebar = () => {
    const [active, setItem] = useState(1);
    const logout = (e) => {
        e.preventDefault();
        supabase.auth.signOut()
    }

    return (
        <>
            <div className="sidebar d-flex justify-content-between flex-column bg-dark text-white py-3 ps-3  pe-3">
                <div>
                    <Link to={"/"} className="navbar-brand" >
                        <img src={logo} width={40} className="img-fluid" />
                        <span className="fs-4 p-2"> Riada</span>
                    </Link>
                    <hr className="text-white mt-2" />
                    <ul className="nav nav-pills flex-column mt-3">
                        <div className="fw-bold">Inicio</div>
                        <li className="nav-item">
                            <Link to={"/"} className={active === 1 ? "nav-link disabled" : "nav-link"} onClick={() => setItem(1)}>
                                <i className="bi bi-house me-3"></i>
                                <span><strong>home</strong></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/settings"} className={active === 2 ? "nav-link active" : "nav-link"} onClick={() => setItem(2)}>
                            <i className="bi bi-gear-wide-connected me-3"></i>
                                <span><strong>Ajustes</strong></span>
                            </Link>
                        </li>
                        <div className="fw-bold">Miembros</div>
                        <li className="nav-item">
                            <Link to={"/"} className={active === 3 ? "nav-link active" : "nav-link"} onClick={() => setItem(3)}>
                                <i className="bi bi-people me-3" ></i>
                                <span><strong>Ministerios</strong></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"} className={active === 4 ? "nav-link active" : "nav-link"} onClick={() => setItem(4)}>
                                <i className="bi bi-person me-3"></i>
                                <span><strong>personas</strong></span>
                            </Link>
                        </li>
                        <div className="fw-bold">Caja</div>
                        <li className="nav-item">
                            <Link to={"/"} className={active === 5 ? "nav-link active" : "nav-link"} onClick={() => setItem(5)}>
                                <i className="bi bi-arrow-right-circle me-3"></i>
                                <span><strong>Ingresos</strong></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"} className={active === 6 ? "nav-link active" : "nav-link"} onClick={() => setItem(6)}>
                                <i className="bi bi-arrow-left-circle me-3"></i>
                                <span><strong>Egresos</strong></span>
                            </Link>
                        </li>
                        <div className="fw-bold">Usuario</div>
                        <li className="nav-item">
                            <Link to={"/"} className={active === 7 ? "nav-link active" : "nav-link"} onClick={() => setItem(7)}>
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