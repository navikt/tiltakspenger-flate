FROM navikt/node-express:16

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV TZ="Europe/Oslo"

COPY . .
RUN npm ci

RUN npm run build

WORKDIR server
RUN npm ci

EXPOSE 3000

ENTRYPOINT ["npm", "run", "serve"]
