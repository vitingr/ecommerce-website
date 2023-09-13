import { destaqueSm } from '@types'
import React from 'react'

const DestaqueSm = ({ handleClick, title, subtitle, foto }: destaqueSm) => {
  return (
    <div className='bg-[#f4f4f4] w-full flex flex-col items-center rounded-2xl justify-center p-6 h-[283px]'>
      <img src={foto} alt="foto" className='w-full max-w-[125px] photo-transform cursor-pointer' />
      <h2 className="mt-10 font-bold text-xl text-center">{title}</h2>
      <p className="mt-4 text-zinc-700 text-center text-sm">{subtitle}</p>
    </div>
  )
}

export default DestaqueSm