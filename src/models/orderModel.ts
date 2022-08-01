import IOrder from '../interfaces/IOrders';
import connection from './connection';

async function getAll(): Promise<IOrder[]> {
  const query = `SELECT ord.id AS id, ord.userId AS userId,
  JSON_ARRAYAGG(prd.id) AS productsIds FROM Trybesmith.Orders AS ord 
  INNER JOIN Trybesmith.Products AS prd ON ord.Id = prd.orderId
  GROUP BY orderId ORDER BY userId`;

  const [result] = await connection.execute(query);

  return result as IOrder[];
}

export default { getAll };