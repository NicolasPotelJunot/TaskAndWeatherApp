import { TaskList } from "../components/TaskList";
import { Footer } from "../components/Footer";
import { ClimaView } from "./ClimaView";
import { useSelector } from "react-redux";
import { HeaderView } from "./HeaderView";

export const TaskView = () => {

  const selector = useSelector(state=>state.theme.theme)

  return (
    <div data-theme={selector} className="grid">

      <HeaderView />

      <section className="grid grid-cols-3 h-screen gap-14 py-8 px-10">

        <TaskList />

        <TaskList />

        <ClimaView />

      </section>


      <Footer />

    </div>
  )

}
