import { TaskList } from "./TaskList";

export const TaskView = () => {
  return (
    <div className="px-2 pt-20 md:pt-0 flex flex-col justify-center items-center w-full animate__animated animate__fadeIn h-screen">
      <section className="w-full sm:w-3/4 lg:w-1/3">
        <TaskList />
      </section>
    </div>
  );
};
