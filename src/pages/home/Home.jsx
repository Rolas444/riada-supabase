import React, { useEffect } from 'react'
import { supabase } from '../../supabase/client';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import Layout from '../../components/Layout';
import "./home.css"

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!supabase.auth.getUser()){
            navigate("/login");
        }
    }, [])
  return (
    <>
    <Layout>
        <div className='container-fluid'>
        <div className='row'>
            <div className='d-flex justify-content-around aling-items-center 
            col-12 col-sm-6 col-md-4 col-lg-3  p-3 border border-secondary shadow-sm'>
                <div>
                    <p>miembros:</p>
                    <h2>25</h2>
                </div>
            </div>
        </div>
        </div>
    </Layout>

    </>
    
  )
}

export default Home;