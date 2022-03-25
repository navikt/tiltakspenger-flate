FROM navikt/node-express:16
USER root
WORKDIR app
# Setting NODE_ENV=production does not install dev-dependencies, typescript is currently a dev dep
# ARG NODE_ENV=production
ENV TZ="Europe/Oslo"

COPY . .

RUN npm ci
RUN npm run build

WORKDIR server
RUN npm ci
RUN npm run build

EXPOSE 8080

ENTRYPOINT ["npm", "run", "start"]
