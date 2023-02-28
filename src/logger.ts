import { createLogger, format, transports } from "winston";

export const logger = createLogger({
  level: "debug",
  transports: [
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.printf(({ level, message, timestamp }) => {
          return `${timestamp} [${level.toUpperCase()}] :: ${message}`;
        })
      ),
    }),
  ],
});
