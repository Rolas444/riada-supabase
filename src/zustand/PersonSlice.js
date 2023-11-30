import UserData from '../supabase/app-data'

export const createPersonSlice = (set,get)=>({
    persons: [],
    person:null,
    error:null,
    setPersons: async ()=>{
        const {data,error} = await UserData.getPersons();
        // console.log(data)}
        set((state)=>({persons: (state.persons= data), error: error}));
    },
    setAllPersons: async ()=>{
        const {data,error} = await UserData.getAllPersons();
        console.log(data)
        set((state)=>({persons: (state.persons= data), error: error}));
    },
    getSexes: async ()=>{
        const {data,error} = await UserData.getSexes();
        if(data) return data
        if(error) {
            set((state)=>({error: error}));
        }
    },
    getTdocs: async ()=>{
        const {data,error} = await UserData.getTdoc();
        if(data) return data
        if(error) {
            set((state)=>({error: error}));
        }
    }    


})

export default createPersonSlice