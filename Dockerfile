# syntax=docker/dockerfile:1

# Nginx를 기본 이미지로 사용
FROM nginx:alpine as final

# 빌드 환경 설정
FROM node:20.10.0-slim as builder

WORKDIR /app

# package.json과 package-lock.json 복사
COPY package.json ./
COPY package-lock.json ./

# 의존성 설치
RUN npm ci --include=dev

# 애플리케이션 코드 복사
COPY . .

# Vite로 애플리케이션 빌드
RUN npm run build

# 빌드된 파일을 Nginx HTML 폴더로 복사
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Nginx 설정 파일 복사 (필요한 경우)
COPY nginx.conf /etc/nginx/nginx.conf

# Nginx가 80 포트에서 서비스 제공
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
