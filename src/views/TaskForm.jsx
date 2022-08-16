import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../stateManagement/slicers/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const TaskForm = () => {

  const [task, setTask] = useState({
    title: "",
    description: ""
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector(state=>state.tasks)

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
      setTask(tasks.tasks.find(task=>task.id===params.id))      
    }
  }, [params.id,tasks])
  
  const handleReturn = () =>{
    navigate(-1)
  }

  return (
    <div className='h-screen flex justify-center justify-items-center items-center'>
      <div className='bg-slate-800 p-6 rounded-xl animate__animated animate__headShake'>
        
        <button 
          onClick={handleReturn}
          className=' btn btn-primary px-2 rounded-full text-3xl'
          >
          <FontAwesomeIcon icon={faCircleArrowLeft} />
        </button>

        <form className='w-96 flex flex-col my-2' onSubmit={handleSubmit}>
          <input className='input required input-bordered input-primary w-full my-3' name="title" type="text" placeholder='Tarea' onChange={handleChange} value={task.title}/>
          <textarea required className='textarea textarea-primary my-3' cols="30" rows="8" name="description" placeholder='Descripción' onChange={handleChange} value={task.description}></textarea>
          <button className='btn btn-primary my-3 '>Guardar</button>
        </form>

      </div>
    </div>
  )
}
