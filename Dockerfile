FROM node:22-bullseye-slim AS builder

WORKDIR /app

ENV NODE_OPTIONS=--v8-pool-size=1
ENV UV_THREADPOOL_SIZE=1
ENV npm_config_jobs=1

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-bookworm-slim AS runner

WORKDIR /app

ENV NODE_OPTIONS=--v8-pool-size=1
ENV UV_THREADPOOL_SIZE=1

COPY --from=builder /app /app

EXPOSE 3000

CMD ["npx", "wrangler", "dev", "--config", "dist/server/wrangler.json", "--ip", "0.0.0.0", "--port", "3000", "--show-interactive-dev-session=false"]
