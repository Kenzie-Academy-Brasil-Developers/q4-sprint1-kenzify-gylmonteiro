import { Request, Response, NextFunction } from 'express';
import config from '../configs';
import jwt from 'jsonwebtoken';

const authenticateUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    return res.status(400).json({ message: 'Missing header authorization' });
  }
  const validateToken = req.headers.authorization.split(' ')[1];
  jwt.verify(validateToken, config.secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid Token' });
    }
    req.validatedToken = validateToken;
    return next();
  });
};

export default authenticateUserMiddleware;
