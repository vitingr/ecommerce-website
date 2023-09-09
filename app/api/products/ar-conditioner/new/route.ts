import {currentUser} from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'

export const POST = async (request: Request) => {
  const {form, image} = await request.json()

  try {
    const user = await currentUser()

      const newAirConditioner = await prisma.airConditioner.create({
        data: {
          nome: form.nome,
          preco: form.preco,
          desconto: form.desconto,
          cor: form.cor,
          classe: form.classe,
          capacidade: form.capacidade,
          tecnologia: form.tecnologia,
          linha: form.linha,
          linhaUltra: form.linhaUltra,
          ciclo: form.ciclo,
          foto: image
        }
      })

      return new Response(JSON.stringify(newAirConditioner), { status: 200 })
  } catch (error) {
    console.log(error)
      return new Response(`ERRO, não foi possível criar a geladeira ${error}`, { status: 500 })
  }
}