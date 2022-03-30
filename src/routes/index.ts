import express from 'express';
import userRoutes from './userRoutes';
import playlistRoutes from './playlistRoutes';
const routes = (app: any) => {
  app.use(express.json());
  userRoutes(app);
  playlistRoutes(app);
};

export default routes;
