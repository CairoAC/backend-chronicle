import pgPromise, { IDatabase } from "pg-promise";
import { join } from "path";

const pgp = pgPromise({});
const dbuser = "root";
const dbpass = "teste_123";
const dbhost = "localhost";
const dbport = "5432";
const db_database = "main";
export let db: IDatabase<any>;

db = pgp(`postgres://${dbuser}:${dbpass}@${dbhost}:${dbport}/${db_database}`);

export const sql = (file: string) => {
  const path = join(__dirname, file);
  return new pgp.QueryFile(path, { minify: true });
};
