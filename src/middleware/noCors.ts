import { Request, Response } from "express";

export namespace middleware {
  export const noCors = (req: Request, res: Response, next: any) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  };
}
