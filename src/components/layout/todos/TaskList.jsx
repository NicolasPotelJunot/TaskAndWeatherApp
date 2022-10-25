import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../../stateManagement/slicers/taskSlice";
import { captureId } from "../../../stateManagement/slicers/idSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons'
import {Header} from './Header'
import { openFormModal } from "../../../stateManagement/slicers/formSlice";

export const TaskList = () => {

    const taskState = useSelector(state=>state.tasks.tasks)

    const dispatch = useDispatch()
  
    const handleDelete =(task)=>{
      dispatch(deleteTask(task.id))
    }

    const handleEdit = (task) =>{
      dispatch(openFormModal(true))
      dispatch(captureId(task.id))
    }
  
    return ( 
      <>

        <div className="h-full bg-base-200">

          <Header />

          <div className=" flex flex-col justify-between mt-6 pl-5 rounded-xl">

            <div className="h-96 scroll-m-0 overflow-auto">
              <div className="task-width h-full">

                {
                  taskState.length=== 0
                  ? <p className="h-full w-full font-bold text-xl m-auto flex justify-center items-center">Agrega tareas y cumple tus metas</p> 
                  : taskState.map(task=>(
                    <div className="grid grid-cols-3  gap-5 justify-between border-b-2 border-slate-300 px-3 py-5" key={task.id}>
                      <div className="animate__animated animate__lightSpeedInLeft col-span-2 grid items-center">
                        <h3 className="font-bold">{task.title}</h3>
                        <p className="text-lg">{task.description}</p>
                      </div>
                      <div className="col-span-1 flex justify-end items-center">
                        
                        <button onClick={()=>handleEdit(task)} className="btn btn-success rounded-full mx-1"><FontAwesomeIcon icon={faPen}/></button>

                        <button onClick={()=> handleDelete(task)} className="btn btn-error hover:bg-red-500 rounded-full mx-1"><FontAwesomeIcon icon={faTrashCan}/></button>
                        
                      </div>
                    </div>
                  ))
                }

              </div>
            </div>
              
              <div className="card ">
                <div className="card-body">
                  <button 
                  onClick={()=>dispatch(openFormModal(true))}
                  className="btn btn-primary text-4xl ease-in duration-400 m-auto rounded-full text-center h-32 w-32 border-none p-4">
                    <FontAwesomeIcon icon={faPlus}/>
                  </button>        
                </div>
              </div>
      
          </div>

        </div>
      </>       
    )
}