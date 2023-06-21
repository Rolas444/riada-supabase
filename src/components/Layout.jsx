import { Link } from "react-router-dom";
import AR from "../assets/logo/AR.svg";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <>
            <div className="d-flex p-0 m-0">
                <div className="w-auto">
                    <Sidebar/>
                </div>
                <div className="col">
                   <Navbar />
                </div>
            </div>
            
        </>
    )
}

export default Layout;