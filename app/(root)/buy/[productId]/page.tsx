"use client"

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import ProductSidebar from '@components/ProductSidebar'
import { IoCaretForward } from 'react-icons/io5'

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
    <div>
      <div className='w-full h-[100px] p-12 bg-[#222] flex items-center justify-center'>
        <div className='flex items-center justify-between max-w-[1200px] w-full'>
          <h2 className='text-white text-3xl font-bold w-full flex justify-center'>{data.nome}</h2>
          <div className='flex items-center justify-center gap-6 w-full'>
            <div className='flex flex-col text-right w-full'>
              <h3 className='text-white font-extralight text-xs'>Por <span className='font-bold text-base text-white'>R${data.preco},00</span> à vista</h3>
              <h5 className='text-white font-extralight text-xs'>ou 12x de <span className='font-bold text-base text-white'>R${(data.preco / 12).toFixed(2)},00</span> nos demais cartões</h5>
            </div>
            <div className='bg-blue-400 text-white rounded-full p-2 w-[200px] text-center cursor-pointer hover:bg-blue-500 transition-all duration-300 font-bold'>
              Comprar Agora
            </div>
          </div>
        </div>
      </div>
      <div className='w-full p-[2%] flex justify-center gap-24 bg-[#f7f7f7]'>

        <section className='max-w-[1150px] p-16 bg-white max-h-[700px] rounded-lg'>
          <div>
            <h4 className='flex items-center gap-4 mb-10 text-neutral-500 text-lg cursor-pointer'>Home <IoCaretForward /> Catalogo <IoCaretForward /> {data.nome}</h4>
          </div>
          <div className='flex'>
            <div className='max-w-[500px] w-full flex flex-col items-center'>
              <img src={data.foto} alt="Product Photo" className='max-w-[500px] w-full cursor-pointer transition-all duration-300 hover:scale-110' />
            </div>

            <div className='flex flex-col'>
              <div className='min-h-[250px]'>
                <h1 className='font-bold text-3xl'>
                  {data.nome ? (<>{data.nome} </>) : (<></>)}
                  {data.modelo ? (<>{data.modelo} </>) : (<></>)}
                  {data.recursos ? (<>{data.recursos} </>) : (<></>)}
                  {data.display ? (<>Display {data.display} </>) : (<></>)}
                  {data.voltagem ? (<>{data.voltagem}</>) : (<></>)}
                </h1>
                <h4 className='text-neutral-500 text-sm font-normal mt-2'>{data.descricao ? (<>{data.descricao}</>) : (<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro at dignissimos consectetur ab enim, magnam incidunt perspiciatis culpa harum ducimus doloremque odit modi soluta est eligendi quas tenetur quod repellendusa.</>)}</h4>
                <ul className='list-disc ml-4 mt-6 text-sm'>
                  <li>Design Flat</li>
                  <li>All Around Cooling™</li>
                  <li>Digital Inverter</li>
                </ul>
                {data.voltagem ? (
                  <>
                    <h2 className='mt-12 font-bold text-xl'>Voltagem</h2>
                    <div className='grid grid-cols-2 gap-6 mt-4'>
                      <div className='p-4 border border-zinc-200 rounded-lg flex justify-center text-sm cursor-pointer'>110 V</div>
                      <div className='p-4 border border-zinc-200 rounded-lg flex justify-center text-sm cursor-pointer'>220 V</div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

              </div>
              <div className='rounded-xl'>
                <h4 className='text-2xl'>R$ {data.preco},00</h4>
                <p>ou 12x de R${(data.preco / 12).toFixed(2)} vezes sem juros</p>
                <div className='bg-[#262f40] mt-4 cursor-pointer font-bold text-center text-white w-full p-[7.5px] rounded-full hover:bg-[#1d2430] transition-all duration-200'>
                  Comprar
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <ProductSidebar />
        </section>

      </div>
    </div>
  ) : (
    <></>
  )
}

export default page