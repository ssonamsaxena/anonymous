require("dotenv").config();
function dbConnect() {
    // Db connection
    const mongoose = require('mongoose');
    const url =process.env.MONGODB_URL;

    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const connection = mongoose.connection;

    connection.once('open', function () {
        console.log('Database connected...');
    }).on('error', function (err) {
        console.log(err);
      });
}

module.exports = dbConnect;
