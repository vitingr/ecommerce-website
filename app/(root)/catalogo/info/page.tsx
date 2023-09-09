import Link from 'next/link'
import React from 'react'
import InfoDestaque from '@components/Catalogo/DestaquesInfo'

const page = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center p-[2%]'>
      <div className='bg-section-tv w-full max-w-[1200px] h-[400px] p-14' style={{ backgroundImage: `url("https://cdn.mos.cms.futurecdn.net/3tesKyx2Yd6MWa39bPDpkZ.jpg")` }}>
        <h2 className='text-white text-4xl font-bold'>Tecnologia e Design <br /> para sua casa</h2>
      </div>

      <section className='w-full mt-28'>
        <h1 className='text-center text-5xl font-bold'>Encontre o seu Monitor Ideal</h1>
        <h5 className='text-center italic'>Explore a enorme coleção dos monitores mais inovadores</h5>

        <div className='mt-14 flex justify-center items-center flex-wrap gap-8'>
          <InfoDestaque title={"SMART Monitor"} description={"Do home ao office. O monitor para todos os momentos da sua vida"} photo={"https://images.samsung.com/is/image/samsung/assets/br/monitors/LC24T550FDRXXU_570x304_v2.png?$FB_TYPE_J_S_PNG$"} link={"#"} />
          <InfoDestaque title={"Odyssey"} description={"Aumente a sua experiência com jogos"} photo={"https://images.samsung.com/is/image/samsung/assets/br/monitors/LS55BG970NUXXU_570x304_v2.png?$FB_TYPE_J_S_PNG$"} link={"#"} />
          <InfoDestaque title={"Alta Resolução"} description={"Experiencie a inacreditável qualidade de imagem"} photo={"https://images.samsung.com/is/image/samsung/assets/br/monitors/LU32J590UQRXXU_570x304_v2.png?$FB_TYPE_J_S_PNG$"} link={"#"} />
          <InfoDestaque title={"Convencional"} description={"Aprência minimalista, porém com as mais novas funcionalidades"} photo={"https://images.samsung.com/is/image/samsung/assets/br/monitors/LC24T550FDRXXU_570x304_v2.png?$FB_TYPE_J_S_PNG$"} link={"#"} />
        </div>

        <h1 className="mt-[100px] pb-[75px] border-b border-zinc-100 w-full text-center font-[500] text-5xl">Fornecendo <span className="font-[500] text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#6C47FF] to-[#5BC5EF]">Estilo e Design</span> para mais de<span  className="font-[500] text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#6C47FF] to-[#5BC5EF]"> 10,000+</span> pessoas</h1>

        <Link href="/catalogo/monitor">
          <div className='mt-10 text-zinc-500 w-full flex justify-center text-lg transition-all duration-200 hover:text-[#262f40]'>
            Ver mais...
          </div>
        </Link>

      </section>

    </div>
  )
}

export default page