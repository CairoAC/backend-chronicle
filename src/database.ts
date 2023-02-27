import pgPromise, { IDatabase } from "pg-promise";

const pgp = pgPromise({});
const dbuser = "root";
const dbpass = "teste_123"
const dbhost = "localhost";
const dbport = "5432";
const db_database = "main";
export let db: IDatabase<any>;

db = pgp(`postgres://${dbuser}:${dbpass}@${dbhost}:${dbport}/${db_database}`)

db.connect().then((obj: any) => {
  console.log("Sucesso na conn")
  obj.done();
}).catch(err => {
  console.log(err);
  console.log("ABORT")
  process.exit();
})