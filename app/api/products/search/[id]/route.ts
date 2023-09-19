import { currentUser } from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'
import { getInterface } from '@types'

export const GET = async (request: Request, { params }: getInterface) => {
  try {
    let items: any = []
    const query = params.id.split("-").join(" ")

    const airConditioners = await prisma.airConditioner.findMany({
      where: { nome: { contains: query, mode: 'insensitive' } }
    })
    if (airConditioners.length > 0) {
      airConditioners.forEach((item) => {
        items.push(item)
      })
    }

    const cellphones = await prisma.cellphone.findMany({
      where: { nome: { contains: query, mode: 'insensitive' } }
    })
    if (cellphones.length > 0) {
      cellphones.forEach((item) => {
        items.push(item)
      })
    }

    const dishwashers = await prisma.dishwashers.findMany({
      where: { nome: { contains: query, mode: 'insensitive' } }
    })
    if (cellphones.length > 0) {
      cellphones.forEach((item) => {
        items.push(item)
      })
    }

    const gadgets = await prisma.gadget.findMany({
      where: { nome: { contains: query, mode: 'insensitive' } }
    })
    if (cellphones.length > 0) {
      cellphones.forEach((item) => {
        items.push(item)
      })
    }
    const keyboards = await prisma.keyboard.findMany({
      where: { nome: { contains: query, mode: 'insensitive' } }
    })
    if (cellphones.length > 0) {
      cellphones.forEach((item) => {
        items.push(item)
      })
    }

    const monitors = await prisma.monitor.findMany({
      where: { nome: { contains: query, mode: 'insensitive' } }
    })
    if (cellphones.length > 0) {
      cellphones.forEach((item) => {
        items.push(item)
      })
    }

    const notebooks = await prisma.notebook.findMany({
      where: { nome: { contains: query, mode: 'insensitive' } }
    })
    if (cellphones.length > 0) {
      cellphones.forEach((item) => {
        items.push(item)
      })
    }

    const refrigeratos = await prisma.refrigerator.findMany({
      where: { nome: { contains: query, mode: 'insensitive' } }
    })
    if (cellphones.length > 0) {
      cellphones.forEach((item) => {
        items.push(item)
      })
    }

    const smartWatches = await prisma.smartWatch.findMany({
      where: { nome: { contains: query, mode: 'insensitive' } }
    })
    if (cellphones.length > 0) {
      cellphones.forEach((item) => {
        items.push(item)
      })
    }

    const televisions = await prisma.television.findMany({
      where: { nome: { contains: query, mode: 'insensitive' } }
    })
    if (cellphones.length > 0) {
      cellphones.forEach((item) => {
        items.push(item)
      })
    }

    const vacuums = await prisma.vacuum.findMany({
      where: { nome: { contains: query, mode: 'insensitive' } }
    })
    if (cellphones.length > 0) {
      cellphones.forEach((item) => {
        items.push(item)
      })
    }

    const washMachines = await prisma.washMachines.findMany({
      where: { nome: { contains: query, mode: 'insensitive' } }
    })
    if (cellphones.length > 0) {
      cellphones.forEach((item) => {
        items.push(item)
      })
    }  

    return new Response(JSON.stringify(items), { status: 500 })

  } catch (error) {
    console.log(error)
    return new Response("ERRO! Não foi possível retornar dados", { status: 500 })
  }
}