"use client"

import { catalogo } from '@types'
import React, { useEffect, useState } from 'react'
import CatalogoCard from './CatalogoCard'
import CellphoneCard from './CellphoneCard'

const Catalogo = ({ type, method }: catalogo) => {

  const [data, setData] = useState([])

  const fetchData = async () => {
    const searchProduct = await fetch(`/api/products/${type}`)
    const responseProduct = await searchProduct.json()
    setData(responseProduct)
  }

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
        console.log("B")
        fetchData()
      }
    }
  }, [type])

  return data.length > 0 ? (
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
  ) : (
    <div className="loader" />
  )
}

export default Catalogo