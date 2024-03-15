# Use the latest version of node
FROM node:latest

# Set the working directory in the Docker container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Expose port 3000 for the app (change this if your app uses a different port)
EXPOSE 3000

# Start the app
CMD [ "npm", "run", "dev"]