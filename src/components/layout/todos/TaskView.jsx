import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

export const TaskView = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <main>
        <TaskForm />
        <TaskList />
      </main>
    </div>
  );
};
