import Link from 'next/link'
import React from 'react'

interface pageCardItem {
  title: string;
  photo: string;
  link: string;
}

const PageCardItem = ({ title, photo, link }: pageCardItem) => {
  return (
    <Link href={link}>
      <div className='flex flex-col justify-center items-center cursor-pointer'>
        <img src={photo} className='transition-all duration-300 hover:scale-105' alt="Geladeiras" />
        <h5 className='mt-4'>{title}</h5>
      </div>
    </Link>
  )
}

const page = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='bg-section-tv w-full max-w-[1200px] h-[400px] p-14' style={{ backgroundImage: `url("https://images.samsung.com/is/image/samsung/assets/br/home-appliances/SMG_ImagensSSG.com_Manipulacao_V8_20230411.jpg?imwidth=768")` }}>
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
        <PageCardItem title={"Geladeiras"} photo={"https://images.samsung.com/is/image/samsung/assets/br/home-appliances/REF1.png?$140_140_PNG$"} link={"/catalogo/refrigerator"} />
        <PageCardItem title={"Máquinas de Lavar"} photo={"https://images.samsung.com/is/image/samsung/assets/br/home-appliances/WM1.png?$140_140_PNG$"} link={"/catalogo/washmachine"} />
        <PageCardItem title={"Aspiradores"} photo={"https://images.samsung.com/is/image/samsung/assets/br/home-appliances/Thumbnail-JetBot.png?$140_140_PNG$"} link={"/catalogo/vacuum"} />
        <PageCardItem title={"Ar Condicionado"} photo={"https://images.samsung.com/is/image/samsung/assets/br/home-appliances/AC1.png?$140_140_PNG$"} link={"/catalogo/air-conditioner"} />
        <PageCardItem title={"Lava Louças"} photo={"https://images.samsung.com/is/image/samsung/assets/br/home-appliances/lava.png?$140_140_PNG$"} link={"/catalogo/dishwasher"} />
      </section>
    </div>
  )
}

export default page