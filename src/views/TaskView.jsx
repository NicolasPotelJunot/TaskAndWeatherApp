import { TaskList } from "../components/TaskList";
import { Footer } from "../components/Footer";
import { ClimaView } from "./ClimaView";
import { useState } from "react";

export const TaskView = () => {

  const [theme, setTheme] = useState("corporate")

  const handleTheme = () =>{
    if (theme==="corporate") {
      setTheme("dark")
    }else{
      setTheme("corporate")
    }
  }

  return (
    <div data-theme={theme} className="grid">

      <button className="btn btn-primary w-24" onClick={handleTheme}>Cambiar modo</button>

      <section className="grid grid-cols-3 h-screen gap-14 py-8 px-10">

        <TaskList />

        <TaskList />

        <ClimaView />

      </section>


      <Footer />

    </div>
  )

}
