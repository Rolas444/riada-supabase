import { useState } from 'react';
import { supabase } from "../../supabase/client";
import { useAppStore } from '../../zustand/AppStore';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const currentUser = useAppStore((state) => state.currentUser);
    const setCurrentUser = useAppStore((state) => state.setCurrentUser);
    const loginError = (err) => {
        toast.error(err.toString(), {
            position: toast.POSITION.TOP_CENTER,
            theme: "dark",
            icon: false,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
        if (data.session) {
            setCurrentUser(data.user);
            navigate("/");
        }
        if (error) {
            // console.log(error)
            setCurrentUser(null);
            loginError(error)
        }
        setIsLoading(false);
    }
    return (
        <>
            
            <main className='form-signin w-100 mx-auto p-2 '>
                <div className='text-white-emphasis'>
                    <img className='mb-4 text-white' src="../../../src/assets/logo/AR.svg" width="72"/>
                </div>
                <form onSubmit={handleSubmit}>
                    <h1 className='h3 mb-3 fw-normal'>Inicia sesión</h1>
                    <div className='form-floating'>
                        <input className='form-control' id='floatingInput' onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder='username' />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className='form-floating'>
                        <input onChange={(e) => setPassword(e.target.value)} id='floatingPassword' className='form-control' type="password" name='password' placeholder='password' />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    {isLoading && (
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}
                    {!isLoading && (
                        <button className='btn btn-primary w-100 py-2' type="submit">Log in</button>
                    )}
                </form>
            </main>
            <ToastContainer autoClose={3000} />
        </>
    )
}

export default Login;