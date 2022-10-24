import React from 'react'
import { ButtonTheme } from '../components/ButtonTheme'

export const HeaderView = () => {
  return (
    <header className='flex justify-between bg-base-200 px-10 py-3'>
        <div className='h-12 flex'>
            <img src='../../public/logo.png' alt='logo nicolas potel junot' className='h-full'/>
            <span className='ml-2 m-auto'>
                <p className='text-lg font-bold'>NikAgenda</p>
                <p className='text-sm italic font-semibold'>Tus tareas te esperan!!!</p>
            </span> 
        </div>
        <ButtonTheme />
    </header>
  )
}
