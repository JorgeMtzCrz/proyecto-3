const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema({
    name: String,
    email: String,
    imgProfile: {
        type: String,
        default: 'http://res.cloudinary.com/ironhackjorge/image/upload/v1563985540/MERN-Project/person-1.png.png'
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN', 'UNIVERSITY'],
        default: 'USER'
    },
    follow: [String],

}, {
    timestamps: true,
    versionKey: false
})

userSchema.plugin(PLM, { usernameField: 'email' })
module.exports = model('User', userSchema)