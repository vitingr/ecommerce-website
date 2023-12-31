"use client"

import { UserButton, currentUser } from "@clerk/nextjs";
import { DestaqueSm } from "@components";
import { IoSearchSharp } from 'react-icons/io5'
import { useEffect, useState } from 'react'
import Link from "next/link";
import ToastMessage from '@components/Config/ToastMessage'
import { useRouter } from "next/navigation";

export default function Home() {


  const [searchText, setSearchText] = useState<String>("")
  const [data, setData] = useState([])
  const router = useRouter()

  const [actualSearchItem, setActualSeachItem] = useState("https://www.home-designing.com/wp-content/uploads/2018/01/orange-cushions-grey-curtains-dark-living-room.jpg")
  const [actualLink, setActualLink] = useState("/catalogo/television")

  const changeItem = async (foto: string, link: string) => {
    setActualSeachItem(foto)
    setActualLink(link)
  }

  const handleClick = async () => {

  }

  const handleSearch = async () => {
    const query = searchText.replace(" ", "-")
    router.push(`/catalogo/search/${query}`)
  }

  const getUser = async () => {
    const response = await fetch("/api/user", {
      method: "POST",
    })
    if (response.ok) {
      return
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <main className="w-full p-[5%] flex flex-col justify-center items-center xs:p-[0%]">
      <ToastMessage />
      <section className="max-w-[1750px] w-full flex flex-col justify-center items-center">
        <div className="w-full h-[750px] rounded-xl main-img" />

        <h1 className="text-center mt-20 text-4xl font-bold">Destaques</h1>
        <div className="flex justify-center mt-8 gap-8 nav-main xs:gap-4">
          <h4 className="cursor-pointer underline underline-offset-4 text-lg xs:text-xs">Novidades</h4>
          <Link href={"/catalogo/cellphone"}><h4 className="cursor-pointer text-lg xs:text-xs">Mobile</h4></Link>
          <Link href={"/catalogo/television"}><h4 className="cursor-pointer text-lg xs:text-xs">TVs</h4></Link>
          <Link href="/catalogo/home-appliences"><h4 className="cursor-pointer text-lg xs:text-xs">Eletrodomésticos</h4></Link>
          <Link href={"/catalogo/notebook"}><h4 className="cursor-pointer text-lg xs:text-xs">Informática</h4></Link>
          <Link href={"/catalogo/gadgets"}><h4 className="cursor-pointer text-lg xs:text-xs">Acessórios</h4></Link>
        </div>

        <div className="flex justify-center mt-8 gap-4 w-full destaques-container xs:p-[3%]">
          <div className="w-full h-[575px] max-w-[600px] flex flex-col justify-center items-center p-10 bg-[#f4f4f4] rounded-2xl big-container-destaque">
            <img src="https://images.samsung.com/is/image/samsung/assets/br/2307/home/HOME_Q5_Merchandising_376x376_pc.png?$376_376_PNG$" alt="Main Foto" className="max-w-[250px] photo-transform" />
            <h2 className="mt-16 font-bold text-3xl">Galaxy Z Fold5</h2>
            <p className="mt-4 text-zinc-700">Ganhe até R$4.500 OFF com Troca Smart</p>
          </div>

          <div className="max-w-[675px] w-full flex flex-wrap justify-center gap-2">
            <div className="flex gap-4 w-full destaque-sub-container">
              <DestaqueSm handleClick={handleClick} title={"Galaxy Z Flip5"} subtitle={"Ganhe até R$700 OFF com Vale mais"} foto={"https://images.samsung.com/is/image/samsung/assets/br/PCD_B5_Whats-new_684X684_pc_alt.jpg?$684_684_JPG$"} />
              <DestaqueSm handleClick={handleClick} title={"Galaxy S23 | S23+"} subtitle={"Ganhe até R$3.000 OFF com Vale mais"} foto={"https://images.samsung.com/is/image/samsung/assets/br/2307/home/PCD_DM1_DM2_KV_What_s_new_160x160_pc.png?$160_160_PNG$"} />
            </div>
            <div className="flex gap-4 w-full destaque-sub-container">
              <DestaqueSm handleClick={handleClick} title={"Galaxy Tab S9"} subtitle={"Ganhe até R$1.500 OFF com Vale mais"} foto={"https://images.samsung.com/is/image/samsung/assets/br/bla8.png?$330_330_PNG$"} />
              <DestaqueSm handleClick={handleClick} title={"Galaxy S23 Ultra"} subtitle={"Ganhe até R$5.400 OFF com Vale mais"} foto={"https://images.samsung.com/is/image/samsung/assets/br/2307/home/PCD_DM3_KV_What_s_new_160x160_pc.png?$160_160_PNG$"} />
            </div>
          </div>
        </div>

        <Link href="/catalogo"><h4 className="big-link">Ver mais...</h4></Link>

        <h1 className="mt-24 mb-20 w-full text-center font-[500] text-5xl cursor-default">Fornecendo <span className="font-[500] text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#6C47FF] to-[#5BC5EF]">Estilo e Design</span> para mais de<span className="font-[500] text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#6C47FF] to-[#5BC5EF]"> 10,000+</span> pessoas</h1>

      </section>

      <section className="bg-section-tv w-full max-w-[1300px] h-[650px] mt-20 rounded-lg overflow-hidden xs:rounded-md" style={{ backgroundImage: `url(${actualSearchItem})` }}>
        <div className="text-center mt-12 text-3xl text-white font-bold">
          <h1 className="text-white">Eletrodomésticos</h1>
          <div className="flex justify-center mt-4 gap-10 nav-main-white overflow-hidden xs:gap-6">
            <h4 className="cursor-pointer text-lg xs:text-xs text-white" onClick={() => changeItem("https://www.home-designing.com/wp-content/uploads/2018/01/orange-cushions-grey-curtains-dark-living-room.jpg", "/catalogo/television")}>Neo QLED 8K</h4>
            <h4 className="cursor-pointer text-lg xs:text-xs text-white" onClick={() => changeItem("https://images.samsung.com/is/image/samsung/assets/br/home/banners_home_windfree_blackedition_1440x810.jpg?$1440_810_JPG$", "/catalogo/air-conditioner")}>WindFree Black Edition</h4>
            <h4 className="cursor-pointer text-lg xs:text-xs text-white" onClick={() => changeItem("https://images.samsung.com/is/image/samsung/assets/br/homepage/hp/SMG_JetBotAI_Banner_Desktop_20220429.jpg?$1440_810_JPG$", "/catalogo/vacuum")}>Jet Bot AI+</h4>
            <h4 className="cursor-pointer text-lg xs:text-xs text-white" onClick={() => changeItem("https://images.samsung.com/is/image/samsung/assets/br/home/GBM-QDrive-PC.jpg?$1440_810_JPG$", "/catalogo/washmachine")}>Quickdrive</h4>
            <h4 className="cursor-pointer text-lg xs:text-xs text-white" onClick={() => changeItem("https://image.lexica.art/full_jpg/f7f7913a-d1c2-495d-811a-8debc5ce40bc", "/catalogo/dishwasher")}>The Frame</h4>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-[390px]">
          <h1 className="text-white text-4xl font-bold">Nossos Produtos</h1>
          <p className="text-white mt-2">Ambiente de qualidade com design elegante e moderno</p>
          <Link href={actualLink}>
            <button className="bg-white p-2 pl-6 pr-6 text-sm rounded-3xl mt-2">Compre Agora</button>
          </Link>
        </div>
      </section>

      <section className="mt-[8em]">
        <h1 className="text-4xl text-center font-bold mb-20">Produtos Recomendados</h1>
        <div className="flex gap-6 justify-center">
          <div className="h-[500px] w-[300px] bg-[#f4f4f4] rounded-lg flex flex-col items-center p-6">
            <img src="https://images.samsung.com/is/image/samsung/p6pim/br/rf24bb66008aaz/gallery/br-counter-depth-3-door-french-door-beverage-center-rf24bb66008aaz-537293826?$1300_1038_PNG$" className="max-h-[200px]" alt="Image Recomended Products" />
            <h2 className="text-lg font-bold text-center mt-4">Geladeira Bespoke French Door Porta Automática 550L</h2>
            <h5 className="font-bold text-sm mt-4">Cor: <span className="font-normal text-sm">Branco</span></h5>
            <div className="flex justify-center items-center">
              <div className='w-5 h-5 rounded-full mt-2 bg-white border border-zinc-500 cursor-pointer' />
            </div>
            <div>
              <h1 className="text-center mt-8 text-xl font-bold">R$23.749,05 à vista</h1>
              <h2 className="text-center text-sm">ou 12x de R$2.083,25 sem juros</h2>
            </div>
            <div className="mt-8 p-1 w-full bg-[#262f40] text-white rounded-full text-center cursor-pointer">Comprar Agora</div>
          </div>
          <div className="h-[500px] w-[300px] bg-[#f4f4f4] rounded-lg flex flex-col items-center p-6">
            <img src="https://images.samsung.com/is/image/samsung/p6pim/br/rs60cb760a7naz/gallery/br-counter-depth-side-by-side-auto-open-door-462251-rs60cb760a7naz-537587530?$1300_1038_PNG$" className="max-h-[200px]" alt="Image Recomended Products" />
            <h2 className="text-lg font-bold text-center mt-4">Geladeira Bespoke Side by Side Porta Automática 590L</h2>
            <h5 className="font-bold text-sm mt-4">Cor: <span className="font-normal text-sm">Preto</span></h5>
            <div className="flex justify-center items-center">
              <div className='w-5 h-5 rounded-full mt-2 bg-[#262f40] border border-zinc-500 cursor-pointer' />
            </div>
            <div>
              <h1 className="text-center mt-8 text-xl font-bold">R$19.999,00 à vista</h1>
              <h2 className="text-center text-sm">ou 12x de R$1.666,58 sem juros</h2>
            </div>
            <div className="mt-8 p-1 w-full bg-[#262f40] text-white rounded-full text-center cursor-pointer">Comprar Agora</div>
          </div>
          <div className="h-[500px] w-[300px] bg-[#f4f4f4] rounded-lg flex flex-col items-center p-6">
            <img src="https://images.samsung.com/is/image/samsung/p6pim/br/rs52b3000m9-bz/gallery/br-side-by-side-modern-and-sleek-design-rs52b3000m9-bz-536903472?$1300_1038_PNG$" className="max-h-[200px]" alt="Image Recomended Products" />
            <h2 className="text-lg font-bold text-center mt-4">Geladeira Side By Side RS52 All Around Coolin 490L</h2>
            <h5 className="font-bold text-sm mt-4">Cor: <span className="font-normal text-sm">Preto</span></h5>
            <div className="flex justify-center items-center">
              <div className='w-5 h-5 rounded-full mt-2 bg-[#262f40] border border-zinc-500 cursor-pointer' />
            </div>
            <div>
              <h1 className="text-center mt-8 text-xl font-bold">R$5.499,00 à vista</h1>
              <h2 className="text-center text-sm">ou 12x de R$458,25 sem juros</h2>
            </div>
            <div className="mt-8 p-1 w-full bg-[#262f40] text-white rounded-full text-center cursor-pointer">Comprar Agora</div>
          </div>
          <div className="h-[500px] w-[300px] bg-[#f4f4f4] rounded-lg flex flex-col items-center p-6">
            <img src="https://images.samsung.com/is/image/samsung/p6pim/in/ww70t502dax-tl/gallery/in-front-loading-washer-ww10t534daws1-374547-ww70t502dax-tl-383436047?$650_519_PNG$" className="max-h-[200px]" alt="Image Recomended Products" />
            <h2 className="text-lg font-bold text-center mt-4">Máquina de Lavar M54 Ultra Panasonic</h2>
            <h5 className="font-bold text-sm mt-4">Cor: <span className="font-normal text-sm">Preto</span></h5>
            <div className="flex justify-center items-center">
              <div className='w-5 h-5 rounded-full mt-2 bg-[#262f40] border border-zinc-500 cursor-pointer' />
            </div>
            <div>
              <h1 className="text-center mt-8 text-xl font-bold">R$2.800,00 à vista</h1>
              <h2 className="text-center text-sm">ou 12x de R$233,34 sem juros</h2>
            </div>
            <div className="mt-8 p-1 w-full bg-[#262f40] text-white rounded-full text-center cursor-pointer">Comprar Agora</div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center flex-col items-center mt-[10rem]">
        <h2 className="text-3xl font-bold">Procurando algo mais?</h2>
        <form onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault()
          handleSearch()
        }}>
          <label className="flex items-center rounded-full border-2 p-4 h-[45px] w-[400px] border-gray-300 mt-4 gap-4">
            <IoSearchSharp size={20} className="text-zinc-500 cursor-pointer" />
            <input type="text" name="algo-mais" id="algo-mais" className="outline-none bg-transparent text-zinc-500" onChange={(e) => setSearchText(e.target.value)} />
          </label>
        </form>
      </section>

    </main>
  )
}