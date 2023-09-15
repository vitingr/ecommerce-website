"use client"

import CartMenu from '@components/CartMenu'
import React, { useEffect, useState } from 'react'

const page = () => {

  const [data, setData] = useState<any>([])

  const getData = async () => {
    const result = await fetch("/api/user/getInfo")
    const response = await result.json()
    setData(response)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='w-full flex flex-col justify-center p-[3%] bg-[#f7f7f7]'>
      <h1 className='font-bold text-3xl text-center'>Minhas Compras</h1>

      <CartMenu id={data.id} />

    </div>
  )
}

export default page