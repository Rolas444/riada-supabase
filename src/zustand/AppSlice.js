export const createAppSlice = (set,get)=>({
    toggle: false,
    smScreen: false,
    active:1,
    setToggle: (toggle)=>set({toggle: toggle}),
    setSmScreen: (screen)=>set({smScreen: screen}),
    setPageActive: (index)=>set({active: index}) 
})