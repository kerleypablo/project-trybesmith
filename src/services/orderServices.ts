import orderModel from '../models/orderModel';

const getAll = async () => {
  const data = await orderModel.getAll();
  return { status: 200, data };
};

export default { getAll };