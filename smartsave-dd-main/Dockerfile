FROM node:20-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

FROM base AS deps
COPY package*.json ./
RUN npm install --frozen-lockfile || npm install

FROM deps AS builder
COPY . .
ARG VITE_ANALYZE_API_URL
ENV VITE_ANALYZE_API_URL=${VITE_ANALYZE_API_URL}
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN npm install -g serve
COPY --from=builder /app/dist ./dist

EXPOSE 4173
CMD ["serve", "-s", "dist", "-l", "4173"]

