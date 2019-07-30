const { Schema, model } = require('mongoose')


const carreerSchema = new Schema({
    name: String,
    typeCarreer: { type: String, enum: ["Licenciatura", "Ingeniería", "Bootcamp", "Maestría", "Doctorado"] },
    objetivo: String,
    perfil: String,
    areaLaboral: String,
    universityId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    duration: String,
    matricula: String,

}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Carreer', carreerSchema)