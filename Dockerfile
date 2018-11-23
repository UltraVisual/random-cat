FROM node:8.12.0-alpine

ARG API_KEY
ENV API_KEY=${API_KEY}

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN yarn

EXPOSE 3000

CMD [ "yarn", "start" ]
