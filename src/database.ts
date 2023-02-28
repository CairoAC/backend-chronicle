import pgPromise, { IDatabase } from "pg-promise";
import { join } from "path";
import { database as DB } from "./config/database.conf";

const pgp = pgPromise({});
export let db: IDatabase<any>;

db = pgp(`postgres://${DB.config.username}:${DB.config.password}@${DB.config.host}:${DB.config.port}/${DB.config.database}`);

export const sql = (file: string) => {
  const path = join(__dirname, file);
  return new pgp.QueryFile(path, { minify: true });
};