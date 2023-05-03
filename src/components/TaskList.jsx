import React from 'react'
import { useAppStore } from '../zustand/AppStore';
import { shallow } from 'zustand/shallow'
import { useEffect } from 'react';

const TaskList = () => {
    const tasks = useAppStore((state)=>state.tasks, shallow)
    const getTasks = useAppStore((state)=>state.getTasks)

    useEffect(() => {
        getTasks();
    },[])
  return (
    <div>
        {
          tasks.map((task)=>(
            <div>
              <h2>{task.name}</h2>
              <span>{task.status}</span>
            </div>
          ))
        }
    </div>
    
  )
}

export default TaskList;