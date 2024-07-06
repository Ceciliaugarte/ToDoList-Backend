import { env } from 'process';
import { config } from 'dotenv';
config();

export const jwtConstants = {
  secret: env.JWT_SECRET,
};
