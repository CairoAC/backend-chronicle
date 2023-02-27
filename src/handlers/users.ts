import { Request, Response } from "express";
import { db, sql } from "../database";
import { logger } from "../logger";

// Como é POST, devemos criar um user
export const postUsers = (req: Request, res: Response) => {
  logger.info(`${req.hostname} POST ${req.path}`);
  logger.debug(`Data: ${JSON.stringify(req.body)}`);

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  if (!username || !email || !password) {
    res.statusCode = 403; // Nao autorizado
    res.send(req.body);
    return;
  }

  db.one(sql("sql/createUser.sql"), {
    username: username,
    email: email,
    password: password,
  })
    .then((data: JSON) => {
      logger.info(`Created new user named '${username}'`);
      res.send(data);
    })
    .catch((err: any) => {
      const errstr = `Failed to create user: ${JSON.stringify(err)}`;
      logger.error(errstr);
      res.send(errstr);
    });
};

export const getUsers = (req: Request, res: Response) => {
  logger.info(`${req.hostname} GET ${req.path}`);

  db.any(sql("sql/getUsers.sql"))
    .then((data: any) => {
      res.send(JSON.stringify(data));
    })
    .catch((err) => {
      logger.error(`Failed to get user: ${err}`);
      res.send(err);
    });
};
