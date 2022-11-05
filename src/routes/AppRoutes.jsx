import { HashRouter } from "react-router-dom";
import { DashRoutes } from "./DashRoutes";

function AppRoutes() {

  return (
    <HashRouter>
        <DashRoutes />
    </HashRouter>
  )
}

export default AppRoutes