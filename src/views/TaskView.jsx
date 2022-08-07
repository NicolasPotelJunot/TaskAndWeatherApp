import { Header } from "../components/Header";
import { TaskList } from "../components/TaskList";
import { Footer } from "../components/Footer";
import { ClimaView } from "./ClimaView";

export const TaskView = () => {

  return (
    <div className="relative grid min-h-screen">

      <Header />

      <TaskList />

      <ClimaView />

      <Footer />

    </div>
  )

}
