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
            </Layout>

        </>

    )
}

export default Home;