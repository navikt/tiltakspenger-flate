FROM navikt/node-express:16

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV TZ="Europe/Oslo"

CMD npm ci
CMD npm run build
COPY build build
# "Install" ts-node
COPY server server

WORKDIR server
CMD npm i

EXPOSE 3000

ENTRYPOINT ["npm", "run", "serve"]
