import { app } from "./app";
import { db } from "./database";
import { app, port, apipath } from "./app";

// Ao receber um request em /login:
app.get("/crypto", (req: Request, res: Response) => {

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