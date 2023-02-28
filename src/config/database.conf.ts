export namespace database {
  export const config = {
    username: process.env.POSTGRES_USER || "root",
    password: process.env.POSTGRES_PASSWORD || "root",
    database: process.env.POSTGRES_DB || "main",
    host: process.env.POSTGRES_HOST || "localhost",
    port: process.env.POSTGRES_PORT || "5432",
  };
}
