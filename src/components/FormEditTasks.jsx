import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../stateManagement/slicers/taskSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "../components/TaskList.css";

export const FormEditTasks = ({task, setformEditState}) => {
  
  const [nameNewValue, setnameNewValue] = useState("")
  const [closedModal, setclosedModal] = useState()

  const handleClosedModal = ()=>{
    setclosedModal(false)
    setformEditState = closedModal
  }
  
  const dispatch = useDispatch()  

  const OnNewChange =(e)=>{
    setnameNewValue({
      ...nameNewValue,
      [e.target.name]: [e.target.value],
    });
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

      dispatch(
        editTask({
          id: task.id,
          title: nameNewValue.title,
          description:  nameNewValue.description,
        }))  

  }

  return (
    <>
      <div className='absolute background-modal-task z-20 '>
          <div className='w-full h-full flex justify-center justify-items-center items-center'>
            <div className=' p-6 rounded-xl animate__animated animate__headShake'>
                
                <button 
                className=' btn btn-primary px-2 rounded-full text-3xl'
                onClick={handleClosedModal}
                >
                <FontAwesomeIcon icon={faCircleArrowLeft} />
                </button>

                <form className='w-96 flex flex-col my-2' onSubmit={handleSubmit}>
                    <input className='input required input-bordered input-primary w-full my-3' name="title" type="text" placeholder='Tarea' onChange={OnNewChange}/>

                    <textarea required className='textarea textarea-primary my-3' cols="30" rows="8" name="description" placeholder='Descripción' onChange={OnNewChange}></textarea>

                    <button className='btn btn-primary my-3' onSubmit={handleSubmit}>Guardar</button>
                </form>

            </div>
          </div>
      </div>    
    </>
  )
}
