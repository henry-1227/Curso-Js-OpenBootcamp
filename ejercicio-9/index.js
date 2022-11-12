import { createLogger, format as _format, transports as _transports } from "winston";

const logger = createLogger({
  level: "error",
  format: _format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new _transports.File({ filename: "error.log", level: "error" }),
  ],
});

function mostrarError() {
  throw new Error("showError function");
}

try {
  mostrarError();
} catch (e) {
  logger.log("error", e.toString());
}