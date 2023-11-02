import { currentUser } from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'
import { getInterface } from '@types'

export const GET = async (request: Request, { params }: getInterface) => {
  try {
    const query = params.id.split("-")

    const purchase = await prisma.purchase.findUnique({
      where: {
        id: query[1]
      }
    })

    if (purchase?.id !== undefined && purchase?.id !== null) {
      const product = await prisma.product.findUnique({
        where: {
          id: purchase?.productId || ""
        }
      })

      return new Response(JSON.stringify(product), { status: 200 })
    }

  } catch (error) {
    console.log(error)
    return new Response("ERRO! Não foi possível encontrar os produtos correspodentes")
  }
} 