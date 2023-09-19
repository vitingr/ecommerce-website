import { DestaqueSm } from '@components'
import Link from 'next/link'
import React from 'react'

const page = () => {

  const handleClick = async () => {

  }

  return (
    <div className='w-full flex flex-col justify-center items-center p-[2%]'>
      <div className='bg-section-tv w-full max-w-[1200px] h-[400px] p-14' style={{ backgroundImage: `url("https://www.premierkitchens.net.au/wp-content/uploads/kitchen-design-sydney-black-industrial-luxury-kitchen-renovation-pitt-gas-burners-elica-downdraft-vintec.jpg")` }}>
        <h2 className='text-white text-4xl font-bold'>Tecnologia e Design <br /> para sua casa</h2>
      </div>

      <h1 className="text-center mt-20 text-4xl font-bold">Eletrodomésticos</h1>
      <div className="flex justify-center mt-8 gap-8 nav-main">
        <h4 className="cursor-pointer text-lg">Geladeiras</h4>
        <h4 className="cursor-pointer text-lg">Máquinas de Lavar</h4>
        <h4 className="cursor-pointer text-lg">Aspiradores</h4>
        <h4 className="cursor-pointer text-lg">Ar Condicionado</h4>
        <h4 className="cursor-pointer text-lg">Lava Louças</h4>
      </div>

      <section className='mt-14 flex gap-28'>

        <Link href="/catalogo/refrigerator">
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <img src="https://images.samsung.com/is/image/samsung/assets/br/home-appliances/REF1.png?$140_140_PNG$" className='transition-all duration-300 hover:scale-105' alt="Geladeiras" />
            <h5 className='mt-4'>Geladeiras</h5>
          </div>
        </Link>
        <Link href="/catalogo/washmachine">
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <img src="https://images.samsung.com/is/image/samsung/assets/br/home-appliances/WM1.png?$140_140_PNG$" className='transition-all duration-300 hover:scale-105' alt="Maquinas de Lavar" />
            <h5 className='mt-4'>Máquinas de Lavar</h5>
          </div>
        </Link>
        <Link href="/catalogo/vacuum">
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <img src="https://images.samsung.com/is/image/samsung/assets/br/home-appliances/Thumbnail-JetBot.png?$140_140_PNG$" className='transition-all duration-300 hover:scale-105' alt="Aspiradores" />
            <h5 className='mt-4'>Aspiradores</h5>
          </div>
        </Link>
        <Link href="/catalogo/air-conditioner">
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <img src="https://images.samsung.com/is/image/samsung/assets/br/home-appliances/AC1.png?$140_140_PNG$" className='transition-all duration-300 hover:scale-105' alt="Ar Condicionado" />
            <h5 className='mt-4'>Ar Condicionado</h5>
          </div>
        </Link>
        <Link href="/catalogo/dishwasher">
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <img src="https://images.samsung.com/is/image/samsung/assets/br/home-appliances/lava.png?$140_140_PNG$" className='transition-all duration-300 hover:scale-105' alt="Lava Louças" />
            <h5 className='mt-4'>Lava Louças</h5>
          </div>
        </Link>
      </section>

      <h1 className="mt-[200px] pb-[100px] border-b border-zinc-100 w-full text-center font-[500] text-5xl cursor-default">Fornecendo <span className="font-[500] text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#6C47FF] to-[#5BC5EF] cursor-default">Estilo e Design</span> para mais de<span className="font-[500] text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#6C47FF] to-[#5BC5EF]"> 10,000+</span> pessoas</h1>

      <section className='mt-20'>
        <h1 className="text-center text-4xl font-bold">Mais Vendidos</h1>
        <div className="flex justify-center gap-8 nav-main">
          <p className='italic'>Aqui você garante tecnologia e Design para sua casa</p>
        </div>
        <div className="flex justify-center mt-8 gap-4 w-full">

          <div className="max-w-[675px] w-full flex flex-wrap justify-center gap-2 destaques-right">
            <div className="flex gap-4 w-full destaque-sub-container">
              <DestaqueSm handleClick={handleClick} title={"WD11T"} subtitle={"Ganhe até R$700 OFF com Vale mais"} foto={"https://images.samsung.com/is/image/samsung/assets/br/home-appliances/Thumbnail-WD11T.png?$160_160_PNG$"} />
              <DestaqueSm handleClick={handleClick} title={"RT44"} subtitle={"Ganhe até R$3.000 OFF com Vale mais"} foto={"https://images.samsung.com/is/image/samsung/assets/br/home-appliances/Thumbnail-RT44.png?$160_160_PNG$"} />
            </div>
            <div className="flex gap-4 w-full destaque-sub-container">
              <DestaqueSm handleClick={handleClick} title={"WindFree"} subtitle={"Ganhe até R$1.500 OFF com Vale mais"} foto={"https://images.samsung.com/is/image/samsung/assets/br/home-appliances/AC1b.png?$160_160_PNG$"} />
              <DestaqueSm handleClick={handleClick} title={"Jet Bot AI +"} subtitle={"Ganhe até R$5.400 OFF com Vale mais"} foto={"https://images.samsung.com/is/image/samsung/assets/br/home-appliances/Thumbnail-JetBot.png?$160_160_PNG$"} />
            </div>
          </div>

          <div className="w-full h-[575px] max-w-[600px] flex flex-col justify-center items-center p-10 bg-[#f4f4f4] rounded-2xl big-container-destaque">
            <img src="https://images.samsung.com/is/image/samsung/assets/br/home-appliances/04-SA365_SMG_IMG_20230109.png?$376_376_PNG$" alt="Main Foto" className="max-w-[250px] photo-transform" />
            <h2 className="mt-16 font-bold text-3xl">Veja mais opções</h2>
            <p className="mt-4 text-zinc-700">Parcelamento em até 12x sem juros</p>
          </div>
        </div>
      </section>

      <section className="bg-section-tv w-full max-w-[1200px] h-[650px] mt-20 rounded-lg flex flex-col justify-center" style={{ backgroundImage: `url(${"https://www.home-designing.com/wp-content/uploads/2016/10/Chrome-features-kitchen-all-black-panelling-concrete-floor.jpg"})` }}>
        <div className='pl-[10%]'>
          <h1 className='drop-shadow-2xl text-white text-7xl font-bold'>Sua Cozinha Moderna</h1>
          <p className='drop-shadow-md text-white text-2xl italic font-extralight'>Veja nossos refrigeradores</p>
          <Link href="/catalogo/refrigerator">
            <div className='bg-white text-center text-black rounded-full pt-2 pb-2 mt-4 w-[200px] cursor-pointer'>
              Ver Refrigeradores
            </div>
          </Link>
        </div>
      </section>


    </div>
  )
}

export default page