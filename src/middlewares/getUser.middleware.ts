import { Request, Response, NextFunction } from 'express';
import User from '../configs/database';

const getUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { validatedToken } = req;
  const FiltredUser = User.find((user) => user.accessToken === validatedToken);
  if (FiltredUser) {
    req.user = FiltredUser;
    next();
  }
  return res.status(401).json({ message: 'User not authorized' });
};

export default getUserMiddleware;
