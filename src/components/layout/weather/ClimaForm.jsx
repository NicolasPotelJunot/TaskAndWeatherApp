import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCity } from "../../../stateManagement/slicers/weatherSlice";

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
      <div className="input-group flex justify-center">
        <input
          type="text"
          placeholder="El clima en..."
          onChange={handleChange}
          className="input input-bordered bg-white w-full text-2xl text-primary"
        />

        <button type="submit" className="btn bg-primary text-white border-none">
          Buscar
        </button>
      </div>
    </form>
  );
};
