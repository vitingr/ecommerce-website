import React from 'react'
import { UserButton } from "@clerk/nextjs";
import { IoSearchSharp, IoBagSharp, IoHeartSharp, IoSettingsSharp } from 'react-icons/io5'
import Link from 'next/link';

const Navbar = () => {

  //w-full flex items-center justify-center p-6 sticky top-0 bg-white xs:hidden
  return (
    <header className='w-full flex items-center justify-center p-6 sticky top-0 bg-white xs:hidden'>
      <nav className='flex items-center gap-[4em]'>
        <Link href="/">
          <h1 className="font-extrabold text-xl">
            Tico Toys
          </h1>
        </Link>
        <ul className='nav-list flex items-center'>
          <Link href="/catalogo/cellphones">
            <li>Celulares</li>
          </Link>
          <Link href="/catalogo/home-appliences">
            <li>Eletrodomésticos</li>
          </Link>
          <Link href="/catalogo/info">
            <li>Informática</li>
          </Link>
          <Link href="/catalogo/gadgets">
            <li>Acessórios</li>
          </Link>
          <Link href="#">
            <li>Smart Things</li>
          </Link>
        </ul>
        <div className='flex items-center gap-6'>
          <div className='flex gap-4 justify-center items-center bg-[#eceff1] rounded-sm p-2 max-h-8'>
            <input type="text" name="search" id="search" className='text-sm bg-transparent outline-none' />
            <IoSearchSharp size={20} className='cursor-pointer text-[#c9ccce]' />
          </div>
          <UserButton afterSignOutUrl="/" />
          <IoBagSharp size={20} className='cursor-pointer text-[#c9ccce] icon-nav' />
          <IoHeartSharp size={20} className='cursor-pointer text-[#c9ccce] icon-nav' />
          <Link href="/admin/createProduct">
            <IoSettingsSharp size={20} className='cursor-pointer text-[#c9ccce] icon-nav' />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar