import { IProduct } from '../interfaces/Iproducts';
import productModel from '../models/products/productModel';

export default async function create(product: IProduct) {
  const data = await productModel.creat(product);
  return { status: 200, data };
}
