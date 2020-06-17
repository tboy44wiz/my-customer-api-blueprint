const mongoose = require('mongoose');   //  Importing the mongoose package.

//  Connect to MongoDB using Mongoose.
module.exports = mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});