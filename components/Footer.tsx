import React from 'react'
import { footerLinks } from '@constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='mt-20'>
      <div className='border-zinc-100 border-t-2 h-[400px] flex w-full p-16 xs:flex-wrap'>
        <div className='w-full xs:mb-12 xs:flex xs:flex-col xs:items-center xs:justify-center'>
        <h1 className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">
            Tico Toys
          </h1>
          <p className='text-gray-700'>Mundo dos Bebes eCommerce 2023</p>
          <p className='text-gray-700'>Todos direitos reservados ©</p>
        </div>
        <div className='w-full flex gap-6 xs:flex-wrap'>
          {footerLinks.map((link) => (
            <div key={link.title} className='w-full flex flex-col gap-6 text-base min-w-[170px] xs:justify-center xs:items-center'>
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} className="text-gray-500">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer