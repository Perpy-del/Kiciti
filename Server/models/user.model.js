const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
    username: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    quote: { type: String }
},
{ collection: 'user-data' }
)

const model = mongoose.model('User-Data', User)

module.exports = model