import bodyParser from "body-parser";
import express, { Request, Response } from "express";

const app = express()
const port = 8080

const noCors = (req: Request, res: Response, next: any) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(noCors);

const apipath = "/api/v1"

type UserPostRequest = Request<{
  username: string,
  email: string,
  password: string
}>