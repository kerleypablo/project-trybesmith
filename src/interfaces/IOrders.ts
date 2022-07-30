export default interface IOrder {
  id?: number;
  userId: number;
  productsIds: Array<number>;
}