FROM navikt/node-express:16

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV TZ="Europe/Oslo"

RUN npm ci
RUN npm run build
COPY build build
# "Install" ts-node
COPY server server

WORKDIR server
RUN npm ci

EXPOSE 3000

ENTRYPOINT ["npm", "run", "serve"]
