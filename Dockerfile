FROM navikt/node-express:16

ARG NODE_ENV=production
ENV TZ="Europe/Oslo"

COPY build build
COPY server server

WORKDIR server

EXPOSE 3000

ENTRYPOINT ["npm", "run", "serve"]
