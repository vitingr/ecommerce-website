import Link from 'next/link';
import React from 'react'

interface itemSidebar {
  photo: string;
  title: string;
  price: number;
  link: string;
}

const ItemSidebar = ({ photo, title, price, link }: itemSidebar) => {
  return (
    <div className='flex gap-6 pb-16 pt-16 border-b border-zinc-200'>
      <div><img src={photo} className='max-w-[100px]' /></div>
      <div>
        <div className='h-[75px]'>
          <h2 className='font-bold'>{title}</h2>
          <p className='text-sm'>R$ {price},00 à vista ou 12x vezes de {(price / 12).toFixed(2)} sem juros</p>
        </div>
        <Link href={link}>
          <div className='w-full bg-[#262f40] hover:bg-[#1d2430] transition-all duration-200 text-white rounded-full p-1 text-sm text-center cursor-pointer'>Veja mais</div>
        </Link>
      </div>
    </div>
  )
}

const ProductSidebar = () => {
  return (
    <div className='w-[400px] bg-white rounded-lg p-6'>
      <h2 className='font-bold text-xl'>Alguns produtos podem te interessar</h2>
      <div className='w-full flex flex-col justify-center'>
        <ItemSidebar photo={"https://images.samsung.com/is/image/samsung/p6pim/br/rs60cb760a7naz/gallery/br-counter-depth-side-by-side-auto-open-door-462251-rs60cb760a7naz-thumb-537587531?$252_252_PNG$"} title={"Geladeira Bespoke French Door"} price={12999.00} link={"#"} />
        <ItemSidebar photo={"https://images.samsung.com/is/image/samsung/p6pim/br/rs60cb70na7gaz/gallery/br-counter-depth-side-by-side-auto-open-door-rs60cb70na7gaz-thumb-537129386?$252_252_PNG$"} title={"Geladeira Bespoke French Door"} price={12999.00} link={"#"} />
        <ItemSidebar photo={"https://images.samsung.com/is/image/samsung/p6pim/br/rf24bb66008aaz/gallery/br-counter-depth-3-door-french-door-beverage-center-rf24bb66008aaz-thumb-537293825?$252_252_PNG$"} title={"Geladeira Bespoke French Door"} price={12999.00} link={"#"} />
        <ItemSidebar photo={"https://images.samsung.com/is/image/samsung/p6pim/br/rf23bb89006mbz/gallery/br-counter-depth-4-door-french-door-family-hub-rf23bb89006mbz-thumb-537293816?$252_252_PNG$"} title={"Geladeira Bespoke French Door"} price={12999.00} link={"#"} />
      </div>
    </div>
  )
}

export default ProductSidebar