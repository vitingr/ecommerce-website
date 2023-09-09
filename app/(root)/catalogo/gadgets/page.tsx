import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import DestaqueGadget from '@components/Catalogo/DestaqueGadget'
import { DestaqueSm } from '@components'

const page = () => {

  const handleClick = async () => {

  }

  return (
    <div className='w-full flex flex-col justify-center items-center p-[2%]'>

      <section>
        <h1 className='mt-12 text-center text-4xl font-bold'>Vamos encontrar alguns Acessórios</h1>
        <div className='mt-8 bg-[#f7f7f7] rounded-full flex justify-between gap-8 pl-8 pr-4 pt-3 pb-3 items-center'>
          <input type="text" name='search-gadget' id="search-gadget" placeholder='Pesquisar Acessórios' className='bg-transparent outline-none' />
          <IoSearchSharp size={20} />
        </div>
      </section>

      <section className='max-w-[1200px] flex gap-8 mt-24 medium:flex-wrap medium:justify-center'>

        <DestaqueGadget foto={"https://images.samsung.com/is/image/samsung/assets/br/accessories/category/CrossGBM_Accessories_Category_Phonecases_PC1.png?$100_100_PNG$"} title={"Capas para Smartphones"} />
        <DestaqueGadget foto={"https://images.samsung.com/is/image/samsung/assets/br/accessories/category/CrossGBM_Accessories_Category_Power-Charger_PC2.png?$100_100_PNG$"} title={"Adaptador e Carregadores"} />
        <DestaqueGadget foto={"https://images.samsung.com/is/image/samsung/assets/br/accessories/category/CrossGBM_Accessories_Category_Watchstrap_PC3.png?$100_100_PNG$"} title={"Pulseiras para Smartwatches"} />
        <DestaqueGadget foto={"https://images.samsung.com/is/image/samsung/assets/br/accessories/category/CrossGBM_Accessories_Category_Thefreestyle_PC4.png?$100_100_PNG$"} title={"Caixinhas de Som"} />
        <DestaqueGadget foto={"https://images.samsung.com/is/image/samsung/assets/br/accessories/category/CrossGBM_Accessories_Category_Tab_PC5.png?$100_100_PNG$"} title={"Capas para Tablets"} />
        <DestaqueGadget foto={"https://images.samsung.com/is/image/samsung/assets/br/accessories/category/CrossGBM_Accessories_Category_Spens_PC9.png?$100_100_PNG$"} title={"S-Pens"} />
        <DestaqueGadget foto={"https://images.samsung.com/is/image/samsung/assets/br/accessories/Desdobramento_100x100.png?$100_100_PNG$"} title={"Acessórios de TV"} />
        <DestaqueGadget foto={"https://images.samsung.com/is/image/samsung/assets/br/accessories/CrossGBM_Accessories_Category_JBL_PC.png?$100_100_PNG$"} title={"JBL"} />

      </section>

      <section>
        <section className='mt-20'>
          <h1 className="text-center text-4xl font-bold">Novidades</h1>
          <p className='italic text-center'>Experimente os nossos novos acessórios</p>
          <div className="flex justify-center mt-8 gap-4 w-full">

            <div className="max-w-[675px] w-full flex flex-wrap justify-center gap-2 destaques-right">
              <div className="flex gap-4 w-full destaque-sub-container">
                <DestaqueSm handleClick={handleClick} title={"Bateria Carregadora Portátil"} subtitle={"Carregamento de Qualidade"} foto={"https://images.samsung.com/is/image/samsung/p6pim/br/eb-p3400xupgbr/gallery/br-10ah-battery-pack-eb-p3400-eb-p3400xupgbr-thumb-536650471?$172_172_PNG$"} />
                <DestaqueSm handleClick={handleClick} title={"Carregador Portátil"} subtitle={"Carregamento super rápido"} foto={"https://images.samsung.com/is/image/samsung/assets/br/accessories/c1.jpeg?$448_684_JPG$"} />
              </div>
              <div className="flex gap-4 w-full destaque-sub-container">
                <DestaqueSm handleClick={handleClick} title={"Carregador de Parede 45W"} subtitle={"Carregue o seu dispositivo mais rapidamente"} foto={"https://cdn.iset.io/assets/40555/produtos/10511/5e013ac3391c54fead4094b66a55845b62b66354d9e3f.png"} />
                <DestaqueSm handleClick={handleClick} title={"Pulseira Híbrida Couro Ecológico"} subtitle={"Design elegante e ecológico"} foto={"https://images.samsung.com/is/image/samsung/assets/br/accessories/featured/newin/FeaturedAccessories_no2_ET-SHR93S_PC_20230613.png?$330_330_PNG$"} />
              </div>
            </div>

            <div className="w-full h-[575px] max-w-[600px] flex flex-col justify-center items-center p-10 bg-[#f4f4f4] rounded-2xl big-container-destaque">
              <img src="https://techfouryou.com.br/wp-content/uploads/2021/04/pelicula.png" alt="Main Foto" className="max-w-[250px] photo-transform" />
              <h2 className="mt-16 font-bold text-3xl">Película Protetora Frontal</h2>
              <p className="mt-4 text-zinc-700">Adicione uma camada a mais de segurança</p>
            </div>
          </div>
        </section>

      </section>

      <section className="bg-section-tv w-full max-w-[1200px] h-[450px] mt-20 rounded-lg flex flex-col justify-center" style={{ backgroundImage: `url(${"https://images.samsung.com/is/image/samsung/assets/br/accessories/CategoryLandingPage-Banner_Desktop_1440x320.png?$1440_320_PNG$"})` }}>
        <div className='pl-[10%]'>
          <h1 className='drop-shadow-2xl text-white text-5xl font-bold'>Inspire cada momento com o som <br /> premiado da JBL</h1>
          <div className='bg-white text-center text-black rounded-full pt-2 pb-2 mt-10 w-[200px] cursor-pointer font-bold'>
            Saiba mais
          </div>
        </div>
      </section>

    </div>
  )
}

export default page


