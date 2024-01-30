"use client"

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import ToastMessage from '@components/Config/ToastMessage'
import { toast } from 'react-toastify'

const page = () => {

  const router = useRouter()
  const pathname = usePathname().split("/")
  const query = pathname[2]

  const divider = pathname[2].split("-")
  const purchaseId = divider[1]

  const [data, setData] = useState<any>([])
  const [quantity, setQuantity] = useState<number>(1)

  const getData = async () => {
    const result = await fetch(`/api/products/getProductByPurchase/${query}`)
    const response = await result.json()
    setData(response)
  }

  const addToCart = async () => {
    try {
      console.log(`${data.id} / ${data.preco} / ${data.foto} / ${data.descricao}`)
      const purchase = await fetch(`/api/user/addToCart`, {
        method: "POST",
        body: JSON.stringify({
          productId: data.id,
          value: data.preco,
          foto: data.foto,
          descricao: data.descricao,
          nome: data.nome,
          categoria: data.subcategoria
        })
      })

      if (purchase.ok) {
        toast.success("Produto Adicionado ao carrinho!")
        router.push(`/cart`)
      } else {
        console.log("Não deu bom!")
        toast.error("ERRO, não foi possível adicionar ao carrinho!")
      }

    } catch (error) {
      console.log(error)
      throw new Error("Erro ao adicionar o produto ao carrinho.")
    }
  }

  useEffect(() => {
    if (query) {
      getData()
    }
  }, [query])

  return data.nome !== undefined ? (
    <div className='w-full flex justify-center items-center p-[7%]'>
      <ToastMessage />
      <div className='w-full flex justify-center gap-16 min-h-[600px] bg-white'>
        <div className='max-w-[650px]'>
          <div className='flex gap-6'>
            <div className='max-w-[200px] w-full'><img src={data.foto} alt="Product Image" className='w-full' /></div>
            <div>
              <h1 className='font-bold text-lg'>
                {data.nome ? (<>{data.nome} </>) : (<></>)}
                {data.modelo ? (<>{data.modelo} </>) : (<></>)}
                {data.recursos ? (<>{data.recursos} </>) : (<></>)}
                {data.display ? (<>Display {data.display} </>) : (<></>)}
                {data.voltagem ? (<>{data.voltagem} </>) : (<></>)}
                {data.numPortas ? (<>{data.numPortas} Portas</>) : (<></>)}
              </h1>
              <h5 className='text-sm text-neutral-500'>{data.id}</h5>
              <h6 className='text-sm text-neutral-500'>Até 10 dias úteis após a confirmaçao do pagamento</h6>
              <div className='flex justify-between w-[75px] h-[27.5px] rounded-full border border-zinc-400 mt-8'>
                <div className='border-r border-zinc-400 w-full flex justify-center items-center cursor-pointer p-1'>+</div>
                <div className='w-full flex justify-center items-center p-1'>{quantity}</div>
                <div className='border-l border-zinc-400 w-full flex justify-center items-center cursor-pointer p-1'>-</div>
              </div>
            </div>
          </div>
          <div>
            <h2 className='text-lg font-bold mt-20'>Opções de Entrega</h2>
            <p className='mt-4 mb-4 text-sm'>Receber {quantity} item em <span className='text-blue-600 text-sm'>13450-041</span> <span className='ml-6 text-sm underline-offset-2 underline cursor-pointer'>Trocar CEP</span></p>
            <div className='w-full p-6 bg-[#f5f7fe] rounded-xl flex justify-between'>
              <div className='w-full'>
                <h3 className='text-blue-600 font-bold'>Normal</h3>
                <h5 className='text-sm'>Em até 10 dias úteis - Após a aprovação do pagamento</h5>
              </div>
              <div className='w-[200px] flex items-center'>
                <select name="option" id="option" className='text-center w-full bg-transparent p-4 rounded-full outline-none cursor-pointer'>
                  <option value="Normal">Normal - Grátis</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[375px]'>
          <div className='p-6 w-full bg-[#f7f7f7] rounded-3xl'>
            <div className='w-full flex items-center gap-6'>
              <input type="text" name="cupom-desconto" id="cupom-desconto" className='outline-none bg-transparent border-b border-neutral-400 p-1 text-neutral-500' placeholder='Cupom de Desconto' />
              <div className='w-full flex justify-center p-1 cursor-pointer border border-[#262f40] rounded-full'>Aplicar</div>
            </div>
            <p className='text-xs mt-2 text-neutral-400'>Digite o seu cupom de desconto</p>
            <div className='mt-10 pt-6 pb-6 border-t border-b border-neutral-300'>
              <div className='flex justify-center'>
                <h2 className='w-full text-neutral-500'>Subtotal</h2>
                <h3 className='w-full text-right'>R$ {data.preco},00</h3>
              </div>
              <div className='flex justify-center'>
                <h2 className='w-full text-neutral-500'>Frete</h2>
                <h3 className='w-full text-right'>Grátis</h3>
              </div>
            </div>
            <div className='flex justify-center mt-6'>
              <h1 className='text-2xl font-bold'>Total</h1>
              <h1 className='w-full text-right text-2xl font-bold'>R$ {data.preco},00</h1>
            </div>
            <h5 className='text-sm text-neutral-500 mt-2'>Ou parcelado em até 12x de R$ {(data.preco / 12).toFixed(2)}</h5>
            <div className='mt-12 w-full rounded-full p-2 text-center text-white bg-blue-500 font-bold cursor-pointer transition-all duration-300 hover:bg-blue-600' onClick={() => addToCart()}>
              Adicionar ao Carrinho
            </div>
          </div>
          <p className='text-sm text-neutral-500 mt-6 text-justify'>
            Faça seu login ou cadastre uma conta e ganhe ao realizar a sua compra. Junte pontos e troque por cupons de desconto em compras futuras em nossa Loja Online.
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="loader"></div>
  )
}

export default page