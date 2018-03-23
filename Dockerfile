FROM node:9.9.0

MAINTAINER Simon Breiter hello@simonbreiter.com

# Setup project folder
RUN mkdir -p /usr/src/rsstojson
WORKDIR /usr/src/rsstojson

# Add project files
ADD . /usr/src/rsstojson

RUN yarn install
RUN yarn build
