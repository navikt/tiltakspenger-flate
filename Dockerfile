FROM navikt/node-express:16

ARG NODE_ENV=production
ENV TZ="Europe/Oslo"

COPY build build
COPY server server

WORKDIR server

EXPOSE 8080

ENTRYPOINT ["npm", "run", "start"]
