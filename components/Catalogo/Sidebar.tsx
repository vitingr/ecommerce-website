"use client"

import { FormState, sidebar } from '@types'
import React, { useState } from 'react'
import { options } from '@constants/filters'

const Sidebar = ({ type, setParams, fetchData }: sidebar) => {

  const search: { key?: string } = {
    key: String(type)
  }

  const [query, setQuery] = useState<any>(search != undefined ? options[search.key as keyof typeof options] : "")

  const filter = async (fieldName: keyof FormState | string, value: string) => {

    await setParams((prevForm: any) => ({ ...prevForm, [fieldName]: value }));

    await fetchData(type)

  }

  return (
    <div className='max-w-[350px] w-full'>
      <div className='bg-white p-6 w-full rounded-2xl'>
        {query.map((option: any) => (
          <div className='sidebar-option' key={option.title}>
            <h4 className='font-semibold text-sm'>{option.title}</h4>
            <div className='flex flex-col mt-4'>
              {option.options.map((item: any) => (
                <div className='flex items-center gap-2 p-2 hover:bg-gray-100' key={item.title}>
                  <input type="radio" name={`${option.title}`} onClick={(e) => filter(option.identifier, item.title)} id={`${option.title}`} className='h-4 w-4 cursor-pointer hover:scale-105 transition-all duration-200' />
                  <p className='w-full text-xs sidebar-item'>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar