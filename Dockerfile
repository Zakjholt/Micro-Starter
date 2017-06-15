FROM mhart/alpine-node:latest
RUN mkdir -p /usr
COPY src /usr/src
COPY package.json /usr
COPY yarn.lock /usr
WORKDIR /usr
RUN npm install --global yarn
RUN yarn install

CMD yarn start
