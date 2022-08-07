import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../stateManagement/slicers/taskSlice";

export const TaskList = () => {
    const taskState = useSelector(state=>state.tasks)

    const dispatch = useDispatch()
  
    const handleDelete =(id)=>{
      dispatch(deleteTask(id))  
    }
  
    return (        
    
        <div className="p-10 row-span-4 grid grid-cols-5 gap-5 my-3">
          {
            taskState.map(task=>(
              <div className="card w-96 max-h-56 bg-base-200 shadow-xl" key={task.id}>
                <div className="card-body">
                  <h3 className="card-title font-bold">{task.title}</h3>
                  <p className="text-lg">{task.description}</p>
                  <div className="card-actions justify-end mt-5">
                     <button onClick={()=> handleDelete(task.id)} className="btn btn-secondary">delete</button>
                     <Link className="btn btn-accent" to={`/edit-task/${task.id}`}>Editar</Link>
                  </div>
                </div>
              </div>
            ))
          }
          
          <div className="card w-96 bg-base-200 max-h-56 shadow-xl" >
            <div className="card-body">
              <h3 className="text-xl">Agregar tarea :</h3>
              <Link to="/create-task" className="btn btn-primary text-8xl ease-in duration-400 m-auto rounded-full text-center h-32 w-32 border-none pb-4">
                +
              </Link>  
            </div>
          </div>
  
      </div>
    )
}
