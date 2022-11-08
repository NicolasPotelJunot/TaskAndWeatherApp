import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TextField } from "@mui/material";

import { changeCity } from "../../../stateManagement/slicers/weatherSlice";
import "../../../styles/generalStyles.css";

export const ClimaForm = ({ newLocation = "" }) => {
  const [cityState, setCityState] = useState();
  const city = useSelector((state) => state.city.name);

  const dispatch = useDispatch();

  useEffect(() => {
    if (city) {
      newLocation(city);
    } else {
      newLocation(null);
    }
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeCity(cityState));
  };

  const handleChange = (e) => {
    setCityState(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-control w-full xl:pl-5 mx-auto"
    >
      <div className="input-group flex justify-center ">
        {/* <input
          type="text"
          placeholder="El clima en..."
          onChange={handleChange}
          className="input input-bordered bg-white w-full text-2xl text-primary"
        /> */}
        <div className="w-3/4 flex items-end">
          <TextField
            type="text"
            onChange={handleChange}
            fullWidth
            variant="standard"
            label="El clima en..."
          />
        </div>

        <div className="btn bg-primary block text-white border-none rounded-r-xl">
          <button
            type="submit"
            className=""
          >
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
};
