import { currentUser } from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'
import { getInterface } from '@types'

export const GET = async (request: Request, {params}: getInterface) => {
  try {

    let item
    const query = params.id.split("-")

    if (query[0] === "refrigerators") {
      item = await prisma.refrigerator.findUnique({
        where: {
          id: query[1]
        }
      })
    }

    return new Response(JSON.stringify(item), {status: 200})

  } catch (error) {
    console.log(error)
    return new Response("ERRO! Não foi possível encontrar os produtos correspodentes")
  }
} 