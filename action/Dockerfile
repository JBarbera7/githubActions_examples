FROM node:12-alpine
COPY . /action
WORKDIR /action
RUN npm install
ENTRYPOINT ["node", "/action/telegram.js"]