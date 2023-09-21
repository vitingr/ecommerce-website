"use client"

import { catalogo } from '@types'
import React, { useEffect, useState } from 'react'
import CatalogoCard from './CatalogoCard'
import CellphoneCard from './CellphoneCard'

const Catalogo = ({ type, method, data, setData , fetchData}: catalogo) => {

  const handleSearch = async () => {
    const result = await fetch(`/api/products/search/${type}`)
    const response = await result.json()
    setData(response)
  }

  useEffect(() => {
    if (type !== "") {
      if (method === "search") {
        if (type !== undefined && type !== null) {
          handleSearch()
        }
      } else {
        fetchData(type)
      }
    }
  }, [type])

  return data.length > 0 ? (
    <div className='max-w-[950px] w-full'>
      {type === "cellphone" ? (
        <div className='w-full flex gap-10'>
          {data.length > 0 ? (
            <>
              {data.map((product: any) => (
                <CellphoneCard content={product} key={product.nome} />
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
              {data.map((product: any) => (
                <CatalogoCard content={product} key={product.id} />
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
  ) : (
    <div className='w-full flex flex-col items-center bg-white min-h-[32vh] p-12 rounded-xl'>
      Nenhum Produto Corresponde à sua busca
    </div>
  )
}

export default Catalogo