import { createLogger, transports, format, Logger as WLogger } from "winston";

interface Stream {
  write(message: string, encoding?: string): void;
}

const dateFormat = () => {
  return new Date(Date.now()).toLocaleString();
};

class Logger {
  log_data: string | null;
  logger: WLogger;
  stream: Stream;

  constructor() {
    this.log_data = null;

    this.stream = {
      write: (message: string, encoding?: string) => {
        this.info(message.trim());
      },
    };

    this.logger = createLogger({
      transports: [
        new transports.Console({
          //colorize: true,
          format: format.combine(
            format.colorize(),
            format.printf((info) => {
              let message = `${dateFormat()} | ${info.level} | `;
              message += `${process.env.APP_NAME || "app"} | ${info.message}`;
              message += info.obj
                ? ` | ` + `data: ${JSON.stringify(info.obj)}`
                : "";
              message += this.log_data
                ? ` | ` + `extra_data: ${JSON.stringify(this.log_data)}`
                : "";

              return message;
            })
          ),
        }),
        new transports.File({
          filename: "./logs/combined.log",
          //colorize: false,
          level: "info",
        }),
        new transports.File({
          filename: "./logs/errors.log",
          //colorize: false,
          level: "error",
        }),
      ],
      format: format.printf((info) => {
        let message = `${dateFormat()} | ${info.level} | `;
        message += `${process.env.APP_NAME} | ${info.message}`;
        message += info.obj ? ` | ` + `${JSON.stringify(info.obj)}` : "";
        message += this.log_data
          ? ` | ` + `extra_data: ${JSON.stringify(this.log_data)}`
          : "";

        return message;
      }),
    });
  }

  info(message: string, obj?: string, extra: string | null = null) {
    if (extra !== null) {
      this._extraData(extra);
    }

    this.logger.log("info", message, {
      obj,
    });
  }

  debug(message: string, obj?: string, extra: string | null = null) {
    if (extra !== null) {
      this._extraData(extra);
    }

    this.logger.log("debug", message, {
      obj,
    });
  }

  error(message: string, obj?: string, extra: string | null = null) {
    if (extra !== null) {
      this._extraData(extra);
    }

    this.logger.log("error", message, {
      obj,
    });
  }

  _extraData(log_data: string | null) {
    this.log_data = log_data;
  }
}

export const logger = new Logger();
