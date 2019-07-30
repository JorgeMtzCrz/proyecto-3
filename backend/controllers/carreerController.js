const Carreer = require('../models/Carreer')

exports.addCarreer = (req, res, next) => {
    const { _id } = req.user
    Carreer.create({...req.body, universityId: _id })
        .then(carreer => res.status(201).json({ carreer }))
        .catch(err => res.status(500).json({ err }))
}

exports.allCarreer = (req, res, next) => {
    const { id } = req.params
    Carreer.find({
            $and: [{
                "universityId": {
                    $eq: id
                }
            }]

        })
        .then(carreer => res.status(201).json({ carreer }))
        .catch(err => res.status(500).json({ err }))
}
exports.oneCarreer = (req, res, next) => {
    const { id } = req.params
    Carreer.findById(id)
        .then(carreer => res.status(201).json({ carreer }))
        .catch(err => res.status(500).json({ err }))
}

exports.updateCarreer = (req, res, next) => {
    const { id } = req.params
    Carreer.findByIdAndUpdate(id, {...req.body }, { new: true })
        .then(carreer => res.status(200).json({ carreer }))
        .catch(err => res.status(500).json({ err }))
}

exports.deleteCarreer = (req, res, next) => {
    const { id } = req.params
    Carreer.findByIdAndDelete(id)
        .then(carreer => res.status(200).json({ carreer, msg: 'Carrera Eliminada' }))
        .catch(err => res.status(500).json({ err }))
}