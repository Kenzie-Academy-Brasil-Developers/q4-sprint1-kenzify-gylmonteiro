import { Request, Response } from 'express';
import { v4 } from 'uuid';
import bcrypt from 'bcrypt';
import User from '../configs/database';

const registerUserController = async (req: Request, res: Response) => {
  const hashedPassword = await bcrypt.hashSync(req.body.password, 10);
  const newUser = {
    ...req.body,
    id: v4(),
    password: hashedPassword,
    playlist: {},
  };

  User.push(newUser);
  const newUserToReturn = {
    playlist: {},
    username: req.body.username,
    id: v4(),
  };

  return res.status(201).json(newUserToReturn);
};

export default registerUserController;
