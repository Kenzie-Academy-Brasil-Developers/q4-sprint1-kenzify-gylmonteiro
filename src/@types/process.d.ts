import { string } from 'yup';
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONFIG_SECRET_KEY: string;
    }
  }
}
