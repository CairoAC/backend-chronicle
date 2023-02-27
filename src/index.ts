import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { db } from "./database";

// App
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

// Ao receber um request em /login:
app.get("/crypto", (req, res) => {

})

// Como é POST, devemos criar um user
app.post(`${apipath}/users`, (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  if (!username || !email || !password) {
    res.statusCode = 403; // Nao autorizado
    // res.send("Vacilou");
    res.send(req.body)
    return;
  }


  // Gerar um hash com a senha, (licao de casa)
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
})

app.get(`${apipath}/users`, (req, res) => {
  db.any(`SELECT * FROM USERS LIMIT 1000`).then((data: any) => {
    res.send(JSON.stringify(data))
  }).catch(err => {
    console.log(err)
    res.send(err)
  })
})

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})