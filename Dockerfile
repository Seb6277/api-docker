FROM node:latest

WORKDIR /api
COPY . .
CMD npm install && node server.js

EXPOSE 5001
LABEL version="1.0"
