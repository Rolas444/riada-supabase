import { useState } from 'react';
import {supabase} from "../supabase/client";
import { useAppStore } from '../zustand/AppStore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate= useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const currentUser = useAppStore((state)=>state.currentUser);
    const setCurrentUser = useAppStore((state)=>state.setCurrentUser);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
        if (data){
            setCurrentUser(data.user);
            navigate("/");            
        }
        if(error){
            alert('ocurrio un error')
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