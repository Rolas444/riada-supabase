import { useState } from 'react';
import {supabase} from "../supabase/client";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
        if (data){
            console.log(data)
        }
        if(error){
            console.log(error)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" name='email' placeholder='username' />
            <input onChange={(e)=>setPassword(e.target.value)} type="password" name='password' placeholder='password' />
            <button type="submit">Log in</button>
        </form>
    </div>
  )
}

export default Login;