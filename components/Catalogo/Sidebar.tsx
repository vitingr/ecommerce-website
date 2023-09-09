"use client"

import { sidebar } from '@types'
import React, { useEffect, useState } from 'react'
import { arCondicionadoFilter, aspiradorFilter, cellphoneFilter, geladeiraFilter, lavaLoucasFilter, maquinaLavarFilter, monitorFilter, notebookFilter, smartWatchFilter, tecladoFilter, tvFilter } from '@constants'

const Sidebar = ({ type }: sidebar) => {

  const [query, setQuery] = useState(geladeiraFilter)

  useEffect(() => {
    if (type === "refrigerator") {
      setQuery(geladeiraFilter)
    } 
    if (type === "air-conditioner") {
      setQuery(arCondicionadoFilter)
    }
    if (type === "dishwasher") {
      setQuery(lavaLoucasFilter)
    }
    if (type === "washmachine") {
      setQuery(maquinaLavarFilter) 
    }
    if (type === "vacuum") {
      setQuery(aspiradorFilter)
    }
    if (type === "cellphone") {
      setQuery(cellphoneFilter)
    }
    if (type === "monitor") {
      setQuery(monitorFilter)
    }
    if (type === "keyboard") {
      setQuery(tecladoFilter)
    }
    if (type === "notebook") {
      setQuery(notebookFilter)
    }
    if (type === "smartWatchFilter") {
      setQuery(smartWatchFilter)
    }
    if (type === "tv") {
      setQuery(tvFilter)
    }
  }, [])

  return (
    <div className='max-w-[350px] w-full'>
      <div className='bg-white p-6 w-full rounded-2xl'>
        {query.map((option) => (
          <div className='sidebar-option' key={option.title}>
            <h4 className='font-semibold text-sm'>{option.title}</h4>
            <div className='flex flex-col mt-4'>
              {option.options.map((item) => (
                <div className='flex items-center gap-2 p-2 hover:bg-gray-100' key={item.title}>
                  <input type="radio" name={`${option.title}`} id={`${option.title}`} className='h-4 w-4 cursor-pointer hover:scale-105 transition-all duration-200' />
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