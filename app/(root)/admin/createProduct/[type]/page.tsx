"use client"
import { CreateProduct } from '@components'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {

  const pathname = usePathname().split("/")
  const query = pathname[3]

  return query ? (
    <div className='w-full flex justify-center bg-[#f7f7f7] p-[3%]'>
      <CreateProduct type={query} />
    </div>
  ) : (
    <div className="loader"></div>
  )
}

export default page