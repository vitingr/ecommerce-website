import Link from 'next/link'
import React from 'react'
import { IoCheckmark, IoCard } from 'react-icons/io5'


const CatalogoCard = ({ content }: { content: any }) => {

  const preco = content.preco;
  const precoFormatado = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const parcelamento = (content.preco / 12)
  const parcelamentoFormatado = parcelamento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className='flex gap-2 bg-white p-10 rounded-2xl h-[300px] overflow-hidden mb-4'>
      <Link href={`/buy/${content.subcategoria}-${content.id}`} className='w-full max-w-[200px]'>
        <div className='w-full flex items-center justify-center'>
          <img src={content.foto} alt="option photo" className='w-[275px]' />
        </div>
      </Link>
      <div className='w-full border-r border-gray-300'>
        <h1 className='font-bold text-[14px]'>{content.nome}</h1>
        {content.cor ? (
          <>
            <h4 className='mt-1 text-sm'>Cor: {content.cor}</h4>
            <div className='mt-2 flex gap-5'>
              {content.cor.includes("Branco") ? (
                <div className='w-4 h-4 rounded-full bg-white border border-zinc-500 cursor-pointer' />) : (<></>)}
              {content.cor.includes("Preto") ? (
                <div className='w-4 h-4 rounded-full bg-zinc-950 border border-zinc-500 cursor-pointer' />) : (<></>)}
              {content.cor.includes("Inbox / Prata") ? (
                <div className='w-4 h-4 rounded-full bg-gray-200 border border-zinc-500 cursor-pointer' />) : (<></>)}
              {content.cor.includes("Cinza Acetinado") ? (
                <div className='w-4 h-4 rounded-full bg-slate-500 border border-zinc-500 cursor-pointer' />) : (<></>)}
            </div>
          </>
        ) : (
          <></>
        )}
        <div className='mt-4 flex gap-6'>
          {content.voltagem ? (
            <div>
              {content.voltagem === "Bivolt" ? (
                <>
                  <span className='flex items-center pl-2 pr-2 border-2 text-center rounded-3xl text-xs'>127 V</span>
                  <span className='flex items-center pl-2 pr-2 border-2 text-center rounded-3xl text-xs'>220 V</span>
                </>
              ) : (
                <span className='flex items-center pl-2 pr-2 border-2 text-center rounded-3xl text-xs'>{content.voltagem}</span>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
        <ul className='mt-4 ml-5 list-disc'>
          <li className='catalogo-item-list'>Seu estilo Bespoke</li>
          <li className='catalogo-item-list'>Jarra com enchimento Automático</li>
          <li className='catalogo-item-list'>Dual Auto Ice Maker</li>
        </ul>
      </div>


      <div className='w-full pl-4'>
        <div className='h-[150px]'>
          <h1 className='text-xl font-bold'>{precoFormatado}</h1>
          <h3 className='text-xs'>{precoFormatado} em 12x de {parcelamentoFormatado} sem juros</h3>
          <div className='mt-4 flex items-center gap-2'>
            <IoCheckmark size={16} />
            <p className='text-[12px]'>Em estoque</p>
          </div>
          <div className='mt-2 flex items-center gap-2'>
            <IoCard size={16} />
            <p className='text-[12px]'>Pagamento em até 24x sem juros no Cartão</p>
          </div>
        </div>

        <div className='flex flex-col gap-4 h-[150px]'>
          <Link href={`/buy/${content.subcategoria}-${content.id}`}>
            <div className='w-full text-center p-2 text-[12px] bg-zinc-800 text-white rounded-full cursor-pointer hover:bg-zinc-700 transition-all duration-200'>Comprar Agora</div>
          </Link>
          <div className='w-full p-1 text-center border text-[13px] border-zinc-800 rounded-full cursor-pointer'>Saiba Mais</div>
        </div>
      </div>
    </div>
  )
}

export default CatalogoCard