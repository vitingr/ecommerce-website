import { currentUser } from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'
import { getInterface } from '@types'

export const POST = async ({ params }: getInterface) => {
  try {
    const user = await currentUser()
    console.log(user)
    // const arConditioner = await prisma.user.findUnique({
    //   where: {
    //     id: user
    //   }
    // })

    return new Response(JSON.stringify(user), {status: 200})

  } catch (error) {
    console.log(error)
    return new Response("ERRO! Não foi possível encontrar os produtos correspodentes")
  }
} 