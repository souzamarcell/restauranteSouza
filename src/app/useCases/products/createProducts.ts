import { Request, Response } from 'express'

import { Product } from '../../models/Product'

export async function createProducts(req: Request, res: Response) {
  try {
    // console.log(req.body)
    // console.log(req.file)
    const imagePath = req.file?.filename
    // console.log(imagePath)

    const { name, description, price, category, ingredients } = req.body
    // console.log(JSON.parse(ingredients))
    // console.log({
    //   name,
    //   description,
    //   imagePath,
    //   price: Number(price),
    //   category,
    //   ingredients: JSON.parse(ingredients),
    // })

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    })

    res.status(201).json(product)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
