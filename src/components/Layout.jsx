import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useAppStore } from "../zustand/AppStore";

const Layout = ({children}) => {
    // const [toggle, setToggle] = useState(false);
    const toggle = useAppStore((state)=>state.toggle);
    const smScreen = useAppStore((state)=>state.smScreen);
    const setToggle = useAppStore((state)=>state.setToggle);
    const setSmScreen = useAppStore((state)=>state.setSmScreen);


    const handleSize =() =>{
        // alert("me voy a ejecutar")
        // console.log(window.innerWidth)
        if(window.innerWidth>768){
            
            setToggle(false);
            setSmScreen(false);
        }else{
            // alert("me hice chiquito")
            setToggle(true);
            setSmScreen(true);
        }
        window.addEventListener('resize', handleSize);

        return ()=>{
            window.removeEventListener('resize', handleSize);
        }
    }

    useEffect(()=>{
        handleSize();
    },[])

    return (
        <>
            <div className="d-flex p-0 m-0">
                <div className={toggle ? "d-none": "w-auto position-fixed"}>
                    <Sidebar/>
                </div>
                <div className={smScreen ? "d-none": "invisible"}>
                    <Sidebar/>
                </div> 
                <div className="col">
                   <Navbar />
                   {children}
                </div>
            </div>
            
        </>
    )
}

export default Layout;