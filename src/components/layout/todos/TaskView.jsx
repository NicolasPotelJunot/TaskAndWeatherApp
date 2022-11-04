import { TaskList } from "./TaskList";

export const TaskView = () => {
  return (
    <div className="pt-16 md:pt-0 flex flex-col justify-center items-center w-full animate__animated animate__fadeIn h-screen">
      <section className="w-80 sm:w-3/4 lg:w-1/3">
        <TaskList />
      </section>
    </div>
  );
};
