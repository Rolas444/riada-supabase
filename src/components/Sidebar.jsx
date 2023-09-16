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
            <div className="">
            </div>
        </>
    )
}

export default Sidebar