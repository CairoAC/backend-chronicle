import { app } from "./app";
import { db } from "./database";
import { getUsers, postUsers } from "./handlers/users";
import * as dotenv from 'dotenv'
import { logger } from "./logger";

const _e = process.env;
dotenv.config()

const apipath = "/api/v1"

// Users
app.post(`${apipath}/users`, postUsers);
app.get(`${apipath}/users`, getUsers);

// Posts
// ...

db.connect().then((obj: any) => {
  const port = process.env.BACKEND_PORT;

  logger.info(`DB connection success on ${_e.DB_HOST}:${_e.DB_PORT}`)

  obj.done();
  app.listen(port, () => {
    logger.info(`API ready on (localhost?):${_e.BACKEND_PORT}`)
  })
}).catch(err => {

  logger.error(`DB Failed to connect on ${_e.DB_HOST}:${_e.DB_PORT}`)
  process.exit();
})