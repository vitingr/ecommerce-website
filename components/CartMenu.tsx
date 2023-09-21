"use client"

import React, { useEffect, useState } from 'react'

const CartMenu = ({ id }: { id: any }) => {

  const [purchases, setPurchases] = useState<Array<string | number | any>>([])
  const [productsData, setProductsData] = useState<Array<string | number>>([])

  const fetchData = async () => {
    const search = await fetch("/api/user/purchases")
    const response = await search.json()
    if (response) {
      setPurchases(response)
    }

    if (purchases.length > 0) {
      const productPromise = purchases.map(async (item: any) => {
        const result = await getProduct(item.productId, item.productCategory)
        return result
      })

      Promise.all(productPromise).then((products) => {
        setProductsData(products)
      })
    }
  }

  const getProduct = async (id: string, subcategoria: string) => {
    try {
      const search = await fetch(`/api/products/${subcategoria}-${id}`)
      const response = await search.json()
      return response
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    if (id != "") {
      fetchData()
    }
  }, [id])

  return purchases.length > 0 ? (
    <>
      {productsData.length > 0 ? (
        <div className='w-full flex flex-col items-center mt-20'>
          {productsData.map((item: any) => (
            <div className="w-[850px] h-[300px] bg-white mb-8 rounded-xl flex gap-6 p-12">
              <div className='w-full max-w-[200px] h-[200px] flex flex-col justify-center items-center'><img src={item.foto} alt="Product Photo" className='w-[175px] h-[175px]' /></div>
              <div className='w-full'>
                <h1 className='font-bold text-xl'>{item.nome}</h1>
                <h4 className='text-neutral-500 text-sm'>{item.id}</h4>
                {item.descricao ? (
                  <p className='text-sm mt-4 text-justify'>{item.descricao}</p>
                ) : (
                  <p className='text-sm mt-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nesciunt accusamus ratione impedit autem porro totam quaerat?.</p>
                )}
                <h3 className='mt-8 text-sm'>Data Compra: {purchases[productsData.indexOf(item)].data}</h3>
                <h3 className='mt-2 text-sm'>Data Compra: <span className="text-blue-600 text-sm">{(item.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className='text-center font-3xl p-[10%]'>Nenhuma Compra até o momento</h1>
      )}
    </>
  ) : (
    <h1 className='text-center font-3xl'>Não comprou nada</h1>
  )
}

export default CartMenu