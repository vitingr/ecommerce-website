import { currentUser } from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'
import { getInterface } from '@types'

export const GET = async (request: Request, { params }: getInterface) => {
  try {
    const query = params.id.split("-")

    console.log(query)

    const product = await prisma.product.findUnique({
      where: {
        id: query[1]
      }
    })

    if (product?.id !== undefined && product?.id !== null) {
      return new Response(JSON.stringify(product), { status: 200 })
    }

    return new Response("Item não encontrado", {status: 404})

  } catch (error) {
    console.log(error)
    return new Response("ERRO! Não foi possível encontrar os produtos correspodentes")
  }
} 