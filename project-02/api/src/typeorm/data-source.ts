import { DataSource } from "typeorm";
import * as dotenv from 'dotenv'
import migrations from './typeormMigrations';

dotenv.config();

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: true,
  migrations: migrations,
});

export default dataSource;