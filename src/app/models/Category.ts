import { model, Schema } from 'mongoose'

export const Category = model(
  'Category',
  new Schema({
    // name: String,
    // icon: String,
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  })
)
