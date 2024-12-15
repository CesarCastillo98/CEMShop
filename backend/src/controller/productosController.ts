import { Request, Response } from 'express';
import Recipe from '../models/Productos';
import Productos from '../models/Productos';

export const getAllProductos = async (req: Request, res: Response): Promise<void> => {
  try {
    const productos = await Productos.find();
    res.status(200).json(productos); 
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
};

export const addProductos = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.body);
    const newProductos = new Productos(req.body);
    await newProductos.save();
    res.status(201).json(newProductos); 
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
};

export const getProductosById = async (req: Request, res: Response): Promise<void> => {
  try {
    const productos = await Productos.findById(req.params.id);
    if (!productos) {
      res.status(404).json({ message: 'Recipe not found' });
    } else {
      res.status(200).json(productos);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
};
