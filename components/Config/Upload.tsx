import React, { ChangeEvent } from 'react'

type Props = {
  setState: (value: string) => void;
  form: any
}

const Upload = ({ setState, form }: Props) => {

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const file = e.target.files?.[0]

    if (!file) return

    if (!file.type.includes("image")) {
      alert("Só é possível enviar imagens")
      return
    }

    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = () => {
      const result = reader.result as string
      setState(result)
    }
  }

  return (
    <div className='w-full h-[400px] border border-zinc-400 border-dashed flex flex-col justify-center items-center'>
      {!form.photo ? (
        <label htmlFor="image">
          Envie uma Imagem do produto
        </label>
      ) : (
        <img className='max-w-[500px] max-h-[400px]' src={form.photo} alt="Image" />
      )}
      <input type="file" name="image" id="image" accept='image/*' onChange={(e) => handleChangeImage(e)} className='absolute z-30 w-[500px] opacity-0 h-[400px] cursor-pointer' required />
    </div>
  )
}

export default Upload