const mongoose = require('mongoose');
const user = require('../UserModel/user')

const UserSubjectSchema = new mongoose.Schema({
    subject:{
        type: String,
        required: true
    },
    batch:{
        type:String,
        required: true
    },
    language:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('UserSubject', UserSubjectSchema);

