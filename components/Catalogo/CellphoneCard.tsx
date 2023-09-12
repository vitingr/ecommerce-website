import Link from 'next/link'
import React from 'react'
import { IoCheckmark, IoCard, IoCarOutline } from 'react-icons/io5'

const CellphoneCard = ({ content }: { content: any }) => {
  return (
    <div className='flex flex-col gap-4 bg-white p-10 rounded-2xl'>
      <div className='flex justify-center w-full h-[175px]'>
        <img src={content.foto} className='w-[150px] h-[150px]' alt="photo image" />
      </div>
      <div>
        <h1 className='font-bold text-lg'>{content.nome}</h1>
        <p className='mt-4 text-sm'><span className='text-sm font-bold'>Cor:</span> Preto</p>
        <div className='mt-2 flex gap-5'>
          {content.cor.includes("Inbox / Prata") ? (
            <div className='w-4 h-4 rounded-full bg-emerald-500 border border-zinc-500 cursor-pointer' />
          ) : (
            <></>
          )}
          {content.cor.includes("Inbox / Prata") ? (<div className='w-4 h-4 rounded-full bg-slate-400 border border-zinc-500 cursor-pointer' />) : (<></>)}
          {content.cor.includes("Branco") ? (<div className='w-4 h-4 rounded-full bg-white border border-zinc-500 cursor-pointer' />) : (<></>)}
          {content.cor.includes("Preto") ? (<div className='w-4 h-4 rounded-full bg-[#262f40] border border-zinc-500 cursor-pointer' />) : (<></>)}
          {content.cor.includes("Cinza Acetinado") ? (<div className='w-4 h-4 rounded-full bg-gray-500 border border-zinc-500 cursor-pointer' />) : (<></>)}
          {content.cor.includes("Dourado") ? (<div className='w-4 h-4 rounded-full bg-amber-500 border border-zinc-500 cursor-pointer' />) : (<></>)}
          {content.cor.includes("Verde") ? (<div className='w-4 h-4 rounded-full bg-emerald-500 border border-zinc-500 cursor-pointer' />) : (<></>)}
          {content.cor.includes("Azul Marinho") ? (<div className='w-4 h-4 rounded-full bg-blue-950 border border-zinc-500 cursor-pointer' />) : (<></>)}
          {content.cor.includes("Rosa") ? (<div className='w-4 h-4 rounded-full bg-fuchsia-400 border border-zinc-500 cursor-pointer' />) : (<></>)}
        </div>

        <h3 className='mt-8 text-xl font-bold'>R${content.preco},00 <span className='text-sm font-normal'>à vista</span></h3>
        <h5 className='text-sm font-normal'>R${content.preco},00 em 12x R${(content.preco / 12).toFixed(2)} sem juros</h5>

        <ul className='mt-4 ml-5 list-disc'>
          <li className='catalogo-item-list'>O maior avanço em tecnologia de video</li>
          <li className='catalogo-item-list'>O primeiro processador de 4nm</li>
          <li className='catalogo-item-list'>A bateria que dura mais de 24 horas, mesmo em 5G</li>
        </ul>

        <div className='flex flex-col gap-[5px] mt-4 p-2 rounded-lg border border-zinc-200'>
          <div className='flex items-center gap-2'>
            <IoCarOutline />
            <p className='text-xs text-zinc-600'>Frete Grátis</p>
          </div>
          <div className='flex items-center gap-2'>
            <IoCheckmark />
            <p className='text-xs text-zinc-600'>Em Estoque</p>
          </div>
          <div className='flex items-center gap-2'>
            <IoCard />
            <p className='text-xs text-zinc-600'>Em até 24x sem juros com Cartão</p>
          </div>
        </div>

        <Link href={`/buy/${content.subcategoria}-${content.id}`}>
          <div className='mt-10 mb-3 w-full text-center p-2 text-[12px] bg-zinc-800 text-white rounded-full cursor-pointer hover:bg-zinc-700 transition-all duration-200'>Comprar Agora</div>
        </Link>
        <div className='w-full p-1 text-center border text-[13px] border-zinc-800 rounded-full cursor-pointer'>Saiba Mais</div>
      </div>
    </div>
  )
}

export default CellphoneCard