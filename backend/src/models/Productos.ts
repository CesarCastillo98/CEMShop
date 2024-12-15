import mongoose, { Schema, Document } from 'mongoose';

export interface IProductos extends Document {
  nombre: string;
  categoria: string;
  precio: string[];
  descripcion: string;
  imagenUrl: string;
}

const ProductosSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  categoria: { type: String, required: true },
  precio: { type: [String], required: true },
  descripcion: { type: String, required: true },
  imagenUrl: { type: String, required: true },
});

export default mongoose.model<IProductos>('Productos', ProductosSchema);