FROM node:20-alpine

ENV NEW_RELIC_NO_CONFIG_FILE=true

ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true
ENV NEW_RELIC_LOG=stdout

WORKDIR /next-app

COPY . .

RUN npm i

RUN npm run build

ENTRYPOINT [ "npm", "run", "start" ]
