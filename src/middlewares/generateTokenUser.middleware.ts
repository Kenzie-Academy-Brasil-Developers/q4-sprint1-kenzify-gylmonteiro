import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import User from '../configs/database';
import generateTokenUser from '../services/generateTokenUser.service';
const generateTokenUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;
  const user = User.find((_) => _.username === username);
  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ message: 'Passowrd missmatch!' });
  }

  req.user = user;

  return generateTokenUser(req, res);
};

export default generateTokenUserMiddleware;
