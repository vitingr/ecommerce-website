import {currentUser} from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'

export const POST = async (request: Request) => {
  const {form, image} = await request.json()

  try {
    const user = await currentUser()

      const newCellphone = await prisma.cellphone.create({
        data: {
          nome: form.nome,
          preco: form.preco,
          desconto: form.desconto,
          cor: form.cor,
          tamanhoTela: form.tamanhoTela,
          conectividade: form.conectividade,
          armazenamento: form.armazenamento,
          qualidadeCamera: form.qualidadeCamera,
          qtdCameras: form.qtdCameras,
          faixaPreco: form.faixaPreco,
          foto: image
        }
      })

      return new Response(JSON.stringify(newCellphone), { status: 200 })
  } catch (error) {
    console.log(error)
      return new Response(`ERRO, não foi possível criar o celular ${error}`, { status: 500 })
  }
}