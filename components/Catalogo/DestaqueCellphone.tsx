import { destaquesInfoCellphone } from '@types'
import Link from 'next/link'
import React from 'react'

const DestaqueCellphone = ({ title, description, link, photo }: destaquesInfoCellphone) => {
  return (
    <div className='bg-[#f4f4f4] w-[275px] h-[350px] p-8 rounded-xl'>
      <div className='flex items-center justify-center'>
        <img src={photo} className='max-w-[125px] w-full' alt="Cellphone photo" />
      </div>
      <div className='flex flex-col justify-between items-center'>
        <div className='mt-6'>
          <h2 className='text-center font-bold'>{title}</h2>
          <p className='text-center text-sm mt-2'>{description}</p>
        </div>
        <div className='mt-12 w-full'>
          <Link href={link}>
            <button className="cta flex items-center">
              <span>Hover me</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DestaqueCellphone