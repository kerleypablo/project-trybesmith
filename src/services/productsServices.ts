import { IProduct } from '../interfaces/Iproducts';
import productModel from '../models/productModel';

const create = async (product: IProduct) => {
  const data = await productModel.create(product);
  return { status: 200, data };
};

export default { create };
