# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install
COPY package*.json ./
RUN npm install

# Copy all other files
COPY . .

# Build TypeScript (optional if using ts-node-dev directly)
RUN npm install -g ts-node-dev

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "dev"]
