import pino from 'pino';
import ecsFormat from '@elastic/ecs-pino-format';
const logger = pino(ecsFormat());
export default logger;
