import { Header } from "../components/Header";
import { TaskList } from "../components/TaskList";
import { Footer } from "../components/Footer";

export const TaskView = () => {

  return (
    <div className="relative grid grid-rows-6 min-h-screen">

      <Header />

      <TaskList />

      <Footer />

    </div>
  )

}
