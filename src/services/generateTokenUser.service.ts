import { Request, Response, NextFunction } from 'express';
import config from '../configs/index';
import jwt from 'jsonwebtoken';

const generateTokenUser = (req: Request, res: Response) => {
  const { user } = req;
  const username = user.username;
  const token = jwt.sign({ username: username }, config.secretKey, {
    expiresIn: config.expiresIn,
  });
  // Lembrar de verificar se é necessário o token estar armazenado
  user.accessToken = token;
  return res.status(200).json({ accessToken: token });
};

export default generateTokenUser;
