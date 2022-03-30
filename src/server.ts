import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT: string = process.env.CONFIG_PORT ?? '3000';

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
