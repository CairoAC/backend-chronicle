export namespace app {
  export const config = {
    host: process.env.API_HOST || "localhost",
    port: process.env.API_PORT || 8080,
    path: process.env.API_PATH || "v1"
  };
}
