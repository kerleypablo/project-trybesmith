import { Request, Response } from 'express';
import productServices from '../services/productsServices';
import { IProduct } from '../interfaces/Iproducts';

const create = async (req: Request, res: Response) => {
  try {
    const product = req.body as IProduct;
    const { status, data } = await productServices.create(product);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const getAll = async (_req: Request, res: Response) => {
  try {
    const { status, data } = await productServices.getAll();
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: error });       
  }
};

export default { create, getAll };