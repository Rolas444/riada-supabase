import { supabase } from "../supabase/client"

export const createMinistrySlice = (set,get)=>({
    ministries: [],
    currentMinistry:null,
    getMinistries: async ()=>{
        const response = await supabase.from("ministries").select();
        set({ministries: await response.data})
    },
});