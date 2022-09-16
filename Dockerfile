# build stage
FROM node:10-alpine

RUN mkdir -p /node_users_api/app/node_modules && chown -R node:node /node_users_api

WORKDIR /node_report_biz

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8888

CMD [ "node", "server.js" ]
