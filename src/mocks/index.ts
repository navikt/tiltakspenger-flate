import logger from "../server/logger";

if (typeof window === 'undefined') {
  import("./server")
    .then(({ server }) => {
      logger.info("Mocking enabled")
      server.listen();
    })
} else {
  // Changing import syntac to import().then(...) will delay mocking-setup til
  // after onMount-requests are fired and they will not be handled by msw
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { mockHttp } = require("./browser")
  mockHttp();
}

export {}
