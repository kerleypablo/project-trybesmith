import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces/Iproducts';

async function create(product: IProduct): Promise<IProduct > {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES(?,?)';

  const [newProduct] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const result = {
    id: newProduct.insertId,
    name,
    amount, 
  };
  return result;
}

async function getAll(): Promise<IProduct[]> {
  const query = ' SELECT * FROM Trybesmith.Products';
  const [Products] = await connection.execute(query);

  return Products as IProduct[];
}

export default { create, getAll };