import { BrowserRouter } from "react-router-dom";
import { DashRoutes } from "./DashRoutes";

function AppRoutes() {

  return (
    <BrowserRouter>
        <DashRoutes />
    </BrowserRouter>
  )
}

export default AppRoutes