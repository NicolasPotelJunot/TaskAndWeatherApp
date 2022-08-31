import { TaskList } from "../components/TaskList";
import { Footer } from "../components/Footer";
import { ClimaView } from "./ClimaView";
import { useSelector } from "react-redux";
import { HeaderView } from "./HeaderView";
import { TaskForm } from "./TaskForm";

export const TaskView = () => {

  const selector = useSelector(state=>state.theme.theme)

  return (
    <div className="h-screen flex flex-col justify-between">

      <main>

        <TaskForm />

        <HeaderView />     

        <section data-theme={selector} className="grid grid-cols-3 h-full gap-14 py-2 px-10">

           <TaskList />

           <div className="bg-base-200 h-full"></div>

           <ClimaView />

        </section>

      </main>

      <Footer />

    </div>
  )

}
