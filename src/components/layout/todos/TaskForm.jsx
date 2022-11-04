import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { addTask, editTask } from "../../../stateManagement/slicers/taskSlice";
import { captureId } from "../../../stateManagement/slicers/idSlice";
import { openFormModal } from "../../../stateManagement/slicers/formSlice";

import "./TaskList.css";
import "../../../styles/generalStyles.css";

export const TaskForm = () => {
  const nombre = useSelector((state) => state.id.id);

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const form = useSelector((state) => state.form.modal);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value)
    setTask({
      ...task,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre !== "") {
      dispatch(
        editTask({
          id: nombre,
          title: task.title,
          description: task.description,
        })
      );
      dispatch(captureId(""));
    }

    if (nombre === "") {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }

    dispatch(openFormModal(false));

    setTask({
      title: "",
      description: "",
    });
  };

  return (
    <>
      {form ? (
        <div className="z-30 absolute w-full h-screen flex justify-center justify-items-center items-center">
          <button
            onClick={() => dispatch(openFormModal(false))}
            className="absolute background-modal-task w-full h-screen z-20"
          ></button>
          <div className="z-20 flex justify-center justify-items-center items-center">
            <div className="bg-white shadow-2xl shadow-gray-600 p-6 rounded-xl animate__animated animate__headShake">
              <button
                className="btn bg-primary border-none text-white px-2 rounded-full text-3xl"
                onClick={() => dispatch(openFormModal(false))}
              >
                <FontAwesomeIcon icon={faCircleArrowLeft} />
              </button>

              <form className="w-64 sm:w-80 md:w-96 flex flex-col my-2" onSubmit={handleSubmit}>
                <input
                  className="input bg-gray-200 required w-full my-3"
                  name="title"
                  type="text"
                  placeholder="Tarea"
                  onChange={handleChange}
                  value={task.title}
                />
                <input
                  required
                  className="textarea bg-gray-200 my-3 h-16"
                  name="description"
                  placeholder="Descripción"
                  onChange={handleChange}
                  value={task.description}
                  maxlength="50"
                ></input>
                <button
                  className="btn bg-primary border-none text-white my-3"
                  onSubmit={handleSubmit}
                >
                  Guardar
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
