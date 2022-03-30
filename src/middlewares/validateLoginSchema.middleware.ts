import { Request, Response, NextFunction } from 'express';

const validateLoginUserSchema =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    const dataBody = req.body;
    try {
      await schema.validate(dataBody, {
        abortEarly: false,
        stripUnknown: true,
      });
      next();
    } catch (e: any) {
      res.status(400).json({ error: e.errors });
    }
  };

export default validateLoginUserSchema;
