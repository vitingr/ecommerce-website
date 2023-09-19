import { currentUser } from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'
import { getInterface } from '@types'

export const GET = async (request: Request, {params}: getInterface) => {
  try {

    let item
    const query = params.id.split("-")

    if (query[0] === "refrigerators") {
      item = await prisma.refrigerator.findUnique({
        where: {
          id: query[1]
        }
      })
    }
    if (query[0] === "airConditioners") {
      item = await prisma.airConditioner.findUnique({
        where: {
          id: query[1]
        }
      })
    }
    if (query[0] === "vacuums") {
      item = await prisma.vacuum.findUnique({
        where: {
          id: query[1]
        }
      })
    }
    if (query[0] === "dishwashers") {
      item = await prisma.dishwashers.findUnique({
        where: {
          id: query[1]
        }
      })
    }
    if (query[0] === "washmachines") {
      item = await prisma.washMachines.findUnique({
        where: {
          id: query[1]
        }
      })
    }
    if (query[0] === "cellphones" || query[0] === "cellphone") {
      item = await prisma.cellphone.findUnique({
        where: {
          id: query[1]
        }
      })
    }
    if (query[0] === "notebooks") {
      item = await prisma.notebook.findUnique({
        where: {
          id: query[1]
        }
      })
    }
    if (query[0] === "smartWatches") {
      item = await prisma.smartWatch.findUnique({
        where: {
          id: query[1]
        }
      })
    }
    if (query[0] === "monitors") {
      item = await prisma.monitor.findUnique({
        where: {
          id: query[1]
        }
      })
    }
    if (query[0] === "televisions") {
      item = await prisma.television.findUnique({
        where: {
          id: query[1]
        }
      })
    }
    if (query[0] === "keyboards") {
      item = await prisma.keyboard.findUnique({
        where: {
          id: query[1]
        }
      })
    }
    if (query[0] === "gadgets") {
      item = await prisma.gadget.findUnique({
        where: {
          id: query[1]
        }
      })
    }

    return new Response(JSON.stringify(item), {status: 200})
  } catch (error) {
    console.log(error)
    return new Response("ERRO! Não foi possível encontrar os produtos correspodentes")
  }
} 