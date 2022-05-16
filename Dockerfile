FROM node:15.13-alpine

WORKDIR /core

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN apk update
RUN apk add nodejs

RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]