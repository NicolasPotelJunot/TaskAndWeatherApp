import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {

  const taskState = useSelector(state=>state.tasks)

  return (

    <header className="flex px-2 py-2 bg-base-200 rounded-xl justify-between">

        <h1 className="text-lg font-bold flex items-center bg-white px-4 rounded-xl ">
          
          {
            taskState.length ===0 ? `No tenes tareas pendiente`
            :            
            taskState.length ===1 ? `Tenes ${taskState.length} tarea por hacer`
            :
             `Tenes ${taskState.length} tareas por hacer`
          }
        
        </h1>

        <Link to="/create-task" className="btn btn-primary text-xs ease-in duration-400 rounded-2xl">
          <p className="text-3xl flex items-center mb-2 mr-2">+</p>Crear tarea
        </Link>  

    </header>
  )
}
