FROM node:18 as builder

WORKDIR /app

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

COPY . .

RUN pnpm install

RUN pnpm build

FROM node:18 as dependencies

WORKDIR /app

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

COPY package.json .

COPY pnpm-lock.yaml .

RUN pnpm install --production

FROM node:alpine as runner

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules

COPY --from=builder /app/build ./build

COPY --from=builder /app/package.json .

CMD [ "node", "build" ]

EXPOSE 3000