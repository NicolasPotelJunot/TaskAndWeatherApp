import { useState } from "react";

export const ClimaForm = ({newLocation = "cordoba"}) => {

    const [city, setCity] = useState("cordoba")
    
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(city===""|| !city ){
            return;
        }

        newLocation(city)
    }

  return (
    <form onSubmit={handleSubmit} className='form-control w-full'>
      <div className="input-group flex justify-center">

        <input 
            type="text" 
            placeholder='Agrega una Ciudad'
            onChange={e=>setCity(e.target.value)} 
            className='input input-info w-full text-3xl'
        />
            
        <button type='submit' className="btn btn-primary">Buscar</button>

      </div>


    </form>
  )
}
