export const  createUserSlice =(set,get)=>({
    currentUser:null,
    userInfo:null,
    setCurrentUser: (user)=>set({currentUser: user})
})