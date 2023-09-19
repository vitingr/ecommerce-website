"use client"

import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Upload from '@components/Config/Upload'
import { createOptions } from '@constants/filters'
import { useRouter } from 'next/navigation'

// Imports Components
import ToastMessage from '@components/Config/ToastMessage'
import { FormState } from '@types'
import FormField from '@components/FormField'

const CreateProduct = ({ type }: { type: string }) => {

  const [categoria, setCategoria] = useState("")
  const router = useRouter()

  const [form, setForm] = useState<FormState>({
    categoria: categoria,
    subcategoria: type,
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

  const checkCategoria = async () => {
    if (type === "dishwasher" || type === "refrigerator" || type === "washmachine" || type === "vacuum" || type === "air-conditioner") {
      setCategoria("home-appliences")
    }
    if (type === "cellphone" || type === "tablet") {
      setCategoria("cellphones")
    }
    if (type === "keyboard" || type === "monitor" || type === "television") {
      setCategoria("technologies")
    }
    if (type === "smart-watch") {
      setCategoria("gadget")
    }
  }

  useEffect(() => {
    if (type) {
      checkCategoria()
    }
  }, [type])

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
          const response = await fetch(`/api/products/new`, {
            method: "POST",
            body: JSON.stringify({
              form: form,
              image: photoCloudinary.url
            })
          })
          if (response.ok) {
            toast.success("Produto Criado com Sucesso!")
            router.push("/")
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

  const search: { key?: string } = {
    key: String(type)
  }

  const [query, setQuery] = useState<any>(search != undefined ? createOptions[search.key as keyof typeof createOptions] : "")

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

  return query ? (
    <div className='max-w-[600px] p-14 w-full flex flex-col bg-white rounded-2xl'>
      <ToastMessage />
      <h1 className='text-4xl font-extrabold'>Cadastrar Produto</h1>
      <h6 className='italic mb-8'>Adicione um item ao seu catálogo de produtos</h6>
      <form onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault()
        createProduct()
      }}>
        {query.map((item: any) => (
          <FormField item={item} setState={(value: any) => handleStateChange(item.option, value)} checkItem={(value: any) => handleCheckChange(item.option, value)} key={item.name} />
        ))}
        <Upload form={form} setState={(value: any) => handleStateChange("photo", value)} />
        <button type='submit' className='w-full p-3 text-sm transition-all duration-200 bg-indigo-700 hover:bg-indigo-600 text-white rounded-2xl mt-10'>Enviar</button>
      </form>
    </div>
  ) : (
    <div className="loader"></div>
  )
}
export default CreateProduct