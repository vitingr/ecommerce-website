import { currentUser } from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'
import { getInterface } from '@types'

export const GET = async ({ params }: getInterface) => {
  try {

    const user = await currentUser()

    const purchases = await prisma.purchase.findMany({
      where: {
        userId: user?.id
      }
    })

    if (purchases) {
      return new Response(JSON.stringify(purchases), { status: 200 })
    } else {
      return new Response("Usuário não comprou nada", { status: 200 })
    }

  } catch (error) {
    return new Response("ERRO! Não foi possível encontrar os produtos correspodentes")
  }
} 