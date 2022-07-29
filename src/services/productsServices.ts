import { IProduct } from '../interfaces/Iproducts';
import productModel from '../models/products/productModel';

const create = async (product: IProduct) => {
  const data = await productModel.creat(product);
  return { status: 200, data };
};

export default { create };
