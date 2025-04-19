FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run prisma:generate
RUN npm run build
RUN npm run migrate
CMD ["npm", "run", "start:prod"]