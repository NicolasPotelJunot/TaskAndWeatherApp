import { Routes, Route } from "react-router-dom";
import { HeaderView } from "../components/layout/header/HeaderView";
import { TaskView } from "../components/layout/todos/TaskView";

export const DashRoutes = () => {
  return (
    <div className="flex">
      <HeaderView />
      <Routes>
        <Route path="/" element={<TaskView />} />

        <Route path="/*" element={<TaskView />} />
      </Routes>
    </div>
  );
};
