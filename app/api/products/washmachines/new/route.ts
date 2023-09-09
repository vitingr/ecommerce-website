import {currentUser} from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'

export const POST = async (request: Request) => {
  const {form, image} = await request.json()

  try {
    const user = await currentUser()

      const newWashMachine = await prisma.washMachines.create({
        data: {
          nome: form.nome,
          preco: form.preco,
          desconto: form.desconto,
          cor: form.cor,
          modelo: form.modelo,
          capacidade: form.capacidade,
          voltagem: form.voltagem,
          foto: image
        }
      })

      return new Response(JSON.stringify(newWashMachine), { status: 200 })
  } catch (error) {
    console.log(error)
      return new Response(`ERRO, não foi possível criar a geladeira ${error}`, { status: 500 })
  }
}