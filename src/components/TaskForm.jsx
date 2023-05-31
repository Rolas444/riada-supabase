import React from 'react'
import { useState } from 'react';
import { supabase } from '../supabase/client';
import { useAppStore } from '../zustand/AppStore';


const TaskForm = () => {
    const [taskName, setTaskName] = useState("");
    const createTask = useAppStore((state)=>state.createTask);
    const getTasks = useAppStore((state)=>state.getTasks);
    const currentUser = useAppStore((state)=>state.currentUser);
   const handleSubmit= (e) => {
        e.preventDefault();
        createTask({
            name: taskName,
            status: "process",
            userId: currentUser.id,
            })
        getTasks();
    }
  return (
    <div>TaskForm

        <form onSubmit={handleSubmit}>
            <input type='text' name='taskName' 
            placeholder='write a task name'
            onChange={(e)=>setTaskName(e.target.value)}
            />
        </form>
    </div>
  )
}

export default TaskForm;