# 1단계: deps 설치 & 빌드
FROM node:21.3.0-alpine AS builder
WORKDIR /app

# pnpm 설치
RUN npm install -g pnpm

# 의존성 설치
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# 소스 전체 복사 및 빌드
COPY . .
RUN pnpm build

# 2단계: 실행용 이미지
FROM node:21.3.0-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Next.js standalone 구조 복사
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
