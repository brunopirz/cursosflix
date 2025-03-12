# backend/Dockerfile
FROM node:18-alpine AS build
WORKDIR /usr/src/app

# Copia os arquivos de dependência
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

EXPOSE 5000
CMD ["npm", "start"]
