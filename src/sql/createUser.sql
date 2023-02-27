INSERT INTO
  users ("Username", "Email", "Password")
VALUES
  (${username}, ${email}, ${password}) RETURNING "ID"