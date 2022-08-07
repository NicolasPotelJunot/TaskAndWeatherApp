import { useState } from "react";

export const ClimaForm = ({newLocation = ""}) => {

    const [city, setCity] = useState("")
    
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(city===""|| !city ){
            return;
        }

        newLocation(city)
    }

  return (
    <form onSubmit={handleSubmit} className='form-control mb-14'>
      <div className="input-group flex justify-center">

        <input 
            type="text" 
            placeholder='Agrega una Ciudad'
            onChange={e=>setCity(e.target.value)} 
            className='input input-bordered w-3/6 text-3xl'
        />
            
        <button type='submit' className="btn btn-primary">Buscar</button>

      </div>


    </form>
  )
}
