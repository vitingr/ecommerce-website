import { currentUser } from "@clerk/nextjs";
import prisma from "@lib/database/prismadb";
import { getInterface } from "@types";

export const POST = async (request: Request, { params }: getInterface) => {
  const user = await currentUser();

  const userExists = await prisma.user.findUnique({
    where: {
      uid: user?.id,
    },
  });

  if (userExists) {
    try {
      const buyProduct = await prisma.purchase.deleteMany({
        where: {
          id: {
            in: userExists?.carrinho,
          },
        },
      });

      await prisma.user.update({
        where: {
          id: userExists?.id
        },
        data: {
          carrinho: []
        }
      })

      return new Response(`Compra realizada com sucesso!`, { status: 200 });
    } catch (error) {
      console.log(error);
      return new Response("ERRO! Não foi possível realizar a compra", {
        status: 500,
      });
    }
  }
  return new Response("ERRO! Não foi possível realizar a compra", {
    status: 500,
  });
};
