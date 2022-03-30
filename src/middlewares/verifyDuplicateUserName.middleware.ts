import { Request, Response, NextFunction } from 'express';
import User from '../configs/database';

const verifyDuplicateUserNameMiddlewrae = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.body;

  const user = User.find((_) => _.username === username);

  if (user) {
    return res.status(422).json({ message: 'You can not use this name' });
  }
  next();
};

export default verifyDuplicateUserNameMiddlewrae;
