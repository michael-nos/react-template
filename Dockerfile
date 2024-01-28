FROM node:21-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

## EXPOSE [Port mentioned in vite.config.ts. Vite defaults to 5173 if not specified]
EXPOSE 5173

CMD ["npm", "run", "dev"]