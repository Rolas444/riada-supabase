import UserData from "../supabase/app-data"

export const  createUserSlice =(set,get)=>({
    currentUser:null,
    userInfo:null,
    errors:null,
    roles:[],
    setCurrentUser: (user)=>set({currentUser: user}),
    setRoles: async(iduser)=>{
        try{
            const {data,error} = await UserData.getRoles(iduser);
            console.log(data);
            if(data){
                set((state)=>({roles: (state.roles=data)}))
            }
            else set((state)=>({errors: (state.errors=error)}))
        }catch(e){
            set((state)=>({errors: (state.errors=e)}))
        }
    },
    
})