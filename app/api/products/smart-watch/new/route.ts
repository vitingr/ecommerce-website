import {currentUser} from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'

export const POST = async (request: Request) => {
  const {form, image} = await request.json()

  try {
    const user = await currentUser()

      const newSmartWatch = await prisma.smartWatch.create({
        data: {
          nome: form.nome,
          preco: Number(form.preco),
          desconto: Number(form.desconto),
          tamanho: form.tamanho,
          conectividade: form.conectividade,
          material: form.material,
          foto: image
        }
      })

      return new Response(JSON.stringify(newSmartWatch), { status: 200 })
  } catch (error) {
    console.log(error)
      return new Response(`ERRO, não foi possível criar o smart-watch ${error}`, { status: 500 })
  }
}