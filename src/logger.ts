import { createLogger, format, transports } from "winston";

export const logger = createLogger({
  level: "info",
  format: format.simple(),
  defaultMeta: { service: "user-service" },
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
