FROM node:14-alpine

RUN apk add --no-cache curl

COPY package*.json ./
RUN npm install

COPY . .

ENTRYPOINT ["node", "/index.js"]