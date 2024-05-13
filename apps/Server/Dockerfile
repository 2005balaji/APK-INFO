FROM ubuntu

WORKDIR /app
COPY . ./

RUN  apt update && apt install curl -y && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - 
RUN   apt install -y nodejs  
RUN   apt install default-jdk -y 
RUN   npm i 

EXPOSE 8000

CMD ["node","server.js"]