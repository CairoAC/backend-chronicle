import bodyParser from "body-parser";
import express from "express";
import { Request, Response } from "express";

// App
export const app = express()

const noCors = (req: Request, res: Response, next: any) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(noCors);