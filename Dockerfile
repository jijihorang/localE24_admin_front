# Node.js 이미지 설정
FROM node:20.16

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 설치를 위한 package.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install
FROM node:20 AS build
WORKDIR /app

# package.json과 package-lock.json을 복사하고 의존성을 설치합니다.
COPY package*.json ./
RUN npm install

# /app/build 폴더를 미리 생성 (선택적)
RUN mkdir -p /app/dist

# 애플리케이션 소스 코드를 복사하고 빌드합니다.
COPY . .
RUN npm run build

# Step 2: Set up Nginx for serving the build files
# 빌드된 정적 파일을 Nginx 서버로 제공하기 위해 Nginx 이미지를 사용합니다.
FROM nginx:alpine

# Nginx 설정 파일을 복사해 커스터마이징할 수 있습니다.
# COPY nginx.conf /etc/nginx/nginx.conf

# 빌드 단계에서 생성된 정적 파일을 Nginx의 기본 루트 디렉토리로 복사합니다.
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx가 80번 포트에서 실행되도록 설정합니다.
EXPOSE 80

# Nginx 시작 명령어
CMD ["nginx", "-g", "daemon off;"]
# 애플리케이션 코드 복사
COPY . .

# 포트 설정
EXPOSE 8080

# 시작 명령어
CMD ["npm", "run", "dev"]