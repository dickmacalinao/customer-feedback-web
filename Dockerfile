FROM node:22-alpine

WORKDIR /app

# Install dependencies first
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the app
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
