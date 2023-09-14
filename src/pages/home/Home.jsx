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
        if (!supabase.auth.getUser()) {
            navigate("/login");
        }
    }, [])
    return (
        <>
            <Layout>
                <div className='container-fluid p-4'>
                    <div className='row'>
                        <div className="d-flex justify-content-end">
                            <h1 className="">Home</h1>
                        </div>
                    </div>
                </div>
            </Layout>

        </>

    )
}

export default Home;