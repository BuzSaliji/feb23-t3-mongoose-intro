const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: false
    }
});


// const ModelName = mongoose.model('Name that appears in the mongosh or Cloud Atlas GUI, SchemaThatModelIsBasedOn)
const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}