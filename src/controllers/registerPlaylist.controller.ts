import { Request, Response } from 'express';
import User from '../configs/database';

const registerPlaylistController = (req: Request, res: Response) => {
  const { user } = req;
  const dataBody = req.body;
  user.playlist = dataBody;
  const userToReturn = {
    id: user.id,
    username: user.username,
    playlist: user.playlist,
  };
  return res.status(200).json(userToReturn);
};

export default registerPlaylistController;
