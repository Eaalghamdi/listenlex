// export MONGO_URI='mongodb+srv://admin:L01050862m.@cluster0.wwilg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// heroku config:set MONGO_URI='mongodb+srv://admin:L01050862m.@cluster0.wwilg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// heroku config:set NPM_CONFIG_PRODUCTION=false

module.exports = {
    mongoUri: process.env.MONGO_URI,
    PORT: process.env.PORT || 3000,
}

