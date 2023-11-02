"use client"

import ToastMessage from '@components/Config/ToastMessage'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
  const [purchases, setPurchases] = useState<any>([])

  const fetchData = async () => {
    const search = await fetch("/api/user/purchases")
    const response = await search.json()
    setPurchases(response)
  }

  const removeProduct = async (productId: string) => {
    try {
      const response = await fetch(`/api/user/buy`, {
        method: "POST",
        body: JSON.stringify({
          purchaseId: productId
        })
      })

      if (response.ok) {
        fetchData()
        toast.success("Produto removido do carrinho!")
      } else {
        toast.error("Não foi possível remover o item do carrinho!")
      }

    } catch (error) {
      return new Error("Não foi possível comprar o produto")
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='w-full flex flex-col justify-center p-[3%] bg-[#f7f7f7]'>
      <ToastMessage />
      <h1 className='font-bold text-3xl text-center'>Meu Carrinho</h1>
      {purchases.length > 0 ? (
        <div className='w-full flex flex-col items-center mt-20'>
          {purchases.map((item: {
            nome: string;
            productCategory: string;
            id: string;
            userId: string;
            productId: string;
            data: Date;
            cupom: string;
            value: number;
            foto: string;
            descricao: string;
            quantidade: number
          }) => (
            <div className="w-[850px] h-[300px] bg-white mb-8 rounded-xl flex gap-6 p-12" key={item.id}>
              <div className='w-full max-w-[200px] h-[200px] flex flex-col justify-center items-center'><img src={item.foto} alt="Product Photo" className='w-[175px] h-[175px]' /></div>
              <div className='w-full'>
                <h1 className='font-bold text-xl'>{item.nome}</h1>
                <h4 className='text-neutral-500 text-sm'>{item.id}</h4>
                {item.descricao ? (
                  <p className='text-sm mt-4 text-justify'>{item.descricao}</p>
                ) : (
                  <p className='text-sm mt-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nesciunt accusamus ratione impedit autem porro totam quaerat?.</p>
                )}
              </div>
              <div className='w-[350px] flex flex-col items-center gap-4 ml-6'>
                <div>
                  <h1 className='text-2xl font-bold'>{(item.value * item.quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
                  {item.quantidade > 1 ? <p className='text-center text-sm'>Comprar {item.quantidade} unidades</p> : <p className='text-center text-sm'>Comprar {item.quantidade} unidade</p>}
                </div>
                <div className='w-full max-w-[325px] p-1 text-center border text-[13px] border-zinc-800 rounded-full cursor-pointer' onClick={() => removeProduct(item.id)}>Remover Item</div>
                <Link href={`/buy/${item.productCategory}-${item.id}/confirm`} className='w-full max-w-[325px] text-center p-2 text-[12px] bg-zinc-800 text-white rounded-full cursor-pointer hover:bg-zinc-700 transition-all duration-200'>
                  Confirmar Compra
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className='text-center font-3xl p-[10%]'>Nenhuma Compra até o momento</h1>
      )}
    </div >
  )
}

export default page