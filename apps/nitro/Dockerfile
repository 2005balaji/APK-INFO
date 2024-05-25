FROM node:18-bullseye-slim

RUN apt-get update && apt-get install -y 

RUN apt install aapt -y

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Start the Node.js server
CMD ["node", ".output/server/index.mjs"]
