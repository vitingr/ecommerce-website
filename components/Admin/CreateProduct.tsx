"use client"

import React, { useEffect, useState } from 'react'
import { createAcessorio, createArCondicionado, createAspirador, createCellphone, createGeladeira, createLavaLoucas, createMaquinaLavar, createMonitor, createNotebook, createSmartWatch, createTV, createTeclado, } from '@constants/admin'
import UploadPhoto from '@components/UploadButton'
import { toast } from 'react-toastify'
import Upload from '@components/Upload'

// Imports Components
import ToastMessage from '@components/ToastMessage'
import { FormState } from '@types'
import FormField from '@components/FormField'

const CreateProduct = ({ type }: { type: string }) => {

  const [form, setForm] = useState<FormState>({
    nome: "",
    descricao: "",
    preco: 0,
    desconto: 0,
    cor: "",
    modelo: "",
    capacidade: 0,
    voltagem: "",
    numeroPortas: "",
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
    layout: ""
  })
  const [photo, setPhoto] = useState("")

  const createProduct = async () => {

    let photoCloudinary

    try {
      const imageUpload = await fetch(`/api/upload`, {
        method: "POST",
        body: JSON.stringify({
          path: form.photo
        })
      })
      
      if (imageUpload.ok) {
        photoCloudinary = await imageUpload.json()
        try {
          const response = await fetch(`/api/products/${type}/new`, {
            method: "POST",
            body: JSON.stringify({
              form: form,
              image: photoCloudinary.url
            })
          })
          if (response.ok) {
            toast.success("Produto Criado com Sucesso!")
          } else {
            toast.error("ERRO! Não foi possível criar o produto")
          }
        } catch (error) {
          throw error
        } 
      }
    } catch (error) {
      throw error
    }
  }

  const [query, setQuery] = useState(createGeladeira)

  const handleCheckChange = async (fieldName: keyof FormState | string, value: string) => {
    let actualColors = form.cor

    if (actualColors.includes(value)) {

      let colorsSepareted = actualColors.split(" ")
      const indice = colorsSepareted.indexOf(value)

      colorsSepareted.splice(indice, 1)
      actualColors = colorsSepareted.join(" ")

      setForm((prevForm) => ({ ...prevForm, [fieldName]: actualColors }));

    } else {
      actualColors += `${value} `
      setForm((prevForm) => ({ ...prevForm, [fieldName]: actualColors }));
    }
  };

  const handleStateChange = async (fieldName: keyof FormState | string, value: string | number) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  };

  useEffect(() => {
    if (type === "refrigerator") {
      setQuery(createGeladeira)
    }
    if (type === "air-conditioner") {
      setQuery(createArCondicionado)
    }
    if (type === "dishwasher") {
      setQuery(createLavaLoucas)
    }
    if (type === "washmachine") {
      setQuery(createMaquinaLavar)
    }
    if (type === "vacuum") {
      setQuery(createAspirador)
    }
    if (type === "cellphone") {
      setQuery(createCellphone)
    }
    if (type === "notebook") {
      setQuery(createNotebook)
    }
    if (type === "smart-watch") {
      setQuery(createSmartWatch)
    }
    if (type === "monitor") {
      setQuery(createMonitor)
    }
    if (type === "television") {
      setQuery(createTV)
    }
    if (type === "keyboard") {
      setQuery(createTeclado)
    }
    if (type === "gadget") {
      setQuery(createAcessorio)
    }
  }, [])

  return (
    <div className='max-w-[600px] p-14 w-full flex flex-col bg-white rounded-2xl'>
      <ToastMessage />
      <h1 className='text-4xl font-extrabold'>Cadastrar Produto</h1>
      <h6 className='italic mb-8'>Adicione um item ao seu catálogo de produtos</h6>
      <form onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault()
        createProduct()
      }}>
        {query.map((item) => (
          <FormField item={item} setState={(value: any) => handleStateChange(item.option, value)} checkItem={(value: any) => handleCheckChange(item.option, value)} key={item.name} />
        ))}
        <Upload form={form} setState={(value: any) => handleStateChange("photo", value)} />
        <button type='submit' className='w-full p-3 text-sm transition-all duration-200 bg-indigo-700 hover:bg-indigo-600 text-white rounded-2xl mt-10'>Enviar</button>
      </form>
    </div>
  )
}

export default CreateProduct