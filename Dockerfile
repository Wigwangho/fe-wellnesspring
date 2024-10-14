# syntax=docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js"

WORKDIR /app

ENV NODE_ENV="production"

# Install necessary build tools and dependencies
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install vite globally
RUN npm install -g vite

# Copy package files and install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --include=dev

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Final stage to reduce image size
FROM node:${NODE_VERSION}-slim as final

WORKDIR /app

# Copy built application from build stage
COPY --from=base /app /app

# Install only production dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --omit=dev

# Expose the port
EXPOSE 3000

# Start the server
CMD ["npm", "run", "start"]
