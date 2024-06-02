FROM node:18-bullseye-slim

RUN apt-get update && apt-get install -y 
RUN apt-get install software-properties-common -y
RUN add-apt-repository ppa:openjdk-r/ppa
RUN apt install aapt -y
RUN apt-get -y install default-jre

# Set the working directory inside the container
WORKDIR /app

ARG NITRO_VITE_S3_ACCESSID
ARG NITRO_VITE_S3_SECRETKEY
ARG NITRO_VITE_S3_BUCKET_NAME

ENV NITRO_VITE_S3_ACCESSID=${NITRO_VITE_S3_ACCESSID}
ENV NITRO_VITE_S3_SECRETKEY=${NITRO_VITE_S3_SECRETKEY}
ENV NITRO_VITE_S3_BUCKET_NAME=${NITRO_VITE_S3_BUCKET_NAME}

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
