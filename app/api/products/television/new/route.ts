import {currentUser} from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'

export const POST = async (request: Request) => {
  const {form, image} = await request.json()

  try {
    const user = await currentUser()

      const newTelevision = await prisma.television.create({
        data: {
          nome: form.nome,
          preco: form.preco,
          desconto: form.desconto,
          tipo: form.tipo,
          tamanhoTela: form.tamanhoTela,
          resolucao: form.resolucao,
          recursos: form.recursos,
          foto: image
        }
      })

      return new Response(JSON.stringify(newTelevision), { status: 200 })
  } catch (error) {
    console.log(error)
      return new Response(`ERRO, não foi possível criar a televisão ${error}`, { status: 500 })
  }
}