import React, { useEffect } from 'react'
import { supabase } from '../supabase/client';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!supabase.auth.getUser()){
            navigate("/login");
        }
    }, [])
  return (
    <div>Home
        <button onClick={()=>supabase.auth.signOut()}>
            Logout
        </button>
        <hr />
        <TaskForm />
        <hr/>
        <TaskList />
    </div>
  )
}

export default Home;