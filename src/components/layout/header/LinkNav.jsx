import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faScrewdriverWrench,
  faCloudSun,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const LinkNav = ({ text }) => {
  return (
    <Link to={text}>
      <div className="flex hover:bg-slate-200 w-full py-5 pl-5 pr-1 hover:text-black cursor-pointer">
        <div className="mr-2 w-5 flex ">
          {text === "tareas" && <FontAwesomeIcon icon={faList} />}
          {text === "clima" && <FontAwesomeIcon icon={faCloudSun} />}
          {text === "herramientas" && (
            <FontAwesomeIcon icon={faScrewdriverWrench} />
          )}
        </div>

        <p className="text-sm">{text}</p>
      </div>
    </Link>
  );
};
