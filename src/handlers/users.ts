import { Request, Response } from "express";
import { db } from "../database";
import { logger } from "../logger";

// Como é POST, devemos criar um user
export const postUsers = (req: Request, res: Response) => {
  logger.info(`${req.hostname} POST on ${req.path}`)
  logger.debug(`Data: ${JSON.stringify(req.body)}`)

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  if (!username || !email || !password) {
    res.statusCode = 403; // Nao autorizado
    res.send(req.body)
    return;
  }

  const dbstring = `
    INSERT INTO users ("Username", "Email", "Password")
    VALUES ('${username}', '${email}', '${password}')
    RETURNING "ID"
  `
  db.one(dbstring).then((data: JSON) => {
    res.send(data)
  }).catch((err: any) => {
    console.log(err)
    res.send("FAIL")
  })
}

export const getUsers = (req: Request, res: Response) => {
  logger.info(`${req.hostname} GET on ${req.path}`)

  db.any(`SELECT * FROM USERS LIMIT 1000`).then((data: any) => {
    res.send(JSON.stringify(data))
  }).catch(err => {
    res.send(err)
  })
}