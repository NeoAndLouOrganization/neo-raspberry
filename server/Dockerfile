FROM node:18

# Create app directory
WORKDIR /usr/src/server

COPY . ./

COPY ./certs/vvasylkovskyi_com.key /usr/src/certs/
COPY ./certs/vvasylkovskyi_com.pem /usr/src/certs/

RUN npm install
RUN npm run build

# Bundle app source
COPY . .

CMD [ "node", "dist/server.js", "--prod" ]
