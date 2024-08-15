FROM node:21.7.1-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY entrypoint.sh /usr/src/app/entrypoint.sh

RUN apt-get update -y && apt-get install -y openssl
RUN npx prisma generate

EXPOSE 5000

ENTRYPOINT ["sh", "/usr/src/app/entrypoint.sh"]

