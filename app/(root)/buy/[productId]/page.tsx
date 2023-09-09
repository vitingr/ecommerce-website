"use client"

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import ProductSidebar from '@components/ProductSidebar'

const page = () => {

  const pathname = usePathname().split("/")
  const query = pathname[2]

  const [data, setData] = useState<any>([])

  const getData = async () => {
    const result = await fetch(`/api/products/${query}`)
    const response = await result.json()
    setData(response)
  }

  useEffect(() => {
    if (query) {
      getData()
    }
  }, [query])

  return data.nome !== undefined ? (
    <div className='w-full p-[2%] flex justify-center gap-24 bg-[#f7f7f7]'>

      <section className='flex max-w-[1150px] p-16 bg-white max-h-[700px]'>
        <div className='max-w-[700px] w-full flex justify-center items-center'>
          <img src={data.foto} alt="Product Photo" className='w-full'/>
        </div>

        <div className='flex flex-col'>
          <div className='min-h-[400px]'>
            <h1 className='font-bold text-3xl'>
              {data.nome ? (<>{data.nome} </>) : (<></>)}
              {data.modelo ? (<>{data.modelo} </>) : (<></>)}
              {data.recursos ? (<>{data.recursos} </>) : (<></>)}
              {data.display ? (<>Display {data.display} </>) : (<></>)}
              {data.voltagem ? (<>{data.voltagem}</>) : (<></>)}
            </h1>
            <ul className='list-disc ml-4 mt-6 text-sm'>
              <li>Design Flat</li>
              <li>All Around Cooling™</li>
              <li>Digital Inverter</li>
            </ul>
            <h2 className='mt-12 font-bold text-xl'>Voltagem</h2>
            <div className='grid grid-cols-2 gap-6 mt-4'>
              <div className='p-4 border border-zinc-200 rounded-lg flex justify-center text-sm cursor-pointer'>110 V</div>
              <div className='p-4 border border-zinc-200 rounded-lg flex justify-center text-sm cursor-pointer'>220 V</div>
            </div>
          </div>
          <div className='rounded-xl p-8'>
            <h4 className='text-2xl'>R$ {data.preco},00</h4>
            <p>ou 12x de R${(data.preco / 12 ).toFixed(2)} vezes sem juros</p>
            <div className='bg-[#262f40] mt-8 cursor-pointer font-bold text-center text-white w-full p-[7.5px] rounded-full hover:bg-[#1d2430] transition-all duration-200'>
              Comprar
            </div>
          </div>

        </div>
      </section>

      <section>
        <ProductSidebar />
      </section>

    </div>
  ): (
    <></>
  )
}

export default page