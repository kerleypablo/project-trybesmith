import { Request, Response } from 'express';
import orderServices from '../services/orderServices';

const getAll = async (_req: Request, res: Response) => {
  try {
    const { status, data } = await orderServices.getAll();
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: error });       
  }
};

export default { getAll }; 
