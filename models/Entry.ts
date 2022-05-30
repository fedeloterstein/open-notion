import mongoose, { Model, Schema } from 'mongoose'
import { Entry } from '../interfaces'

export interface IEntry extends Entry {}

const entrySchema = new Schema({
  description: { type: String, required: true },
  createdAt: { type: Number },
  status: {
    type: String,
    enum: {
      values: ['next-up', 'in-progress', 'completed'],
      message: '{VALUE} no es un estado permitido',
    },
    default: 'next-up',
  },
})

const EntryModel: Model<IEntry> =
  mongoose.models.Entry || mongoose.model('Entry', entrySchema)

export default EntryModel
