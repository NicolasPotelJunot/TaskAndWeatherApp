import { useSelector } from "react-redux";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

export const TaskView = () => {
  const selector = useSelector((state) => state.theme.theme);

  return (
    <div className="h-screen flex flex-col justify-between">
      <main>
        <TaskForm />

        <section
          data-theme={selector}
          className="grid grid-cols-3 h-full gap-14 py-2 px-10"
        >
          <TaskList />

          <div className="bg-base-200 h-full"></div>

        </section>
      </main>
    </div>
  );
};
