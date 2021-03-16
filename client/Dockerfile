FROM node:latest as build
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
CMD [ "npm" , "start" ]