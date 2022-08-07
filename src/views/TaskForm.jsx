import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../stateManagement/slicers/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

export const TaskForm = () => {

  const [task, setTask] = useState({
    title: "",
    description: ""
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks =useSelector(state=>state.tasks)

  const handleChange = (e) =>{
    // console.log(e.target.name, e.target.value)
    setTask({
      ...task,
      [e.target.name]: [e.target.value],
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(params.id){
      dispatch(editTask(task))
    }else{
      dispatch(
        addTask({
        ...task,
        id: uuid(),
      })
    )
    }    
    navigate("/")

  }

  useEffect(() => {
    if(params.id){
      setTask(tasks.find(task=>task.id===params.id))      
    }
  }, [params.id,tasks])
  
  const handleReturn = () =>{
    navigate(-1)
  }

  return (
    <div className='h-screen flex justify-center justify-items-center items-center'>
      <div>
        
        <button 
          onClick={handleReturn}
          className='btn btn-primary'
          >Atrás
        </button>

        <form className='px-6 py-3 bg-slate-800 border-2 border-violet-600 rounded-xl w-96 flex flex-col my-2' onSubmit={handleSubmit}>
          <input className='input required input-bordered input-primary w-full my-3' name="title" type="text" placeholder='Agregar tarea' onChange={handleChange} value={task.title}/>
          <textarea required className='textarea textarea-primary my-3' cols="30" rows="8" name="description" placeholder='description' onChange={handleChange} value={task.description}></textarea>
          <button className='btn btn-primary my-3'>Guardar</button>
        </form>

      </div>
    </div>
  )
}
