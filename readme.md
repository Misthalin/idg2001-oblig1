## Changes to Master branch will Auto-deploy on https://course-registration-clouds.herokuapp.com/

env file:

NPM_CONFIG_LOGLEVEL=error
NODE_VERBOSE=false
NODE_ENV=production
NODE_MODULES_CACHE=true
PORT = 5050
MONGO_URI = mongodb+srv://mongo:<PASSWORD>@cluster.wdfqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

run from root folder:
nodemon server/index.js

run from client folder:
nodemon start

client runs on localhost:3000
server runs on localhost:5050
