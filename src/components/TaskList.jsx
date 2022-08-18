import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../stateManagement/slicers/taskSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons'
import {Header} from '../components/Header'
import "./TaskList.css";


export const TaskList = () => {
    const taskState = useSelector(state=>state.tasks.tasks)

    const dispatch = useDispatch()
  
    const handleDelete =(id)=>{
      dispatch(deleteTask(id))  
    }
  
    return (        
      <div className="max-h-full">
        <Header />
        <div className="flex flex-col bg-base-200 mt-6 pl-5 rounded-xl">
          <div className="h-96 scroll-m-0 overflow-auto">
            <div className="task-width">
              {
                taskState.map(task=>(
                  <div className="grid grid-cols-3 gap-5 justify-between border-b-2 border-slate-300 px-3 py-5" key={task.id}>
                    <div className="col-span-2 grid items-center">
                      <h3 className="font-bold">{task.title}</h3>
                      <p className="text-lg">{task.description}</p>
                    </div>
                    <div className="col-span-1 flex justify-end items-center">
                      <Link className="btn btn-success rounded-full mx-1" to={`/edit-task/${task.id}`}><FontAwesomeIcon icon={faPen}/></Link>
                      <button onClick={()=> handleDelete(task.id)} className="btn btn-error hover:bg-red-500 rounded-full mx-1"><FontAwesomeIcon icon={faTrashCan}/></button>
                      
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
            
            <div className="card mt-5">
              <div className="card-body">
                <Link to="/create-task" className="btn btn-primary text-4xl ease-in duration-400 m-auto rounded-full text-center h-32 w-32 border-none p-4">
                  <FontAwesomeIcon icon={faPlus}/>
                </Link>
              </div>
            </div>
    
        </div>

      </div>
    )
}
