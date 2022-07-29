import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces/Iproducts';

async function create(product: IProduct): Promise<IProduct > {
  const { name, amout } = product;

  const query = 'INSERT INTO Trybessmith (name, amout) VALUES(?,?)';
  const [newProduct] = await connection.execute<ResultSetHeader>(query, [name, amout]);
  const result = {
    id: newProduct.insertId,
    name,
    amout, 
  };
  console.log(result);
  return result;
}

export default { create };