import { destaquesInfoCellphone } from '@types'
import Link from 'next/link'
import React from 'react'

const InfoDestaque = ({ title, description, link, photo }: destaquesInfoCellphone) => {
  return (
    <div className='w-[300px] h-[300px] bg-[#f4f4f4] rounded-lg p-6'>
      <div className='flex items-center justify-center h-[100px] overflow-hidden'>
        <img src={photo} className='w-[150px]' alt="Monitor Image" />
      </div>
      <div className='mt-8 h-[75px] overflow-hidden'>
        <h2 className='text-center text-2xl font-bold'>{title}</h2>
        <p className='text-sm text-center'>{description}</p>
      </div>
      <div className='flex items-center justify-center mt-8'>
        <Link href={link}>
          <div className='p-1 bg-[#262f40] text-white rounded-full text-center w-[150px] text-sm'>Ver Mais</div>
        </Link>
      </div>
    </div>
  )
}

export default InfoDestaque