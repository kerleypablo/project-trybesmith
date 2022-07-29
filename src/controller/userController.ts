import { Request, Response } from 'express';
import userService from '../services/userServices';
import { Iuser } from '../interfaces/Iuser';

const create = async (req: Request, res: Response) => {
  try {
    const user = req.body as Iuser;
    const { status, token } = await userService.create(user);
    return res.status(status).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export default { create };