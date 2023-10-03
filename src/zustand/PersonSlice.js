import { supabase } from "../supabase/client";

export const cratePersonSlice = (get,set)=>({
    persons: [],
    person:null,
    getPersons: async ()=>{
        const response = await supabase.from("persons").select();
        set({persons: await response.data})
    }


})