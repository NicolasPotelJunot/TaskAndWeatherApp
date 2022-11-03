import { Routes, Route } from "react-router-dom";
import { HeaderView } from "../components/layout/header/HeaderView";
import { ToolsView } from "../components/layout/tools/ToolsView";
import { TaskForm } from "../components/layout/todos/TaskForm";
import { TaskView } from "../components/layout/todos/TaskView";
import { ClimaView } from "../components/layout/weather/ClimaView";
import "../styles/generalStyles.css";

export const DashRoutes = () => {
  return (
    <div className="flex bg-gradient">
      
      <TaskForm />
      
      <HeaderView />
      
      <Routes>
        <Route path="/tareas" element={<TaskView />} />
        <Route path="/clima" element={<ClimaView />} />
        <Route path="/herramientas" element={<ToolsView />} />

        <Route path="/*" element={<TaskView />} />
      </Routes>
    </div>
  );
};
