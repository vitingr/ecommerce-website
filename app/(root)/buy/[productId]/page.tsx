"use client"

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import ProductSidebar from '@components/ProductSidebar'
import { IoCaretForward } from 'react-icons/io5'
import Link from 'next/link'

const page = () => {

  const pathname = usePathname().split("/")
  const query = pathname[2]

  const [data, setData] = useState<any>([])
  const [preco, setPreco] = useState<any>("")
  const [parcelamento, setParcelamento] = useState<any>("")

  const getData = async () => {
    const result = await fetch(`/api/products/${query}`)
    const response = await result.json()
    setData(response)
  }

  useEffect(() => {
    if (query) {
      getData()
      if (data.preco !== undefined) {
        setPreco(data.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
        setParcelamento((data.preco / 12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
      }
    }
  }, [query, data])

  return data.nome !== undefined ? (
    <div>
      <div className='w-full h-[100px] p-12 bg-[#222] flex items-center justify-center'>
        <div className='flex items-center justify-between max-w-[1200px] w-full'>
          <h2 className='text-white text-3xl font-bold w-full flex justify-center'>{data.nome}</h2>
          <div className='flex items-center justify-center gap-6 w-full'>
            <div className='flex flex-col text-right w-full'>
              <h3 className='text-white font-extralight text-xs'>Por <span className='font-bold text-base text-white'>{preco}</span> à vista</h3>
              <h5 className='text-white font-extralight text-xs'>ou 12x de <span className='font-bold text-base text-white'>{parcelamento}</span> nos demais cartões</h5>
            </div>
            <Link href={`/buy/${query}/confirm`}>
              <div className='bg-blue-400 text-white rounded-full p-2 w-[200px] text-center cursor-pointer hover:bg-blue-500 transition-all duration-300 font-bold'>
                Comprar Agora
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full p-[2%] flex justify-center gap-24 bg-[#f7f7f7]'>

        <section className='max-w-[1150px] p-16 bg-white rounded-lg'>
          <div>
            <h4 className='flex items-center gap-4 mb-10 text-neutral-500 text-lg cursor-pointer'>Home <IoCaretForward /> Catalogo <IoCaretForward /> {data.nome}</h4>
          </div>
          <div className='flex'>
            <div className='max-w-[500px] w-full flex flex-col items-center'>
              <img src={data.foto} alt="Product Photo" className='max-w-[500px] w-full cursor-pointer transition-all duration-300 hover:scale-105' />
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
                {data.cor ? (
                  <div className='mt-8 mb-8 flex gap-6'>
                    {data.cor.includes("Inbox / Prata") ? (
                      <div className='border border-gray-300 rounded-lg p-6 w-[175px] flex flex-col justify-center items-center'>
                        <div className='w-4 h-4 bg-slate-400 rounded-full' />
                        <p className='mt-2 text-sm'>Inbox / Prata</p>
                      </div>
                    ) : (<></>)}
                    {data.cor.includes("Branco") ? (
                      <div className='border border-gray-300 rounded-lg p-6 w-[175px] flex flex-col justify-center items-center'>
                        <div className='w-4 h-4 bg-white rounded-full border border-gray-800' />
                        <p className='mt-2 text-sm'>Branco</p>
                      </div>
                    ) : (<></>)}
                    {data.cor.includes("Preto") ? (
                      <div className='border border-gray-300 rounded-lg p-6 w-[175px] flex flex-col justify-center items-center'>
                        <div className='w-4 h-4 bg-[#262f40] rounded-full' />
                        <p className='mt-2 text-sm'>Preto</p>
                      </div>
                    ) : (<></>)}
                    {data.cor.includes("Cinza Acetinado") ? (
                      <div className='border border-gray-300 rounded-lg p-6 w-[175px] flex flex-col justify-center items-center'>
                        <div className='w-4 h-4 bg-gray-500 rounded-full' />
                        <p className='mt-2 text-sm'>Cinza Acetinado</p>
                      </div>
                    ) : (<></>)}
                    {data.cor.includes("Dourado") ? (
                      <div className='border border-gray-300 rounded-lg p-6 w-[175px] flex flex-col justify-center items-center'>
                        <div className='w-4 h-4 bg-amber-500 rounded-full' />
                        <p className='mt-2 text-sm'>Dourado</p>
                      </div>
                    ) : (<></>)}
                    {data.cor.includes("Verde") ? (
                      <div className='border border-gray-300 rounded-lg p-6 w-[175px] flex flex-col justify-center items-center'>
                        <div className='w-4 h-4 bg-emerald-500 rounded-full' />
                        <p className='mt-2 text-sm'>Verde</p>
                      </div>
                    ) : (<></>)}
                    {data.cor.includes("Azul Marinho") ? (
                      <div className='border border-gray-300 rounded-lg p-6 w-[175px] flex flex-col justify-center items-center'>
                        <div className='w-4 h-4 bg-blue-950 rounded-full' />
                        <p className='mt-2 text-sm'>Azul Marinho</p>
                      </div>
                    ) : (<></>)}
                    {data.cor.includes("Rosa") ? (
                      <div className='border border-gray-300 rounded-lg p-6 w-[175px] flex flex-col justify-center items-center'>
                        <div className='w-4 h-4 bg-fuchsia-400 rounded-full' />
                        <p className='mt-2 text-sm'>Rosa</p>
                      </div>
                    ) : (<></>)}
                  </div>
                ) : (
                  <></>
                )}

              </div>
              <div className='rounded-xl'>
                <h4 className='text-2xl'>{preco}</h4>
                <p>ou 12x de {parcelamento} vezes sem juros</p>
                <Link href={`/buy/${query}/confirm`}>
                  <div className='bg-[#262f40] mt-4 cursor-pointer font-bold text-center text-white w-full p-[7.5px] rounded-full hover:bg-[#1d2430] transition-all duration-200'>
                    Comprar
                  </div>
                </Link>
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
    <div className="loader"></div>
  )
}

export default page