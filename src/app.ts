import bodyParser from "body-parser";
import express from "express";
import { middleware } from "./middleware/noCors";

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(middleware.noCors);
