import {currentUser} from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'

export const POST = async (request: Request) => {
  const {form, image} = await request.json()

  try {
    const user = await currentUser()

      const newMonitor = await prisma.monitor.create({
        data: {
          nome: form.nome,
          preco: Number(form.preco),
          desconto: Number(form.desconto),
          tipo: form.tipo,
          tamanhoTela: form.tamanhoTela,
          resolucao: form.resolucao,
          taxaAtualizacao: form.taxaAtualizacao,
          tempoResposta: form.tempoResposta,
          proporcao: form.proporcao,
          recursos: form.recursos,
          foto: image
        }
      })

      return new Response(JSON.stringify(newMonitor), { status: 200 })
  } catch (error) {
    console.log(error)
      return new Response(`ERRO, não foi possível criar o monitor ${error}`, { status: 500 })
  }
}