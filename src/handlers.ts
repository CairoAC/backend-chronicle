import express from "express"

export namespace handler {
  export function login() {
    return null;
  }

  export function register(req: Request, res: Response) {
    res.send("Hello")    
  }

  export function users(req: Request, res: Response) {

  }
}