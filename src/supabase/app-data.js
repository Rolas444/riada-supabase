import { supabase } from "./client"

export const UserData={
    getPersons: async()=>{
        return await supabase.from('persons').select();
    },
    getRoles: async(iduser)=>{
        return await supabase.rpc('get_roles_by_user', {
            iduser
          })
    }

}



export default UserData;