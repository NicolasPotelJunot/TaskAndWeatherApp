import { useDispatch, useSelector } from "react-redux";
import { openFormModal } from "../../../stateManagement/slicers/formSlice";

export const HeaderTask = () => {
  const taskState = useSelector((state) => state.tasks.tasks);

  const dispatch = useDispatch();

  return (
    <header className="flex px-6 py-6 rounded-xl justify-between">
      <h1 className="text-lg font-bold flex items-center bg-white px-4 rounded-xl ">
        {taskState.length === 0
          ? `No tenes tareas pendientes`
          : taskState.length === 1
          ? `Tenes ${taskState.length} tarea por hacer`
          : `Tenes ${taskState.length} tareas por hacer`}
      </h1>

      <button
        onClick={() => dispatch(openFormModal(false))}
        className="btn bg-blue-400 hover:bg-blue-500 border-none text-white text-xs ease-in duration-400 rounded-2xl"
      >
        <p className="text-3xl flex items-center mb-2 mr-2">+</p>Crear tarea
      </button>
    </header>
  );
};
