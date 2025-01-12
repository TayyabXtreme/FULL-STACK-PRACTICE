From node:18-alpine

# set working directory

WORKDIR /app

# copy .json file

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

#start the backend application

CMD [ "nodemon","app.js" ]