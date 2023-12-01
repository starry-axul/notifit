FROM node:20.9.0

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . .

COPY --chown=node:node . .

EXPOSE 3000

RUN npm run build

CMD [ "node", "dist/app.js" ]