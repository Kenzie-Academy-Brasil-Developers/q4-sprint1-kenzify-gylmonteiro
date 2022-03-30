import dotenv from 'dotenv';
import { JWTConfig } from './interfaces';

dotenv.config();

const config: JWTConfig = {
  secretKey: process.env.CONFIG_SECRET_KEY,
  expiresIn: process.env.CONFIG_EXPIRES_IN ?? '1h',
};

export default config;
