import { optionsCreateProduct } from '@types'
import Link from 'next/link'
import React from 'react'

const ChooseCreateProduct = ({ image, name, url }: optionsCreateProduct) => {
  return (
    <>
      <div className='flex flex-col items-center bg-white h-[400px] w-[300px] p-8 border-t-2 border-indigo-400'>
        <Link href={`${url}`} className='cursor-pointer'>
          <div className='h-[150px]'><img src={`${image}`} alt="Create Product Image" className='max-w-[125px] w-full' /></div>
        </Link>
        <div>
          <h1 className='font-bold text-center'>Criar {name}</h1>
          <p className='text-sm text-center mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod, debitis atque ipsum cupiditate repellat esse, facere voluptates</p>
        </div>
        <Link href={`${url}`} className='w-full cursor-pointer'>
          <div className='mt-16 bg-indigo-400 hover:bg-indigo-500 transition-all duration-300 text-white w-full p-1 rounded-full text-center'>Criar Produto</div>
        </Link>
      </div>
    </>
  )
}

export default ChooseCreateProduct