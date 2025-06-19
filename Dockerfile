FROM node:18-alpine

WORKDIR /app

COPY frontend/ .     # 👈 only copy files from frontend

RUN npm install

CMD ["npm", "start"]
EXPOSE 3000
