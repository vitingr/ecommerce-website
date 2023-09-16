import {currentUser} from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'

export const POST = async (request: Request) => {
  const {form, image} = await request.json()

  try {
    const user = await currentUser()

      const newKeyboard = await prisma.keyboard.create({
        data: {
          nome: form.nome,
          preco: Number(form.preco),
          desconto: Number(form.desconto),
          cor: form.cor,
          tipo: form.tipo,
          layout: form.layout,
          foto: image
        }
      })

      return new Response(JSON.stringify(newKeyboard), { status: 200 })
  } catch (error) {
    console.log(error)
      return new Response(`ERRO, não foi possível criar o teclado ${error}`, { status: 500 })
  }
}