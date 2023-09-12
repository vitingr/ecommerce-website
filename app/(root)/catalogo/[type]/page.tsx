"use client"

import React from 'react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Sidebar } from '@components'
import Catalogo from '@components/Catalogo/Catalogo'

const page = () => {

  const pathname = usePathname().split("/")
  const query = pathname[2]

  return query ? (
    <main className='flex flex-col justify-center items-center w-full min-h-[72vh] bg-[#f7f7f7] p-[2%]'>
      <div className='max-w-[1350px] w-full flex flex-col p-16 mb-[3%] h-[325px] rounded-md bg-section-tv' style={{backgroundImage: `url(https://images.samsung.com/is/image/samsung/assets/br/refrigerators/all-refrigerators/2REFPFDESK.jpeg?$LazyLoad_Home_JPG$)`}}>
        <h1 className='text-3xl font-bold text-white'>Só a nossa loja possui 2 anos de Garantia</h1>
        <p className='mt-2 text-sm text-white'>Troque os eletrodomésticos antigos de sua casa</p>
      </div>
      {query ? (
        <div className='w-full flex justify-center gap-14'>
          <Sidebar type={query} />
          <Catalogo type={query} />
        </div>
      ) : (
        <></>
      )
      }
      <div>

      </div>
    </main >
  ) : (
    <div className="loader"></div>
  )
}

export default page