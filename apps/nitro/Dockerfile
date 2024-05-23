# Use the official Node.js image with Debian as the base image
FROM node:18-bullseye-slim

# Install pnpm globally
RUN npm install -g pnpm


RUN apt-get update && apt-get install -y 

RUN apt install aapt -y


CMD [ "aapt2" ]

# Command to run the application
# CMD ["node", "your_app_entry_file.js"]
