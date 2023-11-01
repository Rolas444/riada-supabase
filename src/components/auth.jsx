import React from 'react'
import { supabase } from '../supabase/client'

export const SignUp = async (email, password, data)=>{
    return await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: data
        }
    })
}