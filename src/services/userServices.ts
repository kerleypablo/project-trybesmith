import jwt, { SignOptions } from 'jsonwebtoken';
import { Iuser } from '../interfaces/Iuser';
import userModel from '../models/userModel';

const create = async (user: Iuser) => {
  const secret = 'secret';
  const jwtConfig: SignOptions = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  const data = await userModel.create(user);

  const token = jwt.sign({ data }, secret, jwtConfig);
  return { status: 201, token };
};

export default { create };