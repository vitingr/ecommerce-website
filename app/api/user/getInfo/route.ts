import { currentUser } from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'
import { getInterface } from '@types'

export const GET = async ({ params }: getInterface) => {
  try {
    
    const userInfo = await currentUser()

    const user = await prisma.user.findUnique({
      where: {
        uid: userInfo?.id
      }
    })

    return new Response(JSON.stringify(user), {status: 200})

  } catch (error) {
    console.log(error)
    return new Response("ERRO! Não foi possível encontrar os produtos correspodentes")
  }
} 