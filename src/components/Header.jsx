import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {

  const taskState = useSelector(state=>state.tasks)

  return (
    <header className="flex p-10 h-36 bg-base-200 rounded-xl">

        <h1 className="text-4xl font-bold mx-3">
          
          {
            taskState.length ===0 ? `No tenes ninguna tarea pendiente`
            :            
            taskState.length ===1 ? `Tenes ${taskState.length} tarea por hacer`
            :
             `Tenes ${taskState.length} tareas por hacer`
          }
        
        </h1>

        <Link to="/create-task" className="btn btn-primary ease-in duration-400 ml-24">Crea una nueva tarea</Link>  

    </header>
  )
}
