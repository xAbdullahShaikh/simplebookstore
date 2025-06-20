FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all frontend source files
COPY . .

# Expose the Vite development port
EXPOSE 5173

# Run Vite dev server
CMD ["npm", "run", "dev"]
