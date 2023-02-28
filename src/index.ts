import { app } from "./app";
import { app as APP } from "./config/app.conf";

import { db } from "./database";
import { database as DB } from "./config/database.conf";

import { getUsers, postUsers } from "./handlers/user";

import * as dotenv from "dotenv";
import { logger } from "./logger";

// TODO: .env.development and production
dotenv.config();

// Users
app.post(`/${APP.config.path}/user`, postUsers);
app.get(`/${APP.config.path}/user`, getUsers);

// Initialize API if DB connection is successful
db.connect()
  .then((obj: any) => {
    logger.info(`DB connection success on ${DB.config.host}:${DB.config.port}`);

    obj.done();
    app.listen(APP.config.port as number, APP.config.host, () => {
      logger.info(`API ready on ${APP.config.host}:${APP.config.port}`);
    });
  })
  .catch((err) => {
    logger.error(`DB Failed to connect on ${DB.config.host}:${DB.config.port}`);
    process.exit();
  });
