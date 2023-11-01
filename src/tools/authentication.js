
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client"
import { useAppStore } from "../zustand/AppStore";


const InitAuth = async () => {
    
    // const currentUser = useAppStore((state) => state.currentUser)
    // const setCurrentUser = useAppStore((state) => state.setCurrentUser);
    const {data, error} = await supabase.auth.refreshSession()
    return data
}

export default InitAuth