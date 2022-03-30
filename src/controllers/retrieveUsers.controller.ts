import User from '../configs/database';
import { Request, Response } from 'express';
const retrieveUsersController = (req: Request, res: Response) => {
  const UserToReturn = User.map((item) => ({
    username: item.username,
    id: item.id,
    playlist: item.playlist,
  }));
  return res.status(200).json(UserToReturn);
};

export default retrieveUsersController;
