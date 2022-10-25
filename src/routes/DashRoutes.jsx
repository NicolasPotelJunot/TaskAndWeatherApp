import { Routes, Route } from "react-router-dom";
import { HeaderView } from "../components/layout/header/HeaderView";
import { ToolsView } from "../components/layout/herramientas/ToolsView";
import { TaskView } from "../components/layout/todos/TaskView";
import { ClimaView } from "../components/layout/weather/ClimaView";
import "../styles/generalStyles.css";

export const DashRoutes = () => {
  return (
    <div className="flex bg-gradient">
      <HeaderView />
      <Routes>
        <Route path="/tareas" element={<TaskView />} />
        <Route path="/clima" element={<ClimaView />} />
        <Route path="/tools" element={<ToolsView />} />

        <Route path="/*" element={<TaskView />} />
      </Routes>
    </div>
  );
};
