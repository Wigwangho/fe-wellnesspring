# 1. Build Stage (Vite로 정적 파일 빌드)
FROM node:20.10.0-slim as builder

WORKDIR /app

# Install build dependencies
COPY package.json package-lock.json ./
RUN npm ci --include=dev

# Copy application source code
COPY . .

# Build the application
RUN npm run build

# 2. Serve Stage (Nginx로 정적 파일 서빙)
FROM nginx:alpine

# Copy built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx configuration (optional if you need custom settings)
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
