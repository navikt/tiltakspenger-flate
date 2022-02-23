import winston from 'winston';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint()
  ),
  transports: [new winston.transports.Console()],
});
