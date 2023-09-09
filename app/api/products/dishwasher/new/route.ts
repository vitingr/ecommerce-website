import {currentUser} from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'

export const POST = async (request: Request) => {
  const {form, image} = await request.json()

  try {
    const user = await currentUser()

      const newDishwasher = await prisma.dishwashers.create({
        data: {
          nome: form.nome,
          preco: form.preco,
          desconto: form.desconto,
          cor: form.cor,
          capacidade: form.capacidade,
          foto: image
        }
      })

      return new Response(JSON.stringify(newDishwasher), { status: 200 })
  } catch (error) {
    console.log(error)
      return new Response(`ERRO, não foi possível criar a geladeira ${error}`, { status: 500 })
  }
}