require("dotenv").config();
function dbConnect() {
    // Db connection
    const mongoose = require('mongoose');
    const url ="mongodb+srv://kpushpankar3:pushpa123@cluster0.niuybvk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
