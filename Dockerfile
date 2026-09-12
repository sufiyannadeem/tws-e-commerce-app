# ================================
# Stage 1: Dependencies
# ================================
FROM node:22-alpine AS deps

WORKDIR /app

# Required for native Node modules such as sharp
RUN apk add --no-cache \
    python3 \
    make \
    g++

# Copy dependency files first for Docker layer caching
COPY package.json package-lock.json ./

# Install exact dependencies
RUN npm ci


# ================================
# Stage 2: Build
# ================================
FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

# Build Next.js application
RUN npm run build


# ================================
# Stage 3: Production
# ================================
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Update Alpine packages to the latest security patches
RUN apk upgrade --no-cache

# Create non-root user
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy Next.js standalone output
COPY --from=builder /app/.next/standalone ./

# Copy static assets
COPY --from=builder /app/.next/static ./.next/static

# Copy public assets
COPY --from=builder /app/public ./public

# Give application user ownership
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
