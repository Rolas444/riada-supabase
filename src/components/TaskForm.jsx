import React from 'react'
import { useState } from 'react';
import { supabase } from '../supabase/client';

const TaskForm = () => {
    const [taskName, setTaskName] = useState("");
    const handleSubmit = async  (e) => {
        e.preventDefault();
        try{
            const result = await supabase.from('tasks').insert({
                name: taskName,
                status: 'process',
            })
            console.log(result);
        }catch(err){
            console.log(err);
        }
        
       
    };
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