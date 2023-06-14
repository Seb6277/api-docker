FROM node:latest

WORKDIR /api
COPY . .
CMD npm install && node server.js

EXPOSE 5000
LABEL version="2.0"
