FROM node:15.13-alpine

WORKDIR /core

ENV PATH="./node_modules/.bin:$PATH"

RUN npm install

COPY . .

RUN apk update
RUN apk add nodejs

# RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]