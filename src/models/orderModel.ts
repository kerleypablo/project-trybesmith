import IOrder from '../interfaces/IOrders';
import connection from './connection';

async function getAll(): Promise<IOrder[]> {
  const query = 'SELECT ord.id AS orderId, ord.userId AS userId, prd.id AS productId'
   + ' FROM Trybesmith.Orders AS ord '
   + 'INNER JOIN Trybesmith.Products AS prd ON ord.Id = prd.orderId';

  const [result] = await connection.execute(query);

  return result as IOrder[];
}

export default { getAll };