"use client"

import React from 'react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Sidebar } from '@components'
import Catalogo from '@components/Catalogo/Catalogo'
import { FormState } from '@types'

const page = () => {

  const pathname = usePathname().split("/")
  const query = pathname[2]

  const [data, setData] = useState([])

  const [params,  setParams] = useState<FormState>({
    cor: "",
    modelo: "",
    capacidade: 0,
    voltagem: "",
    numPortas: "",
    display: "",  
    puxador: "",
    recursos: "",
    photo: "",
    classe: "",
    tecnologia: "",
    linha: "",
    linhaUltra: "",
    ciclo: "",
    tamanhoTela: "",
    conectividade: "",
    armazenamento: "",
    qualidadeCamera: 0,
    qtdCameras: "",
    faixaPreco: "",
    memoria: "",
    sistema: "",
    material: "",
    tamanho: "",
    resolucao: "",
    taxaAtualizacao: "",
    tempoResposta: "",
    proporcao: "",
    tipo: "",
    layout: "",
    quantidade: 1
  })

  return query ? (
    <main className='flex flex-col justify-center items-center w-full min-h-[72vh] bg-[#f7f7f7] p-[2%]'>
      <div className='max-w-[1350px] w-full flex flex-col p-16 mb-[3%] h-[325px] rounded-md bg-section-tv' style={{backgroundImage: `url(https://images.samsung.com/is/image/samsung/assets/br/refrigerators/all-refrigerators/2REFPFDESK.jpeg?$LazyLoad_Home_JPG$)`}}>
        <h1 className='text-3xl font-bold text-white'>Só a nossa loja possui 2 anos de Garantia</h1>
        <p className='mt-2 text-sm text-white'>Troque os eletrodomésticos antigos de sua casa</p>
      </div>
      {query ? (
        <div className='w-full max-w-[1350px] flex justify-center gap-14'>
          <Sidebar type={query} params={params} setParams={setParams} data={data} setData={setData}/>
          <Catalogo type={query} params={params} data={data} setData={setData} />
        </div>
      ) : (
        <></>
      )
      }
      <div>

      </div>
    </main >
  ) : (
    <div className="loader"></div>
  )
}

export default page