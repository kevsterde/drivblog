# Dockerfile for Next.js
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .



# Start the Next.js application
CMD ["npm", "run", "dev"]
