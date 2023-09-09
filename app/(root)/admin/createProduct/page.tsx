import ChooseCreateProduct from '@components/Admin/ChooseCreateProduct'
import { createProductOptions } from '@constants/options'
import React from 'react'

const page = () => {
  return (
    <div className='p-[4%] bg-[#f7f7f7] w-full flex flex-col items-center'>
      <div className='max-w-[1200px] flex flex-wrap gap-24'>
      {createProductOptions.map((item) => (
        <ChooseCreateProduct name={item.title} url={item.url} image={item.image} />
      ))}
      </div>
    </div>
  )
}

export default page