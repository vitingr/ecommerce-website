import { currentUser } from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'
import { getInterface } from '@types'

export const POST = async ({ params }: getInterface) => {
  try {
    const user = await currentUser()

    const userExists = await prisma.user.findUnique({
      where: {
        uid: user?.id
      }
    })

    if (!userExists) {
      try {
        const newUser = await prisma.user.create({
          data: {
            uid: user?.id,
            nome: user?.firstName,
            sobrenome: user?.lastName,
            nomeCompleto: `${user?.firstName} ${user?.lastName}`,
            email: user?.emailAddresses[0].emailAddress,
            admin: 0,
            foto: user?.imageUrl,
            compras: 0
          }
        })

        return new Response(JSON.stringify(user), { status: 200 })

      } catch (error) {
        return new Response("ERRO! Não foi possível criar o usuário", { status: 500 })
      }
    } else {
      return new Response(JSON.stringify(user), { status: 200 })
    }
  } catch (error) {
    return new Response("ERRO! Não foi possível encontrar o usuário", { status: 500 })
  }
} 