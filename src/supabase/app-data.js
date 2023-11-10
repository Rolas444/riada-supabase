import { supabase } from "./client"

export const UserData={
    getAllPersons: async()=>{
        return await supabase.from('persons').select('*')
    },
    getPersons: async()=>{
        return await supabase.from('persons').select('*').not('email', 'is', null);
    },
    getRoles: async(iduser)=>{
        return await supabase.rpc('get_roles_by_user', {
            iduser
          })
    }

}



export default UserData;