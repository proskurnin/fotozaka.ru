FROM node:20-bullseye-slim

WORKDIR /app

ENV NODE_OPTIONS=--v8-pool-size=1
ENV UV_THREADPOOL_SIZE=1
ENV npm_config_jobs=1

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npx", "wrangler", "dev", "--config", "dist/server/wrangler.json", "--ip", "0.0.0.0", "--port", "3000", "--show-interactive-dev-session=false"]
