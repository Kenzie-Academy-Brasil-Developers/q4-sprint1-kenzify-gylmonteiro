import { Router } from 'express';
import { authenticateUserMiddleware, getUserMiddleware } from '../middlewares';
import { registerPlaylistController } from '../controllers';
const route = Router();

const playlistRoutes = (app: any) => {
  route.put(
    '/playlist',
    authenticateUserMiddleware,
    getUserMiddleware,
    registerPlaylistController
  );
  route.put('/playlist?artist=name&song=title');
  route.delete('/playlist?artist=name&song=title');

  app.use('/users', route);
};

export default playlistRoutes;
