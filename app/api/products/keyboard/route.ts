import { currentUser } from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'
import { getInterface } from '@types'

export const GET = async ({ params }: getInterface) => {
  try {

    const keyboards = await prisma.keyboard.findMany()

    return new Response(JSON.stringify(keyboards), {status: 200})

  } catch (error) {
    console.log(error)
    return new Response("ERRO! Não foi possível encontrar os produtos correspodentes")
  }
} 