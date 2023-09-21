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
  const [validation, setValidation] = useState(true)

  const [params,  setParams] = useState<FormState | any>({
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

  const fetchData = async (type: string) => {
    
    const searchProduct = await fetch(`/api/products/data/${type}`)
    const responseProduct = await searchProduct.json()
    setData(responseProduct)

    const items: any = []

    responseProduct.map((item: any) => {

      setValidation(true)

      for (const key in item) {

        if (typeof item[key] === 'string' && typeof params[key] === 'string' && item[key].includes(params[key])) {
          // console.log(`true ${key} = ${item[key]} / ${params[key]}`)
        } else {
          if (typeof item[key] === 'number' && typeof params[key] === 'number' || key === "id" || key === "categoria" || key === "subcategoria" || key === "nome" || key === "descricao" || key === "preco" || key === "desconto" || key === "foto") {
            // console.log(`true ${key}`)
          } else {
            // console.log(`false ${key}`)
            setValidation(false)
          }
        }

      }

      if (validation !== false) {
        items.push(item)
      }
      // console.log(`${key} ${item[key]}`)
    })
    setData(items)

    // const filteredItens = filter()
    // setData(filteredItens)
  }


  return query ? (
    <main className='flex flex-col justify-center items-center w-full min-h-[72vh] bg-[#f7f7f7] p-[2%]'>
      <div className='max-w-[1350px] w-full flex flex-col p-16 mb-[3%] h-[325px] rounded-md bg-section-tv' style={{backgroundImage: `url(https://images.samsung.com/is/image/samsung/assets/br/refrigerators/all-refrigerators/2REFPFDESK.jpeg?$LazyLoad_Home_JPG$)`}}>
        <h1 className='text-3xl font-bold text-white'>Só a nossa loja possui 2 anos de Garantia</h1>
        <p className='mt-2 text-sm text-white'>Troque os eletrodomésticos antigos de sua casa</p>
      </div>
      {query ? (
        <div className='w-full max-w-[1350px] flex justify-center gap-14'>
          <Sidebar type={query} setParams={setParams} fetchData={fetchData}/>
          <Catalogo type={query} params={params} data={data} setData={setData} fetchData={fetchData} />
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