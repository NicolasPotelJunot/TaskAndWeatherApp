import { TaskList } from "./TaskList";

export const TaskView = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <main className="w-1/3">
        <TaskList />
      </main>
    </div>
  );
};
