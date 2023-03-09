import { DataSource } from "typeorm";
import * as dotenv from 'dotenv'
import { Migrations021678396689118 } from "./migrations/1678396689118-Migrations_02";

dotenv.config();

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: true,
  migrations: [Migrations021678396689118],
});

export default dataSource;