const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String,
    watchlist: []
});

mongoose.model('User', UserSchema);