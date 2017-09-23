const mongoose = require('mongoose');
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => console.error(err.message));

// import models here!
require('./models/User');

const app = require('./app');
app.set('port', process.env.PORT || 3002);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running on PORT ${server.address().port}`);
});
