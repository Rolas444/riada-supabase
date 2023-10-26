import UserData from '../supabase/app-data'

export const createPersonSlice = (set,get)=>({
    persons: [],
    person:null,
    error:null,
    setPersons: async ()=>{
        const {data,error} = await UserData.getPersons();
        console.log(data)
        set((state)=>({persons: (state.persons= data), error: error}));
    }


})

export default createPersonSlice