FROM node:18-alpine

WORKDIR /app

COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./  # optional

RUN npm install

COPY ./frontend .  # ⬅️ now copy rest of the frontend code

CMD ["npm", "start"]
EXPOSE 3000
