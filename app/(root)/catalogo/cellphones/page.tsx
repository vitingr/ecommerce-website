import Link from 'next/link'
import React from 'react'
import DestaqueCellphone from '@components/Catalogo/DestaqueCellphone'

const page = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center p-[2%]'>
      <div className='bg-section-tv flex flex-col justify-center w-full max-w-[1200px] h-[400px] p-14' style={{ backgroundImage: `url("https://images.samsung.com/is/image/samsung/assets/br/2307/pfs/07-hd01-Tab-S9-Series-kv-pc-1440x640.jpg?imwidth=768")` }}>
        <h2 className='text-4xl font-bold'>Preço e Qualidade</h2>
        <p>Um novo padrão de celulares e tablets</p>
        <Link href={"/catalogo/cellphone"} className='w-[150px]'>
          <div className='mt-6 bg-[#262f40] text-white rounded-full p-[6px] w-[150px] text-center text-sm'>Comprar Agora</div>
        </Link>
      </div>

      <section className='mt-14 flex gap-8'>
        <DestaqueCellphone link={"/"} title={"Samsung Galaxy S22 +"} description={"Criado com qualidade em mente"} photo={"https://planoscelular.claro.com.br/medias/18175-1-um-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w0MzMwMHxpbWFnZS9wbmd8aGQwL2hhMy85MTkyMDUzOTY0ODMwLzE4MTc1XzFfdW1fMzAwV3gzMDBIX3Byb2R1Y3RDYXJkfDAyOWEzZjEzNGZiYWMxNGZmYTBkOTk3ZWM0ZWNlNWJkZWI4MDVlY2MxODgyODNiMTlhMjFhYWM2ZDZiN2Y3NTQ"} />
        <DestaqueCellphone link={"/"} title={"Samsung Galaxy S22 +"} description={"Criado com qualidade em mente"} photo={"https://planoscelular.claro.com.br/medias/18175-1-um-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w0MzMwMHxpbWFnZS9wbmd8aGQwL2hhMy85MTkyMDUzOTY0ODMwLzE4MTc1XzFfdW1fMzAwV3gzMDBIX3Byb2R1Y3RDYXJkfDAyOWEzZjEzNGZiYWMxNGZmYTBkOTk3ZWM0ZWNlNWJkZWI4MDVlY2MxODgyODNiMTlhMjFhYWM2ZDZiN2Y3NTQ"} />
        <DestaqueCellphone link={"/"} title={"Samsung Galaxy S22 +"} description={"Criado com qualidade em mente"} photo={"https://planoscelular.claro.com.br/medias/18175-1-um-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w0MzMwMHxpbWFnZS9wbmd8aGQwL2hhMy85MTkyMDUzOTY0ODMwLzE4MTc1XzFfdW1fMzAwV3gzMDBIX3Byb2R1Y3RDYXJkfDAyOWEzZjEzNGZiYWMxNGZmYTBkOTk3ZWM0ZWNlNWJkZWI4MDVlY2MxODgyODNiMTlhMjFhYWM2ZDZiN2Y3NTQ"} />
        <DestaqueCellphone link={"/"} title={"Samsung Galaxy S22 +"} description={"Criado com qualidade em mente"} photo={"https://planoscelular.claro.com.br/medias/18175-1-um-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w0MzMwMHxpbWFnZS9wbmd8aGQwL2hhMy85MTkyMDUzOTY0ODMwLzE4MTc1XzFfdW1fMzAwV3gzMDBIX3Byb2R1Y3RDYXJkfDAyOWEzZjEzNGZiYWMxNGZmYTBkOTk3ZWM0ZWNlNWJkZWI4MDVlY2MxODgyODNiMTlhMjFhYWM2ZDZiN2Y3NTQ"} />
      </section>

      <h1 className="mt-48 mb-20 w-full text-center font-[500] text-5xl cursor-default">Fornecendo <span className="font-[500] text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#6C47FF] to-[#5BC5EF]">Estilo e Design</span> para mais de<span className="font-[500] text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#6C47FF] to-[#5BC5EF]"> 10,000+</span> pessoas</h1>

      <section className='mt-32 w-full max-w-[1000px] flex flex-col justify-center items-center gap-36'>
        <div className='flex justify-between gap-24'>
          <div className='w-full'><img src="https://images.samsung.com/is/image/samsung/assets/br/2307/pfs/04-04-ft12-Q5-multitasking-mo-720x540.jpg?$FB_TYPE_J_F_MO_JPG$" alt="Image Photo" className='w-[500px] h-[300px] rounded-lg' /></div>
          <div className='max-w-[500px]'>
            <p className='text-justify text-xl tracking-wide'>Um celular moderno possui uma série de qualidades notáveis que o tornam uma peça essencial da nossa vida cotidiana. Sua portabilidade é uma das principais vantagens, permitindo que você esteja sempre conectado, onde quer que esteja. Além disso, a qualidade da câmera incorporada nos celulares modernos é incrível, possibilitando a captura de fotos e vídeos de alta resolução. A longa duração da bateria é outra qualidade valiosa, garantindo que você possa usar o celular por horas a fio sem se preocupar com a recarga constante.</p>
          </div>
        </div>

        <div className='flex justify-between gap-24'>
          <div className='max-w-[500px]'>
            <p className='text-justify text-xl tracking-wide'>A qualidade de um celular é evidenciada pela sua capacidade de multitarefa. Hoje em dia, os smartphones são verdadeiros assistentes pessoais, capazes de realizar uma ampla gama de tarefas. Eles não apenas fazem chamadas e enviam mensagens, mas também funcionam como reprodutores de música, câmeras de alta qualidade, navegadores web, e muito mais. Sua capacidade de conectividade, seja por meio de redes móveis ou Wi-Fi, garante que você esteja sempre online, mantendo-se atualizado com as últimas notícias e mídias sociais.</p>
          </div>
          <div className='w-full'><img src="https://fdn.gsmarena.com/imgroot/static/headers/makers/samsung-2023-1.jpg" alt="Image Photo" className='w-[500px] h-[250px] rounded-lg' /></div>
        </div>

        <div className='flex justify-between gap-24'>
          <div className='w-full'><img src="https://www.ask.com/wp-content/uploads/sites/3/2022/05/6c7ee8f8d4ca7efc854a0ed8d9325fd1.png" alt="Image Photo" className='w-[500px] rounded-lg' /></div>
          <div className='max-w-[500px]'>
            <p className='text-justify text-xl tracking-wide'>Outra qualidade fundamental de um celular é a sua capacidade de personalização. Os sistemas operacionais modernos permitem que os usuários personalizem seus dispositivos de acordo com suas preferências. Isso inclui a escolha de papéis de parede, aplicativos, widgets e até mesmo a organização da tela inicial. A segurança é uma característica vital, com recursos de autenticação biométrica, como impressões digitais e reconhecimento facial, protegendo seus dados e informações pessoais.</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default page