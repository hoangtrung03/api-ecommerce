import mongoose, { Schema } from 'mongoose'

const ImageSchema = new Schema({
  origin_name: String,
  name_file: String,
  path: String,
})

export const ImageModel = mongoose.model('image', ImageSchema)
