import pino from 'pino';
import ecsFormat from '@elastic/ecs-pino-format';

const redactPaths = [
    'ecs.version',
    'process.pid',
    'req.headers.accept',
    'req.headers["accept-language"]',
    'req.headers["accept-encoding"]',
    'req.headers.pragma',
    'req.headers["sec-fetch-dest"]',
    'req.headers["sec-fetch-mode"]',
    'req.headers["sec-fetch-site"]',
    'req.headers["sec-gpc"]',
    'req.headers["x-forwarded-for"]',
    'req.headers["x-forwarded-host"]',
    'req.headers["x-forwarded-port"]',
    'req.headers["x-forwarded-proto"]',
    'req.headers["x-forwarded-server"]',
    'req.headers["x-real-ip"]',
    'host.hostname',
    'req.id',
    'req.remoteAddress',
    'req.remotePort',
    'req.headers.cookie',
    'res.headers["set-cookie"]',
    'req.headers["connection"]',
    'req.headers["content-length"]',
    'req.headers["sec-ch-ua"]',
    'req.headers["sec-ch-ua-mobile"]',
    'req.headers["sec-ch-ua-platform"]',
    'req.headers["user-agent"]',
    'req.headers["x-forwarded-scheme"]',
    'req.headers["l5d-client-id"]',
    'req.headers["x-original-forwarded-for"]',
    'req.headers["via"]',
    'req.headers["x-client-city"]',
    'req.headers["x-client-citylatlong"]',
    'req.headers["x-client-region"]',
    'req.headers["x-client-rtt"]',
    'req.headers["x-cloud-trace-context"]',
    'req.headers["x-request-id"]',
    'req.headers["x-scheme"]',
    'req.query',
    'req.params',
    'req.headers["referer"]',
    'req.headers["origin"]',
    'req.headers["content-type"]'
];
const logger = pino( {
    ...ecsFormat({convertReqRes: true}),
    redact: {
        paths: redactPaths,
        remove: true
    },
    timestamp: pino.stdTimeFunctions.isoTime,
    formatters: {
        level: (label) => {
            return { level: label.toUpperCase() }
        },
    }});
export default logger;
