import {currentUser} from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'

export const POST = async (request: Request) => {
  const {form, image} = await request.json()

  try {
    const user = await currentUser()

      const newNotebook = await prisma.notebook.create({
        data: {
          nome: form.nome,
          preco: Number(form.preco),
          desconto: Number(form.desconto),
          sistema: form.sistema,
          armazenamento: form.armazenamento,
          memoria: form.memoria,
          tamanhoTela: form.tamanhoTela,
          recursos: form.recursos,
          foto: image
        }
      })

      return new Response(JSON.stringify(newNotebook), { status: 200 })
  } catch (error) {
    console.log(error)
      return new Response(`ERRO, não foi possível criar o notebook ${error}`, { status: 500 })
  }
}