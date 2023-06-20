FROM node:lts-alpine

WORKDIR /client

RUN apk update \
    && apk upgrade \
    && apk add --no-cache --upgrade bash

EXPOSE 3000