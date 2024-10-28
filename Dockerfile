# Node.js 이미지 설정
FROM node:20.16

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 설치를 위한 package.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 애플리케이션 코드 복사
COPY . .

# 포트 설정
EXPOSE 8080

# 시작 명령어
CMD ["npm", "start"]