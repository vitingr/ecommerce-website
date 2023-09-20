import { currentUser } from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'

export const POST = async (request: Request) => {
  const { form, image } = await request.json()

  try {
    const user = await currentUser()

    console.log("Produto Novo")

    const newProduct = await prisma.product.create({
      data: {
        categoria: form.categoria,
        subcategoria: form.subcategoria,
        nome: form.nome,
        descricao: form.descricao,
        preco: Number(form.preco),
        desconto:  Number(form.desconto),
        cor: form.cor,
        modelo: form.modelo,
        capacidade:  Number(form.capacidade),
        voltagem: form.voltagem,
        numPortas: form.numeroPortas,
        display: form.display,
        puxador: form.puxador,
        recursos: form.recursos,
        foto: image,
        classe: form.classe,
        tecnologia: form.tecnologia,
        linha: form.linha,
        linhaUltra: form.linhaUltra,
        ciclo: form.ciclo,
        tamanhoTela: form.tamanhoTela,
        conectividade: form.conectividade,
        armazenamento: form.armazenamento,
        qualidadeCamera:  Number(form.qualidadeCamera),
        qtdCameras: form.qtdCameras,
        faixaPreco: form.faixaPreco,
        memoria: form.memoria,
        sistema: form.sistema,
        material: form.material,
        tamanho: form.tamanho,
        resolucao: form.resolucao,
        taxaAtualizacao: form.taxaAtualizacao,
        tempoResposta: form.tempoResposta,
        proporcao: form.proporcao,
        tipo: form.tipo,
        layout: form.layout,
        quantidade: 1
      }
    })

    return new Response(JSON.stringify(newProduct), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response(`ERRO, não foi possível criar o produto ${error}`, { status: 200 })
  }
}