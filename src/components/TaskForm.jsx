import React, {useState} from 'react'
import Tag from './Tag';
import "./TaskForm.css"

// Default Task Values 
const TaskForm = ({setTasks}) => {
    const [taskData, setTaskData] = useState ({
        task: "",
        status: "todo",
        tags: []
    });

    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag) => {
        // Checks if the selected tag is avaialble from the given tags
        if(taskData.tags.some(item => item === tag))
        {
            const filterTags = taskData.tags.filter(item => item !== tag)
            setTaskData(prev => {
                return {...prev, tags:filterTags}
            })
        }
        else 
        {
            setTaskData(prev => {
                return {...prev, tags: [...prev.tags, tag]};
            })
        }
    };

    // Handles object change and stores it into the value
    const handleChange = (object) => {
        const {name, value} = object.target;
        
        // Replace previous values with new ones
        setTaskData(prev => {
            return {...prev, [name]: value}
        })
    };

    const handleSubmit = (object) => {
        object.preventDefault(); //Prevent default refresh
        console.log(taskData);   
        setTasks(prev => {
            return[...prev, taskData] 
        })
        setTaskData({
            task: "",
            status: "todo",
            tags: []
        })
    }

    return (
        <header className='app_header'>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name = "task"
                    value = {taskData.task}
                    className="task_input" 
                    placeholder='Enter your task' 
                    onChange={handleChange}>
                </input>

                <div className='task_form_bottom_line'>
                    {/* Controls the available task types */}
                    <div>
                        <Tag tagName="Math" selectTag={selectTag} selected={checkTag("Math")} ></Tag>
                        <Tag tagName="English" selectTag={selectTag} selected={checkTag("English")} ></Tag>
                        <Tag tagName="Biology" selectTag={selectTag} selected={checkTag("Biology")}></Tag>
                        <Tag tagName="History" selectTag={selectTag} selected={checkTag("History")}></Tag>
                        <Tag tagName="CS" selectTag={selectTag} selected={checkTag("CS")}></Tag>
                    </div>

                    {/* Controls the status of the tasks*/}
                    <div>
                    <select 
                        name = "status"
                        value={taskData.status}
                        className='task_status' 
                        onChange={handleChange}> 
                        <option value='"todo'>To Do</option>
                        <option value='doing'>In Progress</option>
                        <option value='done'>Finished</option>
                    </select>
                    <button type='submit' className='task_submit'> + Add Task</button>
                    </div>
                    
                </div>
            </form>
        </header>
    )
}

export default TaskForm