import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { addTask, editTask } from "../../../stateManagement/slicers/taskSlice";
import { captureId } from "../../../stateManagement/slicers/idSlice";
import { openFormModal } from "../../../stateManagement/slicers/formSlice";

import "./TaskList.css"
import "../../../styles/generalStyles.css"

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
        <div className="z-20 absolute w-full h-screen flex justify-center justify-items-center items-center">
          <button
            onClick={() => dispatch(openFormModal(false))}
            className="absolute background-modal-task w-full h-screen z-20"
          ></button>
          <div className="z-20 flex justify-center justify-items-center items-center">
            <div className="background-form p-6 rounded-xl animate__animated animate__headShake">
              <button
                className="btn bg-blue-400 hover:bg-blue-500 border-none text-white px-2 rounded-full text-3xl"
                onClick={() => dispatch(openFormModal(false))}
              >
                <FontAwesomeIcon icon={faCircleArrowLeft} />
              </button>

              <form className="w-96 flex flex-col my-2" onSubmit={handleSubmit}>
                <input
                  className="input required  w-full my-3"
                  name="title"
                  type="text"
                  placeholder="Tarea"
                  onChange={handleChange}
                  value={task.title}
                />
                <textarea
                  required
                  className="textarea my-3"
                  cols="30"
                  rows="8"
                  name="description"
                  placeholder="Descripción"
                  onChange={handleChange}
                  value={task.description}
                ></textarea>
                <button
                  className="btn bg-blue-400 hover:bg-blue-500 border-none text-white my-3"
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
