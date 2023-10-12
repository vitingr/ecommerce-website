import { currentUser } from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'
import { getInterface } from '@types'

export const POST = async (request: Request, { params }: getInterface) => {

  const { purchaseId } = await request.json()

  console.log(purchaseId)

  try {
    const buyProduct = await prisma.purchase.delete({
      where: {
        id: purchaseId
      }
    })

    return new Response(`Compra realizada com sucesso!`, { status: 200 })

  } catch (error) {
    console.log(error)
    return new Response("ERRO! Não foi possível realizar a compra", { status: 500 })
  }
} 