import pino from 'pino';
import ecsFormat from '@elastic/ecs-pino-format';
const logger = pino( {
    ...ecsFormat({convertReqRes: true}),
    timestamp: pino.stdTimeFunctions.isoTime,
    formatters: {
        level: (label) => {
            return { level: label.toUpperCase() }
        },
    }});
export default logger;
