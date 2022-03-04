env file:

NPM_CONFIG_LOGLEVEL=error
NODE_VERBOSE=false
NODE_ENV=production
NODE_MODULES_CACHE=true
PORT = 5000
MONGO_URI = mongodb+srv://mongo:<PASSWORD>@cluster.wdfqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

run from root folder:
npm build
npm start

server should be started in localhost:5000