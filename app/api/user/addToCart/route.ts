import { currentUser } from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'
import { getInterface } from '@types'

export const POST = async (request: Request, { params }: getInterface) => {

  const { productId, value, foto, descricao, nome, categoria } = await request.json()

  try {
    const user = await currentUser()

    const userExists = await prisma.user.findUnique({
      where: {
        uid: user?.id
      }
    })

    if (userExists) {
      try {
        const newPurchase = await prisma.purchase.create({
          data: {
            userId: user?.id,
            productId: productId,
            cupom: "",
            value: value,
            foto: foto,
            descricao: descricao,
            quantidade: 1,
            nome: nome,
            productCategory: categoria
          }
        })

        const addUserItem = await prisma.user.update({
          where: {
            id: userExists?.id
          },
          data: {
            carrinho: {
              push: newPurchase.id
            }
          }
        })

        return new Response(JSON.stringify(newPurchase), { status: 200 })

      } catch (error) {
        console.log(error)
        return new Response("ERRO! Não foi possível realizar a compra", { status: 500 })
      }
    } else {
      return new Response("ERRO! Usuário não cadastrado", { status: 500 })
    }
  } catch (error) {
    console.log(error)
    return new Response("ERRO! Não foi possível encontrar o usuário", { status: 500 })
  }
} 