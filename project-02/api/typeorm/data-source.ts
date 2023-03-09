/**
 * file: src/typeorm/data-source.ts
 * date: 03/09/2023
 * description: file responsible for the connection with the database using the TypeORM
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import * as dotenv from 'dotenv'
import { DataSource } from 'typeorm';

dotenv.config({
  path: process.env.ENV === 'test' ? '.env.test' : '.env'
});

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: true,
  migrations: [__dirname + './migrations/**/*.ts'],
});

export default dataSource;