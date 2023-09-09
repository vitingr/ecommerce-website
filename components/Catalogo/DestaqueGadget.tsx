import { destaquesGadgets } from '@types'
import React from 'react'

const DestaqueGadget = ({ foto, title }: destaquesGadgets) => {
  return (
    <div className='max-w-[120px] flex flex-col items-center justify-center'>
      <div className='h-[100px]'>
        <img src={foto} alt="imagem gadget" />
      </div>
      <div className='mt-4 h-[100px]'>
        <h3 className='text-center'>{title}</h3>
      </div>
    </div>
  )
}

export default DestaqueGadget