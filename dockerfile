# syntax=docker/dockerfile:1

# Build environment
FROM node:20.10.0-slim as builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --include=dev

# Copy the application code
COPY . .

# Build the application
RUN npm run build

# Production environment using Nginx
FROM nginx:alpine

# Copy built files from the builder stage to Nginx's html directory
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
