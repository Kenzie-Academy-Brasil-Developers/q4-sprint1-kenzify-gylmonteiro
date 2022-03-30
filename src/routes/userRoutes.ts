import { Router } from 'express';
import {
  registerUserController,
  retrieveUsersController,
} from '../controllers';

import {
  validateLoginUserSchema,
  validateUserSchema,
  generateTokenUserMiddleware,
  authenticateUserMiddleware,
  verifyDuplicateUserNameMiddlewrae,
} from '../middlewares';
import { createUserSchema, loginUserSchema } from '../models';
const route = Router();

const userRoutes = (app: any) => {
  route.post(
    '/register',
    validateUserSchema(createUserSchema),
    verifyDuplicateUserNameMiddlewrae,
    registerUserController
  );
  route.get('', authenticateUserMiddleware, retrieveUsersController);
  route.post(
    '/login',
    validateLoginUserSchema(loginUserSchema),
    generateTokenUserMiddleware
  );
  app.use('/users', route);
};

export default userRoutes;
