import { currentUser } from '@clerk/nextjs'
import prisma from '@lib/database/prismadb'
import { getInterface } from '@types'

export const GET = async (request: Request, { params }: getInterface) => {
  try {
    let items: any = []
    const query = params.id.split("-").join(" ")


    const airConditioners = await prisma.product.findMany({
      where: { nome: { contains: query, mode: 'insensitive' }, subcategoria: "air-conditioner" }
    })
    if (airConditioners.length > 0) {
      airConditioners.forEach((item) => {
        items.push(item)
      })
    }

    const cellphones = await prisma.product.findMany({
      where: { nome: { contains: query, mode: 'insensitive' }, subcategoria: "cellphone" }
    })
    if (cellphones.length > 0) {
      cellphones.forEach((item) => {
        items.push(item)
      })
    }

    const dishwashers = await prisma.product.findMany({
      where: { nome: { contains: query, mode: 'insensitive' }, subcategoria: "dishwasher" }
    })
    if (dishwashers.length > 0) {
      dishwashers.forEach((item) => {
        items.push(item)
      })
    }

    const gadgets = await prisma.product.findMany({
      where: { nome: { contains: query, mode: 'insensitive' }, subcategoria: "gadget" }
    })
    if (gadgets.length > 0) {
      gadgets.forEach((item) => {
        items.push(item)
      })
    }
    const keyboards = await prisma.product.findMany({
      where: { nome: { contains: query, mode: 'insensitive' }, subcategoria: "keyboard" }
    })
    if (keyboards.length > 0) {
      keyboards.forEach((item) => {
        items.push(item)
      })
    }

    const monitors = await prisma.product.findMany({
      where: { nome: { contains: query, mode: 'insensitive' }, subcategoria: "monitor" }
    })
    if (monitors.length > 0) {
      monitors.forEach((item) => {
        items.push(item)
      })
    }

    const notebooks = await prisma.product.findMany({
      where: { nome: { contains: query, mode: 'insensitive' }, subcategoria: "notebook" }
    })
    if (notebooks.length > 0) {
      notebooks.forEach((item) => {
        items.push(item)
      })
    }

    const refrigerators = await prisma.product.findMany({
      where: { nome: { contains: query, mode: 'insensitive' }, subcategoria: "refrigerator" }
    })
    if (refrigerators.length > 0) {
      refrigerators.forEach((item) => {
        items.push(item)
      })
    }

    const smartWatches = await prisma.product.findMany({
      where: { nome: { contains: query, mode: 'insensitive' }, subcategoria: "smart-watch" }
    })
    if (smartWatches.length > 0) {
      smartWatches.forEach((item) => {
        items.push(item)
      })
    }

    const televisions = await prisma.product.findMany({
      where: { nome: { contains: query, mode: 'insensitive' }, subcategoria: "television" }
    })
    if (televisions.length > 0) {
      televisions.forEach((item) => {
        items.push(item)
      })
    }

    const vacuums = await prisma.product.findMany({
      where: { nome: { contains: query, mode: 'insensitive' }, subcategoria: "vacuum" }
    })
    if (vacuums.length > 0) {
      vacuums.forEach((item) => {
        items.push(item)
      })
    }

    const washMachines = await prisma.product.findMany({
      where: { nome: { contains: query, mode: 'insensitive' }, subcategoria: "washmachine" }
    })
    if (washMachines.length > 0) {
      washMachines.forEach((item) => {
        items.push(item)
      })
    }  

    return new Response(JSON.stringify(items), { status: 200 })

  } catch (error) {
    console.log(error)
    return new Response("ERRO! Não foi possível retornar dados", { status: 500 })
  }
}