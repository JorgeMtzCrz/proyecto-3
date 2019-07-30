const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const universitySchema = new Schema({
    telephone: Number,
    typeSocial: {
        type: String,
        enum: ['Pública', 'Privada']
    },
    address: String,
    location: {
        address: {
            type: String,
            default: "Point"
        },
        coordinates: [Number]
    },
    followers: [String],
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('University', universitySchema)