import React from 'react'
import { TaskForm } from '../views/TaskForm'
import { TaskView } from '../views/TaskView'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TaskView />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes