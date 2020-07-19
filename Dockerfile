FROM node:9.9.0

MAINTAINER Simon Breiter hello@simonbreiter.com

# Setup project folder
RUN mkdir -p /usr/src/rsstojson
WORKDIR /usr/src/rsstojson

# Add project files
ADD . /usr/src/rsstojson

EXPOSE 3000

RUN npm install --only=prod
RUN npm run build
