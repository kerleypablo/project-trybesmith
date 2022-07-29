import { IProduct } from '../interfaces/Iproducts';
import productModel from '../models/productModel';

const create = async (product: IProduct) => {
  const data = await productModel.create(product);
  return { status: 201, data };
};

const getAll = async () => {
  const data = await productModel.getAll();
  return { status: 200, data };
};

export default { create, getAll };
