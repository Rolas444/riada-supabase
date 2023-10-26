import { supabase } from "./client"

export const UserData={
    getPersons: async()=>{
        return await supabase.from('persons').select();
    }
}

export default UserData;