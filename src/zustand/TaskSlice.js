import { supabase } from "../supabase/client"
import { toast } from 'react-toastify';

export const createTaskSlice = (set,get)=>({
    tasks: [],
    currentTask: null,
    getTasks: async ()=>{
        const response = await supabase.from("tasks").select();
        set({tasks: await response.data})
    },
    createTask: async (task)=>{
        try{
            
             const result = await supabase.from("tasks").insert(task);
             console.log(result);
            result.error ? toast.error(result.error.message) : toast.success(`${task.namw} added successfully`)

        }catch(err){
            toast.error(`something went wrong: ${err.message}`);
        }
    },
})