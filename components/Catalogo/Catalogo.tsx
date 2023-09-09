"use client"

import { catalogo } from '@types'
import React, { useEffect, useState } from 'react'
import CatalogoCard from './CatalogoCard'
import CellphoneCard from './CellphoneCard'

const Catalogo = ({ type }: catalogo) => {

  const [data, setData] = useState([])

  const fetchData = async () => {
    const searchProduct = await fetch(`/api/products/${type}`)
    const responseProduct = await searchProduct.json()
    setData(responseProduct)
  }
  useEffect(() => {
    if (type !== "") {
      fetchData()
    }
  }, [type])  

  return (
    <div className='max-w-[950px] w-full'>
      {type === "cellphone" ? (
        <div className='w-full flex gap-10'>
          {data.length > 0 ? (
            <>
              {data.map((product) => (
                <CellphoneCard content={product} />
              ))}
            </>
          ) : (
            <>
              <p className='w-full text-center'>Ops, Nenhum Produto foi Encontrado...</p>
            </>
          )}
        </div>
      ) : (
        <div className='w-full'>
          {data.length > 0 ? (
            <>
              {data.map((product) => (
                <CatalogoCard content={product} />
              ))}
            </>
          ) : (
            <>
              <p className='w-full text-center'>Ops, Nenhum Produto foi Encontrado...</p>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Catalogo