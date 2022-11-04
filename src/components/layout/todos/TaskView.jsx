import { TaskList } from "./TaskList";

export const TaskView = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full animate__animated animate__fadeIn h-screen">
      <main className="w-1/3">
        <TaskList />
      </main>
    </div>
  );
};
