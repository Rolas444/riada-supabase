import { supabase } from "../supabase/client"

export const createTaskSlice = (set,get)=>({
    tasks: [],
    currentTask: null,
    getTasks: async ()=>{
        const response = await supabase.from("tasks").select();
        set({tasks: await response.data})
    },
})