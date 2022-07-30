import orderModel from '../models/orderModel';

const getAll = async () => {
  const data = await orderModel.getAll();
  return { status: 201, data };
};

export default { getAll };