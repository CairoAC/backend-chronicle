import bodyParser from "body-parser";
import express, { Request, Response } from "express";

export const app = express()
export const port = 8080

export const noCors = (req: Request, res: Response, next: any) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(noCors);

export const apipath = "/api/v1"

type UserPostRequest = Request<{
  username: string,
  email: string,
  password: string
}>