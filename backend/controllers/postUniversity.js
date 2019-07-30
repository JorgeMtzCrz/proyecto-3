const University = require('../models/University')


exports.detailUniversity = (req, res, next) => {
    University.create({...req.body })
        .then(university => res.status(201).json({ university }))
        .catch(err => res.status(500).json({ err }))
}

exports.oneUniversity = (req, res, next) => {
    const { id } = req.params
    University.findOne({ userId: id }).populate('userId')
        .then(university => res.status(200).json({ university }))
        .catch(err => res.status(500).json({ err }))
}

exports.updateUniversity = (req, res, next) => {
    const { id } = req.params
    University.findOneAndUpdate({ userId: id }, {...req.body }, { new: true })
        .then(university => res.status(200).json({ university }))
        .catch(err => res.status(500).json({ err }))
}