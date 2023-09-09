import React from 'react'

interface itemProps {
  option: string;
  name: string;
  type: string;
  options: any
}

type Props = {
  item: itemProps;
  type?: string;
  title?: string;
  isTextArea?: boolean;
  setState: (value: string) => void;
  checkItem: (value: string) => void;
}

const FormField = ({ item, type, title, setState, checkItem }: Props) => {
  return (
    <>
      {item.type === "select" ? (
        <div key={item.name}>
          <h1 className='text-sm font-bold'>
            {item.name} <span className='text-indigo-700'>*</span>
          </h1>
          <select name="select-content" id="select-content" className='w-full border-b border-neutral-200 p-[8.5px] mb-4 text-sm cursor-pointer bg-[#f5f6ff] rounded-lg' onChange={(e) => setState(e.target.value)} required>
            <option value=""></option>
            {item.options.map((option: any) => (
              <option key={option.title} value={option.title}>{option.title}</option>
            ))}
          </select>
        </div>
      ) : (
        <></>
      )}
      {item.type === "text" || item.type === "number" ? (
        <div className='w-full pt-2 pb-4' key={item.name}>
          <h1 className='text-sm font-bold'>{item.name} <span className='text-indigo-700'>*</span></h1>
          <input type={item.type} onChange={(e) => setState(e.target.value)} className='w-full text-[12px] p-[8.5px] text-zinc-600 outline-none border-b border-zinc-200 transition-all duration-200 focus:border-b-indigo-400 bg-[#f5f6ff] rounded-lg' placeholder={`Informe o ${item.name}`} required />
        </div>
      ) : (
        <></>
      )}
      {item.type === "checkbox" ? (
        <div className='flex flex-col gap-1 mb-6' key={item.name}>
          <h1 className='text-sm font-bold'>
            {item.name} <span className='text-indigo-700'>*</span>
          </h1>
          {item.options.map((option: any) => (
            <div key={option.title} className='flex items-center gap-4'>
              <input type="checkbox" className='cursor-pointer' name={option.title} id={option.title} onClick={(e) => checkItem(option.title)} />
              <p className='text-sm w-full'>{option.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default FormField