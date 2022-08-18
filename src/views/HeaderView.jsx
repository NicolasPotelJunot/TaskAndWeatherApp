import React from 'react'
import { ButtonTheme } from '../components/ButtonTheme'

export const HeaderView = () => {
  return (
    <header className='flex justify-between px-10 py-2'>
        <div className='h-12 flex'>
            <img src='../../public/logo.png' alt='logo nicolas potel junot' className='h-full'/>
            <span className='ml-2 m-auto'>
                <p className='text-lg font-bold'>[Nik]TasksWeather</p>
                <p className='text-sm italic font-semibold'>Tus tareas te esperan!!!</p>
            </span> 
        </div>
        <ButtonTheme />
    </header>
  )
}
