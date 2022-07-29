import { ResultSetHeader } from 'mysql2/promise';
import connection from '../../utils/connection';

import { IProduct } from '../../interfaces/Iproducts';

const creat = async (product: IProduct): Promise<IProduct> => {
  const { name, amout } = product;

  const query = 'INSERT INTO Trybessmith (name, amout) VALUES(?,?)';
  const [newProduct] = await connection.execute<ResultSetHeader>(
    query,
    [name, amout],
  );
  return newProduct;
};

export = { creat };