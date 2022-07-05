if (typeof window === 'undefined') {
  import("./server")
    .then(({ server }) => {
      server.listen();
    })
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  import("./browser")
    .then(({ mockHttp }) => {
      mockHttp();
    })

}

export {}
