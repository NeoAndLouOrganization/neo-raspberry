FROM node:18

# Create app directory
WORKDIR /usr/src/server

COPY . ./

RUN npm install
RUN npm run build

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "dist/server.js" ]
