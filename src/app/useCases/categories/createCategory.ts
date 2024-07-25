import { Request, Response } from 'express'

import { Category } from '../../models/Category'

export async function createCategory(req: Request, res: Response) {
  // res.send('OK Post Create Category')
  try {
    const { icon, name } = req.body

    if (!name) {
      return res.status(400).json({
        error: 'Name is required',
      })
    }

    const category = await Category.create({
      icon,
      name,
    })

    res.status(201).json(category)
  } catch (error) {
    console.log('createCategory: '+error) 
    res.sendStatus(500)
  }
}
