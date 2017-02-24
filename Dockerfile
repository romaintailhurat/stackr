FROM node:7

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./server/package.json /usr/src/app
RUN npm install

COPY ./server/ /usr/src/app
RUN npm run build
EXPOSE 9000

CMD ["node", "./build/main.js"]
